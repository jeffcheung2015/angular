import { Component, OnInit, AfterViewInit, Input, ViewChild, HostListener, OnDestroy,AfterViewChecked } from '@angular/core';
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

@Component({
  selector: 'app-searchrecord',
  templateUrl: './searchrecord.component.html',
  styleUrls: ['./searchrecord.component.scss']
})
export class SearchrecordComponent implements OnInit, OnDestroy, AfterViewInit,AfterViewChecked {
  @Input() displayedColumns : string[];
  @Input() displayedColumnsName : string[];
  searchCriterias : string[];
  @Input() searchCriteriaComponent;
  noOfCustomer : number;

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

  constructor(private agentassignmentService : AgentassignmentService, private http: HttpClient) {}

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
  tableSearchRecords : AgentAssignmentRecord[];
  ngOnInit() {
    const that = this;
    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val, index)=>{
      colArr.push({
        data:val
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
      columnDefs: [{
        targets: "_all",
        orderable: false,
      }],
      ajax:(params, callback, settings) => {
        console.log(params)
        console.log(callback)
        console.log(settings)
        this.http.get('http://localhost:4200/eas/assets/data/searchRecord.json', {params: params}).subscribe((resp : any) => {
            console.log(resp)
            this.tableSearchRecords = resp.data;
            console.log(this.tableSearchRecords)
            this.noOfCustomer = resp.recordsFiltered;
            this.noOfPage = Math.ceil(this.noOfCustomer/this.dtOptions.pageLength);
            //resp may return the exact partitions
            //callback(resp)
            console.log(resp.draw)
            let newObj = Object.assign({draw :this.draw}, resp);
            this.draw++;
            console.log(resp)
            console.log(this.dtOptions.pageLength)
            let resArr = {data:[]};
            let fstRowIndex = (params.start);
            console.log("fstRowIndex", fstRowIndex)
            for(var i =0; i <params.length; i++){
              let elem = _get(resp, 'data[' + (fstRowIndex + i) + ']');
              console.log(i, elem)
              if(elem){
                resArr.data.push(elem);
              }
            }
            console.log('resArr', resArr)
            callback({
              data:resArr.data,
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered
            });
          });
      },
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
      processing: true,
      serverSide: true,
      columns: colArr,
    }
    $('.table-searchRecord').on( 'page.dt', function (event,settings) {
      $('.input-goToPage_left').val(settings._iDisplayStart+1);
    });

  }
  draw: number = 0;
  ngAfterViewInit(){ //only load data after view are initialized
    this.dtTrigger.next();
    /*this.agentassignmentService.getAgentAssignmentRecord().subscribe((resp : any)=>{

      this.dtOptions.data = resp.data;
      this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
      this.noOfCustomer = this.dtOptions.data.length;
      this.noOfPage = Math.ceil(this.noOfCustomer/this.dtOptions.pageLength)
    });*/
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
    this.noOfPage = Math.ceil(this.noOfCustomer/this.dtOptions.pageLength);
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
    console.log('refresh and reload');
  }
}
