import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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



  getAgentAssignmentRecord():Observable<AgentAssignmentRecord[]>{
    let data = [{
    	productClass : "Travel",
    	policyNo: "90000000000",
    	prulifePolicyNo: "90000000000",
    	applicantName: "Jeff",
    	idCardno: "90000000000",
    	optOutCustomerGI: "Y",
    	optOutCustomerLife: "N",

    	currentAgent_AgentName: "Jeff",
    	currentAgent_AgentCode: "90000000000",
    	currentAgent_AgentPhone:"60029393" ,

    	dateOfSubmission: "60029393",
    	campaignCode: "60029393",
    	assignmentType: "60029393",

    	assignAgent_AgencyTeamName: "60029393",
    	assignAgent_AgencyCode: "60029393",
    	assignAgent_AgencyName: "60029393",
    	assignAgent_AgencyPhone: "60029393",
    	assignAgent_AgentAssignedDate: "60029393",

    	pruChatEmailSendDate: "60029393",
    	smsEmailSendDate: "60029393"
    },
    {
      productClass : "Travel",
      policyNo: "90000000000",
      prulifePolicyNo: "90000000000",
      applicantName: "Jeff",
      idCardno: "90000000000",
      optOutCustomerGI: "Y",
      optOutCustomerLife: "N",

      currentAgent_AgentName: "Jeff",
      currentAgent_AgentCode: "90000000000",
      currentAgent_AgentPhone:"60029393" ,

      dateOfSubmission: "60029393",
      campaignCode: "60029393",
      assignmentType: "60029393",

      assignAgent_AgencyTeamName: "60029393",
      assignAgent_AgencyCode: "60029393",
      assignAgent_AgencyName: "60029393",
      assignAgent_AgencyPhone: "60029393",
      assignAgent_AgentAssignedDate: "60029393",

      pruChatEmailSendDate: "60029393",
      smsEmailSendDate: "60029393"
    }];
    return Observable.of<AgentAssignmentRecord[]>(data);
  }
  constructor() { }

}
