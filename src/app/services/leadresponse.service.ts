import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
import { of } from 'rxjs';

import {BehaviorSubject} from 'rxjs';
import constants from '../constants/constants';
@Injectable({
  providedIn: 'root'
})
export class LeadresponseService {

  constructor(private http: HttpClient){ }

  //type : dataTable | sendParams
  getOrPostFunc(url, params, getOrPost, type){
    let sentParams : any;
    switch(type){
      case 'dataTable':
      case 'apuplineRecord':
        sentParams =  {
          observe: "response",
          params: params
        };
      break;
      case 'sendParams':
        sentParams =  {
          ...params
        };
      break;
    }
    return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
  }
  //dataTable
  getAgentInterfaceRecord(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/agentInterface.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/leadresp/getAgentInterfaceList",params, 'get', type);
  }
  //dataTable
  getaoInterfaceRecord(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/aoInterface.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/leadresp/getAoInterfaceList",params, 'get', type);
  }
  //dataTable
  getapUplineInterfaceRecord(params, type){
    return (constants.localOrVm === 'local') ?
            this.getOrPostFunc("http://localhost:4200/eas/assets/data/apuplineInterface.json", params, 'get', type) :
            this.getOrPostFunc("/eas/api/leadresp/getApUplineInterfaceList", params, 'get', type);
  }

  postCustomerDtlRecord(params, type){
    return this.getOrPostFunc('/eas/api/leadresp/updCustomerDetails', params, 'post', type);
  }

  postLeadExtRecord(params, type){
    return this.getOrPostFunc('/eas/api/leadresp/updLeadExtension', params, 'post', type);
  }

  postUpsellDtlRecord(params, type){
    return this.getOrPostFunc('/eas/api/leadresp/updUpsellDetails', params, 'post', type);
  }

}
