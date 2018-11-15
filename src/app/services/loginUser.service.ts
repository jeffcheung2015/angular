import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

   //to be fetched in layout and within router-outlet
   username;
   usercode;
   isLeadResponseRole;

   allowedRoutes : Array<String> = []; //retrieved from LayoutComponent

	 constructor(private http: HttpClient){
	 }

	 setCurrentLoginUserInfo(_username, _usercode){
     this.username = _username;
     this.usercode = _usercode;
   }

   setAllowedRoutes(_allowedRoutes){
     this.allowedRoutes = _allowedRoutes;
   }

   setIsLeadRespRole(_isLeadRespRole){
     this.isLeadResponseRole = _isLeadRespRole;
   }

   //to be done router guard

}
