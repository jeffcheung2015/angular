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
  polNoList: Array<string>;
  //store the polno and make the get req using this var instead of using the polno from url queryParams for security reason
  currPolNo: string;
  currEmailId: string;
  currCampaignCd: string;
  currCommunicationCode: string;
  currEdmId: string;
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
    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmList.json', params, 'get', type) :
      this.getOrPostFunc("/eas/api/edm/getEdmList",params, 'get', type);
  }

  getHistoryCustomerlist(params, type){
    let localParams = {edmId: this.currEdmId };
    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmHistoryCustomerlist.json', localParams, 'get', type) :
      this.getOrPostFunc("/eas/api/edm/getEdmHistoryCustomerList",localParams, 'get', type);
  }

  getManagementFormSearchRecord(params, type){
    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmManagementFormSearchRecord.json', params, 'get', type) :
      this.getOrPostFunc("/eas/api/edm/getEdmStep2List",params, 'get', type);
  }

  getHistoryTemplates(params, type){

    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmManagementFormHistoryTemplates.json', params, 'get', type) :
      this.getOrPostFunc("/eas/api/edm/getEdmHistory",params, 'get', type);
  }

  getAllPolNoList(params, type){

    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/polNoList.json', params, 'get', type) :
      this.getOrPostFunc("/eas/api/edm/getAllPolNoList",params, 'get', type);
  }

  postSubmitOrSave(params, type){
    let dummy_resp_obj = {
        code: ['00000'],
        errMsg: ['']

    }
    return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/edm/saveEdmTemplate', params, 'post', type);
  }

  postEdmReceiver(params, type){
    let dummy_resp_obj = {
        code: ['00001', '00002'],
        errMsg: ['Duplicated communication code found.', 'No Template option is selected']

    }
    return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/edm/saveEdmReceiver', params, 'post', type);
  }

  postSendTestEmail(params, type){
    let dummy_resp_obj = {
        code: ['00001', '00002'],
        errMsg: ['Duplicated communication code found.', 'No Template option is selected']

    }
    return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/edm/sendTestEmail', params, 'post', type);
  }

}
