import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewChecked, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgentassignmentService } from '../../../services/agentassignment.service';
import { GISearchCriteria, CSSearchCriteria } from '../../../models/agentassignment.model';
import convertFormat from '../../../utils/convertformat';
@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.scss']
})
export class SearchcriteriaComponent implements OnInit, OnChanges, AfterViewChecked  {
  searchRecordComponent;
  detailSearchRecordComponent;

  searchForm;
  dropDownInitialized: boolean = false;

  minDateTo : Date;
  maxDateFrom : Date;
  @Input()currSubPage;

  criteriaObj: any;

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
    let mobileNoValidator = [Validators.pattern('[0-9]+'), Validators.maxLength(8), Validators.minLength(8)];
    let numValidator = [Validators.pattern('[0-9]+')];
    let numEngValidator = [Validators.pattern('[0-9a-zA-Z]+')];
    let numEngSpaceValidator = [Validators.pattern('[0-9a-zA-Z ]+')];
    this.criteriaObj = this.currSubPage === 'easAgentAssignGI' ? this.agentassignmentService.currGISearchCriteria :
                       this.currSubPage === 'easAgentAssignCS' ? this.agentassignmentService.currCSSearchCriteria : {};
    this.searchForm = (this.currSubPage === 'easAgentAssignGI') ?
    new FormGroup({
      fullName : new FormControl(this.criteriaObj.fullName, numEngSpaceValidator),
      policyNo : new FormControl(this.criteriaObj.policyNo, numValidator),
      mobileNo : new FormControl(this.criteriaObj.mobileNo,mobileNoValidator),
      emailAddr : new FormControl(this.criteriaObj.emailAddr, Validators.email),
      idCardNo : new FormControl(this.criteriaObj.idCardNo,numEngSpaceValidator),
      dateOfSubmissionFrom : new FormControl(this.criteriaObj.dateOfSubmissionFrom),
      dateOfSubmissionTo : new FormControl(this.criteriaObj.dateOfSubmissionTo),
      assignmentOption : new FormControl(this.criteriaObj.assignmentOption)
    }) : (this.currSubPage === 'easAgentAssignCS') ? new FormGroup({
      fullName : new FormControl(this.criteriaObj.fullName,numEngSpaceValidator),
      mobileNo : new FormControl(this.criteriaObj.mobileNo,mobileNoValidator),
      emailAddr : new FormControl(this.criteriaObj.emailAddr, Validators.email),
      idCardNo : new FormControl(this.criteriaObj.idCardNo,numEngSpaceValidator),
      dateOfSubmissionFrom : new FormControl(this.criteriaObj.dateOfSubmissionFrom),
      dateOfSubmissionTo : new FormControl(this.criteriaObj.dateOfSubmissionTo),
      assignmentOption : new FormControl(this.criteriaObj.assignmentOption),
      contactCustomerOption : new FormControl(this.criteriaObj.contactCustomerOption),
      assignmentStatusOption : new FormControl(this.criteriaObj.assignmentStatusOption)
    }) : new FormGroup({
     agentCode : new FormControl('', numEngValidator),
     agentPhone : new FormControl('',mobileNoValidator),
     agentName : new FormControl('', numEngSpaceValidator)
   });

   this.minDateTo = this.criteriaObj.dateOfSubmissionFrom || null;
   this.maxDateFrom = this.criteriaObj.dateOfSubmissionTo || null;

   this.dropDownInitialized = (['easAgentAssignCS','easAgentAssignGI'].indexOf(this.currSubPage) !== -1) ?
    false : this.dropDownInitialized;
  }

  mapOptionValToTxt = {
    "" : "&nbsp;",
    "A": "Assign",
    "AA": "Auto Assigned",
    "R": "Re-assign",
    "Y": "Yes",
    "N": "No",
    "1": "To apply for extension",
    "2": "Applied extension",
    "3": "Opt-out from this program",
    "4": "Re-assigned"
  }

  //set the option according to the curr value of the corresponding select elem
  setOptionDivHTML(_criteriaObj : any){
    if(this.currSubPage == 'easAgentAssignGI'){
      $(".div-assignmentOption .select-selected").html(this.mapOptionValToTxt[_criteriaObj.assignmentOption]);
    }else if(this.currSubPage == 'easAgentAssignCS'){
      $(".div-assignmentOption .select-selected").html(this.mapOptionValToTxt[_criteriaObj.assignmentOption]);
      $(".div-contactCustomerOption .select-selected").html(this.mapOptionValToTxt[_criteriaObj.contactCustomerOption]);
      $(".div-assignmentStatusOption .select-selected").html(this.mapOptionValToTxt[_criteriaObj.assignmentStatusOption]);
    }
  }

  resetDateRangeRestrictAndDropDownOption(){
    this.maxDateFrom = null;
    this.minDateTo = null;
    $(".select-selected").html("&nbsp;");
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

  ngAfterViewChecked(){
    if(!this.dropDownInitialized){
      if(this.currSubPage === 'easAgentAssignGI'){
        this.initDropdown('assignmentOption'); //the 'assignment' dropdown is dynamically generated
      }else{
        this.initDropdown('assignmentOption'); //the 'assignment' dropdown is dynamically generated
        this.initDropdown('contactCustomerOption'); //the 'assignment' dropdown is dynamically generated
        this.initDropdown('assignmentStatusOption'); //the 'assignment' dropdown is dynamically generated
      }
      if(['easAgentAssignGI', 'easAgentAssignCS'].indexOf(this.currSubPage) !== -1){
        this.setOptionDivHTML(this.criteriaObj);
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
        queryParams = {fullName,policyNo,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption};
        this.agentassignmentService.setCurrCriteria("currGISearchCriteria", queryParams);
      }else{
        ({fullName,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo} = this.searchForm.value);
        queryParams = {fullName,mobileNo,emailAddr,idCardNo,dateOfSubmissionFrom,dateOfSubmissionTo,assignmentOption,contactCustomerOption,assignmentStatusOption};
        this.agentassignmentService.setCurrCriteria("currCSSearchCriteria", queryParams);
      }
    }else{
      ({agentCode, agentPhone, agentName} = this.searchForm.value);
      queryParams = {agentCode, agentPhone, agentName};
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

}
