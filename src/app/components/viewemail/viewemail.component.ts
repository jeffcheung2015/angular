import { Component, OnInit } from '@angular/core';
import { AgentassignmentService } from '../../services/agentassignment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewemail',
  templateUrl: './viewemail.component.html',
  styleUrls: ['./viewemail.component.scss']
})
export class ViewemailComponent implements OnInit {
  lastEmailId : string;
  emailSubject: string;
  emailContent: string;
  receiverName: string;
  receiver: string;
  status: string;

  constructor(
    private activatedRoute : ActivatedRoute,
    private agentassignmentService : AgentassignmentService
  ) { }

  ngOnInit() {
    this.lastEmailId = this.activatedRoute.snapshot.queryParams.lastEmailId || "";
    let queryParams = {
      lastEmailId: this.lastEmailId
    }
    this.agentassignmentService.getViewEmail(queryParams, 'viewEmail').subscribe((resp: any)=>{
      this.emailSubject = resp.emailSubject;
      this.emailContent = resp.emailContent;
      this.receiverName = resp.receiverName;
      this.receiver = resp.receiver;
      this.status = resp.status;
    }, (error) => console.log(error));
  }

}
