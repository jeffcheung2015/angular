import { Component, OnInit, Input, JSONPipe } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AgentassignmentService } from '../../services/agentassignment.service';
import { AgentAssignmentRecord } from '../../models/agentassignmentrecord.model';

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
    //console.log("###@"+JSON.stringify(this.dataSource.agentassignmentService.data[0])
  }

}
export class SearchRecordDataSource extends DataSource<any>{

	  constructor(private agentassignmentService: AgentassignmentService) {
	    super();
	  }
	  connect(): Observable<AgentAssignmentRecord[]> {
      console.log('connecting ~' + this.agentassignmentService.getAgentAssignmentRecord());
	    return this.agentassignmentService.getAgentAssignmentRecord();
	  }
	  disconnect() {
    }
}
