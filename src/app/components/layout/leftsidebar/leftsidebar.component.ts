import { Component, OnInit, Input } from '@angular/core';
import {isEmpty as _isEmpty} from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { set as _set } from 'lodash';
import { LoginUserService } from '../../../services/loginUser.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {
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

  isLeadResponseRole : boolean = false;

  constructor(
    private router :Router,
    public translateService: TranslateService,
    private loginUserService: LoginUserService
  ) {
    this.currentLang = translateService.currentLang;
  }

  changeLang(lang){
    this.translateService.use(lang);
    this.currentLang = lang;
  }

  ngOnInit() {
    this.currDate = new Date();
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
