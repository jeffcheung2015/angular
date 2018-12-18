import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PddService } from '../../../services/pdd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { get as _get } from 'lodash';
import constants from '../../../constants/constants';
import { PddLeadExtApprovalDtl } from '../../../models/pdd.model';

@Component({
  selector: 'app-pddleadextapproval',
  templateUrl: './pddleadextapproval.component.html',
  styleUrls: ['./pddleadextapproval.component.scss']
})
export class PddleadextapprovalComponent implements OnInit {
  //1 approve ,2 reject
  clientDtlsForm = new FormGroup({
    pddApproval : new FormControl('3'), //default approve
    remarks : new FormControl('', [Validators.maxLength(200)])
  });
  popUpMsg: String;

  pddLeadExtApprovalInfo : PddLeadExtApprovalDtl = new PddLeadExtApprovalDtl();

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
        this.pddLeadExtApprovalInfo = resp.body;
        this.clientDtlsForm.controls['remarks'].setValue(resp.body.remarks);
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
      this.pddService.postPddApproval(queryParams,'sendParams').subscribe((resp: any) =>{
        console.log("resp: ", resp);
        let code = _get(resp, 'code[0]');
        let errMsg = (code && code !== constants.STATUS_CODE.SUCCESS_CODE) ? _get(resp, 'errMsg[0]') : constants.MSG.PRUCHAT_EMAIL_SUCCESS;

        if(code != constants.STATUS_CODE.SUCCESS_CODE){
          this.showPopUpMsg(errMsg);
        }else{
          this.router.navigate(['/easLeadExtensionAppl']);
        }
      },(error) => {
        console.error("error: ", error);
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
