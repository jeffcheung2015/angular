import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

}
