import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PddService } from '../../../services/pdd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { get as _get } from 'lodash';
import constants from '../../../constants/constants';
@Component({
  selector: 'app-pddleadextapproval',
  templateUrl: './pddleadextapproval.component.html',
  styleUrls: ['./pddleadextapproval.component.scss']
})
export class PddleadextapprovalComponent implements OnInit {
  //1 approve ,2 reject
  clientDtlsForm = new FormGroup({
    pddApproval : new FormControl('1'), //default approve
    remarks : new FormControl('', [Validators.maxLength(200)])
  });
  popUpMsg: String;

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
    let policyNo = this.pddService.currPolicyNo || "";
    if(policyNo === ''){
      this.router.navigate(['/']);
    }else{
      let queryParams = {
        policyNo
      };
      this.pddService.getPddClientDetails(queryParams, 'clientDetails').subscribe((resp: any) => {
        console.log('resp:', resp);
        this.pddLeadExtApprovalInfo = resp;

      }, (error) => {
        console.error('error: ', error);
      });
    }

  }

  onSubmitClientDetailsForm(){
    if(this.clientDtlsForm.status === 'VALID'){
      let queryParams = {
        policyNo: this.pddService.currPolicyNo,
        pddApproval: this.clientDtlsForm.controls['pddApproval'].value,
        remarks: this.clientDtlsForm.controls['remarks'].value
      }
      console.log(">>> pddLeadExtApproval::postPddApproval queryParams:", queryParams);
      this.pddService.postPddApproval(queryParams,'sentParams').subscribe((resp: any) =>{
        console.log("resp: ", resp);
        this.router.navigate(['/easLeadExtensionAppl']);

      },(error) => {
        console.error("error: ", error);
        this.showPopUpMsg("Error: " + JSON.stringify(error));
      });
    }else{
      return null;
    }
  }
  //show err msg upon receiving err msg after posting req
  showPopUpMsg(errMsg){
    this.popUpMsg = errMsg
    $("#btnMsgModal").modal('show');
  }
}
