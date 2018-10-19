import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy,
  AfterViewChecked, OnChanges, Renderer2, Input } from '@angular/core';
import { JsonPipe, KeyValuePipe } from '@angular/common';
//import { MatPaginator, MatTableDataSource } from '@angular/material';
//import {DataSource} from '@angular/cdk/collections';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
import { AgentassignmentService } from '../../services/agentassignment.service';
import { AgentAssignmentRecord } from '../../models/agentassignmentrecord.model';
import { Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import {get as _get, set as _set} from 'lodash';
import { HttpClient, HttpResponse } from '@angular/common/http';

import constants from '../../constants/constants';

@Component({
  selector: 'app-detailssearchrecord',
  templateUrl: './detailssearchrecord.component.html',
  styleUrls: ['./detailssearchrecord.component.scss']
})
export class DetailssearchrecordComponent implements OnInit, OnDestroy,
 AfterViewInit,AfterViewChecked,OnChanges {

  displayedColumns : string[] = constants["DetailSearchRecordColumnName"];
  displayedColumnsName : string[] = constants["DetailSearchRecordColumnField"];
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

  screenWidth: number;

  currSelectedAgentCode: string= "";

  dataTableSettings;//for changing table pages in gotopage

  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "active-red",
    "10": "inactive-gray",
    "20": "inactive-gray",
  };
  //subscription
  dataTableAjaxSubscription;
  //
  constructor(
     private agentassignmentService : AgentassignmentService,
     private http: HttpClient,
     private renderer2 : Renderer2
   ) {}

  /*@HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
    console.log("New Screen width:" + window.innerWidth);
    console.log(this.dTable.dtInstance)
    this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }*/
  ngOnChanges(){
    this.currSelectedAgentCode = "";
    this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
  }
  ngOnInit() {
    //call a func to pass and reset the searchCriteriaComponent's searchRecordComponent ref
    //this.searchCriteriaComponent.setSearchRecordComponent(this);
    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val)=>{
      colArr.push({
        data: val
      });
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
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
      columns: colArr,
    }
    $('.table-detailSearchRecord').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });

    this.classToTrigger =  [
      {className: "a-resetBtn", callback: (queryParams)=>{this.resetLeaveRecord(queryParams)}},
      {className: "a-saveBtn", callback: (queryParams)=>{this.saveLeaveRecord(queryParams)}},
      {className: "a-selectBtn", callback: (queryParams)=>{this.setCurrSelectedAgentCode(queryParams)}},
      {className: "a-selectYesBtn", callback: (queryParams)=>{this.selectYesRecord(queryParams)}},
    ];
  }

  resetLeaveRecord(queryParams){
    this.agentassignmentService.postResetLeaveRecord(queryParams, "sendParams").subscribe((resp : any)=>{
      console.log("resp:", resp);

    }, (error) => console.log(error));
    this.refreshAndReloadSearchRecordTable(this.defaultCriterias);
  }
  saveLeaveRecord(queryParams){
    this.agentassignmentService.postSaveLeaveRecord(queryParams, "sendParams").subscribe((resp : any)=>{
      console.log("resp:", resp);

    }, (error) => console.log(error));
    this.refreshAndReloadSearchRecordTable(this.defaultCriterias);
  }
  setCurrSelectedAgentCode(queryParams){
    this.currSelectedAgentCode = "";
  }
  selectYesRecord(queryParams){
    this.agentassignmentService.postSelectYesLeaveRecord(queryParams, "sendParams").subscribe((resp : any)=>{
      console.log("resp:", resp);

    }, (error) => console.log(error));
    this.refreshAndReloadSearchRecordTable(this.defaultCriterias);

  }
  ngAfterViewInit(){ //only load data after view are initialized
    this.dtTrigger.next();
  }
  //for handling the datatables's link
  //use router.navigate instead of href in dom 'a', as href will refresh whole page
  onclickEventInit : boolean= false; //onchange would reset this back to false
  //class to function it should trigger
  classToTrigger : Array<{
    className: string,
    callback?: any
  }>;
  ngAfterViewChecked(){
    //fetch the datatable's settings
    //since angular-datatables is not supporting changing table page in option yet
    //make use of settings.oApi._fnPageChange to change the page
    //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
    this.dataTableSettings = _get($.fn['dataTable'], 'settings[0]');
    //for handling the btn inside datatables
    if(!this.onclickEventInit){
      this.onclickEventInit = true;
      this.renderer2.listen("body", 'click', (event)=>{
        this.classToTrigger.forEach((elem, key)=>{
          if($(event.target).hasClass(elem.className)){
            let queryParams = {};
            let queryParamsAttr = $(event.target).attr("queryParams");
            let queryParamsArray = queryParamsAttr ? $(event.target).attr("queryParams").split(",") : [];
            queryParamsArray.forEach((elem,key)=>{
              let keyValPair = elem.split(':');
              _set(queryParams, keyValPair[0], keyValPair[1]);
            })

            elem.callback(queryParams);
          }
        });
      });
    }
  }
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
    this.dataTableAjaxSubscription.unsubscribe();

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
    let tmpSearchCriterias = [];
    if(_searchCriteria){
      _searchCriteria.forEach((elem)=>{
        if(elem !== '') tmpSearchCriterias.push(elem);
      });
    }
    this.searchCriterias = tmpSearchCriterias;
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
        let convertDate = (date, minsOpt) => {
          return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " +
          ((minsOpt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
        }
        let onLeave = rowData.onLeave;

        if(col <= 4 && !cellData || cellData === ''){
          $(td).html("<span>-</span>");
        }
        switch(col){
          case 4:
            if(cellData){
              let convertDateData = new Date(cellData);
              $(td).html(convertDate(convertDateData, 'withoutMins'));
            }
            break;
          case 5:
            if(!cellData){
              $(td).html(`<a class="` + redBtnClass + ` a-selectBtn" data-toggle="modal" data-target="#selectBtnModal" queryParams="` + rowData.agentCode + `">Select</a>`);
            }
            break;
          case 6:
            let splitOnLeave = (onLeave) ? onLeave.split(":") : null; //[0] =leaveId, [1] =onleave start end date
            let onleaveP = (splitOnLeave) ? "<p style='margin:auto;'>" + splitOnLeave[1] + "</p>" : "";
            $(td).css({
              "display": "inline-flex",
              "width": "100%"
            });
            if(!onLeave){
              $(td).html(onleaveP + `<a style="margin:auto" class="` + grayBtnClass + ` a-addBtn" data-toggle="modal" data-target="#onLeaveModal">Add</a>`);
            }else{
              $(td).html(onleaveP + `<a style="margin:auto" class="` + grayBtnClass + ` a-resetBtn" queryParams="leaveId:` + splitOnLeave[0] + `">Reset</a>`);
            }
            break;
        }
      }
    }]
  }
  agentDetailsAjax(){
    return (params, callback, settings) => {
      this.searchCriterias.forEach((data, key)=>{
        params[this.searchCriteriaFieldName[key]] = data;
      });
      this.dataTableAjaxSubscription = this.agentassignmentService.getAgentDetailRecord(params, 'dataTable').subscribe((resp : any) => {
        this.noOfRenewals = resp.body.recordsFiltered;
        this.noOfPage = Math.ceil(this.noOfRenewals/this.dtOptions.pageLength);
        //preprocessing the resp.body.data
        let resArr = {data: Array<any>()};
        let convertDateMonth = (date) => {
          return date.getDate() + "/" + (date.getMonth() + 1);
        }
        resp.body.data.forEach((elem,key)=>{
          let leaveId, leaveStartDate, leaveEndDate, restAttrObj;
          ({leaveId,leaveStartDate,leaveEndDate,...restAttrObj} = elem);
          _set(restAttrObj,"assign",null);
          let dateStr = (!leaveId || leaveId === 0) ? null :
            leaveId + ":" + convertDateMonth(new Date(leaveStartDate)) + "-" + convertDateMonth(new Date(leaveEndDate));
          //the leaveId should be later split out
          _set(restAttrObj,"onLeave", dateStr);

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
