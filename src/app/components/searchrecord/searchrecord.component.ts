import { Component, OnInit, AfterViewInit, ViewChild, HostListener,
   OnDestroy,AfterViewChecked, OnChanges, Renderer2 } from '@angular/core';
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
import { Router } from '@angular/router';

import constants from '../../constants/constants';
@Component({
  selector: 'app-searchrecord',
  templateUrl: './searchrecord.component.html',
  styleUrls: ['./searchrecord.component.scss']
})
export class SearchrecordComponent implements OnInit, OnDestroy, AfterViewInit,AfterViewChecked, OnChanges {
  displayedColumns : string[] = constants["SearchRecordColumnName"];
  displayedColumnsName : string[] = constants["SearchRecordColumnField"];
  searchCriterias : string[] = ["" ,"" ,"" ,"" ,"" ,"" ,"" ,"Assign"];
  searchCriteriaFieldName : string[] = ["fullName","policyNo","mobileNo","emailAddr","idCardNo",
    "dateOfSubmissionFrom","dateOfSubmissionTo","assignmentOption"];
  searchCriteriaComponent;
  noOfCustomer : number = 0;
  noOfRenewals : number = 0;
  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger= new Subject();
  pageInfo : any = {};

  screenWidth: number;

  dataTableSettings;//for changing table pages in gotopage
  noOfPage : number;
  currPage : number = 1;

  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "active-red",
    "10": "inactive-gray",
    "20": "inactive-gray",
  };
  constructor(private agentassignmentService : AgentassignmentService,
     private http: HttpClient, private router: Router, private renderer2: Renderer2) {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
    console.log("New Screen width:" + window.innerWidth);
    this.dtOptions.fixedColumns.leftColumns = (this.screenWidth < 800) ? 1 : 5;
    this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
  ngOnChanges(){
    this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
  }
  ngOnInit() {
    //call a func to pass and reset the searchCriteriaComponent's searchRecordComponent ref

    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val, index)=>{
      colArr.push({
        data:val,
        width:'0px'
      })
    });
    this.dtOptions = {
      fixedColumns: {
        leftColumns: (window.innerWidth > 800) ? 5 : 1
      },
      pagingType: 'full_numbers',
      pageLength: 5,
      scrollX:true,
      scrollY:true,
      columnDefs : this.agentAssignedColumnDef(),
      ajax : this.agentAssignedAjax(),
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

    $('.table-searchRecord').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });

  }
  ngAfterViewInit(){ //only load data after view are initialized
    this.dtTrigger.next();
  }
  //search criteria component is ngif content and will only be available
  //after content init
  ngAfterContentInit(){
  //this.searchCriteriaComponent.setSearchRecordComponent(this);

  }
  //for handling the datatables's link
  //use router.navigate instead of href in dom 'a', as href will refresh whole page
  onclickEventInit = false; //onchange would reset this back to false
  classToTrigger  : Array<{
    className: string,
    url: string
  }> = [
    {className : 'a-campaignCode', url: "/agentHome/campaignDetails"},
    {className : 'a-assignBtn', url: "/agentHome/agentDetails"},
    {className : 'a-viewEmail', url: "/viewEmail"}
  ];
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
            //read queryParams attr
            //e.g. queryParams="abc:2,ddd:4" ...
            let paramsToBePassed = {};
            let queryParamsStr = $(event.target).attr("queryParams");
            let queryParamsArray = queryParamsStr.split(',');
            queryParamsArray.forEach((elem, key)=>{
              let elemPair = elem.split(':');
              _set(paramsToBePassed, elemPair[0], elemPair[1]);
            });
            this.router.navigate([elem.url], { queryParams : paramsToBePassed });
          }
        });
      });
    }
  }
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
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
    this.noOfPage = Math.ceil(this.noOfCustomer/this.dtOptions.pageLength);
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
  //called outside of this component
  refreshAndReloadSearchRecordTable(_searchCriteria : string[]){
    let tmpSearchCriterias = [];
    _searchCriteria.forEach((elem)=>{
      if(elem !== '') tmpSearchCriterias.push(elem);
    });
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
  agentAssignedColumnDef(){
    return [{
      targets: "_all",
      orderable: false,
      createdCell: function (td, cellData, rowData, row, col) {
        let assignType = rowData.assignmentType;
        let agentCode = rowData.agentCode;
        let convertDate = (date, minsOpt) => {
          return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " +
          ((minsOpt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
        }
        //A,D,F assign btn only
        //B val reassign pru sms
        //C val pru sms
        //E sms btn only
        let rowSymbol = (assignType === 1 && !agentCode) ? 'A' :
                        (assignType === 1 && agentCode) ? 'B' :
                        (assignType === 2) ? 'C' :
                        (assignType === 3) ? 'D' :
                        (assignType === 4) ? 'E' : 'F';
        if(col < 13){
          if(col == 11){//campaign code, put campaign code as attr later
            $(td).html('<a class="a-campaignCode" queryParams="campaignCode:' + rowData.campaignCode + '">' + cellData + '</a>');
          }
          if(!cellData){ //for those null data
            $(td).html('-');
          }else{ //col 10 convert date str into proper format dd/MM/YYYY
            if(col === 10 && cellData){
              let convertDateData = new Date(cellData);
              $(td).html(convertDate(convertDateData, 'withoutMins'));
            }
          }
        }else if(col >= 13 && col <= 17){
          if(col!==15){  //remove and merge all the 5 tds as a one td
            $(td).remove();
          }else{
            $(td).attr('colspan', '5');

            $(td).addClass((rowSymbol === 'B') ? 're-assign' : '');

            let redBtnClass = "btn btn-primary table-btn";
            let grayBtnClass = "btn btn-default table-btn";

            let assignBtnHTML = `<a class="` + redBtnClass + ` a-assignBtn" queryParams="policyNo:` + rowData.polNo + `">Assign</a>`;
            let reassignBtnHTML = `<a class="` + redBtnClass + `">Re-assign</a>`;
            let pruchatBtnHTML = `<a class="` + grayBtnClass + `">PruChat & Email to Agent(Resend)</a>`;
            let smsEmailBtnHTML = `<a class="` + grayBtnClass + `">SMS & Email to Customer(Resend)</a>`;

            let agentAssignedDate = new Date(rowData.agentAssignedDate);

            let tdValRowHTML = `<td><p>` + rowData.agentTeam + `</p></td>
            <td><p>` + rowData.agentCode + `</p></td>
            <td><p>` + rowData.agentName + `</p></td>
            <td><p>` + rowData.agentPhone + `</p></td>
            <td><p>` + convertDate(agentAssignedDate, 'withoutMins') + `</p></td>`;

            let firstRow :string = '' , secRow :string = '';

            switch(rowSymbol){
              case 'A': case 'D': case 'F':
                firstRow = assignBtnHTML;
                break;
              case 'B': //val reassign pru sms (2)
                firstRow = `<tr class="re-assign">` + tdValRowHTML + `</tr>`;
                secRow = `<tr><td colspan="5" class="re-assign">` + reassignBtnHTML +
                 pruchatBtnHTML + smsEmailBtnHTML + `</td></tr>`;
                break;
              case 'C': //val pru sms (2)
                firstRow = `<tr>` + tdValRowHTML + `</tr>`;
                secRow = `<tr><td colspan="5">` +
                 pruchatBtnHTML + smsEmailBtnHTML + `</td></tr>`;
                break;
              case 'E': //sms (1)
                firstRow = smsEmailBtnHTML;
                break;
            }
            $(td).html(`<table style="width:100%;height:100%">` +
                         firstRow +
                         secRow +
                        `</table>`);
          }
        }else if(col >= 18){ //pruchat sms Section
          $(td).addClass((rowSymbol === 'B') ? 're-assign' : '');
          let dataArrSrc = (col === 18) ? rowData.agentSentDate : rowData.customerSentDate;
          let tdhtml = "";
          if(dataArrSrc && dataArrSrc.length != 0){
            dataArrSrc.forEach((data)=>{
              let dateData = new Date(data);
              tdhtml += `<p>` + convertDate(dateData, "withMins") + `</p>`;
            });
            tdhtml += `<a class="a-viewEmail" href='viewEmail/` + rowData.lastEmailId + `'>View email</a>`;
          }else{
            tdhtml = 'N/A';
          }
          $(td).html(tdhtml);
        }
      }
    }]
  }
  agentAssignedAjax(){
    return (params, callback, settings) => {

      this.searchCriterias.forEach((data, key)=>{
        params[this.searchCriteriaFieldName[key]] = data;
      });
      console.log("***params:", (params))
      console.log(callback)
      console.log(settings)

      this.agentassignmentService.getAgentAssignmentRecord(params).subscribe((resp : any) => {
          console.log('resp:', resp)
          this.noOfCustomer = resp.body.recordsFiltered;
          this.noOfPage = Math.ceil(this.noOfCustomer/this.dtOptions.pageLength);

          callback({
            data:resp.body.data,
            recordsTotal: resp.body.recordsTotal,
            recordsFiltered: resp.body.recordsFiltered
            // data:resp.body.data,
            // recordsTotal: resp.body.recordsTotal,
            // recordsFiltered: resp.body.recordsFiltered
          });
        });
    }
  }

}
