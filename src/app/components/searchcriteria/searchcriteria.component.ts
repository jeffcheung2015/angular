import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.scss']
})
export class SearchcriteriaComponent implements OnInit, AfterViewInit {
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

  detailSearchForm = new FormGroup({
    agentCode : new FormControl(''),
    agentPhone : new FormControl(''),
    agentName : new FormControl('')
  });

  minDateTo;
  maxDateFrom;
  @Input()currSubPage;
  constructor() {
  }
  ngOnInit() {}

  ngAfterViewInit(){
    console.log('currSubPage::' , this.currSubPage)

  }



  //to set the min, max date of from / to once submissionfrom / to is changed
  dateOfSubmissionChange(e, fromOrTo){
    if(fromOrTo == 0){
      this.minDateTo = e.value;
    }else{
      this.maxDateFrom = e.value;
    }
  }

  onSubmitSearch(){
    let fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption,
    agentCode,agentPhone,agentName;
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
    assignmentOption = theSelectedIndex === -1 ? "" : $('[name="assignmentOptionField"] option:eq('+ theSelectedIndex+')').html();

    ({fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo} = this.searchForm.value);
    ({agentCode, agentPhone, agentName} = this.detailSearchForm.value);
    //transform the raw date to formatted locale date string YYYY/MM/DD
    dateOfSubmissionFrom = !dateOfSubmissionFrom ? dateOfSubmissionFrom : new Date(dateOfSubmissionFrom).toLocaleDateString();
    dateOfSubmissionTo = !dateOfSubmissionTo ? dateOfSubmissionTo : new Date(dateOfSubmissionTo).toLocaleDateString();

    let searchCriteriaArr = (this.currSubPage === 'agentAssign') ?
    [fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption] :
    [agentCode, agentPhone, agentName];

    let searchCriteriaArrName = (this.currSubPage === 'agentAssign') ?
    ["fullName","policyNo","mobileNo","emailAddr","idCardNo","dateOfSubmissionFrom","dateOfSubmissionTo","assignmentOption"] :
    ["agentCode","agentPhone","agentName"];
    this.searchRecordComponent.refreshAndReloadSearchRecordTable(searchCriteriaArr, searchCriteriaArrName);
  }
}
