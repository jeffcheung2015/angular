import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy,
  AfterViewChecked, OnChanges, Renderer2, Input } from '@angular/core';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { AgentassignmentService } from '../../../services/agentassignment.service';
import { AgentAssignmentRecord } from '../../../models/agentassignmentrecord.model';
import { Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import {get as _get, set as _set} from 'lodash';
import { HttpClient, HttpResponse } from '@angular/common/http';

import constants from '../../../constants/constants';
import convertformat from '../../../utils/convertformat';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detailssearchrecord',
  templateUrl: './detailssearchrecord.component.html',
  styleUrls: ['./detailssearchrecord.component.scss']
})
export class DetailssearchrecordComponent implements OnInit, OnDestroy,
 AfterViewInit,AfterViewChecked,OnChanges {
  @Input() gobackRouteLink: string;
  displayedColumns: string[];
  displayedColumnsName : string[];
  searchCriterias : string[] = ["", "" ,""];
  searchCriteriaFieldName : string[] = ["agentCode","agentPhone","agentName"];

  defaultCriterias : string[] = ["", "", ""];

  searchCriteriaComponent;
  noOfRenewals : number = 0;
  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger = new Subject();
  pageInfo : any = {};

  noOfPage : number;
  currPage : number = 1;

  currDate = new Date();
  currAgentListPoolType : number;
  dataTableJustInitialized : boolean = false;

  dataTableSettings;//for changing table pages in gotopage

  currAgentCode: string= ""; currLeaveId : string = ""; currPolicyNo : string = "";
  //to set the min, max date of from / to once onleavefrom / to is changed
  onLeaveDateChange(e, fromOrTo){
    this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
  }
  minDateTo;
  maxDateFrom;
  onLeaveModalForm = new FormGroup({
    onLeaveFrom : new FormControl(''),
    onLeaveTo : new FormControl('')
  });
  //

  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "inactive-gray",
    "10": "inactive-gray",
    "20": "active-red",
  };
  //subscription
  dataTableAjaxSubscription;
  //listener
  bodyRendererListener;

  constructor(
     private agentassignmentService : AgentassignmentService,
     private http: HttpClient,
     private renderer2 : Renderer2,
     private activatedRoute: ActivatedRoute,
     private router: Router
   ) {}

  ngOnChanges(){
    this.currAgentCode = "";
    this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
  }
  ngOnInit() {
    this.currPolicyNo = this.agentassignmentService.currPolNo || "";
    if(this.currPolicyNo === ''){
      this.router.navigate(['/']);
    }
    //to check if curr full agent list's agent are old agent type / new agent Type
    this.agentassignmentService.getCurrAgentPoolType({policyNo: this.currPolicyNo}, 'getPoolType').subscribe((resp : any) => {
      console.log('>>> poolType == ', resp.body == 1 ? "NEW_POOL_TYPE" : "OLD_POOL_TYPE");
      this.currAgentListPoolType = parseInt(resp.body);
      if(this.currAgentListPoolType === constants.OLD_POOL_TYPE){
        this.displayedColumns = constants["DetailSearchRecordOldPoolTypeColumnName"];
        this.displayedColumnsName = constants["DetailSearchRecordOldPoolTypeColumnField"];
      }else{
        this.displayedColumns = constants["DetailSearchRecordColumnName"];
        this.displayedColumnsName = constants["DetailSearchRecordColumnField"];
      }
      let colArr = [], dataArr = [];
      this.displayedColumnsName.forEach((val, index)=>{
        colArr.push(this.currAgentListPoolType === constants.OLD_POOL_TYPE || index != 6 ? {
          data: val
        } : {
          data: val,
          width: '15%'  // bigger width for [onLeave] col
        });
      });
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 20,
        scrollX:true,
        scrollY:true,
        columnDefs : this.agentDetailsColumnDef(),
        ajax : this.agentDetailsAjax(),
        processing: true,
        serverSide: true,
        language: {
          info: "",
          paginate: {
            first:    '« first',
            previous: '‹ prev',
            next:     'next ›',
            last:     'last »'
          },
          //display none length Menu and add a new custom menu
          // to change the hidden length menu
          lengthMenu: ``,
        },
        searching: false,
        columns: colArr
      };
      this.initDatatableAndClassToTrigger();
      this.dataTableJustInitialized = true;
    }, (error)=>{console.error(error)});
  }

  initDatatableAndClassToTrigger(){
    $('.table-detailSearchRecord').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
      _set(this, 'currPage', (settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });
    //all the following btns are placed inside the agentassignment.component.html
    this.classToTrigger =  [
      {type: "setCurrRow", className: "a-addBtn", callback: ()=>{this.addBtnClicked()}},
      {type: "setCurrRow", className: "a-selectBtn", callback: ()=>{}},

      {type: "setCurrRowAndSubmit", className: "a-resetBtn", callback: ()=>{this.resetLeaveRecord()}},

      {type: "submit", className: "a-saveLeaveDateBtn", callback: ()=>{this.saveLeaveRecord()}},
      {type: "submit", className: "a-selectYesBtn", callback: ()=>{this.selectYesRecord()}},
    ];
  }

  resetLeaveRecord(){
    let queryParams = {
      leaveId : this.currLeaveId
    };
    this.agentassignmentService.postResetLeaveRecord(queryParams, "sendParams").subscribe((resp : any)=>{
      console.log("resp:", resp);
      this.refreshAndReloadSearchRecordTable(this.defaultCriterias);

    }, (error) => console.log(error));
  }
  addBtnClicked(){
    //reset the form's Value
    this.onLeaveModalForm.controls['onLeaveFrom'].setValue('');
    this.onLeaveModalForm.controls['onLeaveTo'].setValue('');
  }

  saveLeaveRecord(){
    //preprocess the leave start dt and leave end dt,
    try{
      let leaveStartDate = this.onLeaveModalForm.controls['onLeaveFrom'].value;
      let leaveEndDate = this.onLeaveModalForm.controls['onLeaveTo'].value;
      if(!leaveStartDate || !leaveEndDate || leaveEndDate - leaveStartDate < 0 || (leaveStartDate.getTime() - new Date().getTime()) < -86400000){
        throw new Error('leaveStartDt || leaveEndDt error');
      }
      let queryParams = {
        leaveId: this.currLeaveId,
        agentCode: this.currAgentCode,
        leaveStartDate: convertformat.dateToYYYYMMDD(leaveStartDate, '/'),
        leaveEndDate: convertformat.dateToYYYYMMDD(leaveEndDate, '/')
      }

      this.agentassignmentService.postSaveLeaveRecord(queryParams, "sendParams").subscribe((resp : any)=>{
        console.log("resp:", resp);
        this.refreshAndReloadSearchRecordTable(this.defaultCriterias);

      }, (error) => console.log(error));
    }catch(e){
      console.error('Exception: ', e);
    }
  }

  selectYesRecord(){
    let queryParams = {
        agentCode: this.currAgentCode,
        policyNo: this.currPolicyNo
    };

    this.agentassignmentService.postSelectYesLeaveRecord(queryParams, "sendParams").subscribe((resp : any)=>{
      this.router.navigate(['/'+this.agentassignmentService.currServiceName]);

    }, (error) => console.log(error));
  }

  ngAfterViewInit(){ //only load data after view are initialized

  }
  //for handling the datatables's link
  //use router.navigate instead of href in dom 'a', as href will refresh whole page
  onclickEventInit : boolean= false; //onchange would reset this back to false
  //class to function it should trigger
  classToTrigger : Array<{
    type: string,
    className: string,
    callback?: any
  }>;
  ngAfterViewChecked(){
    if(this.dataTableJustInitialized){
      this.dtTrigger.next();
      //fetch the datatable's settings
      //since angular-datatables is not supporting changing table page in option yet
      //make use of settings.oApi._fnPageChange to change the page
      //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
      this.dataTableSettings = _get($.fn['dataTable'], 'settings[0]');
      //for handling the btn inside datatables
      if(!this.onclickEventInit){
        this.onclickEventInit = true;
        this.bodyRendererListener = this.renderer2.listen("body", 'click', (event)=>{
          this.classToTrigger.forEach((elem, key)=>{
            if($(event.target).hasClass(elem.className)){
              //add, select, reset btn that is inside the tr row
              //only these btns have the info of the closest tr for setting currently selected row
              if(['setCurrRow', 'setCurrRowAndSubmit'].indexOf(elem.type) !== -1){
                let rowDataStr = $(event.target).closest("tr").attr("rowdata");
                let rowDataObj = JSON.parse(rowDataStr);
                let leaveId = rowDataObj.onLeave ? rowDataObj.onLeave.split(";")[0] : null;

                this.currLeaveId = leaveId;
                this.currAgentCode = rowDataObj.agentCode;
              }

              elem.callback();
            }
          });
        });
      }
      this.dataTableJustInitialized = false;
    }
  }
  ngOnDestroy(){
    if(this.bodyRendererListener){
      this.bodyRendererListener();
    }
    if(this.dtTrigger){
      this.dtTrigger.unsubscribe();
    }
    if(this.dataTableAjaxSubscription){
      this.dataTableAjaxSubscription.unsubscribe();
    }
  }
  changeTablePerPage(val){
    //reset all the length menu 's class to gray color
    this.mapToLengthMenuNum = {
      "5": "inactive-gray",
      "10": "inactive-gray",
      "20": "inactive-gray",
    };
    this.mapToLengthMenuNum[parseInt(val)] = "active-red";
    //reset the datatable after changing dtOptions to redraw the table
    this.dtOptions.pageLength = val;//change table's no of records

    this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
      //redraw table only need these 2 funcs
      dtInstance.destroy();
      this.dtTrigger.next();
    });
    this.currPage = 1;
  }
  changeCurrTablePage(page){
    if(page !== "" && /^\d+$/.test(page)){
      console.log('Change to page: ' + page);
      let pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true)
      console.log((pageChangeStatus)?'Current page changed to '+ page : "Fail to change page, page exceed no of page");
      this.currPage = page;
    }
  }

  refreshAndReloadSearchRecordTable(_searchCriteria : string[]){
    this.searchCriterias = _searchCriteria;
    let dTableInstance = _get(this.dTable, "dtInstance");
    if(dTableInstance){
      dTableInstance.then((dtInstance: DataTables.Api) => {
        //redraw table only need these 2 funcs
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    }
  }
  agentDetailsColumnDef(){
    return [{
      targets: "_all",
      orderable: false,
      createdCell: function (td, cellData, rowData, row, col) {
        let redBtnClass = "btn btn-primary table-btn";
        let grayBtnClass = "btn btn-default table-btn";
        let convertDate = (date, opt) => {
          return (opt === "MMDD") ? (date.getMonth() + 1) + '/' + date.getDate() :
          date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " +
          ((opt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
        }
        let onLeave = rowData.onLeave;
        let splitOnLeave = (onLeave) ? onLeave.split(";") : null; //[0] =leaveId, [1] =onleave start end date
        let onLeaveP, onLeaveDt, onLeaveStartDt, onLeaveEndDt, isWithinLeavePeriod = false;
        let currDate = new Date();
        let poolType = rowData.poolType;

        if(splitOnLeave){

          onLeaveDt = splitOnLeave[1].split(',');
          onLeaveStartDt = new Date(onLeaveDt[0].substr(0,10));
          onLeaveEndDt = new Date(onLeaveDt[1].substr(0,10));
          isWithinLeavePeriod = (currDate.getTime() - onLeaveStartDt.getTime() > 0 && currDate.getTime() - onLeaveEndDt.getTime() < 0);
          //compare current date with the on leave start dt and end dt
          let pStyle = `style="margin:auto;padding:10px;` + ((isWithinLeavePeriod) ? `color:lightgray;"` : `"`);

          onLeaveP = `<p ` + pStyle + `>` + convertDate(onLeaveStartDt, "MMDD") + "-" + convertDate(onLeaveEndDt, "MMDD") + `</p>`;
        }

        let aOrSpanStyle = ``; // for col 4 [lastAssignDate] and col 6 [onleave]

        if(col <= 4 && !cellData || cellData === ''){
          $(td).html(`<span ` + ((isWithinLeavePeriod) ? `style="color:lightgray"` : ``) + `>-</span>`);
        }
        switch(col){
          case 4:
            let closestTrObj = $(td).closest('tr');
            $(closestTrObj).attr("rowData", JSON.stringify(rowData));

            if(cellData){
              let convertDateData = new Date(cellData.substr(0,10));
              $(td).html(convertDate(convertDateData, 'withoutMins'));
            }
            break;
          case 5:
            $(td).html(`<a class="` + redBtnClass + ` a-selectBtn" data-toggle="modal" data-target="#selectBtnModal">Select</a>`);
            break;
          case 6:
            aOrSpanStyle += `margin:auto;`;
            let divStyle = `display:inline-flex;width:100%;`

            if(poolType == '2'){ //old pool type should not have on leave func
              $(td).html(``);
            }else if(!onLeave || !isWithinLeavePeriod){
              $(td).html(`<div style="` + divStyle + `">` +
                   `<a style="` + aOrSpanStyle + `" class="` + grayBtnClass +
                   ` a-addBtn" data-toggle="modal" data-target="#onLeaveModal">Add</a></div>`);
            }else{
              $(td).html(`<div style="` + divStyle + `">` +
                  onLeaveP + `<a style="` + aOrSpanStyle + `" class="` + grayBtnClass +
                  ` a-resetBtn" >Reset</a></div>`);
            }
            break;
          default:
            aOrSpanStyle += ((isWithinLeavePeriod) ? "color:lightgray;" : "");
            $(td).html(`<span style="` + aOrSpanStyle + `">` + cellData + `</span>`);
            break;
        }
      }
    }]
  }
  agentDetailsAjax(){
    return (params, callback, settings) => {
      let queryParams = {};
      let draw, start, length, unusedParams;
      ({draw, start, length, ...unusedParams} = params);
      queryParams = {
        draw, start, length
      };
      //put all the params from searchCriteria into queryParams
      this.searchCriterias.forEach((data, key)=>{
        if(data){
          queryParams[this.searchCriteriaFieldName[key]] = data;
        }
      });
      queryParams["policyNo"] = this.currPolicyNo;
      this.dataTableAjaxSubscription = this.agentassignmentService.getAgentDetailRecord(queryParams, 'dataTable').subscribe((resp : any) => {

        this.noOfRenewals = resp.body.recordsFiltered;
        this.noOfPage = Math.ceil(this.noOfRenewals/this.dtOptions.pageLength);
        this.currPage = (resp.body.recordsFiltered >= 1) ? this.currPage : 0;
        //preprocessing the resp.body.data
        let resArr = {data: Array<any>()};

        resp.body.data.forEach((elem,key)=>{
          let leaveId, leaveStartDate, leaveEndDate, restAttrObj;
          ({leaveId,leaveStartDate,leaveEndDate,...restAttrObj} = elem);
          _set(restAttrObj,"assign",null);

          if(this.currAgentListPoolType === constants.NEW_POOL_TYPE){ //only new pool type has on leave col
            let dateStr = (!leaveId || leaveId === 0) ? null :
              leaveId + ";" + leaveStartDate + "," + leaveEndDate;
            //the leaveId should be later split out
            _set(restAttrObj,"onLeave", dateStr);
          }

          resArr.data.push(restAttrObj);
        });
        //
        callback({
          data:resArr.data,
          recordsTotal: resp.body.recordsTotal,
          recordsFiltered: resp.body.recordsFiltered
        });
      });
    }
  }
}
