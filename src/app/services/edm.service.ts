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
export class EdmService {

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
        sentParams =  {
          observe: "response",
          params: params
        };
      break;
      case 'sendParams':
        sentParams = params
      break;
    }
    return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
  }
  //dataTable
  getEdmList(params, type){
    return (constants.localOrVm === 'local') ?
      this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmList.json', params, 'get', type) :
      this.getOrPostFunc("",params, 'get', type);
  }

  //sendParams
  // postResetLeaveRecord(params, type){
  //   return this.getOrPostFunc('/eas/api/agent/submitOnLeave', params, 'post', type);
  // }


}
