import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy,
  AfterViewChecked, Renderer2, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
//import { MatPaginator, MatTableDataSource } from '@angular/material';
//import {DataSource} from '@angular/cdk/collections';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
import { LeadresponseService } from '../../../services/leadresponse.service';

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
 AfterViewInit,AfterViewChecked {
  currSubPage : string;
  //displayedColumns : Array<string> = constants["APUplineInterfaceColumnName"];
  displayedColumnsField : Array<string> = constants["APUplineInterfaceColumnField"];
  //class to function it should trigger
  classToTrigger : Array<{
    type: string,
    className: string,
    callback?: any
  }>;
  displayedDataArray : Array<any>;

  objectKeys = Object.keys; // for looping over all the keys the displayedDataArray's elem

  statusNumMapToTextEN = ["","Applied for extension","Opt-out from this program","Re-assigned" ];
  statusNumMapToTextZH = ["","已申請延長","拒絕顧問聯絡","已另派顧問"];

  currLang : string;
  //fetching the translated data['LEAD_RESPONSE_COMMON'] obj from en.json / zh.json
  translateLeadRespCommon;

  translateOnLangChangeSubscription;

  constructor(
     private leadresponseService : LeadresponseService,
     private http: HttpClient,
     private renderer2 : Renderer2,
     public translateService: TranslateService
   ) {
   }
   loadObjFromLangJson(path, storeVarStr){
     this.translateService.get(path).subscribe((resp : any)=>{
       this[storeVarStr] = resp;
     })
   }
  ngOnInit() {
    this.translateOnLangChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      _set(window, 'easLang', event.lang); //keep track of curr supported page even this comp doesnt use it
      this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
      this.currLang = event.lang;
    });
    this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
    this.currLang = _get(window, 'easLang');
    this.classToTrigger =  [
      {type: 'modal', className: "a-modalLink"}, //is separately handled from the following entities
      //
      // {type: 'submit', className: "a-customerDtlSubmitBtn", callback: ()=>{this.setCustomerDtl()}},
      // {type: 'submit', className: "a-leadExtSubmitBtn", callback: ()=>{this.setLeadExt()}},
      // {type: 'submit', className: "a-upsellDtlSubmitBtn", callback: ()=>{this.setUpsellDtl()}}
    ];
  }

  ngAfterViewInit(){ //only load data after view are initialized
    this.leadresponseService.getapUplineInterfaceRecord().subscribe((resp : any) => {
      this.displayedDataArray = this.postProcessingDisplayedData(resp.data);
    }, (error) => console.log(error));
  }
  //post processing the displayed data into 5 cols
  postProcessingDisplayedData(responseData){
    let resDataArray = new Array(responseData.length);
    //sort by the obj's agent code
    let sortedRespData = _sortBy(responseData, [function(obj) { return obj.agentCode; }]);
    let noOfLeadsAssignedObj = {}; //keep an record of the agentCode and noOfLeadsAssigned by looping over the whole sortedRespData first
    let currAgentCode = '';//agent row which is currently counted no. on
    let noOfCurrAgentRows = 0;//noOfCurrAgentRows === cumulative no of agents
    //the first record's index with uniq agent code. e.g. {agentCode:1},{agentCode:1},{agentCode:2} fstRecWithUniqAgentCode = 0, 2
    let fstRecWithUniqAgentCode = 0; //will change within the following for loop
    // case 1: first agentCode [x,a,a], case 2: within same agentCode [a,x,a], case 3: last agentCode [a,a,x]
    for(var i = 0; i < sortedRespData.length; i++){
      let tmpRowObj : {
        agentCode? : string,
        agentName? : string,
        agentAssignmentDt : string,
        assignmentStatus : string,
        noOfLeadsAssigned? : string
      };
      noOfCurrAgentRows += 1;
      if(i == 0 || (i-1>= 0 && sortedRespData[i-1].agentCode !== sortedRespData[i].agentCode)){
        tmpRowObj = (i < sortedRespData.length - 1) ? {
          ...sortedRespData[i]
        } : {
          ...sortedRespData[i],
          noOfLeadsAssigned: 1
        };
        fstRecWithUniqAgentCode = i;
      }else if((i-1 >= 0 && (i+1 <= sortedRespData.length - 1)
      && sortedRespData[i-1].agentCode === sortedRespData[i].agentCode && sortedRespData[i+1].agentCode === sortedRespData[i].agentCode)){
        tmpRowObj = {
          agentCode: '',
          agentName: '',
          agentAssignmentDt: sortedRespData[i].agentAssignmentDt,
          assignmentStatus: sortedRespData[i].assignmentStatus,
          noOfLeadsAssigned: ''
        }
      }else{
        tmpRowObj = {
          agentCode: '',
          agentName: '',
          agentAssignmentDt: sortedRespData[i].agentAssignmentDt,
          assignmentStatus: sortedRespData[i].assignmentStatus,
          noOfLeadsAssigned: ''
        }
        resDataArray[fstRecWithUniqAgentCode].noOfLeadsAssigned = noOfCurrAgentRows;
        noOfCurrAgentRows = 0;
      }
      resDataArray[i] = tmpRowObj;
    }
    return resDataArray;
  }

  ngAfterViewChecked(){
  }
  ngOnDestroy(){
    this.translateOnLangChangeSubscription.unsubscribe();
  }
}
