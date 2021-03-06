import { Component, OnInit, AfterViewInit, AfterContentInit, ViewChild, AfterViewChecked, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SearchrecordComponent } from '../../components/agentAssign/searchrecord/searchrecord.component';
import { DetailssearchrecordComponent } from '../../components/agentAssign/detailssearchrecord/detailssearchrecord.component';
import { SearchcriteriaComponent } from '../../components/agentAssign/searchcriteria/searchcriteria.component';
import { ViewemailComponent } from '../../components/agentAssign/viewemail/viewemail.component';
import { get as _get, set as _set } from 'lodash';
import { FormGroup, FormControl } from '@angular/forms';

import { AgentassignmentService } from '../../services/agentassignment.service';

//in this parent component do the checking of router url
//then pass the result to children components
//children components have `currSubPage` and ngOnChanges
//to be notified by any changes of url in parent component(this component)

@Component({
  selector: 'app-agentassignment',
  templateUrl: './agentassignment.component.html',
  styleUrls: ['./agentassignment.component.scss']
})
export class AgentassignmentComponent implements OnInit, AfterViewChecked,
 AfterViewInit {
  //managing children component mutual reference in this component
  @ViewChild(SearchrecordComponent) searchRecordComponent;
  @ViewChild(DetailssearchrecordComponent) detailSearchRecordComponent;
  @ViewChild(SearchcriteriaComponent) searchCriteriaComponent;
  @ViewChild(ViewemailComponent) viewemailComponent;
  
  popUpMsg : string;//for pruchat or sms btn

  constructor(
    private router :Router,
     private agentassignmentService : AgentassignmentService) { }

  ngOnInit() {
    this.setCurrUrlAndSubPage();
    console.log(this.router)
  }

  ngAfterViewInit(){
    this.bindChildComponents();//must be binded AfterViewInit cause the viewChild
  }

  setPopUpMsg(setVal){
    this.popUpMsg = setVal;
    console.log('setPopUpMsg', this.popUpMsg)
  }

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
  ngAfterViewChecked(){
    if(this.currSubPageJustUpdated){ //url changes
      //rebind the child components
      this.bindChildComponents();
      this.currSubPageJustUpdated = false;
    }
  }

  bindChildComponents(){
    switch(this.currSubPage){
      case 'easAgentAssignGI':
      case 'easAgentAssignCS':
        _set(this, 'searchCriteriaComponent.searchRecordComponent', this.searchRecordComponent);
        _set(this, 'searchRecordComponent.searchCriteriaComponent', this.searchCriteriaComponent);
      break;
      case 'easAgentDetail':
        _set(this, 'searchCriteriaComponent.detailSearchRecordComponent', this.detailSearchRecordComponent);
        _set(this, 'detailSearchRecordComponent.searchCriteriaComponent', this.searchCriteriaComponent);
      break;
    }
  }

}
