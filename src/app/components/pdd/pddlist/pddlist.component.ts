import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy,
  AfterViewChecked, OnChanges, Renderer2, Input } from '@angular/core';
import constants from '../../../constants/constants';
import { PddService } from '../../../services/pdd.service';
import { Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { FormGroup, FormControl } from '@angular/forms';
import {get as _get, set as _set} from 'lodash';

import { Router } from '@angular/router';


@Component({
  selector: 'app-pddlist',
  templateUrl: './pddlist.component.html',
  styleUrls: ['./pddlist.component.scss']
})
export class PddlistComponent  implements OnInit, OnDestroy,
 AfterViewInit,AfterViewChecked,OnChanges {
  displayedColumns : string[] = constants["PDDList"];
  displayedColumnsName : string[] = constants["PDDListField"];

  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger = new Subject();

  noOfApplications : number = 0;

  noOfPage : number;
  currPage : number = 1;
  dataTableSettings;//for changing table pages in gotopage

  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "inactive-gray",
    "10": "active-red",
    "20": "inactive-gray",
  };

  //subscription
  dataTableAjaxSubscription;
  //listener
  bodyRendererListener;

  constructor(
    private pddService : PddService,
    private renderer2 : Renderer2,
    private router : Router
  ) { }

  ngOnChanges(){
    this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
  }

  ngOnInit() {
    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val)=>{
      colArr.push({
        data: val
      });
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      scrollX:true,
      scrollY:true,
      columnDefs : this.pddListColumnDef(),
      ajax : this.pddListAjax(),
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
    $('.table-pddList').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
      _set(this, 'currPage', (settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });

    this.classToTrigger =  [
      {type: 'redirect', className: "a-customerName", callback: (queryParams)=>{this.redirectToApproval(queryParams)}}
    ];
  }

  redirectToApproval(queryParams){
    //[put some param into pdd service to retrieve the easLeadExtensionApproval's data not using query params in req header]
    this.pddService.currPolicyNo = queryParams.policyNo;
    this.router.navigate(['easLeadExtensionApproval']);
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
            if(elem.type === 'redirect'){
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

  pddListColumnDef(){
    return [{
      targets: "_all",
      orderable: true,
      createdCell: function (td, cellData, rowData, row, col) {
        //funcs
        let convertDate = (date) => {
          return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        };
        switch(col){
          case 1:
            $(td).html(`<a class="a-customerName" queryParams="policyNo:` + rowData.policyNo + `">` + (cellData ? cellData : '') + `</a>`);
          break;
          case 0: case 6: case 7:
            if(cellData){
              let dateSubstr = new Date(cellData.substr(0,10));
              $(td).html(`<span>` + convertDate(dateSubstr) + `</span>`);
            }else{
              $(td).html(`<span> - </span>`);
            }
          break;
          case 8:
            let mapStatusToText = {
              0: '',
              1: 'Approved',
              2: 'Rejected'
            };
            let mapStatusToColor = {
              0: "#4d4d4d",
              1: "green",//Approved
              2: "red"//Rejected
            };
            let txtColorStyle = `style="color:` + mapStatusToColor[parseInt(cellData)] + `;"`;
            let html = cellData ? mapStatusToText[parseInt(cellData)] : '-';
            $(td).html(`<span ` + txtColorStyle + `>` + html + `</span>`);
          break;
          case 9: //gray color remarks
            $(td).html(`<span class="span-csremarks">` + (cellData ? cellData : '') + `</span>`);
          break;
          default:
            $(td).html(`<span>` + (cellData ? cellData : '-') + `</span>`);
          break;
        }

      }
    }]
  }

  pddListAjax(){
    return (params, callback, settings) => {
      let unusedParams, draw, start, length, order, sortColumn, sortOption;
      ({draw, start, length, order, ...unusedParams} = params); //do without columns attr inside params
      
      sortColumn = constants["PDDListField"][_get(order[0], 'column')];
      sortOption = _get(order[0], 'dir');
      let queryParams = {
        draw, start, length, sortColumn, sortOption
      };
      this.dataTableAjaxSubscription = this.pddService.getPddApplicationList(queryParams, 'dataTable').subscribe((resp : any) => {

        this.noOfPage = Math.ceil(resp.body.recordsTotal/this.dtOptions.pageLength);
        this.currPage = (resp.body.recordsFiltered >= 1) ? this.currPage : 0;
        this.noOfApplications = resp.body.recordsFiltered;
        //
        callback({
          data:resp.body.data,
          recordsTotal: resp.body.recordsTotal,
          recordsFiltered: resp.body.recordsFiltered
        });
      });
    }
  }

}
