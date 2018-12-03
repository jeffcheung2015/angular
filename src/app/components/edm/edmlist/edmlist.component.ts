import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy,
  AfterViewChecked, OnChanges, Renderer2, Input } from '@angular/core';
import { JsonPipe, KeyValuePipe } from '@angular/common';

import { Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { FormGroup, FormControl } from '@angular/forms';

import {get as _get, set as _set} from 'lodash';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Router } from '@angular/router';

import constants from '../../../constants/constants';

import { EdmService } from '../../../services/edm.service';

@Component({
  selector: 'app-edmlist',
  templateUrl: './edmlist.component.html',
  styleUrls: ['./edmlist.component.scss']
})
export class EdmlistComponent implements OnInit, OnDestroy,
 AfterViewInit,AfterViewChecked,OnChanges {

  displayedColumnsName : string[] = constants["EDMListColumnField"];

  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger = new Subject();

  noOfPage : number;
  currPage : number = 1;

  noOfETemplate : number = 0;

  dataTableSettings;//for changing table pages in gotopage

  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "inactive-gray",
    "10": "active-red",
    "20": "inactive-gray",
  };
  //listener
  bodyRendererListener;
  //subscription
  dataTableAjaxSubscription;

  constructor(
     private http: HttpClient,
     private renderer2 : Renderer2,
     private edmService : EdmService,
     private router : Router
   ) {

   }
  ngOnChanges(){
    this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
  }
  ngOnInit() {
    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val)=>{
      colArr.push({
        data: val,
        orderable: false,
      });
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      scrollX:true,
      scrollY:true,
      columnDefs : this.edmListColumnDef(),
      ajax : this.edmListAjax(),
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
    $('.table-edmList').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });

    this.classToTrigger =  [
      {type: 'redirect', className: "a-view", callback: (paramsToBePassed)=>{this.edmViewBtnOnClick(paramsToBePassed)}},
      {type: 'redirect', className: "a-edit", callback: (paramsToBePassed)=>{this.edmEditBtnOnClick(paramsToBePassed)}},
    ];
  }
  edmViewBtnOnClick(paramsToBePassed){
    this.edmService.currCommunicationCode = paramsToBePassed.commCode;
    this.edmService.currEdmId = paramsToBePassed.edmId;
    this.router.navigate(['/easEDMHistory']);
  }
  edmEditBtnOnClick(paramsToBePassed){
    this.edmService.currCommunicationCode = paramsToBePassed.commCode;
    this.edmService.currEdmId = paramsToBePassed.edmId;
    this.router.navigate(['/easEDMManagementForm']);
  }
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
      this.bodyRendererListener = this.renderer2.listen("body", 'click', (event)=>{
        this.classToTrigger.forEach((elem, key)=>{
          if($(event.target).hasClass(elem.className)){
            if(elem.type === 'redirect') {
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
              elem.callback(paramsToBePassed);
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
    this.noOfPage = Math.ceil(this.noOfETemplate/this.dtOptions.pageLength);
    this.currPage = 1;
    $(".input-goToPage_left").val(1);
  }
  changeCurrTablePage(page){
    if(page !== "" && /^\d+$/.test(page)){
      console.log('Change to page: ' + page);
      let pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true)
      console.log((pageChangeStatus)?'Current page changed to '+ page : "Fail to change page, page exceed no of page");
      this.currPage = Number(page);
    }
  }
  edmListColumnDef(){
    return [{
      targets: "_all",
      orderable: false,
      createdCell: function (td, cellData, rowData, row, col) {
        //funcs
        let convertDate = (date, minsOpt) => {
          return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " +
          ((minsOpt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
        }
        //styles

        let html = ``;
        switch(col){
          case 3: case 4:
            let formattedDt = (cellData) ? new Date(cellData.substr(0,10)) : null;
            $(td).html(`<span>` + ((formattedDt) ? convertDate(formattedDt, 'withMins') : `-`) + `</span>`);
            break;
          case 5:
            let actionStr = (cellData === 1) ? "View" : "Edit";
            $(td).html(`<span class="` +
                ((cellData === 1) ? `a-view` : `a-edit`) + `" queryParams="commCode:` + rowData.communicationCode + `,edmId:` + rowData.edmId + `">` + actionStr + `</span>`)
          break;
          default:
            $(td).html(`<span>` + cellData + `</span>`);
            break;
        }
      }
    }]
  }

  edmListAjax(){
    return (params, callback, settings) => {
      let unusedParams, draw, start, length;
      ({draw, start, length, ...unusedParams} = params); //do without columns attr inside params
      let queryParams = {
        draw, start, length
      };
      this.dataTableAjaxSubscription = this.edmService.getEdmList(queryParams, 'dataTable').subscribe((resp : any) => {
        console.log("resp:", resp)
        this.noOfPage = Math.ceil(resp.body.recordsTotal/this.dtOptions.pageLength);
        this.currPage = (resp.body.recordsFiltered >= 1) ? this.currPage : 0;
        this.noOfETemplate = resp.body.recordsFiltered;
        //
        callback({
          data:resp.body.data,
          recordsTotal: resp.body.recordsTotal,
          recordsFiltered: resp.body.recordsFiltered
        });
      },(error) => {console.log(error)});
    }
  }
}
