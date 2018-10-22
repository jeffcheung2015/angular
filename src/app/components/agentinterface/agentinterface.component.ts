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
import { FormGroup, FormControl } from '@angular/forms';
import {get as _get, set as _set} from 'lodash';
import { HttpClient, HttpResponse } from '@angular/common/http';

import constants from '../../constants/constants';
import convertformat from '../../utils/convertformat';

@Component({
  selector: 'app-agentinterface',
  templateUrl: './agentinterface.component.html',
  styleUrls: ['./agentinterface.component.scss']
})
export class AgentinterfaceComponent implements OnInit, OnDestroy,
 AfterViewInit,AfterViewChecked,OnChanges {

  displayedColumns : string[] = constants["AgentInterfaceColumnName"];
  displayedColumnsName : string[] = constants["AgentInterfaceColumnField"];

  //for displaying data in modal in 3 different modals [Customer Details, Lead extension, Upsell Details]
  currCustomerName; currPhone; currEmail; currAssignmentDt;
  currAssignmentStatus;
  currPolNo;
  //input fields of 3 different modals [Customer Details, Lead extension, Upsell Details]
  currFirstContactDt;
  currApplicationExt; currReasonOfExt;
  currUpsellLifePolNo; currUpsellLifeProd; currAfyp;

  customerDetailModalForm = new FormGroup({
     firstContactDt : new FormControl('')
  });
  leadExtensionModalForm = new FormGroup({
     reasonOfExt : new FormControl('')
  });
  upsellDetailModalForm = new FormGroup({
     upsellLifePolNo : new FormControl(''),
     upsellLifeProd : new FormControl(''),
     afyp : new FormControl('')
  });
  //

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
      columnDefs : this.agentInterfaceColumnDef(),
      ajax : this.agentInterfaceAjax(),
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
    $('.table-agentInterface').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });

    this.classToTrigger =  [
      {type: 'modal', className: "a-modalLink"}, //is separately handled from the following entities

      {type: 'submit', className: "a-customerDtlSubmitBtn", callback: ()=>{this.setCustomerDtl()}},
      {type: 'submit', className: "a-leadExtSubmitBtn", callback: ()=>{this.setLeadExt()}},
      {type: 'submit', className: "a-upsellDtlSubmitBtn", callback: ()=>{this.setUpsellDtl()}}
    ];
  }
  setCustomerDtl(){
    let firstContactDt = this.customerDetailModalForm.controls['firstContactDt'].value;
    //let formattedFCD = firstContactDt.getFullYear()+"-"+(firstContactDt.getMonth()+1)+"-"+firstContactDt.getDate();
    let queryParams = {
      firstContactDt: convertformat.dateToYYYYMMDD(firstContactDt, '-'),
      polNo: this.currPolNo
    };

    this.leadresponseService.postCustomerDtlRecord(queryParams, "sendParams").subscribe((resp : any)=>{
      console.log("resp:", resp);

      this.refreshTable();

    }, (error) => console.log(error));
  }
  setLeadExt(){
    let queryParams = {
      reasonOfExt: this.leadExtensionModalForm.controls['reasonOfExt'].value,
      polNo: this.currPolNo
    };
    this.leadresponseService.postLeadExtRecord(queryParams, "sendParams").subscribe((resp : any)=>{
      console.log("resp:", resp);

      this.refreshTable();

    }, (error) => console.log(error));
  }
  setUpsellDtl(){
    let queryParams = {
      lifePolNo: this.upsellDetailModalForm.controls['upsellLifePolNo'].value,
      lifePolCls: this.upsellDetailModalForm.controls['upsellLifeProd'].value,
      lifeAfyp: this.upsellDetailModalForm.controls['afyp'].value,
      polNo: this.currPolNo
    };
    this.leadresponseService.postUpsellDtlRecord(queryParams, "sendParams").subscribe((resp : any)=>{
      console.log("resp:", resp);

      this.refreshTable();

    }, (error) => console.log(error));
  }

  //called outside of this component
  refreshTable(){
    let dTableInstance = _get(this.dTable, "dtInstance");
    if(dTableInstance){
      dTableInstance.then((dtInstance: DataTables.Api) => {
        //redraw table only need these 2 funcs
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    }
  }

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
    type: string,
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
            if(elem.type === 'submit'){
              elem.callback();
            }else if(elem.type === 'modal'){
              //app ext obj map
              let extNumMapToText = [
                "",//blank
                "To be reviewed",//to be reviewed
                "Approved",//approved
                "Rejected" //rejected
              ];
              //
              let rowDataStr = $(event.target).closest("tr").attr("rowdata");
              let rowDataObj = JSON.parse(rowDataStr);
              let dataTarget = $(event.target).attr('data-target');
              //the cols that need to be split
              let customerInfoSplit = rowDataObj.customerInfo.split(":");
              let polNo = customerInfoSplit[0];
              let customerName = customerInfoSplit[1];
              //===============
              let assignmentInfoSplit = rowDataObj.assignmentInfo.split(":");
              let assignmentStatus = assignmentInfoSplit[0];
              let reasonOfExt = assignmentInfoSplit[1];
              //

              switch(dataTarget){
                case '#customerDetailModal':
                  this.currCustomerName = customerName;
                  this.currPhone = rowDataObj.phone;
                  this.currEmail = rowDataObj.email;
                  this.currAssignmentDt = rowDataObj.agentAssignmentDt;

                  //just act as a temp storage of `firstContactDt`
                  //so as to determine if the input field of firstContactDt should display or not
                  this.currFirstContactDt = rowDataObj.firstContactDt;

                  this.customerDetailModalForm.controls['firstContactDt'].setValue((rowDataObj.firstContactDt) ? new Date(rowDataObj.firstContactDt) : '');
                break;
                case '#leadExtensionModal':
                  this.currAssignmentStatus = assignmentStatus;
                  //applicationExt can only be read only
                  this.currApplicationExt = (rowDataObj.applicationExt);

                  //reasonOfExt can be either read only or write and read, depends on applied or to apply for
                  this.currReasonOfExt = reasonOfExt;
                  this.leadExtensionModalForm.controls['reasonOfExt'].setValue(reasonOfExt);
                break;
                case '#upsellDetailModal':
                  this.currCustomerName = customerName;

                  this.upsellDetailModalForm.controls['upsellLifeProd'].setValue(rowDataObj.upsellLifeProd);
                  this.upsellDetailModalForm.controls['upsellLifePolNo'].setValue(rowDataObj.upsellLifePolNo);
                  this.upsellDetailModalForm.controls['afyp'].setValue(rowDataObj.afyp);
                break;
              }
              //in no matter which condition should polno be assigned as all post reqs need polno parameter
              this.currPolNo = polNo;
            }
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

  agentInterfaceColumnDef(){
    return [{
      targets: "_all",
      orderable: false,
      createdCell: function (td, cellData, rowData, row, col) {
        //datatable data [need to be preprocessed first]
        let customerInfoSplit = rowData.customerInfo.split(":");
        let assignmentInfoSplit = rowData.assignmentInfo.split(":");
        let polNo = customerInfoSplit[0];
        let customerName = customerInfoSplit[1];
        let assignmentStatus = assignmentInfoSplit[0];

        //funcs
        let convertDate = (date, minsOpt) => {
          return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " +
          ((minsOpt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
        }
        //styles
        let cursorStyle = `style="cursor: pointer;"`;
        let optOutReassignStyle = `style="color:gray; border: solid 0px;"`;

        //those fields that has assignmentstatus as Optout / reassigned need to be specially handled.
        //customerName, applicationStatus and applicationExt gray in color, cs remarks can be viewed
        let optoutOrReassign = ["3", "4"].includes(assignmentStatus);
        let isRejected = rowData.applicationExt === '4';

        let html = ``;
        switch(col){
          case 0:
            //store the whole row's data into closest tr of this cell
            let closestTrObj = $(td).closest('tr');
            $(closestTrObj).attr("rowData", JSON.stringify(rowData));

            html = optoutOrReassign ? `<a ` + optOutReassignStyle + ` class="a-modalLink" polno="` + polNo + `" >` + customerName + `</a>` :
             `<a class="a-modalLink" polNo="` + polNo + `"` + cursorStyle +
             ` data-toggle="modal" data-target="#customerDetailModal">` + customerName + `</a>`;
            $(td).html(html);
            break;
          case 3:case 5:case 6:
            html = (cellData && !optoutOrReassign) ? convertDate(new Date(cellData), 'withoutMins') : '<span></span>';
            $(td).html(html);
            break;
          case 7:case 8:
            html = ``;
            let statusNumMapToText = [
              "",//blank
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
            cellData = (col == 7) ? assignmentStatus : cellData; //reassign back the extracted assignmentstatus to cellData for col == 7
            let text = (col == 7) ? statusNumMapToText[cellData-1] : extNumMapToText[cellData-1] ;

            if(col == 7 && cellData == 1){ //blank || To apply for extension (to be determined by inside the if condition)
              let datDiff : number = (new Date().getTime() - new Date(rowData.agentAssignmentDt).getTime()) / (86400000); //24*60*60*1000ms

              if(rowData.upsellLifePolNo === '' && datDiff > 150){ //5 months  5*30 days
                html += `<a class="a-modalLink" ` + cursorStyle + `data-toggle="modal" data-target="#leadExtensionModal" ` + `>To apply for extension</a>`;
              }
              else{
                html += `<span></span>`;
              }
            }else if(col == 7 && cellData == 2){ //applied extension
              html += `<span>` + text + `</span>`;
            }else if(col == 8 && (cellData == 2 || cellData == 3)){ //To be reviewed || Approved
              html += (optoutOrReassign) ? `<span ` + optOutReassignStyle + `>` + text + `</span>` : //optout or reassign then this cell should be in gray color
                        `<a class="a-modalLink" ` + cursorStyle + ` data-toggle="modal" data-target="#leadExtensionModal">` + text + `</a>`;
            }else{ //opt-out || reassigned || rejected
              html += `<span ` + ((optoutOrReassign) ? optOutReassignStyle : ``) + `>` + text + `</span>`;
            }
            $(td).html((cellData) ? html : `<span></span>`);
            break;
          case 10:case 11:case 12:
            let aPromptText = ``;
            aPromptText = (cellData) ? cellData : ('Please input ' + ((col == 10) ? 'Pol' : (col == 11) ? 'Product' : 'Afyp'));
            html = (optoutOrReassign) ? `<span></span>` :
                    (`<a class="a-modalLink" ` + cursorStyle + ` data-toggle="modal" data-target="#upsellDetailModal">` + aPromptText + `</a>`);
            $(td).html(html);
            break;
          default:
            $(td).html((cellData && !optoutOrReassign) ? `<span>` + cellData + '</span>' : `<span></span>`);
            break;
        }
      }
    }]
  }
  agentInterfaceAjax(){ //agentCd as
    return (params, callback, settings) => {
      this.dataTableAjaxSubscription = this.leadresponseService.getAgentInterfaceRecord(params, 'dataTable').subscribe((resp : any) => {
        //preprocessing the resp.body.data
        let resArr = {data: Array<any>()};
        resp.body.data.forEach((elem,key)=>{
          //separate some unwanted params from other params
          let polNo, customerName, reasonOfExt, assignmentStatus, restAttrObj;
          ({polNo, customerName, reasonOfExt, assignmentStatus, ...restAttrObj} = elem);

          //customerInfo put both polNo and customerName into one col and later be processed in agentInterfaceColumnDef
          let customerInfo = (polNo ? polNo : '') + ":" + (customerName ? customerName : '');
          //assignmentInfo put both reasonOfExt and assignmentStatus into one col and later be processed in agentInterfaceColumnDef
          let assignmentInfo = (assignmentStatus ? assignmentStatus : '') + ":" + (reasonOfExt ? reasonOfExt : '');

          restAttrObj['customerInfo'] = customerInfo;
          restAttrObj['assignmentInfo'] = assignmentInfo;
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
