import { Component, OnInit, Input } from '@angular/core';
import { AgentassignmentService } from '../../../services/agentassignment.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  @Input()gobackRouteLink: string; //go back to AgentAssignGI / AgentAssignCS depends on parent var

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private agentassignmentService : AgentassignmentService
  ) { }

  ngOnInit() {
    this.lastEmailId = this.agentassignmentService.currEmailId || "";
    if(this.lastEmailId == ''){
      this.router.navigate(['/']);
    }
    let queryParams = {
      lastEmailId: this.lastEmailId
    }
    this.agentassignmentService.getViewEmail(queryParams, 'viewEmail').subscribe((resp: any)=>{
      this.emailSubject = resp.body.emailSubject;
      this.emailContent = resp.body.emailContent;
      this.receiverName = resp.body.receiverName;
      this.receiver = resp.body.receiver;
      this.status = resp.body.status;
    }, (error) => console.error(error));
  }

}
