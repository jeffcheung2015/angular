import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.scss']
})
export class SearchcriteriaComponent implements OnInit {
  @Input()searchRecordComponent;
  //form fields
  fullName;
  policyNo;
  mobileNo;
  emailAddr;
  idCardNo;
  dateOfSubmissionFrom;
  dateOfSubmissionTo;
  assignment;

  //
  constructor() { }

  ngOnInit() {

  }

  onSubmitSearch(){
    console.log('on submit search!')
    let searchCriteriaArr = [this.fullName,this.policyNo,this.mobileNo,
      this.emailAddr,this.idCardNo,
      this.dateOfSubmissionFrom,this.dateOfSubmissionTo,this.assignment];

    this.searchRecordComponent.refreshAndReloadSearchRecordTable(searchCriteriaArr);
  }
}
