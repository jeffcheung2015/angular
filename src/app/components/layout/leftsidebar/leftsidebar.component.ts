import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import {isEmpty as _isEmpty} from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { get as _get, set as _set } from 'lodash';
import { LoginUserService } from '../../../services/loginUser.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit, AfterViewChecked {
  menu : Array<{
    title: string,
    link?: string,
    enabled: boolean,
    children: Array<any>
  }>;
  @Input() username: string;
  @Input() usercode: string;
  currDate: Date;
  currentLang: string;

  translateTxt : String = "En";

  isLeadResponseRole : boolean = false;
  bodyRendererListener;
  constructor(
    private activatedRoute :ActivatedRoute,
    public translateService: TranslateService,
    private loginUserService: LoginUserService
  ) {
    this.currentLang = translateService.currentLang;
  }

  changeLang(){
    let currLang = this.currentLang;
    let nextLang = currLang === 'en' ? 'zh' : 'en';
    this.translateService.use(nextLang);
    this.translateTxt = currLang === 'en' ? '中' : 'En';
    this.currentLang = nextLang;
  }

  ngOnInit() {
    this.currDate = new Date();

  }
  //put this func in sub tabs, so that when sublink is being clicked, all the parent tab will have
  //'active' class removed, and add 'active' class to this curr subtab's parent tab
  handleActiveTabLogic(event){
    let parentTab = $(event.target).closest('li').parent().closest('li');
    if(parentTab){
      //remove all other parent tab's `active` class
      $("#sidebar").children(".active").removeClass("active");
      //add active class to this curr sub tab's parent tab
      parentTab.addClass("active");
    }
  }

  isParentTabCSSinited : boolean = false;
  //first init the active parent tab based on curr route
  ngAfterViewChecked(){
    if(!this.isParentTabCSSinited && $('ul.acc-menu a').length > 0){

      var targetAnchor;
      $.each ($('ul.acc-menu a'), function() {
          if( _get(this, 'href') == window.location ) {
              targetAnchor = this;
              return false;
          };
      });

      var parent = $(targetAnchor).closest('li');

      while(true) {
          parent.addClass('active');
          parent.closest('ul.acc-menu').show().closest('li').addClass('active');
          parent = $(parent).parents('li').eq(0);
          if( $(parent).parents('ul.acc-menu').length <= 0 ) break;
      };
      let liElem:any = $('li');
      var liHasUlChild = liElem.filter(function(){
          return $(this).find('ul.acc-menu').length;
      });
      $(liHasUlChild).addClass('hasChild');
      this.isParentTabCSSinited = true;
    }

  }

  menuMinimized : boolean = false;
  minimizeMenu() {
    this.menuMinimized = !this.menuMinimized;
  }

  //hard code in html, using this obj to check existence of all three pages
  leadResponseTab = {
    agentInterface: false,
    apUplineInterface: false,
    aoInterface: false
  };

  //set back the language to eng if the user isnt a role that would have access to leadResp tab
  setLangToEng(){
    this.translateService.use('en');
    _set(window, 'easLang', 'en');
  }

  setLeftsidebarMenuNameCode(_menu){
    //hardcode the lead response tab pages
    _menu.forEach((elem, key) => {
      if(elem.title === 'Lead Response'){
        this.loginUserService.setIsLeadRespRole(true);
        this.isLeadResponseRole = true;
        elem.children.forEach((elem, key) => {
          switch(elem.title){
            case 'Agent interface':
              this.leadResponseTab.agentInterface = true;
            break;
            case 'Ap-upline interface':
              this.leadResponseTab.apUplineInterface = true;
            break;
            case 'AO interface':
              this.leadResponseTab.aoInterface = true;
            break;
          }
        });
      }
    });

    if(!this.loginUserService.isLeadResponseRole){
      this.setLangToEng();
    }

    this.menu = _menu;
  }
}
