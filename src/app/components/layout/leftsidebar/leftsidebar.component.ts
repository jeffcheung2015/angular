import { Component, OnInit, Input } from '@angular/core';
import {isEmpty as _isEmpty} from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import { set as _set } from 'lodash';

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
  constructor(
    private router :Router,
    public translateService: TranslateService
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

  setLeftsidebarMenuNameCode(_menu){
    this.menu = _menu;
  }



}
