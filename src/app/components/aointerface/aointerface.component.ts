import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy,
  AfterViewChecked, OnChanges, Renderer2, Input } from '@angular/core';
import { JsonPipe, KeyValuePipe } from '@angular/common';
//import { MatPaginator, MatTableDataSource } from '@angular/material';
//import {DataSource} from '@angular/cdk/collections';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
import { LeadresponseService } from '../../services/leadresponse.service';
import { Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import {get as _get, set as _set} from 'lodash';
import { HttpClient, HttpResponse } from '@angular/common/http';

import constants from '../../constants/constants';

@Component({
  selector: 'app-aointerface',
  templateUrl: './aointerface.component.html',
  styleUrls: ['./aointerface.component.scss']
})

export class AointerfaceComponent implements OnInit, OnDestroy,
 AfterViewInit,AfterViewChecked,OnChanges {

  displayedColumns : string[] = constants["AOInterfaceColumnName"];
  displayedColumnsName : string[] = constants["AOInterfaceColumnField"];


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
     private leadresponseService : LeadresponseService,
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
      columnDefs : this.aoInterfaceColumnDef(),
      ajax : this.aoInterfaceAjax(),
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
    $('.table-aoInterface').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });

    this.classToTrigger =  [
      // {className: "a-resetBtn", callback: (queryParams)=>{this.resetLeaveRecord(queryParams)}},
      // {className: "a-saveBtn", callback: (queryParams)=>{this.saveLeaveRecord(queryParams)}},
      // {className: "a-selectBtn", callback: (queryParams)=>{this.setCurrSelectedAgentCode(queryParams)}},
      // {className: "a-selectYesBtn", callback: (queryParams)=>{this.selectYesRecord(queryParams)}},
    ];
  }

  // resetLeaveRecord(queryParams){
  //   this.agentassignmentService.postResetLeaveRecord(queryParams, "sendParams").subscribe((resp : any)=>{
  //     console.log("resp:", resp);
  //
  //   }, (error) => console.log(error));
  //   // this.refreshAndReloadSearchRecordTable(this.defaultCriterias);
  // }
  // saveLeaveRecord(queryParams){
  //   this.agentassignmentService.postSaveLeaveRecord(queryParams, "sendParams").subscribe((resp : any)=>{
  //     console.log("resp:", resp);
  //
  //   }, (error) => console.log(error));
  //   // this.refreshAndReloadSearchRecordTable(this.defaultCriterias);
  // }
  setCurrSelectedAgentCode(queryParams){
    this.currSelectedAgentCode = "";
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
  aoInterfaceColumnDef(){
    return [{
      targets: "_all",
      orderable: false,
      createdCell: function (td, cellData, rowData, row, col) {

        let convertDate = (date, minsOpt) => {
          return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " +
          ((minsOpt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
        }
        //rowData's status is N then it should be gray in color
        let cursorStyle = `style="cursor: pointer;"`;
        switch(col){
          case 3:case 5:case 6:
            if(cellData){
              let convertDateData = new Date(cellData);
              $(td).html(convertDate(convertDateData, 'withoutMins'));
            }
            break;
          case 0:
            //store the polno with customerName in the same column
            let cellDataSplit = cellData.split(":");
            let polNo = cellDataSplit[0];
            let customerName = cellDataSplit[1];
            $(td).html((cellData) ? (`<a class="a-modalLink" polno="` + polNo + `" ` + cursorStyle + ` data-toggle="modal" data-target="#customerDetailModal">` + customerName + `</a>`) : ``);
            break;
          case 7:case 8:
            if(cellData){
              let statusNumMapToText = [
                "",//blank
                "To apply for extension",//to apply for extension
                "Applied for extension",//applied extension
                "Opt-out from this program",//opt out
                "Re-assigned" //reassigned
              ];
              let extNumMapToText = [
                "",//blank
                "To be reviewed",//to be reviewed
                "Approved",//approved
                "Rejected" //rejected
              ];
              let html = ``;
              let text = (col == 7) ? statusNumMapToText[cellData-1] : extNumMapToText[cellData-1] ;
              if((col == 7 && cellData == 2) ||
                (col == 8 && (cellData == 2 || cellData == 3))){
                html += `<a class="a-modalLink" ` + cursorStyle + ` data-toggle="modal" data-target="#leadExtensionModal">` + text + `</a>`;
              }else{
                html += `<span>` + text + `</span>`;
              }
              $(td).html(html);
            }else{
              $(td).html(`<span>` + cellData + `</span>`);
            }
            break;
          case 10:case 11:case 12:
            let aPromptText = ``;
            aPromptText = (cellData) ? cellData : ('Please input ' + ((col == 10) ? 'Pol' : (col == 11) ? 'Product' : 'Afyp'));
            $(td).html(`<a class="a-modalLink" ` + cursorStyle + ` data-toggle="modal" data-target="#upsellDetailModal">` + aPromptText + `</a>`);
            break;
          default:
            $(td).html(`<span>` + cellData + `</span>`);
            break;

        }
      }
    }]
  }

  aoInterfaceAjax(){ //agentCd as
    return (params, callback, settings) => {
      console.log("***params:", (params))
      this.dataTableAjaxSubscription = this.leadresponseService.getAgentInterfaceRecord(params, 'dataTable').subscribe((resp : any) => {
        //preprocessing the resp.body.data
        let resArr = {data: Array<any>()};
        let convertDateMonthYear = (date) => {
          return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        };

        resp.body.data.forEach((elem,key)=>{
          //separate some unwanted params from other params
          let polNo, customerName, restAttrObj;
          ({polNo, customerName, ...restAttrObj} = elem);
          let customerInfo = polNo + ":" + customerName;
          restAttrObj['customerInfo'] = customerInfo;
          resArr.data.push(restAttrObj);
        });

        this.noOfPage = Math.ceil(resp.body.recordsTotal/this.dtOptions.pageLength);
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
