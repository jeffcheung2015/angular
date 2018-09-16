import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Pddcampaign } from '../models/pddcampaign.model';

@Injectable({
  providedIn: 'root'
})
export class PddcampaignService {

	 private serviceUrl = '/eas/api/PddCampaigns';
	
	 constructor(private http: HttpClient){
	 }
	 
	 getAllPddCampaign():Observable<Pddcampaign[]> {
		    return this.http.get<Pddcampaign[]>(this.serviceUrl);
	 }
}
