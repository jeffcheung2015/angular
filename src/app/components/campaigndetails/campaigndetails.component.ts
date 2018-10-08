import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AgentassignmentService} from '../../services/agentassignment.service';

@Component({
  selector: 'app-campaigndetails',
  templateUrl: './campaigndetails.component.html',
  styleUrls: ['./campaigndetails.component.scss']
})
export class CampaigndetailsComponent implements OnInit {
  @Input()campaignDetailObj;
  campaignCode;
  startDate;
  endDate;

  genericCode;
  promoPool;
  promoUnit;

  partnerCode;
  partnerName;
  prodSubType;
  promoUsage;
  remarks;

  premiumFromAM;
  amEntitled;

  currSubPage;
  @Input()gobackRouteLink: string;

  constructor(private router: Router,
     private aRoute : ActivatedRoute) {
  }

  ngOnInit() {
  }

  setData(responseObj){
    this.campaignCode = responseObj.campaignCode;
    this.startDate = responseObj.startDate;
    this.endDate = responseObj.endDate;

    this.genericCode = responseObj.genericCode;
    this.promoPool = responseObj.promoPool;
    this.promoUnit = responseObj.promoUnit;

    this.partnerCode = responseObj.partnerCode;
    this.partnerName = responseObj.partnerName;
    this.prodSubType = responseObj.prodSubType;
    this.promoUsage = responseObj.promoUsage;
    this.remarks = responseObj.remarks;

    this.premiumFromAM = responseObj.premiumFromAM;
    this.amEntitled = responseObj.amEntitled;
    console.log(responseObj)
  }
}
