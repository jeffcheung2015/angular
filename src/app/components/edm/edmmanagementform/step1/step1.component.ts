import { Component, OnInit, Input, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { get as _get } from 'lodash';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EdmService } from '../../../../services/edm.service';
import constants from '../../../../constants/constants';
import { EdmManagementFormStep1 } from '../../../../models/edm.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit, AfterViewInit {
  edmManagementStep1Form = new FormGroup({
    template: new FormControl('0',[Validators.pattern('[1-3]')]),
    emailSubject: new FormControl('',[Validators.required, Validators.email, Validators.maxLength(100)]),
    greeting: new FormControl('',[Validators.maxLength(200)]),
    banner1: new FormControl(''),
    banner1File: new FormControl(''),
    campaign1Title: new FormControl('',[Validators.maxLength(100)]),
    campaign1Desc: new FormControl('',[Validators.maxLength(255)]),
    campaign2Title: new FormControl('',[Validators.maxLength(100)]),
    campaign2Desc: new FormControl('',[Validators.maxLength(255)]),
    campaign3Title: new FormControl('',[Validators.maxLength(100)]),
    campaign3Desc: new FormControl('',[Validators.maxLength(255)]),
    button1Title: new FormControl('',[Validators.maxLength(100)]),
    button1Link: new FormControl('',[Validators.maxLength(255)]),
    button2Title: new FormControl('',[Validators.maxLength(10)]),
    button2Link: new FormControl(''),
    banner2: new FormControl(''),
    banner2File: new FormControl(''),
    button3Title: new FormControl('',[Validators.maxLength(10)]),
    button3Link: new FormControl(''),
    campaignTnc: new FormControl('',[Validators.maxLength(255)]),
    standardTnc: new FormControl('',[Validators.maxLength(255)]),
    communicationCd: new FormControl('',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')])
  });

  edmManagementStep1TestForm = new FormGroup({
    testEmail: new FormControl('', [Validators.email])
  });

  edmStep1FormSubmitted = false;
  @Input()edmPageInfo : { //fetched from edmManagementForm parent component
    currStep: String,
    commCode: String
  };
  errMsgArr : Array<String> = [];
  constructor(
    private router : Router,
    private edmService : EdmService,
    private renderer2 : Renderer2
  ) { }
  bodyRendererListener;
  fetchFormHistorySubscription : Subscription;
  dropdownDivArray : Array<String> = ["div-templateOption"];
  closeAllDropDown(){
    this.dropdownDivArray.forEach((elem,key)=>{
      if($("." + elem + " .select-selected").hasClass("select-arrow-active")){
        $("." + elem + " .select-selected").removeClass("select-arrow-active");
        $("." + elem + " .select-items").addClass("select-hide");
      }
    });
  }
  ngOnInit() {
    this.bodyRendererListener = this.renderer2.listen("body", 'click', (event)=>{
      if(!$(event.target).hasClass("select-selected")){
        this.closeAllDropDown();
      }
    });

    if(this.edmService.currCommunicationCode){ //edit mode, not add mode
      let queryParams = {
        communicationCode : this.edmService.currCommunicationCode
      };

      this.fetchFormHistorySubscription = this.edmService.getHistoryTemplates(queryParams, "getHistory").subscribe((resp : any) => {
        console.log("resp: ",resp);
        this.edmService.currEdmManagementFormObj = resp.body;

      }, (error) => {
        console.error("step1component error: ", error);
      });
    }
  }
  ngOnDestroy(){
    let toBeDestroyArray = ['bodyRendererListener', 'fetchFormHistorySubscription'];
    toBeDestroyArray.forEach((elem, key)=>{
      if(this[elem] && elem == 'bodyRendererListener'){
        this.bodyRendererListener();
      }else if(this[elem] && elem != 'bodyRendererListener'){
        this[elem].unsubscribe();
      }
    });
  }
  ngAfterViewInit(){
    this.initPopoverChooseFileJquery();
    this.initDropdown();
  }
  onSubmitStep1(){
    console.log("go from step1 to step2");
    this.edmStep1FormSubmitted = true;
    this.fetchFormParamsAndPost();
  }
  onSaveAndClose(){
    this.fetchFormParamsAndPost();
    this.edmStep1FormSubmitted = true;
    this.router.navigate(['/easEDM']);
    window.scrollTo(0,0);
  }

  fetchFormParamsAndPost(){
    let params = {
      template: this.edmManagementStep1Form.controls['template'].value,
      emailSubject: this.edmManagementStep1Form.controls['emailSubject'].value,
      greeting: this.edmManagementStep1Form.controls['greeting'].value,
      banner1: this.edmManagementStep1Form.controls['banner1'].value,
      banner1File: this.edmManagementStep1Form.controls['banner1File'].value,
      campaign1Title: this.edmManagementStep1Form.controls['campaign1Title'].value,
      campaign1Desc: this.edmManagementStep1Form.controls['campaign1Desc'].value,
      campaign2Title: this.edmManagementStep1Form.controls['campaign2Title'].value,
      campaign2Desc: this.edmManagementStep1Form.controls['campaign2Desc'].value,
      campaign3Title: this.edmManagementStep1Form.controls['campaign3Title'].value,
      campaign3Desc: this.edmManagementStep1Form.controls['campaign3Desc'].value,
      button1Title: this.edmManagementStep1Form.controls['button1Title'].value,
      button1Link: this.edmManagementStep1Form.controls['button1Link'].value,
      button2Title: this.edmManagementStep1Form.controls['button2Title'].value,
      button2Link: this.edmManagementStep1Form.controls['button2Link'].value,
      banner2: this.edmManagementStep1Form.controls['banner2'].value,
      banner2File: this.edmManagementStep1Form.controls['banner2File'].value,
      button3Title: this.edmManagementStep1Form.controls['button3Title'].value,
      button3Link: this.edmManagementStep1Form.controls['button3Link'].value,
      campaignTnc: this.edmManagementStep1Form.controls['campaignTnc'].value,
      standardTnc: this.edmManagementStep1Form.controls['standardTnc'].value,
      communicationCd: this.edmManagementStep1Form.controls['communicationCd'].value
    };
    if(this.edmManagementStep1Form.invalid){
      console.error(">>> step1component edmManagementStep1Form has invalid fields");
    }else {
      this.edmPageInfo.commCode = params.communicationCd;
      this.edmService.postSubmitOrSave(params, 'sendParams').subscribe((resp : any) => {
        console.log("resp: ", resp);
        //reset the errMsgArr and comm code input field css
        this.isSetStep1ErrPrompt(true);

        let codeList = _get(resp, 'code');
        let errMsgList = _get(resp, 'errMsg');

        //00000 : ok
        //00001 : dup comm Code
        //00002 : no template is selected

        if(codeList && codeList[0] == constants.STATUS_CODE.SUCCESS_CODE){
          this.edmPageInfo.currStep = "step2";
          window.scrollTo(0,0);
        }else if(codeList && codeList[0] != constants.STATUS_CODE.SUCCESS_CODE){
          codeList.forEach((elem, key)=>{
            this.errMsgArr.push(errMsgList[key]);
            console.log(">>> code: ", elem);
          });
          this.isSetStep1ErrPrompt(false);
          $("#ErrMsgModal").modal('show');
        }else{
          console.error(">>> No code and errmsg found in server's response.");
        }
      }, (error) => {
        console.error("error: ", error);
      });
    }
  }

  isSetStep1ErrPrompt(isReset){
    this.errMsgArr = (isReset) ? [] : this.errMsgArr;
    //setCommCodeInputFieldCSS
    $(`[name="communicationCdField"]`).css("border-color", (isReset) ? 'unset' : 'red');
  }

  onSelectFile(event, fieldName) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      //store the image file name
      this.edmManagementStep1Form.controls[fieldName].setValue(_get(event, 'target.files[0].name', ''));
      //called upon the reader finished reading the image
      reader.onload = (event) => {
        //store the image file data
        this.edmManagementStep1Form.controls[fieldName + 'File'].setValue(_get(event, 'target.result', ''));
      }
    }
  }

  sendTestEmail(){
    let params = {
      testEmail: $("[name=sendTestEmailField]").val()
    };
    this.edmService.postSendTestEmail(params, 'sendParams').subscribe((resp: any) => {

      console.log("resp: ", resp);
    }, (error) => {
      console.error("error: ", error);
    })
  }

  initDropdown(){
    $("[name=templateOptionField]").val("1"); //initialize the select into default val first
    $(".div-templateOption .select-items div:eq(0)").addClass("same-as-selected");
    $(".div-templateOption .select-selected").text($(".div-templateOption .select-items div:eq(0)").text());
    //select-selected select-arrow-active
    //select-hide, same-as-selected
    $(".div-templateOption .select-selected").on("click", (event)=>{
      $(".div-templateOption .select-items").removeClass("select-hide");
      $(".div-templateOption .select-selected").addClass("select-arrow-active");
    });

    //
    let selectOptionNameMapVal = {}; //select option name map to val
    for(var i = 0; i < $("[name=templateOptionField] option").length; i++){
      let currOption = $("[name=templateOptionField] option:eq(" + i + ")");
      selectOptionNameMapVal[currOption.html()] = currOption.val();
    }
    let selectItemsChildren = $('.div-templateOption .select-items').children();
    for(var j = 0; j < selectItemsChildren.length; j++){
      $(".div-templateOption .select-items div:eq(" + j + ")").on('click', (e)=>{

        $(".div-templateOption .select-selected").removeClass("select-arrow-active");
        $(".div-templateOption .select-selected").text($(e.target).text());
        $(".div-templateOption .select-items").addClass("select-hide");
        for(var k = 0; k < selectItemsChildren.length; k++){
          $(".div-templateOption .select-items div:eq(" + k + ")").removeClass("same-as-selected");
        }
        $(e.target).addClass("same-as-selected");

        $("[name=templateOptionField]").val(
          selectOptionNameMapVal[$(e.target).text()]
        );
        this.edmManagementStep1Form.controls['template'].setValue(selectOptionNameMapVal[$(e.target).text()]);
        console.log('val:' , this.edmManagementStep1Form.controls['template'].value)
      });
    }
  }


  initPopoverChooseFileJquery(){
    //Choose File... btn, popover1 and popover2
    $('.uploadFile').change(function (file, type) {
        if (_get(file, 'target.files[0]', null)) {
            $(this).parent('.file').siblings('.filename').text(_get(file, 'target.files[0].name'));
        };
    });
    function keywords_content(popover) {
      if(popover == 'popover1'){
          var data = $('<div class="clearfix"><p><span class="title">Tip : Templates preview</span></p><div class="clearfix img-group"><div class=""><img src="assets/img/group243.png" alt=""></div><div class=""><img src="./assets/img/group244.png" alt=""></div><div class=""><img src="./assets/img/group245.png" alt=""></div></div></div>');
          return data;
      } else if(popover == 'popover2') {
          var data = $('<div class="clearfix"><p><span class="title">Tip : Auto-fill Tag</span></p><p>Information could be automatically\n' +
              'generated by including text below:</p><p style="font-weight: bold;margin-top: 30px;">##CUSTOMER_NAME##</p><p style="margin-bottom: 30px">Customer’s name</p><p style="font-weight: bold">##CUSTOMER_NAME_1##</p><p style="font-weight: bold">##CUSTOMER_NAME_2##</p><p style="font-weight: bold">##CUSTOMER_NAME_3##</p><p>Campaign’s name according to the text \n' +
              'user entered within the same template.</p></div>');
          return data;
      }
    }
    let popover1 :any= $(".popover1");
    let popover2 :any= $(".popover2");


    popover1.popover({
        html: true,
        content: function() {
            return keywords_content('popover1');
        },
        trigger: 'hover'
    });
    popover2.popover({
        html: true,
        content: function() {
            return keywords_content('popover2');
        },
        trigger: 'hover'
    });


  }

}
