import { Component, OnInit, Input, AfterViewInit, ViewChild, AfterViewChecked, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EdmService } from '../../../../services/edm.service';
import { LoginUserService } from '../../../../services/loginUser.service';
import constants from '../../../../constants/constants';
import convertformat from '../../../../utils/convertformat';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription} from 'rxjs';
import {get as _get, set as _set, range as _range, fill as _fill} from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  //use policyNo as unique id to get the user selected records
  selectedRecords: Array<String> = []; //should be cleared whenever the search criteria is refreshed
  //to be converted from selectedRecords, the elem should be seperated by a delimiter ','
  //only will selectedRecords be converted into selectedRecordsStr when the form is submitted
  edmManagementStep2Form = new FormGroup({
    surname: new FormControl('', [Validators.pattern('[0-9a-zA-Z ]+')]),
    firstName: new FormControl('', [Validators.pattern('[0-9a-zA-Z ]+')]),
    genderOption: new FormControl(''),
    mobileNo: new FormControl('',[Validators.pattern('[0-9]+'), Validators.maxLength(8), Validators.minLength(8)]),
    clientId: new FormControl('',[Validators.pattern('[0-9a-zA-Z]+')]),
    birthdayOption: new FormControl(''),
    email: new FormControl('', Validators.email),
    campaignCd: new FormControl('',[Validators.pattern('[0-9a-zA-Z]+')]),
    partnerCd: new FormControl('',[Validators.pattern('[0-9a-zA-Z]+')]),
    partnerName: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    dateOfSubmissionFrom: new FormControl(''),
    dateOfSubmissionTo: new FormControl(''),
    selfService: new FormControl(''),
    failUpsell6Months: new FormControl('')
  });
  @Input()edmPageInfo : {
    currStep: String,
    commCode: String
  };
  displayedColumnsName : String[] = constants["EDMStep2Field"];
  noOfRecords:number = 0;
  minDateTo; maxDateFrom;

  allPolNoSubscription : Subscription;
  agentCodeSubscription : Subscription;

  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger : Subject<any>= new Subject();
  dataTableSettings : any;//for changing table pages in gotopage
  searchCriterias : string[];
  searchCriteriasDisplay : string[];//for display purpose only, preprocessing the searchCriteria and display understandable strs
  searchCriteriaFieldName : string[] = ["surname","firstName","genderOption",
    "mobileNo","clientId", "birthdayOption",
    "email",
    "campaignCd","partnerCd","partnerName",
    "dateOfSubmissionFrom", "dateOfSubmissionTo",
    "selfService","failUpsell6Months"];
  noOfPage : number;
  currPage : number = 1;
  bodyRendererChangeListener;
  bodyRendererClickListener;
  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "inactive-gray",
    "10": "active-red",
    "20": "inactive-gray",
  };

  polNoList: Array<String> = [];
  isDatatableFormRecordsFetched : boolean = false;
  //would need to redraw the datatable within this comp's this.loginUserService.usercodeObs$.subscribe() if this is still false

  constructor(
    private edmService : EdmService,
    private loginUserService : LoginUserService,
    private renderer2 : Renderer2,
    private router : Router
  ) { }
  goBackStep1(){
    console.log("go from step2 to step1");
    this.edmPageInfo.currStep = "step1";
    window.scrollTo(0,0);
  }
  onSubmitStep2(){ //not posting via form but posting via edmService method instead
    console.log("go from step2 to step3");
    let queryParams = {
      selectedRecordsStr: this.convertSelectedRecordIntoArray(this.selectedRecords)
    };

    this.edmService.postEdmReceiver(queryParams, 'sendParams').subscribe((resp: any) =>{
      console.log(resp);

    }, (error) => {
      console.log('>>> postEdmReceiver error:', error)
    });
    this.edmPageInfo.currStep = "step3";
    window.scrollTo(0,0);
  }

  convertSelectedRecordIntoArray(selectedRecords){
    let selectedRecordsStr = "";
    selectedRecords.forEach((elem, key)=>{
      selectedRecordsStr += (key !== selectedRecords.length - 1) ? (elem + ",") : elem;
    });
    console.log(selectedRecordsStr);
    return selectedRecordsStr;
  }

  onSubmitSearchCriteria(){

    if(this.edmManagementStep2Form.status === 'VALID'){
      //date validation
      if((this.edmManagementStep2Form.value.dateOfSubmissionFrom &&
         !new Date(this.edmManagementStep2Form.value.dateOfSubmissionFrom).getTime()) ||
          (this.edmManagementStep2Form.value.dateOfSubmissionTo &&
         !new Date(this.edmManagementStep2Form.value.dateOfSubmissionTo).getTime())){
        console.error('>>> Invalid searchCriteria inputs');
        return null;
      }
    }
    else{
      console.error('>>> Invalid searchCriteria inputs');
      return null;
    }

    let surname = this.edmManagementStep2Form.controls['surname'].value;
    let firstName = this.edmManagementStep2Form.controls['firstName'].value;
    let genderOption = $("[name=genderOptionField]").val();
    let mobileNo = this.edmManagementStep2Form.controls['mobileNo'].value;
    let clientId = this.edmManagementStep2Form.controls['clientId'].value;
    let birthdayOption = Number($("[name=birthdayOptionField]").val()) || "";
    let email = this.edmManagementStep2Form.controls['email'].value;
    let campaignCd = this.edmManagementStep2Form.controls['campaignCd'].value;
    let partnerCd = this.edmManagementStep2Form.controls['partnerCd'].value;
    let partnerName = this.edmManagementStep2Form.controls['partnerName'].value;
    let dateOfSubmissionFrom = this.edmManagementStep2Form.controls['dateOfSubmissionFrom'].value;
    let dateOfSubmissionTo = this.edmManagementStep2Form.controls['dateOfSubmissionTo'].value;
    let selfService = this.edmManagementStep2Form.controls['selfService'].value || false;
    let failUpsell6Months = this.edmManagementStep2Form.controls['failUpsell6Months'].value || false;

    let selfServiceStr = selfService ? 'Self Service: true' : 'Self Service: false';
    let failUpsell6MonthsStr = failUpsell6Months ? 'Unsuccessful Upsell in 6 months: true' : 'Unsuccessful Upsell in 6 months: false';
    let birthdayOptionToOptionIndex = birthdayOption;
    let birthdayOptionStr = birthdayOption ? $('[name=birthdayOptionField] option:eq(' + birthdayOptionToOptionIndex + ')').attr("monthName") : '';
    //further pre process the date of submission
    dateOfSubmissionFrom = dateOfSubmissionFrom ? convertformat.dateToDDMMYYYY(new Date(dateOfSubmissionFrom)) : dateOfSubmissionFrom;
    dateOfSubmissionTo = dateOfSubmissionTo ? convertformat.dateToDDMMYYYY(new Date(dateOfSubmissionTo)) : dateOfSubmissionTo;
    //

    this.searchCriterias = [surname, firstName, genderOption, mobileNo, clientId,
        birthdayOption,
        email, campaignCd, partnerCd,
      partnerName, dateOfSubmissionFrom, dateOfSubmissionTo,
      selfService, failUpsell6Months];

    this.searchCriteriasDisplay = [surname, firstName, genderOption, mobileNo, clientId, birthdayOptionStr, email, campaignCd, partnerCd,
      partnerName, dateOfSubmissionFrom, dateOfSubmissionTo,
      selfServiceStr, failUpsell6MonthsStr];

    //clear all the elems in selectedRecords array
    this.selectedRecords.length = 0;

    this.refreshAndReloadSearchRecordTable();
  }
  dropdownDivArray : Array<String> = ["div-birthdayOption", "div-genderOption"];
  closeAllDropDown(){
    this.dropdownDivArray.forEach((elem,key)=>{
      if($("." + elem + " .select-selected").hasClass("select-arrow-active")){
        $("." + elem + " .select-selected").removeClass("select-arrow-active");
        $("." + elem + " .select-items").addClass("select-hide");
      }
    });
  }
  ngOnInit() {
    //if no this.loginUserService.usercode not yet fetched, should go back to default page,
    //as usercode is used to fetch records and whole polno list related to this agent
    if(!this.loginUserService.usercode && constants.localOrVm === 'vm'){
      this.router.navigate(['/']);
    }

    this.searchCriterias = _fill(new Array(14), "");
    //preset the checkbox fields with false init value
    this.searchCriterias[12] = "false";
    this.searchCriterias[13] = "false";

    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val, index)=>{
      colArr.push({
        data:val,
        orderable: false,
        width:'100px'
      })
    });
    this.dtOptions = {
      fixedColumns:{
        leftColumns: 1
      },
      scrollCollapse: true,
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      scrollX:true,
      scrollY:false,
      columnDefs : this.edmManagementFormRecordColumnDef(),
      ajax : this.edmManagementFormRecordAjax(),
      processing: true,
      serverSide: true,
      language: {
        info: "",
        paginate: {
          first:    '« first',
          previous: '‹ prev',
          next:     'next ›',
          last:     'last »'
        },
        //display none length Menu and add a new custom menu
        // to change the hidden length menu
        lengthMenu: ``,
      },
      searching: false,
      columns: colArr,
    };
    $('.table-edmManagementForm').on( 'page.dt', function (event,settings) {
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });
    //get the whole available list of customer's polno for curr edm template here and store it into edmService
    this.agentCodeSubscription = this.loginUserService.usercodeObs$.subscribe((resp: any) => {
      let queryParams = {
        agentCode: resp
      };
      this.allPolNoSubscription = this.edmService.getAllPolNoList(queryParams, 'retrieve').subscribe((resp : any) =>{
        this.edmService.polNoList = resp.body;
      });
    });
  }

  ngAfterViewInit(){//only load data after view are initialized
    this.initDropdown("birthdayOption");
    this.initDropdown("genderOption");
    this.dtTrigger.next();
    this.relistenThCheckbox();

    this.bodyRendererClickListener = this.renderer2.listen("body", "click", (event)=>{
      if(!$(event.target).hasClass("select-selected")){
        this.closeAllDropDown();
      }
    });

    this.bodyRendererChangeListener = this.renderer2.listen("body", 'change', (event)=>{
      if($(event.target).hasClass('a-checkbox')){ //only check the checkbox with class a-checkbox
        let queryParams = $(event.target).attr("queryParams");
        let policyNo = queryParams.split(":")[1];

        if($(event.target).prop('checked')){ //when checkbox is checked, add policyNo into selectedRecords
          //only add into the selectedRecords array if the policyNo doesnt exist in selectedRecords
          if(this.selectedRecords.indexOf(policyNo) === -1){
            this.selectedRecords.push(policyNo);
          }
        }else{//when checkbox isnt checked, remove policyNo from selectedRecords
          let theIndexOfTargetPersonId = this.selectedRecords.indexOf(policyNo);
          if(theIndexOfTargetPersonId !== -1){
            //remove the specific elem from the selectedRecords
            this.selectedRecords.splice(theIndexOfTargetPersonId, 1);
          }
        }
        console.log('selectedRecords: ', this.selectedRecords)
      }
    });
  }
  ngAfterViewChecked(){
    //fetch the datatable's settings
    //since angular-datatables is not supporting changing table page in dtoption yet
    //make use of settings.oApi._fnPageChange to change the page
    //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
    this.dataTableSettings = _get($.fn['dataTable'], 'settings[0]');

  }
  ngOnDestroy(){
    if(this.bodyRendererChangeListener){
      this.bodyRendererChangeListener();
    }
    if(this.dtTrigger){
      this.dtTrigger.unsubscribe();
    }
    if(this.allPolNoSubscription){
      this.allPolNoSubscription.unsubscribe();
    }
    if(this.agentCodeSubscription){
      this.agentCodeSubscription.unsubscribe();
    }
  }
  changeTablePerPage(val){
    //reset all the length menu 's class to gray color
    this.mapToLengthMenuNum = {
      "5": "inactive-gray",
      "10": "inactive-gray",
      "20": "inactive-gray",
    };
    this.mapToLengthMenuNum[parseInt(val)] = "active-red";
    //reset the datatable after changing dtOptions to redraw the table
    this.dtOptions.pageLength = val;//change table's no of records

    this.dTable.dtInstance.then((dtInstance: DataTables.Api) => {
      //redraw table only need these 2 funcs
      dtInstance.destroy();
      this.dtTrigger.next();
    });
    this.noOfPage = Math.ceil(this.noOfRecords/this.dtOptions.pageLength);
    this.currPage = 1;
    $(".input-goToPage_left").val(1);
    this.relistenThCheckbox();
  }

  relistenThCheckbox(){
    $('.th-grayCheckbox').off();
    $('.th-grayCheckbox').on('change', ()=>{
      //a-checkbox happens to be doubled due to the fact that angular-datatable create an extra copy of col and put it on
      //the cols that are specified as fixed by fixedColumns option, so the size needs to be divided by 2
      //the first half and sec half are referring the same group of elements
      //but the clickable checkboxes are the sec half which is placed on top of first half
      //so we are going to take sec half here
      let aCheckboxSize = $(".a-checkbox").length;
      _range(aCheckboxSize/2, aCheckboxSize).forEach((elem, key)=>{
        //store the init checked info of the current .a-checkbox
        let currACheckboxChecked = $(".a-checkbox:eq(" + elem + ")").prop('checked');

        //[! check] all the checkboxes in this page
        $('.a-checkbox:eq(' + elem + ')').prop('checked', !currACheckboxChecked);

        //push all the policyNos that attached in the checkboxes into selectedRecords array
        let queryParamsAttr = $('.a-checkbox:eq(' + elem + ')').attr('queryParams');
        let policyNo = queryParamsAttr.split(":")[1];
        if(currACheckboxChecked){
          let indexOfPersonId = this.selectedRecords.indexOf(policyNo);
          if(indexOfPersonId !== -1){ //the policyNo should be exist, otherwise should be an error
            this.selectedRecords.splice(indexOfPersonId, 1);
          }
          //
        }else{
          this.selectedRecords.push(policyNo);
        }
      });
      console.log(this.selectedRecords);
    });
  }

  changeCurrTablePage(page){
    if(page !== "" && /^\d+$/.test(page)){
      console.log('Change to page: ' + page);
      let pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true)
      console.log((pageChangeStatus)?'Current page changed to '+ page : "Fail to change page, page exceed no of page");
      this.currPage = Number(page);
    }

    this.relistenThCheckbox();
  }
  //refresh and reload inside this component
  refreshAndReloadSearchRecordTable(){
    let dTableInstance = _get(this.dTable, "dtInstance");
    this.currPage = 1;
    $(".input-goToPage_left").val(1);
    if(dTableInstance){
      dTableInstance.then((dtInstance: DataTables.Api) => {
        //redraw table only need these 2 funcs
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    }

    this.relistenThCheckbox();
  }

  edmManagementFormRecordColumnDef(){
    return [{
      targets: "_all",
      createdCell: function (td, cellData, rowData, row, col) {
        let convertDate = (date) => {
          return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        }
        if(col === 0){
          return $(td).html(`<input type="checkbox" class="a-checkbox" queryParams="policyNo:` +
            rowData.policyNo
           + `" ` + (cellData === 1 ? "checked" : "") + `/>`);
        }else if(col === 10){
          let convertDateData = cellData ? new Date(cellData.substr(0,10)) : undefined;
          return $(td).html(`<span>` + (convertDateData ? convertDate(convertDateData) : "-") + `</span>`);
        }else{
          return $(td).html(((typeof cellData == "string" && cellData.length > 20) ? `<span class="css-wordBreakAll">` : `<span>`) +
           cellData + `</span>`);
        }
      }
    }]
  }


  edmManagementFormRecordAjax(){
    return (params, callback, settings) => {
      let queryParams = {};
      let draw, start, length, unusedParams;
      ({draw, start, length, ...unusedParams} = params);
      queryParams = {
        draw, start, length,
        agentCode: this.loginUserService.usercode
      };
      if(this.edmPageInfo.commCode){
        _set(queryParams, 'commCode', this.edmPageInfo.commCode);
      }

      //put all the params from searchCriteria into queryParams
      this.searchCriterias.forEach((data, key)=>{
        if(key >= 12){ //checkbox fields. even the field return false should be posted to server
          queryParams[this.searchCriteriaFieldName[key]] = data;
        }else{
          if(data){
            queryParams[this.searchCriteriaFieldName[key]] = data;
          }
        }
      });

      this.edmService.getManagementFormSearchRecord(queryParams, 'dataTable').subscribe((resp : any) => {
        this.noOfRecords = resp.body.recordsFiltered;
        this.noOfPage = Math.ceil(this.noOfRecords/this.dtOptions.pageLength);
        this.currPage = (resp.body.recordsFiltered >= 1) ? this.currPage : 0;
        let respDataArr = [];

        //local convert json into server page changing mode
        /*let startPt = (this.currPage-1) * this.dtOptions.pageLength;
        let endPt = startPt + this.dtOptions.pageLength;
        //[variable: checkbox = 1 [checked] according to the this.selectedRecords variable]
        resp.body.data.forEach((elem, key)=>{
          if(key >= startPt && key < endPt){
          //if the policyNo is found inside the selectedRecords, then the checkbox attr should be 1 and should be checked
            _set(elem, "checkbox", (this.selectedRecords.indexOf(elem.policyNo) === -1) ? 0 : 1);
            respDataArr.push(elem);
          }
        }, (error)=>{
          console.error(">>> getManagementFormSearchRecord error:", error);
        });
        console.log(startPt, endPt, this.currPage)*/
        //local json would not work, this is for vm only
        //[variable: checkbox = 1 [checked] according to the this.selectedRecords variable]
        resp.body.data.forEach((elem, key)=>{
          //if the policyNo is found inside the selectedRecords, then the checkbox attr should be 1 and should be checked
            _set(elem, "checkbox", (this.selectedRecords.indexOf(elem.policyNo) === -1) ? 0 : 1);
            respDataArr.push(elem);
        });

        callback({
          data:respDataArr,
          recordsTotal: resp.body.recordsTotal,
          recordsFiltered: resp.body.recordsFiltered
        });
      }, (error) => {
        console.error("error: ", error);
      });
    }
  }

  initDropdown(fieldName){
    $("[name=" + fieldName + "Field]").val($(`[name="` + fieldName + `Field"] option:eq(0)`).val()); //initialize the select into default val first
    $(".div-" + fieldName + " .select-items div:eq(0)").addClass("same-as-selected");
    $(".div-" + fieldName + " .select-selected").text($(".div-" + fieldName + " .select-items div:eq(0)").text());
    //select-selected select-arrow-active
    //select-hide, same-as-selected
    $(".div-" + fieldName +" .select-selected").on("click", (event)=>{
      $(".div-" + fieldName +" .select-items").removeClass("select-hide");
      $(".div-" + fieldName +" .select-selected").addClass("select-arrow-active");
    });

    //
    let selectOptionNameMapVal = {}; //select option name map to val
    for(var i = 0; i < $("[name=" + fieldName + "Field] option").length; i++){
      let currOption = $("[name=" + fieldName + "Field] option:eq(" + i + ")");
      selectOptionNameMapVal[currOption.html()] = currOption.val();
    }
    let selectItemsChildren = $('.div-' + fieldName + ' .select-items').children();
    for(var j = 0; j < selectItemsChildren.length; j++){
      $(".div-" + fieldName + " .select-items div:eq(" + j + ")").on('click', (e)=>{

        $(".div-" + fieldName + " .select-selected").removeClass("select-arrow-active");
        $(".div-" + fieldName + " .select-selected").text($(e.target).text());
        $(".div-" + fieldName + " .select-items").addClass("select-hide");
        for(var k = 0; k < selectItemsChildren.length; k++){
          $(".div-" + fieldName + " .select-items div:eq(" + k + ")").removeClass("same-as-selected");
        }
        $(e.target).addClass("same-as-selected");

        $("[name=" + fieldName + "Field]").val(
          selectOptionNameMapVal[$(e.target).text()]
        );
      });
    }
  }
  //to set the min, max date of from / to once submissionfrom / to is changed
  dateOfSubmissionChange(e, fromOrTo){
    this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
  }

  resetDateRangeRestrictAndDropDownOption(){
    this.minDateTo = null;
    this.maxDateFrom = null;
    $(".select-selected").html("&nbsp;");
  }
}
