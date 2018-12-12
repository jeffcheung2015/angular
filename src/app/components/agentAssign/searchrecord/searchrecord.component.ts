import { Component, OnInit, AfterViewInit, ViewChild, HostListener,
   OnDestroy,AfterViewChecked, OnChanges, Renderer2, Input } from '@angular/core';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { AgentassignmentService } from '../../../services/agentassignment.service';
import { CSSearchCriteria, GISearchCriteria } from '../../../models/agentassignment.model';
import { Subject, Subscription} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import {get as _get, set as _set} from 'lodash';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { SearchcriteriaComponent } from '../searchcriteria/searchcriteria.component';
import constants from '../../../constants/constants';
import convertFormat from '../../../utils/convertformat';

@Component({
  selector: 'app-searchrecord',
  templateUrl: './searchrecord.component.html',
  styleUrls: ['./searchrecord.component.scss']
})
export class SearchrecordComponent implements OnInit, OnDestroy, AfterViewInit,AfterViewChecked, OnChanges {
  @Input() setPopUpMsg : Function;
  @Input() popUpMsg : string;
  @Input() currSubPage : string;
  displayedColumnsName : string[];
  searchCriterias : string[];
  searchCriteriaFieldName : string[];
  searchCriteriaComponent : SearchcriteriaComponent;
  noOfCustomer : number = 0;
  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger : Subject<any>= new Subject();
  pageInfo : any = {};

  dataTableSettings : any;//for changing table pages in gotopage
  noOfPage : number;
  currPage : number = 1;

  bodyRendererListener;

