import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edmmanagementform',
  templateUrl: './edmmanagementform.component.html',
  styleUrls: ['./edmmanagementform.component.scss']
})
export class EdmmanagementformComponent implements OnInit{

  constructor() { }
  //pass by ref so that child can trigger the upd of this page
  edmPageInfo: {
    currStep: String,
    commCode: String
  } = {
    currStep : "step1", //hardcode here the starting step of this management form
    commCode: "" //to be set in step1 and later be used in step2 sub page posting method
  }

  ngOnInit() {
  }


}
