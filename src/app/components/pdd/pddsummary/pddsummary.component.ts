import { Component, OnInit, AfterViewInit, ViewChild, HostListener, OnDestroy,
  AfterViewChecked, OnChanges, Renderer2, Input } from '@angular/core';
import constants from '../../../constants/constants';
import { PddService } from '../../../services/pdd.service';
import { ExcelService } from '../../../services/excel.service';

import { Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { FormGroup, FormControl } from '@angular/forms';
import {get as _get, set as _set} from 'lodash';
import convertformat from '../../../utils/convertformat';

@Component({
  selector: 'app-pddsummary',
  templateUrl: './pddsummary.component.html',
  styleUrls: ['./pddsummary.component.scss']
})
export class PddsummaryComponent implements OnInit, OnDestroy,
 AfterViewInit,AfterViewChecked,OnChanges {
  displayedColumns : string[] = constants["PDDSummary"];
  displayedColumnsName : string[] = constants["PDDSummaryField"];

  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger = new Subject();

  noOfPage : number;
  currPage : number = 1;

  minDateTo;
  maxDateFrom;

  noOfApplications : number = 1;
  exportListArray : Array<any>;

  dataTableSettings;//for changing table pages in gotopage

  exportListForm = new FormGroup({
    selectedOption: new FormControl('all'),
    dateOfSubmissionFrom: new FormControl(''),
    dateOfSubmissionTo: new FormControl('')
  })

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
    private pddService : PddService,
    private renderer2 : Renderer2,
    private excelService : ExcelService
  ) { }

  ngOnChanges(){
    this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
  }

  ngOnInit() {
    //disable by default as select all is the default option of exportListForm
    this.exportListForm.controls['dateOfSubmissionFrom'].disable();
    this.exportListForm.controls['dateOfSubmissionTo'].disable();

    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val)=>{
      colArr.push({
        data: val
      });
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
      scrollX:true,
      scrollY:true,
      columnDefs : this.pddSummaryColumnDef(),
      ajax : this.pddSummaryAjax(),
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
    $('.table-pddSummary').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
      _set(this, 'currPage', (settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });

    this.classToTrigger =  [

    ];
  }

  resetExportListForm(){
    this.exportListForm.reset();
    this.exportListForm.controls['dateOfSubmissionFrom'].disable();
    this.exportListForm.controls['dateOfSubmissionTo'].disable();
    this.exportListForm.controls['selectedOption'].setValue('all');
  }

  exportRecordList(){
    //having data-dismiss attr in <button type="submit"> will prevent the exportListForm from submitting
    $("#exportListModal").modal('toggle'); //so have to dismiss the "#exportListModal" modal here
    let sentParams :{
      dateOfSubmissionFrom? : String,
      dateOfSubmissionTo? : String
    } = {};

    if(this.exportListForm.controls['selectedOption'].value !== 'all'){
      Object.assign(sentParams, this.exportListForm.controls['dateOfSubmissionFrom'].value ? {
        dateOfSubmissionFrom: convertformat.dateToDDMMYYYY(this.exportListForm.controls['dateOfSubmissionFrom'].value)
      } : {});
      Object.assign(sentParams, this.exportListForm.controls['dateOfSubmissionTo'].value ? {
        dateOfSubmissionTo: convertformat.dateToDDMMYYYY(this.exportListForm.controls['dateOfSubmissionTo'].value)
      } : {});
    }


    this.pddService.getPddSummaryExportList(sentParams, 'getExportList').subscribe((resp: any) => {
      console.log(resp);
      this.excelService.jsonExportAsExcelFile(resp.body.data, 'PDDSummary');
    }, (error) => {
      console.error('>>> Error getting export list in pddSummary');
    });
  }

  triggerAndClearSubmissionDate(isEnableOrDisable){
    if(isEnableOrDisable === 'disable'){
      this.exportListForm.controls['dateOfSubmissionFrom'].disable();
      this.exportListForm.controls['dateOfSubmissionTo'].disable();
      this.exportListForm.controls['dateOfSubmissionFrom'].reset();
      this.exportListForm.controls['dateOfSubmissionTo'].reset();
    }else{
      this.exportListForm.controls['dateOfSubmissionFrom'].enable();
      this.exportListForm.controls['dateOfSubmissionTo'].enable();
    }
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

  //to set the min, max date of from / to once submissionfrom / to is changed
  dateOfSubmissionChange(e, fromOrTo){
    this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
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

  pddSummaryColumnDef(){
    return [{
      targets: "_all",
      orderable: false,
      createdCell: function (td, cellData, rowData, row, col) {

        //funcs
        let convertDate = (date) => {
          return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        };

        switch(col){
          case 3: case 7: case 8: //date
            if(cellData){
              let dateSubstr = new Date(cellData.substr(0,10));
              $(td).html(`<span>` + convertDate(dateSubstr) + `</span>`);
            }else{
              $(td).html(`<span> - </span>`);
            }
          break;
          case 9:
            let mapStatusToText = {
              1:"To apply for extension",
              2:"Applied extension",
              3:"Opt-out from this program",
              4:"Re-assigned"
            };
            $(td).html(`<span>` + mapStatusToText[parseInt(cellData)] + `</span>`);
          break;
          case 10: //color ext text
            let mapExtToColor = {
              1: "lightskyblue",//To be reviewed
              2: "green",//Approved
              3: "red"//Rejected
            };
            let mapExtToText = {
              1:"To be reviewed",
              2:"Approved",
              3:"Rejected"
            };
            let txtColorStyle = `style="color:` + mapExtToColor[parseInt(cellData)] + `;"`;
            $(td).html(`<span ` + txtColorStyle + `>` + mapExtToText[parseInt(cellData)] + `</span>`);
          break;
          case 11:
            $(td).html(`<span class="span-csremarks">` + cellData + `</span>`);
          break;
          default:
            $(td).html(`<span>` + cellData + `</span>`);
          break;
        }
      }
    }]
  }

  pddSummaryAjax(){
    return (params, callback, settings) => {
      let unusedParams, draw, start, length;
      ({draw, start, length, ...unusedParams} = params); //do without columns attr inside params
      let queryParams = {
        draw, start, length
      };
      this.dataTableAjaxSubscription = this.pddService.getPddSummary(queryParams, 'dataTable').subscribe((resp : any) => {

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
