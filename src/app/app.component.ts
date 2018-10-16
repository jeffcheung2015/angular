import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { HelloworldService } from './services/helloworld.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  result = '';

  constructor(private http: HttpClient, private router: Router, private helloworldService: HelloworldService){
  }

  ngOnInit() {
  }

  getTime(): void {
    this.result = 'loading...';
    this.helloworldService.getTime().subscribe(data => this.result = data);
  }

  getDb2(): void {
	    this.router.navigate(['PddTransactions']);
  };

  getEai(): void {
	    this.router.navigate(['PddCampaigns']);
  };
}
