import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import constants from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient){ }

  //type: leftsidebar
  getOrPostFunc(url, params, getOrPost, type){
    let sentParams : any;
    switch(type){
      case 'menuApi':
        sentParams =  {
          observe: "response",
          params: params
        };
      break;
    }
    return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
  }
  //menuApi
  getLeftSideBarMenu(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/menu.json', params, 'get', type) :
            this.getOrPostFunc('/eas/api/common/menu', params, 'get', type);
  }


}
