import { Component, OnInit, Input } from '@angular/core';
import {isEmpty as _isEmpty} from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

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
  username: string;
  usercode: string;
  currDate: Date;

  constructor(private router :Router) { }

  ngOnInit() {
    this.currDate = new Date();
  }

  setLeftsidebarMenuNameCode(_menu, _name, _code){
    this.menu = _menu;
    this.username = _name;
    this.usercode = _code;
  }



}
