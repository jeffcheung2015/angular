import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edmmanagementform',
  templateUrl: './edmmanagementform.component.html',
  styleUrls: ['./edmmanagementform.component.scss']
})
export class EdmmanagementformComponent implements OnInit{

  constructor() { }
  //pass by ref so that child can trigger the upd of this page
  edmPageInfo: object = {
    currStep : "step2" //hardcode here the starting step of this management form
  }

  ngOnInit() {
  }


}
