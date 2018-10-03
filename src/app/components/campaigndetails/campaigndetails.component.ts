import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaigndetails',
  templateUrl: './campaigndetails.component.html',
  styleUrls: ['./campaigndetails.component.scss']
})
export class CampaigndetailsComponent implements OnInit {
  campaignCode;
  campaignStartDate;
  campaignEndDate;
  premPercentOff;
  genericCode;
  promotionCodePool;
  promotionCodeUnit;
  partnerCode;
  partnerName;
  productSubType;
  productCodeUsage;
  remarks;

  currSubPage;

  constructor(private router: Router, private aRoute : ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.aRoute)
    this.campaignCode = this.aRoute.snapshot.queryParams.campaignCode;
  }

}
