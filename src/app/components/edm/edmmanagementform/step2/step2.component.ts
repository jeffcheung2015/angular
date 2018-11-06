import { Component, OnInit, Input, AfterViewInit, ViewChild, AfterViewChecked, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EdmService } from '../../../../services/edm.service';
import constants from '../../../../constants/constants';
import { DataTableDirective } from 'angular-datatables';
import { Subject} from 'rxjs';
import {get as _get, set as _set, range as _range} from 'lodash';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  //use personId as unique id to get the user selected records
  selectedRecords: Array<String> = []; //should be cleared whenever the search criteria is refreshed
  //to be converted from selectedRecords, the elem should be seperated by a delimiter ','
  //only will selectedRecords be converted into selectedRecordsStr when the form is submitted
  edmManagementStep2Form = new FormGroup({
    surname: new FormControl(''),
    firstName: new FormControl(''),
    gender: new FormControl(''),
    mobileNo: new FormControl(''),
    clientId: new FormControl(''),
    birthdayOption: new FormControl(''),
    email: new FormControl(''),
    campaignCd: new FormControl(''),
    partnerCd: new FormControl(''),
    partnerName: new FormControl(''),
    dateOfSubmissionFrom: new FormControl(''),
    dateOfSubmissionTo: new FormControl(''),
    selfService: new FormControl(''),
    failUpsell6Months: new FormControl(''),
    selfServiceWithLife: new FormControl('')
  });
  @Input()edmPageInfo : {
    currStep: String
  };
  displayedColumnsName : String[] = constants["EDMStep2Field"];
  noOfRecords:number = 0;

  @ViewChild(DataTableDirective) dTable : DataTableDirective;
  dtOptions :any = {};
  dtTrigger : Subject<any>= new Subject();
  dataTableSettings : any;//for changing table pages in gotopage
  searchCriterias : string[];
  searchCriteriaFieldName : string[];
  noOfPage : number;
  currPage : number = 1;
  bodyRendererListener;
  //map the page num to the jquery elem of page num
  mapToLengthMenuNum = {
    "5": "inactive-gray",
    "10": "inactive-gray",
    "20": "active-red",
  };

  constructor(
    private edmService : EdmService,
    private renderer2 : Renderer2
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
    console.log("submitting search criteria");
    let params = {
      firstName: this.edmManagementStep2Form.controls['firstName'].value,
      gender: this.edmManagementStep2Form.controls['gender'].value,
      mobileNo: this.edmManagementStep2Form.controls['mobileNo'].value,
      clientId: this.edmManagementStep2Form.controls['clientId'].value,
      birthdayOption: this.edmManagementStep2Form.controls['birthdayOption'].value,
      email: this.edmManagementStep2Form.controls['email'].value,
      campaignCd: this.edmManagementStep2Form.controls['campaignCd'].value,
      partnerCd: this.edmManagementStep2Form.controls['partnerCd'].value,
      partnerName: this.edmManagementStep2Form.controls['partnerName'].value,
      dateOfSubmissionFrom: this.edmManagementStep2Form.controls['dateOfSubmissionFrom'].value,
      dateOfSubmissionTo: this.edmManagementStep2Form.controls['dateOfSubmissionTo'].value,
      selfService: this.edmManagementStep2Form.controls['selfService'].value,
      failUpsell6Months: this.edmManagementStep2Form.controls['failUpsell6Months'].value,
      selfServiceWithLife: this.edmManagementStep2Form.controls['selfServiceWithLife'].value
    }
    let firstName, gender, mobileNo, clientId, birthdayOption, email, campaignCd, partnerCd,
    partnerName, dateOfSubmissionFrom, dateOfSubmissionTo, selfService, failUpsell6Months, selfServiceWithLife;
    ({firstName, gender, mobileNo, clientId, birthdayOption, email, campaignCd, partnerCd,
    partnerName, dateOfSubmissionFrom, dateOfSubmissionTo, selfService, failUpsell6Months, selfServiceWithLife} =
    params);
    this.searchCriterias = [firstName, gender, mobileNo, clientId, birthdayOption, email, campaignCd, partnerCd,
    partnerName, dateOfSubmissionFrom, dateOfSubmissionTo, selfService, failUpsell6Months, selfServiceWithLife];

    //clear all the elem in selectedRecords array
    this.selectedRecords.length = 0;

    this.refreshAndReloadSearchRecordTable();
  }

  ngOnInit() {
    this.searchCriterias = ["" ,"" ,"" ,
      "" ,"" ,"" ,
      "" ,
      "", "", "",
      "", "",
      "", "", ""];
    this.searchCriteriaFieldName = ["surname","firstName","gender",
      "mobileNo","clientId", "birthdayOption",
      "email",
      "campaignCd","partnerCd","partnerName",
      "dateOfSubmissionFrom", "dateOfSubmissionTo",
      "selfService","failUpsell6Months","selfServiceWithLife"];

    let colArr = [], dataArr = [];
    this.displayedColumnsName.forEach((val, index)=>{
      colArr.push({
        data:val,
        orderable: false,
        width:(index === 0) ? '50px' : '100px'
      })
    });
    this.dtOptions = {
      fixedColumns:{
        leftColumns: 1
      },
      scrollCollapse: true,
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 20,
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
      console.log('Page change:', event, settings);
      $('.input-goToPage_left').val((settings._iDisplayStart/settings.oInit.pageLength) + 1);
      _set(this, 'currPage', (settings._iDisplayStart/settings.oInit.pageLength) + 1);
    });

  }
  ngAfterViewInit(){//only load data after view are initialized
    this.initDropdown();
    this.dtTrigger.next();
    this.relistenThCheckbox();

    this.bodyRendererListener = this.renderer2.listen("body", 'change', (event)=>{
      if($(event.target).hasClass('a-checkbox')){ //only check the checkbox with class a-checkbox
        let queryParams = $(event.target).attr("queryParams");
        let personId = queryParams.split(":")[1];

        if($(event.target).prop('checked')){ //when checkbox is checked, add personid into selectedRecords
          //only add into the selectedRecords array if the personId doesnt exist in selectedRecords
          if(this.selectedRecords.indexOf(personId) === -1){
            this.selectedRecords.push(personId);
          }
        }else{//when checkbox isnt checked, remove personid from selectedRecords
          let theIndexOfTargetPersonId = this.selectedRecords.indexOf(personId);
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
    if(this.bodyRendererListener){
      this.bodyRendererListener();
    }
    if(this.dtTrigger){
      this.dtTrigger.unsubscribe();
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

        //push all the personIds that attached in the checkboxes into selectedRecords array
        let queryParamsAttr = $('.a-checkbox:eq(' + elem + ')').attr('queryParams');
        let personId = queryParamsAttr.split(":")[1];
        if(currACheckboxChecked){
          let indexOfPersonId = this.selectedRecords.indexOf(personId);
          if(indexOfPersonId !== -1){ //the personId should be exist, otherwise should be an error
            this.selectedRecords.splice(indexOfPersonId, 1);
          }
          //
        }else{
          this.selectedRecords.push(personId);
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
      this.currPage = parseInt(page);
    }

    this.relistenThCheckbox();
  }
  //refresh and reload inside this component
  refreshAndReloadSearchRecordTable(){
    let dTableInstance = _get(this.dTable, "dtInstance");
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
          return $(td).html(`<input type="checkbox" class="a-checkbox" queryParams="personId:` +
            rowData.personId
           + `" ` + (cellData === 1 ? "checked" : "") + `/>`);
        }else if(col === 10){
          let convertDateData = cellData ? new Date(cellData.substr(0,10)) : undefined;
          return $(td).html(`<span>` + (convertDateData ? convertDate(convertDateData) : "-") + `</span>`);
        }else{

          return $(td).html(`<span>` + cellData + `</span>`);
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
        draw, start, length
      };
      //put all the params from searchCriteria into queryParams
      this.searchCriterias.forEach((data, key)=>{
        if(data){
          queryParams[this.searchCriteriaFieldName[key]] = data;
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
          //if the personid is found inside the selectedRecords, then the checkbox attr should be 1 and should be checked
            _set(elem, "checkbox", (this.selectedRecords.indexOf(elem.personId) === -1) ? 0 : 1);
            respDataArr.push(elem);
          }
        }, (error)=>{
          console.log(">>> getManagementFormSearchRecord error:", error);
        });*/

        //local json would not work, this is for vm only
        //[variable: checkbox = 1 [checked] according to the this.selectedRecords variable]
        resp.body.data.forEach((elem, key)=>{
          //if the personid is found inside the selectedRecords, then the checkbox attr should be 1 and should be checked
            _set(elem, "checkbox", (this.selectedRecords.indexOf(elem.personId) === -1) ? 0 : 1);
            respDataArr.push(elem);
        });

        callback({
          data:respDataArr,
          recordsTotal: resp.body.recordsTotal,
          recordsFiltered: resp.body.recordsFiltered
        });
      }, (error) => {
        console.log("error: ", error);
      });
    }
  }



  initDropdown(){
    $("[name=birthdayOptionField]").val("1"); //initialize the select into default val first
    $(".div-birthdayOption .select-items div:eq(0)").addClass("same-as-selected");
    $(".div-birthdayOption .select-selected").text($(".div-birthdayOption .select-items div:eq(0)").text());
    //select-selected select-arrow-active
    //select-hide, same-as-selected
    $(".div-birthdayOption .select-selected").on("click", (event)=>{
      $(".div-birthdayOption .select-items").removeClass("select-hide");
      $(".div-birthdayOption .select-selected").addClass("select-arrow-active");
    });

    //
    let selectOptionNameMapVal = {}; //select option name map to val
    for(var i = 0; i < $("[name=birthdayOptionField] option").length; i++){
      let currOption = $("[name=birthdayOptionField] option:eq(" + i + ")");
      selectOptionNameMapVal[currOption.html()] = currOption.val();
    }
    let selectItemsChildren = $('.div-birthdayOption .select-items').children();
    for(var j = 0; j < selectItemsChildren.length; j++){
      $(".div-birthdayOption .select-items div:eq(" + j + ")").on('click', (e)=>{

        $(".div-birthdayOption .select-selected").removeClass("select-arrow-active");
        $(".div-birthdayOption .select-selected").text($(e.target).text());
        $(".div-birthdayOption .select-items").addClass("select-hide");
        for(var k = 0; k < selectItemsChildren.length; k++){
          $(".div-birthdayOption .select-items div:eq(" + k + ")").removeClass("same-as-selected");
        }
        $(e.target).addClass("same-as-selected");

        $("[name=birthdayOptionField]").val(
          selectOptionNameMapVal[$(e.target).text()]
        );
      });
    }
  }
  //to set the min, max date of from / to once submissionfrom / to is changed
  dateOfSubmissionChange(e, fromOrTo){
    this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
  }
}
