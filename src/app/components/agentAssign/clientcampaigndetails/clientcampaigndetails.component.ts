import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AgentassignmentService} from '../../../services/agentassignment.service';
import { FormGroup, FormControl } from '@angular/forms';

import { get as _get } from 'lodash';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clientcampaigndetails',
  templateUrl: './clientcampaigndetails.component.html',
  styleUrls: ['./clientcampaigndetails.component.scss']
})
export class ClientcampaigndetailsComponent implements OnInit {

  campaignDetailInfo = {
    campaignCode: "",
    startDate: "",
    endDate: "",
    genericCode: "",
    promoPool: "",
    promoUnit: "",
    partnerCode: "",
    partnerName: "",
    prodSubType: "",
    promoUsage: "",
    remarks: "",
    premiumFromAM: "",
    amEntitled: ""
  };

  clientDetailInfo = {
    fullName: "",
    mobileNo: "",
    idCardNo: "",
    dateOfSubmission: "",
    campaignCode:"",
    communicationCode: "",
    emailAddr:"",
    birthDate:"",
    gender:"",
    prodClass:"",

    agentCode:"",
    consultantName:"",
    consultantPhone:"",
    assignedDate:"",
    smsEmailSentDate:"",
    firstContactDate:"",
    assignmentStatus:"",
    accountExpiryDate:"",
    refuseContact:"",
    remarksToConsultant:"",

    reAgentCode:"",
    reConsultantName:"",
    reConsultantPhone:"",
    reAssignedDate:""
  }

  assignmentStatusMapToText = {
    0:"",
    1:"To apply for extension",
    2:"Applied extension",
    3:"Opt-out from this program",
    4:"Re-assigned"
  }

  refuseContactMapToBool = {
    0: false,
    1: true
  }

  clientDetailForm = new FormGroup({
    refuseContact: new FormControl(''),
    remarksToConsultant: new FormControl('')
  })

  @Input()currSubPage: String;
  @Input()gobackRouteLink: String; //go back to AgentAssignGI / AgentAssignCS depends on parent var

  constructor(
     private router: Router,
     private agentassignmentService : AgentassignmentService
   ) { }

  ngOnInit() {
    if(this.currSubPage === 'easCampaignDetail'){
      let campaignCode = this.agentassignmentService.currCampaignCd || '';
      if(campaignCode === ''){
        this.router.navigate(['/']);
      }else{
        let sentParams = {
            campaignCode
        };
        this.agentassignmentService.getCampaignDetail(sentParams, 'campaignDetails').subscribe((resp : any) => {
          for(var prop in resp.body){
            let isDateType = ['startDate', 'endDate'].indexOf(prop) !== -1;
            this.campaignDetailInfo[prop] = (isDateType) ? resp.body[prop].substr(0,10) :
              (resp.body[prop] || "N/A");
          }
        },(error : any) =>{
          console.log('>>> Error getting campaign details', error);
        })
      }
    }else{
      let clientCode = this.agentassignmentService.currClientCd || '';
      if(clientCode === ''){
        this.router.navigate(['/']);
      }else{
        let sentParams = {
            clientCode
        };
        this.agentassignmentService.getClientDetail(sentParams, 'clientDetails').subscribe((resp : any) => {
          for(var prop in resp.body){
            let isDateType = ['dateOfSubmission', 'birthDate','assignedDate',
              'smsEmailSentDate','firstContactDate','accountExpiryDate',
              'reAssignedDate'].indexOf(prop) !== -1;

            if(prop == 'remarksToConsultant'){
              this.clientDetailForm.controls[prop].setValue(resp.body[prop]);
            }else if(prop == 'refuseContact'){
              this.clientDetailInfo[prop] = (resp.body[prop] != null) ? resp.body[prop] : 0;
            }else if(isDateType){
              this.clientDetailInfo[prop] = (resp.body[prop]) ? resp.body[prop].substr(0,10) : null;
            }else{
              this.clientDetailInfo[prop] = resp.body[prop] || "N/A";
            }
          }

        },(error : any) =>{
          console.log('>>> Error getting client details', error);
        })
      }
    }
  }

  onSubmitSaveClientDetail(){
    let sentParams = {
      refuseContact: this.clientDetailForm.controls['refuseContact'].value ? "1" : "0", //convert boolean into 1 and 0
      remarksToConsultant: this.clientDetailForm.controls['remarksToConsultant'].value,
      policyNo: this.agentassignmentService.currClientCd
    };
    this.agentassignmentService.postClientDetail(sentParams, 'sendParams').subscribe((resp : any)=>{
      console.log('resp: ', resp);

    }, (error) => {
      console.error('>>> Error occurs while posting client details');
    });
  }
}
