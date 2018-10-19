import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
import { of } from 'rxjs';

import {BehaviorSubject} from 'rxjs';

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
        sentParams =  {
          observe: "response",
          params: {
            draw: params.draw,
            start: params.start,
            length: params.length
          }
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
    return this.getOrPostFunc('http://localhost:4200/eas/assets/data/agentInterface.json', params, 'get', type)
    //#vm
    //return this.getOrPostFunc("/eas/api/leadresp/getAgentInterfaceList",params, 'get', type);
  }
  //dataTable
  getaoInterfaceRecord(params, type){
    return this.getOrPostFunc('http://localhost:4200/eas/assets/data/aoInterface.json', params, 'get', type)
    //#vm
    //return this.getOrPostFunc("/eas/api/leadresp/getAgentInterfaceList",params, 'get', type);
  }
  //dataTable
  getapUplineInterfaceRecord(params, type){
    return this.getOrPostFunc('http://localhost:4200/eas/assets/data/apUplineInterface.json', params, 'get', type)
    //#vm
    //return this.getOrPostFunc("/eas/api/leadresp/getAgentInterfaceList",params, 'get', type);
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
