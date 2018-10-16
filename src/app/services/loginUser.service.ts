import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

   //to be fetched in layout and within router-outlet
   username;
   usercode;
   poolType; //to be set on leadresponse , agentInterface page

	 constructor(){
	 }

	 setCurrentLoginUserInfo(_username, _usercode){
     this.username = _username;
     this.usercode = _usercode;
   }
}
