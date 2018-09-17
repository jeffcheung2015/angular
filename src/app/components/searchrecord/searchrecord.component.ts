import { Component, OnInit, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material';
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
  dataSource = new SearchRecordDataSource(this.agentassignmentService);

  constructor(private agentassignmentService : AgentassignmentService) {}

  ngOnInit() {
  }

}

export class SearchRecordDataSource extends MatTableDataSource<any>{

	  constructor(private agentassignmentService: AgentassignmentService) {
	    super();


	  }

    connect() : BehaviorSubject<AgentAssignmentRecord[]> {
      return this.agentassignmentService.getAgentAssignmentRecord();
    }

}
