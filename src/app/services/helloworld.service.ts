import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HelloworldService {
	 private serviceUrl = '/eas/api/time';
	 constructor(private http: HttpClient){
     
	 }
	 getTime(){
		    return Observable.of("Hello world!! ");
        //this.http.get(this.serviceUrl, {responseType: 'text'});
	 }
}
