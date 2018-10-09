import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgentassignmentService } from '../../services/agentassignment.service';

@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.scss']
})
export class SearchcriteriaComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked  {
  searchRecordComponent;
  detailSearchRecordComponent;

  searchForm;
  dropDownInitialized: boolean = false;

  minDateTo;
  maxDateFrom;
  @Input()currSubPage;

  constructor(
    private agentassignmentService : AgentassignmentService
  ) {}

  ngOnInit() {}

  //get funcs
  //agentassign page
  get fullName(){return this.searchForm.get("fullName");}
  get policyNo(){return this.searchForm.get("policyNo");}
  get mobileNo(){return this.searchForm.get("mobileNo");}
  get emailAddr(){return this.searchForm.get("emailAddr");}
  get idCardNo(){return this.searchForm.get("idCardNo");}
  get dateOfSubmissionFrom(){return this.searchForm.get("dateOfSubmissionFrom");}
  get dateOfSubmissionTo(){return this.searchForm.get("dateOfSubmissionTo");}
  get assignmentOption(){return this.searchForm.get("assignmentOption");}
  //agentdetail page
  get agentCode(){return this.searchForm.get("agentCode");}
  get agentPhone(){return this.searchForm.get("agentPhone");}
  get agentName(){return this.searchForm.get("agentName");}

  ngOnChanges(changes: SimpleChanges){
    console.log('Info: Search Criteria component onchanges, ', changes, "this.currSubPage:", this.currSubPage);
    let phoneNoValidator = [Validators.pattern('[0-9]+'), Validators.maxLength(8), Validators.minLength(8)];
    this.searchForm = (['easAgentAssignCS','easAgentAssignGI'].includes(this.currSubPage)) ?
    new FormGroup({
      fullName : new FormControl(''),
      policyNo : new FormControl(''),
      mobileNo : new FormControl('',phoneNoValidator),
      emailAddr : new FormControl('', Validators.email),
      idCardNo : new FormControl(''),
      dateOfSubmissionFrom : new FormControl(''),
      dateOfSubmissionTo : new FormControl(''),
      assignmentOption : new FormControl('')
    }) : new FormGroup({
     agentCode : new FormControl(''),
     agentPhone : new FormControl('',phoneNoValidator),
     agentName : new FormControl('')
   });
   this.dropDownInitialized = (['easAgentAssignCS','easAgentAssignGI'].includes(this.currSubPage)) ?
    false : this.dropDownInitialized;
  }
  //search criteria's drop down is dynamically generated by jquery
  //and should be called when the subpage has just changed
  initDropdown(){
    $("[name=assignmentOptionField]").val("A"); //initialize the select into default val first
    $(".select-items div:eq(0)").addClass("same-as-selected");
    $(".select-selected").text($(".select-items div:eq(0)").text());
    //select-selected select-arrow-active
    //select-hide, same-as-selected
    $(".select-selected").on("click", ()=>{
      $(".select-items").removeClass("select-hide");
      $(".select-selected").addClass("select-arrow-active");
    });
    //
    let selectOptionNameMapVal = {}; //select option name map to val
    for(var i = 0; i < $("[name=assignmentOptionField] option").length; i++){
      let currOption = $("[name=assignmentOptionField] option:eq(" + i + ")");
      selectOptionNameMapVal[currOption.html()] = currOption.val();
    }
    //register event for div
    let selectItemsChildren = $('.select-items').children();
    for(var j = 0; j < selectItemsChildren.length; j++){
      $(".select-items div:eq(" + j + ")").on('click', (e)=>{
        $(".select-selected").removeClass("select-arrow-active");
        $(".select-selected").text($(e.target).text());
        $(".select-items").addClass("select-hide");
        for(var k = 0; k < selectItemsChildren.length; k++){
          $(".select-items div:eq(" + k + ")").removeClass("same-as-selected");
        }
        $(e.target).addClass("same-as-selected");

        $("[name='assignmentOptionField']").val(
          selectOptionNameMapVal[$(e.target).text()]
        );
      });
    }
  }
  ngAfterViewInit(){
    this.initDropdown(); //the 'assignment' dropdown is dynamically generated
  }
  ngAfterViewChecked(){
    if(!this.dropDownInitialized){
      this.initDropdown();
      this.dropDownInitialized = true;
    }
  }
  //to set the min, max date of from / to once submissionfrom / to is changed
  dateOfSubmissionChange(e, fromOrTo){
    this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
  }

  onSubmitSearchCriteria(){
    let fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption,
    agentCode,agentPhone,agentName, paramsToServer;
    //angular form cannot read value of a select elm which is being controlled by div and jquery
    //has to use jquery to read the div value and overwrite the search criterias sent
    //to searchRecordComponent first
    assignmentOption = "";
    let isAgentAssign = ['easAgentAssignCS','easAgentAssignGI'].includes(this.currSubPage);
    for(var i = 0 ; i < $('.select-items div').length; i++){
      if($('.select-items div:eq(' + i + ')').hasClass('same-as-selected')){
        assignmentOption = $('[name="assignmentOptionField"] option:eq('+ i +')').html();
        break;
      }
    }
    if(isAgentAssign){
      ({fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo} = this.searchForm.value);
      paramsToServer = {fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo};
    }else{
      ({agentCode, agentPhone, agentName} = this.searchForm.value);
      paramsToServer = {agentCode, agentPhone, agentName};
    }
    //transform the raw date to formatted locale date string YYYY/MM/DD
    dateOfSubmissionFrom = !dateOfSubmissionFrom ? dateOfSubmissionFrom : new Date(dateOfSubmissionFrom).toLocaleDateString();
    dateOfSubmissionTo = !dateOfSubmissionTo ? dateOfSubmissionTo : new Date(dateOfSubmissionTo).toLocaleDateString();

    let searchCriteriaArr = (isAgentAssign) ?
    [fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption] :
    [agentCode, agentPhone, agentName];

    let property = (isAgentAssign) ? "searchRecordComponent" : "detailSearchRecordComponent";

    //request data from api via service
    this.agentassignmentService.postSearchCriteriaRecord(paramsToServer,'searchCriteria').subscribe((resp : any) => {
        console.log('resp : ', resp);
    });

    this[property].refreshAndReloadSearchRecordTable(searchCriteriaArr);
  }

  setSearchRecordComponent(searchRecordComponent){ //ngif in the comps, they wouldnt be automatically assigned
    let property = (['easAgentAssignCS','easAgentAssignGI'].includes(this.currSubPage)) ? "searchRecordComponent" : "detailSearchRecordComponent";
    this[property] = searchRecordComponent;
  }
}
