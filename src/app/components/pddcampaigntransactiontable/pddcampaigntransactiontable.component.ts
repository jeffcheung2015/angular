import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PddcampaigntransactionService } from '../../services/pddcampaigntransaction.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Pddcampaigntransaction } from '../../models/pddcampaigntransaction.model';
import {MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'pddcampaigntransactiontable',
  templateUrl: './pddcampaigntransactiontable.component.html',
  styleUrls: ['./pddcampaigntransactiontable.component.scss']
})

export class PddcampaigntransactiontableComponent implements OnInit {
	  dataSource = new PddcampaigntransactionDataSource(this.pddcampaigntransactionService);
	  displayedColumns = ['polNo', 'campaignCode', 'partnerCode',
     'premDisc', 'createUsr', 'createDt', 'lastUpdUsr',
      'lastUpdDt'];
    displayedColNames = ['Policy No.', 'Campaign Code', 'Partner Code',
  'Premium Discount', 'Mileage', 'Create User', 'Create Datetime', 'Last Update User',
'Last Update Datetime'];
	  constructor(private pddcampaigntransactionService: PddcampaigntransactionService) {

    }
	  ngOnInit() {}
}

export class PddcampaigntransactionDataSource extends DataSource<any>{

	  constructor(private pddcampaigntransactionService: PddcampaigntransactionService) {
	    super();
	  }
	  connect(): Observable<Pddcampaigntransaction[]> {
	    return this.pddcampaigntransactionService.getAllPddCampaignTransaction();
	  }
	  disconnect() {
    }
}
