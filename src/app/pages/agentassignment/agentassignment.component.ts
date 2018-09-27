import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentassignment',
  templateUrl: './agentassignment.component.html',
  styleUrls: ['./agentassignment.component.scss']
})
export class AgentassignmentComponent implements OnInit, AfterViewInit, AfterContentInit {

  searchRecordDisplayedColumns = ['Class', 'Policy No.', 'Prulife Pol. No.', 'Name of the Applicant',
  'ID Card No', 'Opt Out customer(GI)', 'Opt Out customer(Life)',
   'Agent Name','Agent Code','Agent Phone',
   'Date Of Submission', 'Campaign Code', 'Assignment Type',
  'Agency Team Name', 'Agency Code', 'Agent Name', 'Agent Phone', 'Agent Assigned Date',
  'PruChat,Email Send Date(to agent)', 'SMS,Email Send Date(to customer)/ View Customer Email'];
  searchRecordDisplayedColumnsName = ['prodClass','polNo','lifePolNo','applicantName',
  'idNo','giOptOut','lifeOptOut','currentAgentName',
  'currentAgentCode','currentAgentPhone','dateOfSubmission',
  'campaignCode','assignmentType','agentTeam',
  'agentCode','agentName','agentPhone',
  'agentAssignedDate','agentSentDate','customerSentDate'
  ];

  //refers to the current page the visitor is visiting, maybe subpage
  //agentHome, agentAssign, agentDetails
  currSubPage : string = 'agentAssign';

  constructor(private router :Router) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
  }

  ngAfterContentInit(){
    let url = this.router.url;
    this.currSubPage = url.substr(url.lastIndexOf('/')+1, url.length);
    console.log('currSubPage:', this.currSubPage)
  }


  changeCurrSubPage(newCurrSubPage){
    this.currSubPage = newCurrSubPage;

  }
}
