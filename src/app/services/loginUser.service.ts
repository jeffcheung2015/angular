import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

   //to be fetched in layout and within router-outlet
   username : String;

   usercode : String;
   usercodeSbj : Subject<string>; //only useful to those comps that are waiting for the usercode to be updated
   usercodeObs$ : Observable<string>; //for other components to subscribe on

   isLeadResponseRole : boolean;

   allowedRoutes : Array<String> = []; //retrieved from LayoutComponent

	 constructor(private http: HttpClient){
     this.usercodeSbj = new Subject();
     this.usercodeObs$ = this.usercodeSbj.asObservable();
	 }

	 setCurrentLoginUserInfo(_username, _usercode){
     this.username = _username;
     this.usercode = _usercode; //store the usercode for future reference

     this.usercodeSbj.next(_usercode); //emit usercode to all subscriber
   }

   setAllowedRoutes(_allowedRoutes){
     this.allowedRoutes = _allowedRoutes;
   }

   setIsLeadRespRole(_isLeadRespRole){
     this.isLeadResponseRole = _isLeadRespRole;
   }

}
