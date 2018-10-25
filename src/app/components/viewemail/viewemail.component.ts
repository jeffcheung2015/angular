import { Component, OnInit, Input } from '@angular/core';
import { AgentassignmentService } from '../../services/agentassignment.service';
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
    this.lastEmailId = this.activatedRoute.snapshot.queryParams.lastEmailId || "";
    if(this.lastEmailId == ''){ //to prevent user entering empty lastemailid by redirecting them back to the go back route link
      this.router.navigate(['/'+this.gobackRouteLink]);
    }
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