  mapOptionTextIntoVal = {
    "" : "",
    "A" : "Assign",
    "AA" : "Auto Assigned",
    "R" : "Re-assign",
    "Y" : "Yes",
    "N" : "No",
    "1" : "To apply for extension",
    "2" : "Applied extension",
    "3" : "Opt-out from this program",
    "4" : "Re-assigned"
  }
  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "inactive-gray",
    "10": "active-red",
    "20": "inactive-gray",
  };
  constructor(
     private agentassignmentService : AgentassignmentService,
     private http: HttpClient,
     private router: Router,
     private renderer2: Renderer2) {
  }

  ngOnChanges(){
    this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
  }

  ngOnInit() {
    if(this.currSubPage === 'easAgentAssignGI'){
      this.displayedColumnsName = constants["GISearchRecordColumnField"];
      this.classToTrigger = [
        {className : 'a-campaignCode', url: constants.route['CampaignDetail']},
        {className : 'a-assignBtn', url: constants.route['AgentDetail']},
        {className : 'a-reassignBtn', url: constants.route['AgentDetail']},
        {className : 'a-viewEmail', url: constants.route['ViewEmail']},
        {className : 'a-pruchatEmailBtn', callback: (polno)=>{this.showPopUpMsg(polno, "pruchat")} },
        {className : 'a-smsEmailBtn', callback: (polno)=>{this.showPopUpMsg(polno, "sms")}},
      ];
      this.searchCriteriaFieldName = ["fullName","policyNo","mobileNo","emailAddr","idCardNo",
        "dateOfSubmissionFrom","dateOfSubmissionTo","assignmentOption"];
    }else{ //easAgentAssignCS
      this.displayedColumnsName = constants["CSSearchRecordColumnField"];
      this.classToTrigger = [
        {className : 'a-clientDetail', url: constants.route['ClientDetail']},
        {className : 'a-campaignCode', url: constants.route['CampaignDetail']},
        {className : 'a-assignBtn', url: constants.route['AgentDetail']},
        {className : 'a-reassignBtn', url: constants.route['AgentDetail']},
        {className : 'a-viewEmailOrEDM', url: constants.route['ViewEmail']},
        {className : 'a-pruchatEmailBtn', callback: (polno)=>{this.showPopUpMsg(polno, "pruchat")} },
        {className : 'a-smsEmailBtn', callback: (polno)=>{this.showPopUpMsg(polno, "sms")}},
      ];
      this.searchCriteriaFieldName = ["fullName","mobileNo","emailAddr","idCardNo",
        "dateOfSubmissionFrom","dateOfSubmissionTo","assignmentOption",
        "contactCustomerOption","assignmentStatusOption"];
    }
    this.initSearchCriteriaBasedOnSearchHistory();

    //call a func to pass and reset the searchCriteriaComponent's searchRecordComponent ref

    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val, index)=>{
      colArr.push({
        data:val,
        orderable: false
      })
    });
    this.dtOptions = {
      fixedColumns: {
        leftColumns: (this.currSubPage === 'easAgentAssignGI') ? 5 : 2,
        heightMatch: 'auto'
      },
      scrollCollapse: true,
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      scrollX:true,
      scrollY:false,
      columnDefs : (this.currSubPage === 'easAgentAssignGI') ? this.agentAssignedGIColumnDef() : this.agentAssignedCSColumnDef(),
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

  }

  //init the search criteria based on the search history
  initSearchCriteriaBasedOnSearchHistory(){
    let criteria = (this.currSubPage == 'easAgentAssignCS') ? this.agentassignmentService.currCSSearchCriteria : this.agentassignmentService.currGISearchCriteria;
    let resArr = [];
    for(var key in criteria){
      if(criteria.hasOwnProperty(key)){
        let isInstanceOfDate = criteria[key] instanceof Date;
        resArr.push(isInstanceOfDate ? convertFormat.dateToDDMMYYYY(criteria[key]) : criteria[key]);
      }
    }
    this.searchCriterias = resArr;
  }

  ngAfterViewInit(){ //only load data after view are initialized
    this.dtTrigger.next();
    $('.table-searchRecord').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });
  }
  //for handling the datatables's link,
  //use router.navigate instead of href in dom 'a', as href will refresh whole page
  onclickEventInit = false; //onchange would reset this back to false
  classToTrigger : Array<{className: string, url?: string, callback?: Function}>;
  //for pruchat, sms option only
  showPopUpMsg(polNo, type){
    let params = polNo;
    if(type === 'pruchat'){
      this.agentassignmentService.postResendPruchat(params, 'sendParams').subscribe((resp : any) => {
        //this api in all cases have only one elem inside the list
        let code = _get(resp, 'code[0]');
        let errMsg = (code && code !== constants.STATUS_CODE.SUCCESS_CODE) ? _get(resp, 'errMsg[0]') : constants.MSG.PRUCHAT_EMAIL_SUCCESS;

        this.setPopUpMsg(errMsg);
        $("#btnMsgModal").modal('show');
      }, (error)=>{
        console.error(">>> Error occurs");
        $("#btnMsgModal").modal('show');
      });
    }else if(type === 'sms'){
      this.agentassignmentService.postResendSMS(params, 'sendParams').subscribe((resp : any) => {
        //this api in all cases have only one elem inside the list
        let code = _get(resp, 'code[0]');
        let errMsg = (code && code !== constants.STATUS_CODE.SUCCESS_CODE) ? _get(resp, 'errMsg[0]') : constants.MSG.SMS_EMAIL_SUCCESS;

        this.setPopUpMsg(errMsg);
        $("#btnMsgModal").modal('show');
      }, (error)=>{
        console.error(">>> Error occurs");
        $("#btnMsgModal").modal('show');
      });
    }
  }

  ngAfterViewChecked(){
    //fetch the datatable's settings
    //since angular-datatables is not supporting changing table page in dtoption yet
    //make use of settings.oApi._fnPageChange to change the page
    //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
    this.dataTableSettings = _get($.fn['dataTable'], 'settings[0]');
    //for handling the btn inside datatables
    //should be called here as datatable's btns and links are initialized only after [ngAfterViewInit/ngAfterViewChecked]
    if(!this.onclickEventInit){
      if(this.bodyRendererListener){ this.bodyRendererListener(); }
      this.onclickEventInit = true;
      this.bodyRendererListener = this.renderer2.listen("body", 'click', (event)=>{
        this.classToTrigger.forEach((elem, key)=>{
          if($(event.target).hasClass(elem.className)){
            //read queryParams attr
            //e.g. queryParams="abc:2,ddd:4" ...
            let paramsToBePassed = {};
            let queryParamsStr = $(event.target).attr("queryParams");
            if(queryParamsStr){
              let queryParamsArray = queryParamsStr.split(',');
              queryParamsArray.forEach((elem, key)=>{
                let elemPair = elem.split(':');
                _set(paramsToBePassed, elemPair[0], elemPair[1]);
              });
            }
            if(elem.callback){
              elem.callback(paramsToBePassed);
            }
            if(elem.url){
              switch(elem.className){
                case 'a-assignBtn':
                case 'a-reassignBtn':
                  this.agentassignmentService.currPolNo = paramsToBePassed['policyNo'];
                  break;
                case 'a-viewEmail':case 'a-viewEmailOrEDM':
                  this.agentassignmentService.currEmailId = (this.currSubPage === 'easAgentAssignCS') ?
                    paramsToBePassed['lastEmailOrEDMId'] : paramsToBePassed['lastEmailId'];
                  break;
                case 'a-campaignCode':
                  this.agentassignmentService.currCampaignCd = paramsToBePassed['campaignCode'];
                  break;
                case 'a-clientDetail':
                  this.agentassignmentService.currClientCd = paramsToBePassed['policyNo'];
                  break;
              }
              this.router.navigate([elem.url]);
            }
          }
        });
      });
    }
  }
  ngOnDestroy(){
    if(this.bodyRendererListener){
      this.bodyRendererListener();
    }
    if(this.dtTrigger){
      this.dtTrigger.unsubscribe();
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
    this.noOfPage = Math.ceil(this.noOfCustomer/this.dtOptions.pageLength);
    this.currPage = 1;
  }
  changeCurrTablePage(page){
    if(page !== "" && /^\d+$/.test(page)){
      console.log('Change to page: ' + page);
      console.log(this.dataTableSettings)
      let pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true)
      console.log((pageChangeStatus)?'Current page changed to '+ page : "Fail to change page, page exceed no of page");
      this.currPage = page;
    }
  }
  //called outside of this component via this obj's reference
  refreshAndReloadSearchRecordTable(_searchCriteria : string[] = []){
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
  agentAssignedCSColumnDef(){
    return [
      {targets: 12,width:'800px'},
      {targets: [0,1],width:'80px'},
      {targets: [2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18],width:'130px'},
      {
      targets: "_all",
      createdCell: function (td, cellData, rowData, row, col) {

        let agentInfoSplitStrArr = rowData.agentInfo.split(";");
        let agentCode = agentInfoSplitStrArr[0], agentName = agentInfoSplitStrArr[1],
         agentPhone = agentInfoSplitStrArr[2];
        let convertDate = (date) => {
          return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " ";
        }

        //F re-assign btn
        //G assign btn
        let rowSymbol = (agentCode != 'null') ? 'F' : 'G';
        if(col == 0){//client dtls
          //to be done split eng chinese name
          $(td).html(`<a class="a-clientDetail" queryParams="policyNo:` + rowData.policyNo +  `">` + cellData + `</a>`);
        }else if([3,6,13,16].indexOf(col) !== -1){
          let cellDataStr = cellData.substr(0,10);
          $(td).html(`<span>` + convertDate(new Date(cellDataStr)) + `</span>`);
        }else if(col == 11){ //campaign dtls
          $(td).html(`<a class="a-campaignCode" queryParams="campaignCode:` + cellData + `">` + cellData + `</a>`);
        }else if(col === 12){ //assign agent col

          let redBtnClass = "btn btn-primary table-btn";
          let grayBtnClass = "btn btn-default table-btn";

          let displayInlineStyle = "style='display: inline-flex;float: left;'";
          let pStyle = `style="word-break: break-all;white-space: normal;"`;

          let assignBtnHTML = `<a class="` + redBtnClass + ` a-assignBtn" queryParams="policyNo:` + rowData.polNo + `">Assign</a>`;
          let reassignBtnHTML = `<a class="` + redBtnClass + ` a-reassignBtn" queryParams="policyNo:` + rowData.polNo + `">Re-assign</a>`;
          let pruchatBtnHTML = `<a class="` + grayBtnClass + ` a-pruchatEmailBtn" queryParams="policyNo:` + rowData.polNo + `">PruChat & Email to Agent(Resend)</a>`;
          let smsEmailBtnHTML = `<a class="` + grayBtnClass + ` a-smsEmailBtn" queryParams="policyNo:` + rowData.polNo + `">SMS & Email to Customer(Resend)</a>`;
          //agentAssignedDate comes from splitstr of rowData.agentInfo
          let agentAssignedDate = agentInfoSplitStrArr[3] != 'null' ? new Date(agentInfoSplitStrArr[3].substr(0,10)) : ``;
          $(td).addClass((rowSymbol === 'F') ? 're-assign' : '');

          let tdValRowHTML = `<td><p ` + pStyle + `>` + agentCode + `</p></td>
          <td><p ` + pStyle + `>` + agentName + `</p></td>
          <td><p ` + pStyle + `>` + agentPhone + `</p></td>
          <td><p ` + pStyle + `>` + (agentAssignedDate ? convertDate(agentAssignedDate) : ``) + `</p></td>`;

          let firstRow :string = '' , secRow :string = '';

          switch(rowSymbol){
            case 'G':
              firstRow = `<div ` + displayInlineStyle + `>` + assignBtnHTML + `</div>`;
              break;
            case 'F': //val reassign pru sms (2)
              firstRow = `<tr class="re-assign">` + tdValRowHTML + `</tr>`;
              secRow = `<tr><td colspan="4" class="re-assign">` +
               `<div ` + displayInlineStyle + `><div>` +
               reassignBtnHTML + `</div><div>` + pruchatBtnHTML + `</div><div>` + smsEmailBtnHTML + `</div></div>` +
               `</td></tr>`;
              break;
          }

          let firstSecRowHtml = firstRow + secRow;
          let htmlStr = (rowSymbol === 'F') ?
                        `<table style="table-layout:fixed;width:100%;height:100%">${firstSecRowHtml}</table>` : firstSecRowHtml;
          $(td).html(htmlStr);

        }else if(col == 15){
          let mapStatusToText = {
            "1" : "To apply for extension",
            "2" : "Applied extension",
            "3" : "Opt-out from this program",
            "4" : "Re-assigned"
          };
          $(td).html(mapStatusToText[cellData.toString()]);
        }else if([17,18].indexOf(col) !== -1){ //pruchat and SMS col
          $(td).addClass((rowSymbol === 'B') ? 're-assign' : '');
          let dataArrSrc = (col == 17) ? rowData.pruchatEmailSendDate : rowData.SMSEmailSendDate;
          let tdhtml = "";
          if(dataArrSrc && dataArrSrc.length != 0){
            dataArrSrc.forEach((data)=>{
              //parsing the format of data in IE browser as IE browser doesnt support certain kind of format of date string
              let year = data.substr(0,4);
              let month = data.substr(5,2);
              let day = data.substr(8,2);
              let hour = data.substr(11,2);
              let min = data.substr(14,2);
              let processedDt = day + '/' + month + '/' + year + ' ' + hour + ":" + min;
              //
              tdhtml += `<p>` + processedDt + `</p>`;
            });
            tdhtml += (rowData.lastEmailOrEDMId && col == 18) ?
            `<a class="a-viewEmailOrEDM" queryParams="lastEmailOrEDMId:` + rowData.lastEmailOrEDMId + `"'>View email or EDM</a>` : ``;
          }else{
            tdhtml = 'N/A';
          }
          $(td).html(tdhtml);
        }else{
          $(td).html(cellData);
        }
      }
    }]
  }
  agentAssignedGIColumnDef(){
    return [
      {targets: 17,width:'130px'},
      {targets: 15,width:'800px'},
      {targets: [0,1,2,3,4],width:'80px'},
      {targets: [5,6,7,8,9,10,11,12],width:'130px'},
      {
      targets: "_all",
      createdCell: function (td, cellData, rowData, row, col) {

        let assignType = rowData.assignmentType;
        let agentInfoSplitStrArr = rowData.agentInfo.split(";");

        let agentCode = agentInfoSplitStrArr[0], agentName = agentInfoSplitStrArr[1],
         agentPhone = agentInfoSplitStrArr[2];

        let convertDate = (date) => {
          return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " ";
        }
        //A,D,F assign btn only
        //B val reassign pru sms
        //C val pru sms
        //E sms btn only
        let rowSymbol = (assignType == 1 && agentCode == 'null') ? 'A' :
                        (assignType == 1 && agentCode != 'null') ? 'B' :
                        (assignType == 2) ? 'C' :
                        (assignType == 3) ? 'D' :
                        (assignType == 4) ? 'E' :
                        'F'; //assignType 5
        if(col < 15){
          if(!cellData){ //for those null data
            $(td).html('-');
          }else{
            if(col === 10){//col 10 convert date str into proper format dd/MM/YYYY
              let convertDateData = new Date(cellData.substr(0,10));
              $(td).html(convertDate(convertDateData));
            }else if(col == 11){//campaign code, put campaign code as attr later
              $(td).html('<a class="a-campaignCode" queryParams="campaignCode:' + rowData.campaignCode + '">' + cellData + '</a>');
            }else if(col == 12){
              let assignTypeToText = ["Assign New Agent Pool", "Auto Assign Life Agent", "Assign GI Agent Pool", "GIEB Sales Support", "-"];
              $(td).html(`<span>` + assignTypeToText[cellData - 1] + `</span>`);
            }
          }
        }else if(col === 15){
          $(td).css('padding', '8px 20px');
          let redBtnClass = "btn btn-primary table-btn";
          let grayBtnClass = "btn btn-default table-btn";

          let displayInlineStyle = "style='display: inline-flex;float: left;'";
          let pStyle = `style="word-break: break-all;white-space: normal;"`;

          let assignBtnHTML = `<a class="` + redBtnClass + ` a-assignBtn" queryParams="policyNo:` + rowData.polNo + `">Assign</a>`;
          let reassignBtnHTML = `<a class="` + redBtnClass + ` a-reassignBtn" queryParams="policyNo:` + rowData.polNo + `">Re-assign</a>`;
          let pruchatBtnHTML = `<a class="` + grayBtnClass + ` a-pruchatEmailBtn" queryParams="policyNo:` + rowData.polNo + `">PruChat & Email to Agent(Resend)</a>`;
          let smsEmailBtnHTML = `<a class="` + grayBtnClass + ` a-smsEmailBtn" queryParams="policyNo:` + rowData.polNo + `">SMS & Email to Customer(Resend)</a>`;

          let agentAssignedDate =( agentInfoSplitStrArr[3] != 'null' )? new Date( agentInfoSplitStrArr[3].substr(0,10)) : ``;
          $(td).addClass((rowSymbol === 'B') ? 're-assign' : '');

          let tdValRowHTML = `<td><p ` + pStyle + `>` + agentCode + `</p></td>
          <td><p ` + pStyle + `>` + agentName + `</p></td>
          <td><p ` + pStyle + `>` + agentPhone + `</p></td>
          <td><p ` + pStyle + `>` + (agentAssignedDate ? convertDate(agentAssignedDate) : ``) + `</p></td>`;

          let firstRow :string = '' , secRow :string = '';

          switch(rowSymbol){
            case 'A':
              firstRow = `<div ` + displayInlineStyle + `>` + assignBtnHTML + `</div>`;
              break;
            case 'B': //val reassign pru sms (2)
              firstRow = `<tr class="re-assign">` + tdValRowHTML + `</tr>`;
              secRow = `<tr><td colspan="4" class="re-assign" style="padding: 8px 0px;">` +
               `<div ` + displayInlineStyle + `><div>` +
               reassignBtnHTML + `</div><div>` + pruchatBtnHTML + `</div><div>` + smsEmailBtnHTML + `</div></div>` +
               `</td></tr>`;
              break;
            case 'C': //val pru sms (2)
              firstRow = `<tr>` + tdValRowHTML + `</tr>`;
              secRow = `<tr><td colspan="4" style="padding: 8px 0px;">` +
               `<div ` + displayInlineStyle + `><div>` +
                pruchatBtnHTML + `</div><div>` + smsEmailBtnHTML + `</div>` +
                `</td></tr>`;
              break;
            case 'D':
              if(!agentAssignedDate){
                firstRow = `<div ` + displayInlineStyle + `>` + assignBtnHTML + `</div>`;
              }else{
                firstRow = `<tr>` + tdValRowHTML + `</tr>`;
                secRow = `<tr><td colspan="4" style="padding: 8px 0px;">` +
                 `<div ` + displayInlineStyle + `><div>` +
                  pruchatBtnHTML + `</div><div>` + smsEmailBtnHTML + `</div>` +
                  `</td></tr>`;
              }
              break;
            case 'E': //sms (1)
              firstRow = `<div ` + displayInlineStyle + `>` + smsEmailBtnHTML + `</div>`;
              break;
            case 'F':
              if(!agentAssignedDate){
                firstRow = `<div ` + displayInlineStyle + `>` + assignBtnHTML + `</div>`;
              }else{
                firstRow = `<tr>` + tdValRowHTML + `</tr>`;
                secRow = `<tr><td colspan="4" style="padding: 8px 0px;">` +
                 `<div ` + displayInlineStyle + `><div>` +
                  pruchatBtnHTML + `</div><div>` + smsEmailBtnHTML + `</div>` +
                  `</td></tr>`;
              }
              break;
          }
          let firstSecRowHtml = firstRow + secRow;
          let htmlStr = (['B', 'C'].indexOf(rowSymbol) !== -1 ||
                        (['D', 'F'].indexOf(rowSymbol) !== -1 && agentAssignedDate)) ?
                        `<table style="table-layout:fixed;width:100%;height:100%">${firstSecRowHtml}</table>` : firstSecRowHtml;
          $(td).html(htmlStr);

        }else if(col >= 16){ //pruchat sms Section
          $(td).addClass((rowSymbol === 'B') ? 're-assign' : '');
          let dataArrSrc = (col === 16) ? rowData.agentSentDate : rowData.customerSentDate;
          let tdhtml = "";
          if(dataArrSrc && dataArrSrc.length != 0){
            dataArrSrc.forEach((data)=>{
              //parsing the format of data in IE browser as IE browser doesnt support certain kind of format of date string
              let year = data.substr(0,4);
              let month = data.substr(5,2);
              let day = data.substr(8,2);
              let hour = data.substr(11,2);
              let min = data.substr(14,2);
              let processedDt = day + '/' + month + '/' + year + ' ' + hour + ":" + min;
              //
              tdhtml += `<p>` + processedDt + `</p>`;
            });
            tdhtml += (rowData.lastEmailId && col === 17) ?
            `<a class="a-viewEmail" queryParams="lastEmailId:` + rowData.lastEmailId + `"'>View email</a>` : ``;
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
      this.agentassignmentService.getAgentAssignmentRecord(queryParams, 'dataTable', this.currSubPage).subscribe((resp : any) => {
        console.log(resp)
        this.noOfCustomer = resp.body.recordsFiltered;
        this.noOfPage = Math.ceil(this.noOfCustomer/this.dtOptions.pageLength);
        this.currPage = (resp.body.recordsFiltered >= 1) ? this.currPage : 0;

        let resArr = [];
        //preprocess data
        resp.body.data.forEach((elem,key) => {
          let agentCode, agentName, agentPhone, agentAssignedDate, restAttrObj, agentInfo;
          ({ agentCode, agentName, agentPhone, agentAssignedDate, ...restAttrObj} = elem);
          agentInfo = agentCode + ";" + agentName + ";" + agentPhone + ";" + agentAssignedDate;
          _set(restAttrObj, 'agentInfo', agentInfo);
          resArr.push(restAttrObj)
        });

        callback({
          data:resArr,
          recordsTotal: this.noOfCustomer,
          recordsFiltered: this.noOfCustomer
        });
      },error => console.error('>>> agentAssignmentRecord GET request fails.'));
    }
  }

}
