import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import constants from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class EdmService {

  constructor(private http: HttpClient){ }
  //store the polno and make the get req using this var instead of using the polno from url queryParams for security reason
  currPolNo: string;
  currEmailId: string;
  currCampaignCd: string;
  currCommunicationCode: string;
  currServiceName : string = ""; //to determine current assignment service is GI/CS
  //expected val = easAgentAssignGI | easAgentAssignGI
  //set currServiceName(name : string) {this._currServiceName = name;}
//  get currServiceName() : string {return this._currServiceName;}
  //type : dataTable | searchCriteria | sendParams
  getOrPostFunc(url, params, getOrPost, type){
    let sentParams : any;
    switch(type){
      case 'dataTable':
      case 'retrieve':
        sentParams =  {
          observe: "response",
          params: params
        };
      break;
      case 'sendParams':
        sentParams = params
      break;
      default:
        sentParams = params
      break;
    }
    return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
  }
  //dataTable
  getEdmList(params, type){
    let localParams = {communicationCd: this.currCommunicationCode };
    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmList.json', params, 'get', type) :
      this.getOrPostFunc("/eas/api/edm/getEdmList",localParams, 'get', type);
  }

  getHistoryCustomerlist(params, type){
    let localParams = {communicationCd: this.currCommunicationCode };
    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmHistoryCustomerlist.json', params, 'get', type) :
      this.getOrPostFunc("/eas/api/edm/getEdmHistoryCustomerList",localParams, 'get', type);
  }

  getManagementFormSearchRecord(params, type){
    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmManagementFormSearchRecord.json', params, 'get', type) :
      this.getOrPostFunc("/eas/api/edm/",params, 'get', type);
  }

  getHistoryTemplates(params, type){
    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmManagementFormHistoryTemplates.json', params, 'get', type) :
      this.getOrPostFunc("/eas/api/edm/",params, 'get', type);
  }


  postSubmitOrSave(params, type){
    return this.getOrPostFunc('/eas/api/edm/saveEdmTemplate', params, 'post', type);
  }

  postEdmReceiver(params, type){
    return this.getOrPostFunc('/eas/api/edm/saveEdmReceiver', params, 'post', type);
  }

  postSendTestEmail(params, type){
    return this.getOrPostFunc('/eas/api/edm/sendTestEmail', params, 'post', type);
  }

}
