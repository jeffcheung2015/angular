import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AgentAssignmentRecord } from '../models/agentassignmentrecord.model';
import { of } from 'rxjs';

import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentassignmentService{

  fullname: string;
  policyNo: string;
  mobileNo: string;
  emailAddr: string;
  idCardNo: string;
  dateOfSubmissionFrom: string;
  dateOfSubmissionTo: string;
  assignment: string;

  constructor(private http: HttpClient){ }
  //type : dataTable | searchCriteria
  getPostFunc(url, params, getOrPost, type?){
    let sentParams : any = {
      observe: "response",
      params: type === 'dataTable' ? {
        draw: params.draw,
        start: params.start,
        length: params.length
      } : params
    };
    if(getOrPost === 'get')
      return this.http.get(url, sentParams);
    else
      return this.http.get(url, sentParams);
  }

  getAgentAssignmentRecord(params, type){
    return this.getPostFunc('http://localhost:4200/eas/assets/data/searchRecord.json', params, 'get', type)
    //#vm
    //return this.getPostFunc("/eas/api/agent/getPolicyList",params, 'get');
  }

  getAgentDetailRecord(params, type){
    return this.getPostFunc('http://localhost:4200/eas/assets/data/searchRecordDetails.json', params, 'post', type);
    //#vm
    //return this.getPostFunc("/aaa",params, 'post');
  }
  postResetLeaveRecord(params){
    return this.getPostFunc('/aaa', params, 'post');
    //#vm
    //return this.getPostFunc("/aaa",params, 'post');
  }

  postSaveLeaveRecord(params){
    return this.getPostFunc('/aaa', params, 'post');
    //#vm
    //return this.getPostFunc("/aaa",params, 'post');
  }

  postSelectYesLeaveRecord(params){
    return this.getPostFunc('/aaa', params, 'get');
    //#vm
    //return this.getPostFunc("/aaa",params, 'get');
  }


}
