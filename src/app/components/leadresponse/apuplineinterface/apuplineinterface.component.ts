import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy,
  AfterViewChecked, Renderer2, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LeadresponseService } from '../../../services/leadresponse.service';
import { LoaderService } from '../../../services/loader.service';
import { Subscription } from 'rxjs';
import {get as _get, set as _set, sortBy as _sortBy} from 'lodash';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import constants from '../../../constants/constants';

@Component({
  selector: 'app-apuplineinterface',
  templateUrl: './apuplineinterface.component.html',
  styleUrls: ['./apuplineinterface.component.scss']
})
export class ApuplineinterfaceComponent implements OnInit, OnDestroy,
 AfterViewInit {
  currSubPage : string;
  displayedColumnsField : Array<string> = constants["APUplineInterfaceColumnField"];
  //class to function it should trigger
  classToTrigger : Array<{
    type: string,
    className: string,
    callback?: any
  }>;
  displayedDataArray : Array<any>;

  objectKeys = Object.keys; // for looping over all the keys the displayedDataArray's elem

  statusNumMapToTextEN : Array<string>= ["","Applied for extension","Opt-out from this program","Re-assigned" ];
  statusNumMapToTextZH : Array<string>= ["","已申請延長","拒絕顧問聯絡","已另派顧問"];

  currLang : string;
  //fetching the translated data['LEAD_RESPONSE_COMMON'] obj from en.json / zh.json
  translateLeadRespCommon;

  translateOnLangChangeSubscription : Subscription;
  apuplineInterfaceSubscription : Subscription;

  noOfRecords : number = 0;

  searchCriterias : Array<string> = [];

  constructor(
    private leadresponseService : LeadresponseService,
    private http: HttpClient,
    private renderer2 : Renderer2,
    public translateService: TranslateService,
    public loaderService : LoaderService
  ) {}

  ngOnInit() {
    this.translateOnLangChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      _set(window, 'easLang', event.lang); //keep track of curr supported page even this comp doesnt use it
      this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
      this.currLang = event.lang;
    });
    this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
    this.currLang = _get(window, 'easLang');
    this.classToTrigger =  [
    ];
  }

  ngAfterViewInit(){ //only load data after view are initialized
    this.loadDataFromApi(null);
  }

  loadObjFromLangJson(path, storeVarStr){
    this.translateService.get(path).subscribe((resp : any)=>{
      this[storeVarStr] = resp;
    });
  }

  loadDataFromApi(agentCode){
    let queryParams = (agentCode) ? {agentCode} : {};
    this.apuplineInterfaceSubscription = this.leadresponseService.getapUplineInterfaceRecord(queryParams, 'apuplineRecord').subscribe((resp : any) => {
      //to avoid the case for the default list being too large, and heavy business logic in func postProcessingDisplayedData freezes the browser
      this.loaderService.show();
      setTimeout(()=>{
        this.displayedDataArray = this.postProcessingDisplayedData(resp.body);
        this.noOfRecords = resp.body.length;
        this.loaderService.hide();
      }, 100); //the browser repaints every 16 milliseconds, delay more than 16 milisecs
    }, (error) => console.error(error));
  }

  refreshAndReloadSearchRecordTable(_searchCriteria){
    this.searchCriterias = _searchCriteria;
    this.loadDataFromApi(this.searchCriterias[0]);
  }

  //post processing the displayed data into 5 cols
  postProcessingDisplayedData(responseData){
    let resDataArray = new Array(responseData.length);
    //sort by the obj's agent code
    let sortedRespData = _sortBy(responseData, [function(obj) { return obj.agentCode; }]);
    let currUniqAgentCode = '';
    let noOfCurrAgentRows = 0;//noOfCurrAgentRows === cumulative no of agents
    //the first record's index with uniq agent code. e.g. {agentCode:1},{agentCode:1},{agentCode:2} fstRecWithUniqAgentCode = 0, 2
    let fstRecWithUniqAgentCode = 0; //will change within the following for loop

    for(var i = 0; i < sortedRespData.length; i++){
      let tmpRowObj : {
        agentCode? : string,
        agentName? : string,
        agentAssignmentDt : string,
        assignmentStatus : string,
        noOfLeadsAssigned? : string
      };
      let prevCd = (i > 0) ? sortedRespData[i-1].agentCode : null;
      let nextCd = (i < sortedRespData.length - 1) ? sortedRespData[i+1].agentCode : null;
      let currCd = sortedRespData[i].agentCode;

      //either the prevCode doesnt equal to the currCode or prevCode doesnt exist
      if(i == 0) { //case 1 meet the new agent with uniq code:
        tmpRowObj = {
          ...sortedRespData[i]
        };
        fstRecWithUniqAgentCode = i;
        currUniqAgentCode = currCd;
      }else if(i == sortedRespData.length - 1){
        //last group of agent has more than one row
        if(currCd == currUniqAgentCode){
          tmpRowObj = {
            agentCode: '',
            agentName: '',
            agentAssignmentDt: sortedRespData[i].agentAssignmentDt,
            assignmentStatus: sortedRespData[i].assignmentStatus,
            noOfLeadsAssigned: ''
          };
          noOfCurrAgentRows++;
          resDataArray[fstRecWithUniqAgentCode].noOfLeadsAssigned = noOfCurrAgentRows;
        }else{//last group of agent has only one row, then here we need to upd both curr last row, and the prev group of agent
          resDataArray[fstRecWithUniqAgentCode].noOfLeadsAssigned = noOfCurrAgentRows;

          tmpRowObj = {
            ...sortedRespData[i],
            noOfLeadsAssigned: 1
          };
        }
      }//YXY
      else if(currCd !== prevCd && currCd !== nextCd){
        tmpRowObj = {
          ...sortedRespData[i],
          noOfLeadsAssigned: 1
        };
        resDataArray[fstRecWithUniqAgentCode].noOfLeadsAssigned = noOfCurrAgentRows;
        noOfCurrAgentRows = 0;
        fstRecWithUniqAgentCode = i;
      }//XXY   ||   XXX
      else if((currCd === prevCd && currCd !== nextCd) || (currCd === prevCd && currCd === nextCd)){
        tmpRowObj = {
          agentCode: '',
          agentName: '',
          agentAssignmentDt: sortedRespData[i].agentAssignmentDt,
          assignmentStatus: sortedRespData[i].assignmentStatus,
          noOfLeadsAssigned: ''
        };

      }//YXX
      else if(currCd !== prevCd && currCd === nextCd){
        tmpRowObj = {
          ...sortedRespData[i],
          noOfLeadsAssigned: ''
        };
        resDataArray[fstRecWithUniqAgentCode].noOfLeadsAssigned = noOfCurrAgentRows;
        noOfCurrAgentRows = 0;
        fstRecWithUniqAgentCode = i;
        currUniqAgentCode = currCd;
      }else{
        console.error("Unhandled case !!! in ", i, "-th row");
      }
      noOfCurrAgentRows += 1;
      resDataArray[i] = tmpRowObj;
    }
    return resDataArray;
  }

  ngOnDestroy(){
    if(this.apuplineInterfaceSubscription){
      this.apuplineInterfaceSubscription.unsubscribe();
    }
    if(this.translateOnLangChangeSubscription){
      this.translateOnLangChangeSubscription.unsubscribe();
    }
  }
}
