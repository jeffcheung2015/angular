import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, AfterViewChecked, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgentassignmentService } from '../../../services/agentassignment.service';
import convertFormat from '../../../utils/convertformat';
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

  bodyRendererListener;

  constructor(
    private agentassignmentService : AgentassignmentService,
    private renderer2 : Renderer2
  ) {}

  dropdownDivArray : Array<String>;

  closeAllDropDown(){
    this.dropdownDivArray.forEach((elem,key)=>{
      if($("." + elem + " .select-selected").hasClass("select-arrow-active")){
        $("." + elem + " .select-selected").removeClass("select-arrow-active");
        $("." + elem + " .select-items").addClass("select-hide");
      }
    });
  }
  ngOnInit() {
    this.dropdownDivArray = this.currSubPage === 'easAgentAssignCS' ?
      ["div-assignmentOption", "div-contactCustomerOption", "div-assignmentStatusOption"] : ["div-assignmentOption"];

    this.bodyRendererListener = this.renderer2.listen("body", 'click', (event)=>{
      if(!$(event.target).hasClass("select-selected")){
        this.closeAllDropDown();
      }
    });

  }

  ngOnChanges(changes: SimpleChanges){
    console.log('Info: Search Criteria component onchanges, ', changes, "this.currSubPage:", this.currSubPage);
    let mobileNoValidator = [Validators.pattern('[0-9]+'), Validators.maxLength(8), Validators.minLength(8)];
    let numValidator = [Validators.pattern('[0-9]+')];
    let numEngValidator = [Validators.pattern('[0-9a-zA-Z]+')];
    let numEngSpaceValidator = [Validators.pattern('[0-9a-zA-Z ]+')];
    let assignmentOptionValidator = [Validators.pattern('\b(A{1,2}|R)\b')];
    let contactCustomerValidator = [Validators.pattern('\b(Y|N)\b')];
    let assignmentStatusValidator = [Validators.pattern('\b[1-4]\b')];
    this.searchForm = (this.currSubPage === 'easAgentAssignGI') ?
    new FormGroup({
      fullName : new FormControl('', numEngSpaceValidator),
      policyNo : new FormControl('', numValidator),
      mobileNo : new FormControl('',mobileNoValidator),
      emailAddr : new FormControl('', Validators.email),
      idCardNo : new FormControl('',numEngSpaceValidator),
      dateOfSubmissionFrom : new FormControl(''),
      dateOfSubmissionTo : new FormControl(''),
      assignmentOption : new FormControl('',assignmentOptionValidator)
    }) : (this.currSubPage === 'easAgentAssignCS') ? new FormGroup({
      fullName : new FormControl('',numEngSpaceValidator),
      mobileNo : new FormControl('',mobileNoValidator),
      emailAddr : new FormControl('', Validators.email),
      idCardNo : new FormControl('',numEngSpaceValidator),
      dateOfSubmissionFrom : new FormControl(''),
      dateOfSubmissionTo : new FormControl(''),
      assignmentOption : new FormControl('',assignmentOptionValidator),
      contactCustomerOption : new FormControl('',contactCustomerValidator),
      assignmentStatusOption : new FormControl('',assignmentStatusValidator)
    }) : new FormGroup({
     agentCode : new FormControl('', numEngValidator),
     agentPhone : new FormControl('',mobileNoValidator),
     agentName : new FormControl('', numEngSpaceValidator)
   });
   this.dropDownInitialized = (['easAgentAssignCS','easAgentAssignGI'].indexOf(this.currSubPage) !== -1) ?
    false : this.dropDownInitialized;
  }

  resetDateRangeRestrictAndDropDownOption(){
    this.maxDateFrom = null;
    this.minDateTo = null;
    $(".select-selected").html("&nbsp");
  }

  //search criteria's drop down is dynamically generated by jquery
  //and should be called when the subpage has just changed
  initDropdown(fieldName){
    let divFieldName = `.div-` + fieldName + ` `;

    $(divFieldName + ".select-items div:eq(" + ((fieldName !== 'assignmentOption') ? '0' : '1') + ")").addClass("same-as-selected");
    $(divFieldName + ".select-selected").text($(divFieldName + ".select-items div:eq(" + ((fieldName !== 'assignmentOption') ? '0' : '1') + ")").text());
    //select-selected select-arrow-active
    //select-hide, same-as-selected
    $(divFieldName + ".select-selected").on("click", ()=>{
      $(divFieldName + ".select-items").removeClass("select-hide");
      $(divFieldName + ".select-selected").addClass("select-arrow-active");
    });
    //
    let selectOptionNameMapVal = {}; //select option name map to val
    for(var i = 0; i < $("[name=" + fieldName + "Field] option").length; i++){
      let currOption = $("[name=" + fieldName + "Field] option:eq(" + i + ")");
      selectOptionNameMapVal[currOption.html()] = currOption.val();
    }
    //register event for div
    let selectItemsChildren = $(divFieldName + '.select-items').children();
    for(var j = 0; j < selectItemsChildren.length; j++){
      $(divFieldName + ".select-items div:eq(" + j + ")").on('click', (e)=>{
        $(divFieldName + ".select-selected").removeClass("select-arrow-active");
        $(divFieldName + ".select-selected").text($(e.target).text());
        $(divFieldName + ".select-items").addClass("select-hide");
        for(var k = 0; k < selectItemsChildren.length; k++){
          $(divFieldName + ".select-items div:eq(" + k + ")").removeClass("same-as-selected");
        }
        $(e.target).addClass("same-as-selected");

        $("[name='" + fieldName + "Field']").val(
          selectOptionNameMapVal[$(e.target).text()]
        );
      });
    }
  }
  ngAfterViewInit(){
    if(this.currSubPage === 'easAgentAssignGI'){
      this.initDropdown('assignmentOption'); //the 'assignment' dropdown is dynamically generated
    }else{
      this.initDropdown('assignmentOption'); //the 'assignment' dropdown is dynamically generated
      this.initDropdown('contactCustomerOption'); //the 'assignment' dropdown is dynamically generated
      this.initDropdown('assignmentStatusOption'); //the 'assignment' dropdown is dynamically generated
    }
    $('[name=assignmentOptionField]').val("A");
  }
  ngAfterViewChecked(){
    if(!this.dropDownInitialized){
      if(this.currSubPage === 'easAgentAssignGI'){
        this.initDropdown('assignmentOption'); //the 'assignment' dropdown is dynamically generated
      }else{
        this.initDropdown('assignmentOption'); //the 'assignment' dropdown is dynamically generated
        this.initDropdown('contactCustomerOption'); //the 'assignment' dropdown is dynamically generated
        this.initDropdown('assignmentStatusOption'); //the 'assignment' dropdown is dynamically generated
      }
      this.dropDownInitialized = true;
    }
  }
  //to set the min, max date of from / to once submissionfrom / to is changed
  dateOfSubmissionChange(e, fromOrTo){
    this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
  }

  onSubmitSearchCriteria(){
    if(this.searchForm.status === 'VALID'){
      //date validation
      if((this.searchForm.value.dateOfSubmissionFrom &&
         !new Date(this.searchForm.value.dateOfSubmissionFrom).getTime()) ||
          (this.searchForm.value.dateOfSubmissionTo &&
         !new Date(this.searchForm.value.dateOfSubmissionTo).getTime())){
        console.error('>>> Invalid searchCriteria inputs');
        return null;
      }
    }else{
      console.error('>>> Invalid searchCriteria inputs');
      return null;
    }

    let fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption,
    contactCustomerOption,assignmentStatusOption,
    agentCode,agentPhone,agentName, queryParams;
    //angular reactive form cannot read value of a select elm
    //has to use jquery to read the div value and overwrite the search criterias that sent
    //to searchRecordComponent first
    assignmentOption = "",contactCustomerOption = "",assignmentStatusOption = "";

    if(this.currSubPage === 'easAgentAssignGI'){
      assignmentOption = $('[name=assignmentOptionField]').val();
    }else if(this.currSubPage === 'easAgentAssignCS'){
      assignmentOption = $('[name=assignmentOptionField]').val();
      contactCustomerOption = $('[name=contactCustomerOptionField]').val();
      assignmentStatusOption = $('[name=assignmentStatusOptionField]').val();
    }
    let isAgentAssign = ['easAgentAssignGI', 'easAgentAssignCS'].indexOf(this.currSubPage) !== -1;
    if(isAgentAssign){
      if(this.currSubPage === 'easAgentAssignGI'){
        ({fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo} = this.searchForm.value);
        queryParams = {fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo};
        this.agentassignmentService.setCurrCriteria("currGISearchCriteria", queryParams);
      }else{
        ({fullName,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo} = this.searchForm.value);
        queryParams = {fullName,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo};
        this.agentassignmentService.setCurrCriteria("currCSSearchCriteria", queryParams);
      }
    }else{
      ({agentCode, agentPhone, agentName} = this.searchForm.value);
      queryParams = {agentCode, agentPhone, agentName};
      this.agentassignmentService.setCurrCriteria("currDtlSearchCriteria", queryParams);      
    }
    //transform the raw date to formatted locale date string DDMMYYYY
    dateOfSubmissionFrom = !dateOfSubmissionFrom ? dateOfSubmissionFrom : convertFormat.dateToDDMMYYYY(new Date(dateOfSubmissionFrom));
    dateOfSubmissionTo = !dateOfSubmissionTo ? dateOfSubmissionTo : convertFormat.dateToDDMMYYYY(new Date(dateOfSubmissionTo));

    let searchCriteriaArr =
    (this.currSubPage === 'easAgentAssignGI') ?
    [fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption] :
    (this.currSubPage === 'easAgentAssignCS') ?
    [fullName,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption,contactCustomerOption,assignmentStatusOption] :
    [agentCode, agentPhone, agentName];
    let property = (isAgentAssign) ? "searchRecordComponent" : "detailSearchRecordComponent";

    this[property].refreshAndReloadSearchRecordTable(searchCriteriaArr);
  }

  setSearchRecordComponent(searchRecordComponent){ //ngif in the comps, they wouldnt be automatically assigned
    let property = (['easAgentAssignCS','easAgentAssignGI'].indexOf(this.currSubPage) !== -1) ? "searchRecordComponent" : "detailSearchRecordComponent";
    this[property] = searchRecordComponent;
  }
}
