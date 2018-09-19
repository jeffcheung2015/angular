import { Component, OnInit, AfterViewInit, Input, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { JsonPipe } from '@angular/common';
//import { MatPaginator, MatTableDataSource } from '@angular/material';
//import {DataSource} from '@angular/cdk/collections';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
import { AgentassignmentService } from '../../services/agentassignment.service';
import { AgentAssignmentRecord } from '../../models/agentassignmentrecord.model';
import { Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-searchrecord',
  templateUrl: './searchrecord.component.html',
  styleUrls: ['./searchrecord.component.scss']
})
export class SearchrecordComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() displayedColumns : string[];
  @Input() displayedColumnsName : string[];
  @Input() searchCriterias : string[];

  noOfCustomer : number;

  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger= new Subject();
  pageInfo : any = {};

  agentAssignSubscription;
  screenWidth: number;


  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "active-red",
    "10": "inactive-gray",
    "20": "inactive-gray",
  };

  constructor(private agentassignmentService : AgentassignmentService) {}
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

  changeTablePerPage(val){
    this.dtOptions.pageLength = val;//change table's no of records

    //reset all the length menu 's class to gray color
    this.mapToLengthMenuNum = {
      "5": "inactive-gray",
      "10": "inactive-gray",
      "20": "inactive-gray",
    };
    this.mapToLengthMenuNum[parseInt(val)] = "active-red";
    //reset the datatable
    this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  ngOnInit() {
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
      columns: colArr,
      pageLength: 5,
      scrollX:true,
      columnDefs: [{
        targets: "_all",
        orderable: false,
      }],
      pagingType: 'full_numbers',
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
    }
  }

  ngAfterViewInit(){ //only load data after view are initialized
    this.dtTrigger.next();
    this.agentAssignSubscription = this.agentassignmentService.
    getAgentAssignmentRecord().subscribe(
      (val)=> {
        setTimeout(()=>{
          this.dtOptions.data = val;
          this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();


            this.dtTrigger.next();
          });
          this.noOfCustomer = this.dtOptions.data.length;
        }, 1000)
      }
    )

    /*$('.searchRecord-table').on( 'page.dt', function (e) {
      this.calculatePageInfo();
    });*/
  }

  calculatePageInfo(){
    //total no of pages
    let noOfPages = this.noOfCustomer / this.dtOptions.pageLength;
    console.log(noOfPages + ":" + this.noOfCustomer + ":" + this.dtOptions.pageLength)

  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
    this.agentAssignSubscription.unsubscribe();
  }
}
