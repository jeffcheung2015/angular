import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
import { of } from 'rxjs';

import {BehaviorSubject} from 'rxjs';

import constants from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AgentassignmentService{
  constructor(private http: HttpClient){ }
  //store the polno and make the get req using this var instead of using the polno from url queryParams for security reason
  currPolNo: string;
  currEmailId: string;
  currCampaignCd: string;
  currServiceName : string = ""; //to determine current assignment service is GI/CS
  //expected val = easAgentAssignGI | easAgentAssignGI
  //set currServiceName(name : string) {this._currServiceName = name;}
//  get currServiceName() : string {return this._currServiceName;}
  //type : dataTable | searchCriteria | sendParams
  getOrPostFunc(url, params, getOrPost, type){
    let sentParams : any;
    switch(type){
      case 'dataTable':
      case 'viewEmail':
      case 'getPoolType':
        sentParams =  {
          observe: "response",
          params: params
        };
      break;
      case 'campaignDetails':
        sentParams =  {
          observe: "response"
        };
      break;
      case 'sendParams':
        sentParams = params;
      break;
    }
    return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
  }
  //dataTable
  getAgentAssignmentRecord(params, type, currSubPage){
    if(currSubPage === 'easAgentAssignCS'){
      return (constants.localOrVm === 'local') ?
                this.getOrPostFunc('http://localhost:4200/eas/assets/data/searchRecordCS.json', params, 'get', type) :
                this.getOrPostFunc("/eas/api/agent/getCSPolicyList",params, 'get', type);
    }else{
      return (constants.localOrVm === 'local') ?
                this.getOrPostFunc('http://localhost:4200/eas/assets/data/searchRecord.json', params, 'get', type) :
                this.getOrPostFunc("/eas/api/agent/getPolicyList",params, 'get', type);
    }
  }
  //dataTable
  getAgentDetailRecord(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/searchRecordDetails.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/agent/getAgentDetails",params, 'get', type);
  }
  //currAgentPoolType
  getCurrAgentPoolType(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/agentPoolType.txt', params, 'get', type) :
            this.getOrPostFunc("/eas/api/agent/getCurrAgentPoolType",params, 'get', type);
  }
  //campaignDetails
  getCampaignDetail(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/campaignDetail.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/campaign/detail/" + params.campaignCode ,params, 'get', type);
  }
  //viewEmail
  getViewEmail(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/email.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/agent/viewEmail/" + params.lastEmailId ,params, 'get', type);
  }

  //sendParams
  postResetLeaveRecord(params, type){
    return this.getOrPostFunc('/eas/api/agent/submitOnLeave', params, 'post', type);

  }
  //sendParams
  postSaveLeaveRecord(params, type){
    return this.getOrPostFunc('/eas/api/agent/submitOnLeave', params, 'post', type);

  }
  //sendParams
  postSelectYesLeaveRecord(params, type){
    return this.getOrPostFunc('/eas/api/agent/assignAgent', params, 'post', type);

  }
  //sendParams
  postResendPruchat(params, type){
    return this.getOrPostFunc('/eas/api/agent/resendToAgent', params, 'post', type);

  }
  //sendParams
  postResendSMS(params, type){
    return this.getOrPostFunc('/eas/api/agent/resendToCust', params, 'post', type);

  }


}
