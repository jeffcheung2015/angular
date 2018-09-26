import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.scss']
})
export class SearchcriteriaComponent implements OnInit {
  @Input()searchRecordComponent;

  searchForm = new FormGroup({
    fullName : new FormControl(''),
    policyNo : new FormControl(''),
    mobileNo : new FormControl(''),
    emailAddr : new FormControl(''),
    idCardNo : new FormControl(''),
    dateOfSubmissionFrom : new FormControl(''),
    dateOfSubmissionTo : new FormControl(''),
    assignmentOption : new FormControl('')
  });
  minDateTo;
  maxDateFrom;
  constructor() {
  }
  ngOnInit() {
  }

  //to set the min, max date of from / to once submissionfrom / to is changed
  dateOfSubmissionChange(e, fromOrTo){
    if(fromOrTo == 0){
      this.minDateTo = e.value;
    }else{
      this.maxDateFrom = e.value;
    }
  }

  onSubmitSearch(searchForm){
    let fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption;
    //angular form cannot read value of a select elm which is being controlled by div and jquery
    //has to use jquery to read the div value and overwrite the search criterias sent
    //to searchRecordComponent first
    let theSelectedIndex = -1;
    for(var i = 0 ; i < $('.select-items div').length; i++){
      if($('.select-items div:eq(' + i + ')').hasClass('same-as-selected')){
        theSelectedIndex = i;
        break;
      }
    }
    assignmentOption = theSelectedIndex === -1 ? "" : $('[name="assignmentOptionField"] option:eq('+ theSelectedIndex+')').val();

    ({fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo} = searchForm.value);
    //transform the raw date to formatted locale date string YYYY/MM/DD
    dateOfSubmissionFrom = !dateOfSubmissionFrom ? dateOfSubmissionFrom : new Date(dateOfSubmissionFrom).toLocaleDateString();
    dateOfSubmissionTo = !dateOfSubmissionTo ? dateOfSubmissionTo : new Date(dateOfSubmissionTo).toLocaleDateString();

    let searchCriteriaArr = [fullName,policyNo,mobileNo,emailAddr,idCardNo,
      dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption];

    this.searchRecordComponent.refreshAndReloadSearchRecordTable(searchCriteriaArr);
  }
}
