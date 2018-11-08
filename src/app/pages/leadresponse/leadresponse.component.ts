import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { get as _get, set as _set } from 'lodash';

@Component({
  selector: 'app-leadresponse',
  templateUrl: './leadresponse.component.html',
  styleUrls: ['./leadresponse.component.scss']
})
export class LeadresponseComponent implements OnInit, AfterContentChecked {
  constructor(private router :Router) { }

  setCurrUrlAndSubPage(){
    let routePathArray = _get(this.router, 'rawUrlTree.root.children.primary.segments', null);
    this.currSubPage = (!routePathArray) ? this.currSubPage : routePathArray[routePathArray.length - 1].path;

  }
  //updating currSubPage in order to update the child component when url addr get changed
  currUrl : string = "";
  //refers to the current page the visitor is visiting, maybe subpage
  currSubPage : string = '';
  currSubPageJustUpdated : boolean = false;
  ngAfterContentChecked(){
    if(this.currUrl !== this.router.url){ //url changes
      this.currUrl = this.router.url;
      this.setCurrUrlAndSubPage();
      this.currSubPageJustUpdated = true;
    }
  }

  ngOnInit() {
  }

}
