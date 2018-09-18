import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AgentassignmentService } from '../../services/agentassignment.service';
import { AgentAssignmentRecord } from '../../models/agentassignmentrecord.model';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-searchrecord',
  templateUrl: './searchrecord.component.html',
  styleUrls: ['./searchrecord.component.scss']
})
export class SearchrecordComponent implements OnInit {
  @Input() displayedColumns : string[];
  @Input() displayedColumnsName : string[];
  @Input() searchCriterias : string[];
  @ViewChild(MatPaginator) paginator : MatPaginator;
//  dataSource = new SearchRecordDataSource(this.agentassignmentService);
  dtOptions = {};
  dataArr : AgentAssignmentRecord[];
  constructor(private agentassignmentService : AgentassignmentService) {}

  ngOnInit() {
    let obs = this.agentassignmentService.getAgentAssignmentRecord();
    let obsSub = obs.subscribe((val)=> this.dataArr = val)

    let colArr = [];
    this.displayedColumnsName.forEach((val, index)=>{
      colArr.push({
        title: this.displayedColumns[index],
        data:val
      })
    })
    this.dtOptions = {
      fixedColumns: {
        leftColumns: 5
      },
      data : this.dataArr,
      columns: colArr,
      pageLength: 3,
      scrollX:true,
      columnDefs: [{
        targets: "_all",
        orderable: false,

      }]
    }
    $()
    console.log(this.dtOptions)
  }

}
/*
export class SearchRecordDataSource extends MatTableDataSource<any>{

	  constructor(private agentassignmentService: AgentassignmentService) {
	    super();
	  }
    connect() :BehaviorSubject<AgentAssignmentRecord[]>{
      return this.agentassignmentService.getAgentAssignmentRecord();
    }

}
*/
