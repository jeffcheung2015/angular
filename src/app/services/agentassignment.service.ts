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

  private serviceUrl = "/eas/api/agent/getPolicyList";

  constructor(private http: HttpClient){ }
  getAgentAssignmentRecord(){
    //just replace data with the http observable func
    //let bSubj = new BehaviorSubject<AgentAssignmentRecord[]>(new Array<AgentAssignmentRecord>());
    //let sub = Observable.of(data).subscribe((v)=>{bSubj.next(v)});
    //return bSubj;

    let params : any = { observe: "response",
      data: {
        draw: 1,
        start: 1,
        length: 10
      }
    };

    return this.http.get('http://localhost:4200/eas/assets/data/searchRecord.json', params);
  }


}
