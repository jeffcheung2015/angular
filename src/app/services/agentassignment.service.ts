import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import constants from '../constants/constants';


import {GISearchCriteria, CSSearchCriteria} from '../models/agentassignment.model';

@Injectable({
  providedIn: 'root'
})
export class AgentassignmentService{
  constructor(private http: HttpClient){
    this.currGISearchCriteria = {
      fullName: '',
      policyNo: '',
    	mobileNo: '',
    	emailAddr: '',
    	idCardNo: '',
    	dateOfSubmissionFrom: new Date(new Date().setDate(new Date().getDate() - 3)),
    	dateOfSubmissionTo: new Date(new Date().setDate(new Date().getDate() - 1)),
    	assignmentOption: 'A'
    };

    this.currCSSearchCriteria = {
      fullName: '',
    	mobileNo: '',
    	emailAddr: '',
    	idCardNo: '',
    	dateOfSubmissionFrom: '',
    	dateOfSubmissionTo: '',
    	assignmentOption: 'A',
    	contactCustomerOption: '',
    	assignmentStatusOption: ''
    };
  }
  //store the polno and make the get req using this var instead of using the polno from url queryParams for security reason
  currPolNo: string;
  currEmailId: string;
  currCampaignCd: string;
  currClientCd: string;
  currServiceName : string = ""; //to determine current assignment service is GI/CS
  currGISearchCriteria : GISearchCriteria;
  currCSSearchCriteria : CSSearchCriteria;

  setCurrCriteria(varName, criteriaObj){
    this[varName] = criteriaObj;
  }

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
      case 'clientDetails':
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
                this.getOrPostFunc("/eas/api/agent/getCustomerList",params, 'get', type);
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
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/agentPoolType.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/agent/getCurrAgentPoolType",params, 'get', type);
  }
  //campaignDetails
  getCampaignDetail(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/campaignDetail.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/campaign/detail/" + params.campaignCode ,params, 'get', type);
  }
  //clientDetails
  getClientDetail(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/clientDetail.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/client/detail/" + params.clientCode ,params, 'get', type);
  }
  //viewEmail
  getViewEmail(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/email.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/agent/viewEmail/" + params.lastEmailId ,params, 'get', type);
  }

  //sendParams
  postResetLeaveRecord(params, type){
    let dummy_resp_obj = {

      code: ['00000'],
      errMsg: ['']

    }
    return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/submitOnLeave', params, 'post', type);

  }
  //sendParams
  postSaveLeaveRecord(params, type){
    let dummy_resp_obj = {

      code: ['00000'],
      errMsg: ['']

    }
    return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/submitOnLeave', params, 'post', type);

  }
  //sendParams  00000 and
  postSelectYesLeaveRecord(params, type){
    let dummy_resp_obj = {

      code: ['00000'],
      errMsg: ['']

    }
    return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/assignAgent', params, 'post', type);

  }
  //sendParams
  postResendPruchat(params, type){
    let dummy_resp_obj = {

      code: ['00000'],
      errMsg: ['']

    }
    return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/resendToAgent', params, 'post', type);

  }
  //sendParams
  postResendSMS(params, type){
    let dummy_resp_obj = {

      code: ['00000'],
      errMsg: ['']

    }
    return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/resendToCust', params, 'post', type);
  }
  //sendParams
  postClientDetail(params, type){

    return this.getOrPostFunc('/eas/api/agent/saveClientDetail', params, 'post', type);
  }


}
