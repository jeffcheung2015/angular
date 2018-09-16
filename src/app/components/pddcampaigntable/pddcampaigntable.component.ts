import { Component, OnInit } from '@angular/core';
import { PddcampaignService } from '../../services/pddcampaign.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Pddcampaign } from '../../models/pddcampaign.model';

@Component({
  selector: 'pddcampaigntable',
  templateUrl: './pddcampaigntable.component.html',
  styleUrls: ['./pddcampaigntable.component.scss']
})

export class PddcampaigntableComponent implements OnInit {
	  dataSource = new PddcampaignDataSource(this.pddcampaignService);
	  displayedColumns = ['campaignCode','partnerCode','partnerName','startDt','endDt','giProductCode','giProductSubtype','premiumForAm','amEntitled','premiumDisc','remarks','genericPromoCode','uniquePromoCodePool','uniquePromoCodeQty','promoCodeUsageUrl','lastUpdUsr','lastUpdDt'];
	  constructor(private pddcampaignService: PddcampaignService) { }

	  ngOnInit() {}
}

export class PddcampaignDataSource extends DataSource<any> {
	  constructor(private pddcampaignService: PddcampaignService) {
	    super();
	  }
	  connect(): Observable<Pddcampaign[]> {
	    return this.pddcampaignService.getAllPddCampaign();
	  }
	  disconnect() {}
}
