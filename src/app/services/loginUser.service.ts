import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { of } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
	 private serviceUrl = '/eas/api/currentUser';
	 constructor(private http: HttpClient){
	 }

	 getCurrentLoginUser():Observable<User>
   {
		    let data = {"username":"00685096","roles":["SAAM-AGENT,SAAM-AGENT-G4"],"email":"prutest.a@pruhk.at-cloud.com","name":"FN00685096 SN00685096"};
        return Observable.of(data);
        //return this.http.get<User>(this.serviceUrl);
	 }
}
