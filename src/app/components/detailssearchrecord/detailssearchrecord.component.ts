import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy,AfterViewChecked } from '@angular/core';
import { JsonPipe, KeyValuePipe } from '@angular/common';
//import { MatPaginator, MatTableDataSource } from '@angular/material';
//import {DataSource} from '@angular/cdk/collections';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
import { AgentassignmentService } from '../../services/agentassignment.service';
import { AgentAssignmentRecord } from '../../models/agentassignmentrecord.model';
import { Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import {get as _get} from 'lodash';
import { HttpClient, HttpResponse } from '@angular/common/http';

import constants from '../../constants/constants';

@Component({
  selector: 'app-detailssearchrecord',
  templateUrl: './detailssearchrecord.component.html',
  styleUrls: ['./detailssearchrecord.component.scss']
})
export class DetailssearchrecordComponent implements OnInit, OnDestroy, AfterViewInit,AfterViewChecked {
  displayedColumns : string[] = constants["DetailSearchRecordColumnName"];
  displayedColumnsName : string[] = constants["DetailSearchRecordColumnField"];
  searchCriterias : string[] = ["", "" ,""];
  searchCriteriaFieldName : string[] = ["agentCode","agentPhone","agentName"];

  searchCriteriaComponent;
  noOfRenewals : number = 0;
  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger= new Subject();
  pageInfo : any = {};

  screenWidth: number;

  dataTableSettings;//for changing table pages in gotopage

  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "active-red",
    "10": "inactive-gray",
    "20": "inactive-gray",
  };
  //tableSearchRecords : AgentAssignmentRecord[];
  constructor(private agentassignmentService : AgentassignmentService,
     private http: HttpClient) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
    console.log("New Screen width:" + window.innerWidth);
    this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  ngOnInit() {
    //call a func to pass and reset the searchCriteriaComponent's searchRecordComponent ref
    //this.searchCriteriaComponent.setSearchRecordComponent(this);
    console.log("detail search record ")
    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val, index)=>{
      let col : any = {};
      col.data = val;
      colArr.push(col);
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
    $('.table-searchRecord').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });
  }
  draw: number = 0;
  ngAfterViewInit(){ //only load data after view are initialized
    this.dtTrigger.next();

  }
  ngAfterViewChecked(){
    //fetch the datatable's settings
    //since angular-datatables is not supporting changing table page in option yet
    //make use of settings.oApi._fnPageChange to change the page
    //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
    this.dataTableSettings = _get($.fn['dataTable'], 'settings[0]');

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

  }
  changeCurrTablePage(page){
    if(page !== "" && /^\d+$/.test(page)){
      console.log('Change to page: ' + page);
      let pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true)
      console.log((pageChangeStatus)?'Current page changed to '+ page : "Fail to change page, page exceed no of page");
    }
  }
  //called outside of this component
  refreshAndReloadSearchRecordTable(_searchCriteria : string[]){
    let tmpSearchCriterias = [];
    _searchCriteria.forEach((elem)=>{
      if(elem !== '') tmpSearchCriterias.push(elem);
    });
    this.searchCriterias = tmpSearchCriterias;
    this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
      //redraw table only need these 2 funcs
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
  agentDetailsColumnDef(){
    return [{
      targets: "_all",
      orderable: false,
      createdCell: function (td, cellData, rowData, row, col) {
        let redBtnClass = "btn btn-primary table-btn";
        let grayBtnClass = "btn btn-default table-btn";
        let convertDate = (date, minsOpt) => {
          return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " +
          ((minsOpt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
        }
        let onLeave = rowData.onLeave;

        switch(col){
          case 4:
            if(cellData){
              let convertDateData = new Date(cellData);
              $(td).html(convertDate(convertDateData, 'withoutMins'));
            }
            break;
          case 5:
            $(td).html(`<a class="` + redBtnClass + `">Select</a>`);
            break;
          case 6:
            let resetOrAdd = (onLeave) ? "Reset" : "Add";
            let onleaveP = (onLeave) ? "<p style='margin:auto;'>" + onLeave + "</p>" : "";
            $(td).css("display", "inline-flex");
            $(td).css("width", "100%");
            $(td).html(onleaveP + `<a style="margin:auto" class="` + grayBtnClass + `" data-toggle="modal" data-target="#myModal" >` + resetOrAdd + `</a>`);
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
      console.log("***params:", (params))
      console.log(callback)
      console.log(settings)

      this.http.get('http://localhost:4200/eas/assets/data/searchRecordDetails.json',
        {
          params: params
        }
      ).subscribe((resp : any) => {
          this.noOfRenewals = resp.recordsFiltered;
          //resp may return the exact partitions
          //callback(resp)
          let newObj = Object.assign({draw :this.draw}, resp);
          this.draw++;
          let resArr = {data: Array<any>()};
          let fstRowIndex = (params.start);
          for(var i =0; i <params.length; i++){
            let elem = _get(resp, 'data[' + (fstRowIndex + i) + ']');
            console.log(i, elem)
            if(elem){
              resArr.data.push(elem);
            }
          }
          callback({
            data:resArr.data,//[],
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered
          });
        });
    }
  }
}
