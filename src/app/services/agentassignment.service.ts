import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
import { of } from 'rxjs';

import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentassignmentService{
  constructor(private http: HttpClient){ }

  currServiceName : string = ""; //to determine current assignment service is GI/CS
  //expected val = easAgentAssignGI | easAgentAssignGI
  //set currServiceName(name : string) {this._currServiceName = name;}
//  get currServiceName() : string {return this._currServiceName;}

  //type : dataTable | searchCriteria | sendParams
  getOrPostFunc(url, params, getOrPost, type){
    let sentParams : any;
    switch(type){
      case 'dataTable':
        sentParams =  {
          observe: "response",
          params: {
            draw: params.draw,
            start: params.start,
            length: params.length
          }
        };
      break;
      case 'searchCriteria':
      case 'sendParams':
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
    }
    return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
  }
  //dataTable
  getAgentAssignmentRecord(params, type){
    return this.getOrPostFunc('http://localhost:4200/eas/assets/data/searchRecord.json', params, 'get', type)
    //#vm
    //return this.getOrPostFunc("/eas/api/agent/getPolicyList",params, 'get', type);
  }
  //dataTable
  getAgentDetailRecord(params, type){
    return this.getOrPostFunc('http://localhost:4200/eas/assets/data/searchRecordDetails.json', params, 'get', type);
    //#vm
    //return this.getOrPostFunc("/eas/api/agent/assignAgent",params, 'get', type);
  }
  //campaignDetails
  getCampaignDetail(params, type){
    return this.getOrPostFunc('http://localhost:4200/eas/assets/data/campaignDetail.json', params, 'get', type);
    //#vm
    //return this.getOrPostFunc("/api/campaign/detail/" + params.campaignCode ,params, 'get', type);
  }
  //sendParams
  postResetLeaveRecord(params, type){
    return this.getOrPostFunc('/resetLeave', params, 'post', type);
    //#vm
    //return this.getOrPostFunc("/aaa",params, 'post', type);
  }
  //sendParams
  postSaveLeaveRecord(params, type){
    return this.getOrPostFunc('/saveLeave', params, 'post', type);
    //#vm
    //return this.getOrPostFunc("/aaa",params, 'post', type);
  }
  //sendParams
  postSelectYesLeaveRecord(params, type){
    return this.getOrPostFunc('/selectYes', params, 'post', type);
    //#vm
    //return this.getOrPostFunc("/aaa",params, 'post', type);
  }
  //sendParams
  postResendPruchat(params, type){
    return this.getOrPostFunc('/resendPruchat', params, 'post', type);
    //#vm
    //return this.getOrPostFunc("/aaa",params, 'post', type);
  }
  //sendParams
  postResendSMS(params, type){
    return this.getOrPostFunc('/resendSMS', params, 'post', type);
    //#vm
    //return this.getOrPostFunc("/aaa",params, 'post', type);
  }
  //searchCriteria
  postSearchCriteriaRecord(params, type){
    return this.getOrPostFunc('/searchCriteria', params, 'post', type);
    //#vm
    //return this.getOrPostFunc("/aaa",params, 'post', type);
  }

}
