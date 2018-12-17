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
export class PddService {
  constructor(private http: HttpClient){ }
  currPolicyNo : String = "";
  //set currServiceName(name : string) {this._currServiceName = name;}
  //  get currServiceName() : string {return this._currServiceName;}
  //type : dataTable | searchCriteria | sendParams
  getOrPostFunc(url, params, getOrPost, type){
    let sentParams : any;
    switch(type){
      case 'dataTable':
      case 'getExportList':
      case 'clientDetails':
        sentParams = {
          observe: "response",
          params: params
        };
      break;
      case 'sendParams':
        sentParams = params;
      break;
    }
    return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
  }

  //dataTable
  getPddApplicationList(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/pddApplicationList.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/pdd/getPddApplicationList",params, 'get', type);
  }

  //dataTable
  getPddSummary(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/pddSummary.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/pdd/getPddSummary",params, 'get', type);
  }

  //clientDetails
  getPddClientDetails(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/pddClientDtls.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/pdd/getPddClientDetails" ,params, 'get', type);
  }

  //getExportList
  getPddSummaryExportList(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/pddSummaryList.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/pdd/getPddSummaryExportList" ,params, 'get', type);
  }

  //sendParams
  postPddApproval(params, type){
    let dummy_resp_obj = {

      code: ['00015'],
      errMsg: ['No Remarks. remarks are required']

    }
    return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/pdd/postPddApproval', params, 'post', type);

  }


}
