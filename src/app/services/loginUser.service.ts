import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

   //to be fetched in layout and within router-outlet
   username;
   usercode;
   poolType; //to be set on leadresponse , agentInterface page

	 constructor(private http: HttpClient){
	 }

	 setCurrentLoginUserInfo(_username, _usercode){
     this.username = _username;
     this.usercode = _usercode;
   }

   getAndSetPoolType(){
     let sentParams = {
       observe: "response",
       params: {agentCode : this.usercode}
     }
     //let subscription = this.http.get('eas/api/common/getAgentPoolType', sentParams).subscribe((resp : any) =>{
     //  console.log("resp: ", resp);
     //  this.poolType = resp;
     //  console.log('poolType:', this.poolType)
     //});

     this.poolType = '1';
     console.log('poolType:', this.poolType)
   }
}
