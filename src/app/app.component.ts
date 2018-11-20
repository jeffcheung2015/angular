import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
import {set as _set} from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  result = '';

  constructor(private http: HttpClient,
     private router: Router,
     public translateService: TranslateService
  ){
    translateService.addLangs(['en', 'zh']);
    translateService.setDefaultLang('zh');
    translateService.use('zh');
    _set(window, 'easLang', 'zh');
  }

  ngOnInit() {


  }
}
