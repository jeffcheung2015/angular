import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agentassignment',
  templateUrl: './agentassignment.component.html',
  styleUrls: ['./agentassignment.component.scss']
})
export class AgentassignmentComponent implements OnInit {
  searchRecordDisplayedColumns = ['Class', 'Policy No.', 'Prulife Pol. No.', 'Name of the Applicant',
  'ID Card No', 'Opt Out customer(GI)', 'Opt Out customer(Life)', 'Current Agent', 'Current Agent1','Current Agent2','Current Agent3',
  'Assign Agent', 'PruChat,Email Send Date(to agent)',
  'SMS,Email Send Date(to customer)/ View Customer Email'];
  searchRecordDisplayedColumnsName = ['productClass','policyNo','prulifePolicyNo','applicantName',
  'idCardno','optOutCustomerGI','optOutCustomerLife','currentAgent_AgentName',
  'currentAgent_AgentCode','currentAgent_AgentPhone','dateOfSubmission',
  'campaignCode','assignmentType','assignAgent_AgencyTeamName',
  'assignAgent_AgencyCode','assignAgent_AgencyName','assignAgent_AgencyPhone',
  'assignAgent_AgentAssignedDate','pruChatEmailSendDate','smsEmailSendDate'
  ];
  searchRecordCriteria=['10029','jeff'];
  constructor() { }

  ngOnInit() {
  }

}
