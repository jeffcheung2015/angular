import { Component, OnInit, AfterViewInit, AfterContentInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { SearchrecordComponent } from '../../components/searchrecord/searchrecord.component';
import { DetailssearchrecordComponent } from '../../components/detailssearchrecord/detailssearchrecord.component';
import { SearchcriteriaComponent } from '../../components/searchcriteria/searchcriteria.component';
import { CampaigndetailsComponent } from '../../components/campaigndetails/campaigndetails.component';
import { set as _set } from 'lodash';
import { FormGroup, FormControl } from '@angular/forms';

//in this parent component do the checking of router url
//then pass the result to children components
//children components have `currSubPage` and ngOnChanges
//to be notified by any changes of url in parent component(this component)

@Component({
  selector: 'app-agentassignment',
  templateUrl: './agentassignment.component.html',
  styleUrls: ['./agentassignment.component.scss']
})
export class AgentassignmentComponent implements OnInit, AfterViewChecked, AfterViewInit {
  //managing children component mutual reference in this component
  @ViewChild(SearchrecordComponent) searchRecordComponent;
  @ViewChild(DetailssearchrecordComponent) detailSearchRecordComponent;
  @ViewChild(SearchcriteriaComponent) searchCriteriaComponent;
  @ViewChild(CampaigndetailsComponent) campaignDetailsComponent;

  constructor(private router :Router) { }

  ngOnInit() {
    this.setCurrUrlAndSubPage();
  }

  ngAfterViewInit(){

    this.bindChildComponents();//must be binded AfterViewInit cause the viewChild
  }

  setCurrUrlAndSubPage(){
    this.currUrl = this.router.url;
    this.currSubPage = this.currUrl.substr(this.currUrl.lastIndexOf('/')+1,this.currUrl.length);
  }
  //updating currSubPage in order to update the child component when url addr get changed
  currUrl : string = "";
  //refers to the current page the visitor is visiting, maybe subpage
  //agentHome, agentAssign, agentDetails, campaignDetails
  currSubPage : string = 'agentAssign';
  currSubPageJustUpdated : boolean = false;
  ngAfterContentChecked(){
    if(this.currUrl !== this.router.url){ //url changes
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
  //

  //to set the min, max date of from / to once onleavefrom / to is changed
  onLeaveDateChange(e, fromOrTo){
    this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
  }
  minDateTo;
  maxDateFrom;
  onLeaveModalForm = new FormGroup({
    onLeaveFrom : new FormControl(''),
    onLeaveTo : new FormControl('')
  });
  //
  bindChildComponents(){
    switch(this.currSubPage){
      case 'agentAssign':
        _set(this, 'searchCriteriaComponent.searchRecordComponent', this.searchRecordComponent);
        _set(this, 'searchRecordComponent.searchCriteriaComponent', this.searchCriteriaComponent);
      break;
      case 'agentDetails':
        _set(this, 'searchCriteriaComponent.detailSearchRecordComponent', this.detailSearchRecordComponent);
        _set(this, 'detailSearchRecordComponent.searchCriteriaComponent', this.searchCriteriaComponent);
      break;
      //case 'campaignDetails':
      //break;
    }
  }
  changeCurrSubPage(newCurrSubPage){
    this.currSubPage = newCurrSubPage;
  }
  //tobedeleted
  logAgent(){
    console.log("#####",
      this.searchRecordComponent,this.detailSearchRecordComponent,
      this.searchCriteriaComponent,this.campaignDetailsComponent
    )
  }
  //changes of the onleave date
  onSubmitUpdate(){
    console.log("on leave date change")
  }
}
