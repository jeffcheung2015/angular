import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AgentassignmentService} from '../../services/agentassignment.service';
import { get as _get } from 'lodash';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-campaigndetails',
  templateUrl: './campaigndetails.component.html',
  styleUrls: ['./campaigndetails.component.scss']
})
export class CampaigndetailsComponent implements OnInit {
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
  @Input()gobackRouteLink: string; //go back to AgentAssignGI / AgentAssignCS depends on parent var

  constructor(
     private router: Router,
     private activatedRoute : ActivatedRoute,
     private agentassignmentService : AgentassignmentService
   ) { }

  ngOnInit() {
    let campaignCode = this.agentassignmentService.currCampaignCd || '';
    if(campaignCode === ''){
      this.router.navigate(['/']);
    }else{
      let sentParams = {
          campaignCode: campaignCode
      };
      this.agentassignmentService.getCampaignDetail(sentParams, 'campaignDetails').subscribe((resp : any) => {
        for(var prop in resp.body){
          this[prop] = resp.body[prop];
        }
      },(error : any) =>{
        console.log('error getting campaign details', error);
      })
    }
    console.log('gobackRouteLink:', this.gobackRouteLink)
  }
}
