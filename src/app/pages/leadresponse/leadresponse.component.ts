import { Component, ViewChild, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { get as _get, set as _set } from 'lodash';
import {AointerfaceComponent} from '../../components/leadresponse/aointerface/aointerface.component';
import {AosearchcriteriaComponent} from '../../components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component';

@Component({
  selector: 'app-leadresponse',
  templateUrl: './leadresponse.component.html',
  styleUrls: ['./leadresponse.component.scss']
})
export class LeadresponseComponent implements AfterContentChecked, AfterViewChecked, AfterViewInit {
  @ViewChild(AointerfaceComponent) aoInterfaceComponent;
  @ViewChild(AosearchcriteriaComponent) aoSearchCriteriaComponent;

  constructor(private router :Router) { }

  setCurrUrlAndSubPage(){
    let routePathArray = _get(this.router, 'rawUrlTree.root.children.primary.segments', null);
    this.currSubPage = (!routePathArray) ? this.currSubPage : routePathArray[routePathArray.length - 1].path;

  }

  ngAfterViewInit(){
    this.bindChildComponents();//must be binded AfterViewInit cause the viewChild
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

  ngAfterViewChecked(){
    if(this.currSubPageJustUpdated){ //url changes
      //rebind the child components
      this.bindChildComponents();
      this.currSubPageJustUpdated = false;
    }
  }

  bindChildComponents(){
    if(this.currSubPage === 'easAOInterface'){
      _set(this, 'aoSearchCriteriaComponent.aoInterfaceComponent', this.aoInterfaceComponent);
    }
  }


}
