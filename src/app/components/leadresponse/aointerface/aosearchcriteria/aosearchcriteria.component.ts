import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import convertFormat from '../../../../utils/convertformat';

@Component({
  selector: 'app-aosearchcriteria',
  templateUrl: './aosearchcriteria.component.html',
  styleUrls: ['./aosearchcriteria.component.scss']
})
export class AosearchcriteriaComponent implements OnInit  {
  aoInterfaceComponent;

  aosearchForm = new FormGroup({
    dateOfSubmissionFrom : new FormControl(''),
    dateOfSubmissionTo : new FormControl(''),
    dateOfAssignmentFrom : new FormControl(''),
    dateOfAssignmentTo : new FormControl(''),
    agentCode : new FormControl('', [Validators.pattern('[0-9a-zA-Z]+')])
  });

  minDateSubmissionTo;
  maxDateSubmissionFrom;
  minDateAssignmentTo;
  maxDateAssignmentFrom;

  constructor() {}
  ngOnInit() {}

  resetDateRangeRestrictAndDropDownOption(){
    this.maxDateSubmissionFrom = null;
    this.minDateSubmissionTo = null;
    this.maxDateAssignmentFrom = null;
    this.minDateAssignmentTo = null;
  }

  //to set the min, max date of from / to once submissionfrom / to is changed
  dateOfFromToChange(e, fromOrTo, assignmentOrSubmission){
    if(assignmentOrSubmission == 'submission'){
      this[(fromOrTo == 0) ? "minDateSubmissionTo" : "maxDateSubmissionFrom"] = e.value;
    }else if(assignmentOrSubmission == 'assignment'){
      this[(fromOrTo == 0) ? "minDateAssignmentTo" : "maxDateAssignmentFrom"] = e.value;
    }

  }

  onSubmitSearchCriteria(){
    if(this.aosearchForm.status === 'VALID'){
      //date validation
      if((this.aosearchForm.value.dateOfSubmissionFrom &&
         !new Date(this.aosearchForm.value.dateOfSubmissionFrom).getTime()) ||
          (this.aosearchForm.value.dateOfSubmissionTo &&
         !new Date(this.aosearchForm.value.dateOfSubmissionTo).getTime())||
          (this.aosearchForm.value.dateOfAssignmentFrom &&
         !new Date(this.aosearchForm.value.dateOfAssignmentFrom).getTime())||
          (this.aosearchForm.value.dateOfAssignmentTo &&
         !new Date(this.aosearchForm.value.dateOfAssignmentTo).getTime())){
        console.error('>>> Invalid searchCriteria inputs');
        return null;
      }
    }else{
      console.error('>>> Invalid searchCriteria inputs');
      return null;
    }

    let agentCode, dateOfAssignmentTo, dateOfAssignmentFrom, dateOfSubmissionTo, dateOfSubmissionFrom;
    ({agentCode, dateOfAssignmentTo, dateOfAssignmentFrom, dateOfSubmissionTo, dateOfSubmissionFrom} = this.aosearchForm.value);
 
    //transform the raw date to formatted locale date string DDMMYYYY
    dateOfSubmissionFrom = !dateOfSubmissionFrom ? dateOfSubmissionFrom : convertFormat.dateToDDMMYYYY(new Date(dateOfSubmissionFrom));
    dateOfSubmissionTo = !dateOfSubmissionTo ? dateOfSubmissionTo : convertFormat.dateToDDMMYYYY(new Date(dateOfSubmissionTo));
    dateOfAssignmentFrom = !dateOfAssignmentFrom ? dateOfAssignmentFrom : convertFormat.dateToDDMMYYYY(new Date(dateOfAssignmentFrom));
    dateOfAssignmentTo = !dateOfAssignmentTo ? dateOfAssignmentTo : convertFormat.dateToDDMMYYYY(new Date(dateOfAssignmentTo));

    let searchCriteriaArr = [dateOfSubmissionFrom, dateOfSubmissionTo, dateOfAssignmentFrom, dateOfAssignmentTo, agentCode];

    this.aoInterfaceComponent.refreshAndReloadSearchRecordTable(searchCriteriaArr);
  }
}
