import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { HelloworldService } from './services/helloworld.service';
import { LoginUserService } from './services/loginUser.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  result = '';
  currentUserId = '';

  constructor(private http: HttpClient, private router: Router, private loginUserService: LoginUserService, private helloworldService: HelloworldService){
  }

  ngOnInit() {
	  this.loginUserService.getCurrentLoginUser().subscribe( data => {
		  console.log(data);
		  this.currentUserId = data.username;
	  });
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
