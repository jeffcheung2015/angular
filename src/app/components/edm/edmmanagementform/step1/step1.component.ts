import { Component, OnInit, Input, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { get as _get } from 'lodash';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EdmService } from '../../../../services/edm.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit, AfterViewInit {
  edmManagementStep1Form = new FormGroup({
    templateOption: new FormControl('0',[Validators.pattern('[1-3]')]),
    emailSubj: new FormControl('',[Validators.required, Validators.email]),
    greetingTxt: new FormControl('',[Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]),
    mainBannerImgFile: new FormControl(''),
    campaign1Title: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    campaign1Desc: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    campaign2Title: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    campaign2Desc: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    priButtonTitle: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    priButtonLink: new FormControl(''),
    secButtonTitle: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    secButtonLink: new FormControl(''),
    bottomBannerImgFile: new FormControl(''),
    bottomBannerButtonTitle: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    bottomBannerButtonLink: new FormControl(''),
    campaignTnc: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    standardTnc: new FormControl('',[Validators.pattern('[0-9a-zA-Z ]+')]),
    communicationCd: new FormControl('',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')])
  });
  edmStep1FormSubmitted = false;
  @Input()edmPageInfo : { //fetched from edmManagementForm parent component
    currStep: String
  };
  commCodeMsg : String;
  constructor(
    private router : Router,
    private edmService : EdmService,
    private renderer2 : Renderer2
  ) { }
  bodyRendererListener;
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
  }
  ngOnDestroy(){
    if(this.bodyRendererListener){
      this.bodyRendererListener();
    }
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
  }

  fetchFormParamsAndPost(){
    let params = {
      templateOption: this.edmManagementStep1Form.controls['templateOption'].value,
      emailSubj: this.edmManagementStep1Form.controls['emailSubj'].value,
      greetingTxt: this.edmManagementStep1Form.controls['greetingTxt'].value,
      mainBannerImgFile: this.edmManagementStep1Form.controls['mainBannerImgFile'].value,
      campaign1Title: this.edmManagementStep1Form.controls['campaign1Title'].value,
      campaign1Desc: this.edmManagementStep1Form.controls['campaign1Desc'].value,
      campaign2Title: this.edmManagementStep1Form.controls['campaign2Title'].value,
      campaign2Desc: this.edmManagementStep1Form.controls['campaign2Desc'].value,
      priButtonTitle: this.edmManagementStep1Form.controls['priButtonTitle'].value,
      priButtonLink: this.edmManagementStep1Form.controls['priButtonLink'].value,
      secButtonTitle: this.edmManagementStep1Form.controls['secButtonTitle'].value,
      secButtonLink: this.edmManagementStep1Form.controls['secButtonLink'].value,
      bottomBannerImgFile: this.edmManagementStep1Form.controls['bottomBannerImgFile'].value,
      bottomBannerButtonTitle: this.edmManagementStep1Form.controls['bottomBannerButtonTitle'].value,
      bottomBannerButtonLink: this.edmManagementStep1Form.controls['bottomBannerButtonLink'].value,
      campaignTnc: this.edmManagementStep1Form.controls['campaignTnc'].value,
      standardTnc: this.edmManagementStep1Form.controls['standardTnc'].value,
      communicationCd: this.edmManagementStep1Form.controls['communicationCd'].value
    };
    this.edmService.postSubmitOrSave(params, 'sendParams').subscribe((resp : any) => {
      console.log("resp: ", resp);
      let DEFAULT_CODE = "00009";
      let statusCode = _get(resp, 'body.statusCode', DEFAULT_CODE); //statusCode doesnt found in server side response
      if(statusCode == "00001"){//dup communicationCode found, should remain in the same page
        this.edmManagementStep1Form.controls['communicationCd'].setErrors({'incorrect': true});
        $(".span-communicationCodeErorrMsg").removeClass("span-communicationCodeErrorMsg-show");
        $(".span-communicationCodeErorrMsg").addClass("span-communicationCodeErrorMsg-hide");
        this.commCodeMsg = _get(resp, 'body.statusCode', 'N/A');
      }else if(statusCode == DEFAULT_CODE){//statusCode doesnt found in server side response
        console.error(">>> statusCode isnt found in server side's response.");
      }else{
        this.edmPageInfo.currStep = "step2";
        window.scrollTo(0,0);
      }
    }, (error) => {
      console.error("error: ", error);
    });
  }

  sendTestEmail(event){
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
        this.edmManagementStep1Form.controls['templateOption'].setValue(selectOptionNameMapVal[$(e.target).text()]);
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
