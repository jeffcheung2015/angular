import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { EdmService } from '../../../services/edm.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject} from 'rxjs';
import constants from '../../../constants/constants';
import { set as _set, get as _get } from 'lodash';

@Component({
  selector: 'app-edmhistory',
  templateUrl: './edmhistory.component.html',
  styleUrls: ['./edmhistory.component.scss']
})
export class EdmhistoryComponent implements OnInit, AfterViewInit, OnDestroy {

  eDMHistoryDtl : any = {};
  eDMHistoryCustomerList : Array<any> = [];
  noOfCustomers : number = 0;

  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger : Subject<any>= new Subject();
  dataTableSettings : any;//for changing table pages in gotopage
  displayedColumns: String[] = constants["EDMHistoryCustomer"];
  displayedColumnsName : String[] = constants["EDMHistoryCustomerField"];

  bodyRendererListener;

  noOfPage: number;
  currPage : number = 1;

  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "inactive-gray",
    "10": "active-red",
    "20": "inactive-gray",
  };

  constructor(
    private edmService : EdmService
  ) { }

  ngOnInit() {
    let templateQueryParams = {
      communicationCd: 'ABC122C01'
    };
    this.edmService.getHistoryTemplates(templateQueryParams, "getHistory").subscribe((resp : any)=>{
      console.log("resp", resp);
      this.eDMHistoryDtl = resp;

    });

    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val, index)=>{
      colArr.push({
        data:val,
        orderable: false,
        width: '25%'
      })
    });
    this.dtOptions = {
      scrollCollapse: true,
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      scrollX:true,
      scrollY:false,
      columnDefs : this.edmHistoryCustomerListColumnDef(),
      ajax : this.edmHistoryCustomerListAjax(),
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
    };
    $('.table-edmHistoryCustomerlist').on( 'page.dt', function (event,settings) {
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });
  }

  ngAfterViewInit(){
    this.dtTrigger.next();
  }

  ngOnDestroy(){
    if(this.bodyRendererListener){
      this.bodyRendererListener();
    }
    if(this.dtTrigger){
      this.dtTrigger.unsubscribe();
    }
  }
  customerListHasBeenDisplayed = false;
  refreshTable(){
    //for some reason the customer list table hidden on load once displayed when `Customer List` tab is clicked,
    //the table header's width isnt calculated correctly. so it is fixed whenever the `Customer List` is clicked
    if(!this.customerListHasBeenDisplayed){
      let dTableInstance = _get(this.dTable, "dtInstance");
      if(dTableInstance){
        dTableInstance.then((dtInstance: DataTables.Api) => {
          //redraw table only need these 2 funcs
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      }
      this.customerListHasBeenDisplayed = true;
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
    let dTableInstance = _get(this.dTable, "dtInstance");
    if(dTableInstance){
      this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
        //redraw table only need these 2 funcs
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    }
    this.noOfPage = Math.ceil(this.noOfCustomers/this.dtOptions.pageLength);
    this.currPage = 1;
    $(".input-goToPage_left").val(1);
  }

  changeCurrTablePage(page){
    if(page !== "" && /^\d+$/.test(page)){
      console.log('Change to page: ' + page);
      let pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true)
      console.log((pageChangeStatus)?'Current page changed to '+ page : "Fail to change page, page exceed no of page");
      this.currPage = parseInt(page);
    }
  }

  edmHistoryCustomerListColumnDef(){
    return [{
      targets: "_all",
      createdCell: function (td, cellData, rowData, row, col) {
        if(col == 2){
          return $(td).html(`<span>` + ((cellData == 0) ? 'Pending' : 'Sent') + `</span>`);
        }else if(col == 3){
          if(!cellData){return $(td).html(`<span>N/A</span>`);}
          else{
            let dateStr = cellData.substr(0,4)+"/"+cellData.substr(5,2)+"/"+cellData.substr(8,2)+" "+cellData.substr(11,5);
            return $(td).html(`<span>` + dateStr + `</span>`);
          }
        }
        else{
          return $(td).html(`<span>` + cellData + `</span>`);
        }
      }
    }]
  }
  edmHistoryCustomerListAjax(){
    return (params, callback, settings) => {
      let queryParams = {};
      let draw, start, length, unusedParams;
      ({draw, start, length, ...unusedParams} = params);
      queryParams = {
        draw, start, length
      };

      this.edmService.getHistoryCustomerlist(queryParams, 'dataTable').subscribe((resp : any) => {
        this.noOfCustomers = resp.body.recordsFiltered;
        this.noOfPage = Math.ceil(this.noOfCustomers/this.dtOptions.pageLength);
        this.currPage = (resp.body.recordsFiltered >= 1) ? this.currPage : 0;
        callback({
          data:resp.body.data,
          recordsTotal: resp.body.recordsTotal,
          recordsFiltered: resp.body.recordsFiltered
        });
      }, (error) => {
        console.log("error: ", error);
      });
    }
  }

}
