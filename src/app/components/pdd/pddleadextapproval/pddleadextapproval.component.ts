import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PddService } from '../../../services/pdd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-pddleadextapproval',
  templateUrl: './pddleadextapproval.component.html',
  styleUrls: ['./pddleadextapproval.component.scss']
})
export class PddleadextapprovalComponent implements OnInit {
  clientDtlsForm = new FormGroup({
    pddApproval : new FormControl('1'), //default approve
    remarks : new FormControl('', [Validators.maxLength(200)])
  });

  pddLeadExtApprovalInfo : {
    agentName: String,
    agentCode: String,
    assignmentDate: String,
    dateOfSubmission:String,
    firstContactDt: String,
    leadExtReason: String,
    customerName: String,
    customerPhoneNo: String,
    customerEmail:String
  } = {
    agentName:  "",
    agentCode:  "",
    assignmentDate:  "",
    dateOfSubmission: "",
    firstContactDt:  "",
    leadExtReason:  "",
    customerName:  "",
    customerPhoneNo:  "",
    customerEmail: ""
  };

  constructor(
    private pddService : PddService,
    private router : Router
  ) { }

  ngOnInit() {
    let agentCode = this.pddService.currAgentCode || "";
    if(agentCode === ''){
      this.router.navigate(['/']);
    }else{
      let queryParams = {
        agentCode
      };
      this.pddService.getPddClientDetails(queryParams, 'clientDetails').subscribe((resp: any) => {
        console.log('resp:', resp);
        this.pddLeadExtApprovalInfo = resp.body;

      }, (error) => {
        console.error('error: ', error);
      });
    }

  }

  onSubmitClientDetailsForm(){
    if(this.clientDtlsForm.status === 'VALID'){
      let queryParams = {
        pddApproval: this.clientDtlsForm.controls['pddApproval'].value,
        remarks: this.clientDtlsForm.controls['remarks'].value
      }
      this.pddService.postPddApproval(queryParams,'sentParams').subscribe((resp: any) =>{
        console.log("resp: ", resp);
        this.router.navigate(['/easLeadExtensionAppl']);
      },(error) => {
        console.error("error: ", error);
      });
    }else{
      return null;
    }
  }

}
