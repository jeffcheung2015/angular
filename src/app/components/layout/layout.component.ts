import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import {set as _set} from 'lodash';
import {LeftsidebarComponent} from './leftsidebar/leftsidebar.component';
import {AgentassignmentService} from '../../services/agentassignment.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(
    private layoutService : LayoutService,
    private agentassignmentService : AgentassignmentService
  ) {}
  menu = []; //to be passed down to leftsidebar

  @ViewChild(LeftsidebarComponent) leftsidebar : LeftsidebarComponent;
  //detail pages are ignored in menu
  ignoredMenu :Array<string>= [
    "AGENT_DETAIL",
    "CLIENT_DETAIL",
    "CAMPAIGN_DETAIL"
  ]
  //map the corresponding menu link received from resp body into menu title
  mapMenuLinkToTab : object = {
    AGENT_ASSIGN_CS: "agentAssignmentTab",
    AGENT_ASSIGN_GI: "agentAssignmentTab",

    LR_AGENT: "leadResponseTab",
    LR_AO: "leadResponseTab",
    LR_AP_UPLINE: "leadResponseTab",

    PDD_SUMMARY:"pddTab",
    PDD_LEAD_APPLICATION:"pddTab",
    PDD_LEAD_APPROVAL:"pddTab",

    EDM:"eDMTab"
  }

  agentAssignmentTab : object = {
    title: "Agent Assignment",
    children:[],
    enabled:false
  };
  pddTab : object = {
    title: "PDD",
    children:[],
    enabled: false
  }
  leadResponseTab : object = {
    title: "Lead Response",
    children:[],
    enabled: false
  }
  eDMTab : object = {
    title: "eDM",
    children:[],
    enabled: false
  }

  mapSubmenuToTitle = {
    "AGENT_ASSIGN_CS":"Agent Assignment",//non submenu
    "AGENT_ASSIGN_GI":"Agent Assignment",//non submenu

    "PDD_LEAD_APPROVAL":"Lead extension approval",
    "PDD_SUMMARY":"Summary",
    "PDD_LEAD_APPLICATION":"Application for Assigned Lead",

    "LR_AGENT" : "Agent interface",
    "LR_AP_UPLINE" : "Ap-upline interface",
    "LR_AO" : "AO interface",

    "EDM":"eDM"//non submenu
  }

  ngOnInit() {
    this.layoutService.getLeftSideBarMenu({}, 'menuApi').subscribe((resp : any) =>{
        for(var prop in resp.body.menu){
          if(!this.ignoredMenu.includes(prop)){ //non detail pages
            if(['AGENT_ASSIGN_CS', 'AGENT_ASSIGN_GI', 'EDM'].includes(prop)){
              this[this.mapMenuLinkToTab[prop]].link = '/'+resp.body.menu[prop];
              if(['AGENT_ASSIGN_CS', 'AGENT_ASSIGN_GI'].includes(prop)){
                this.agentassignmentService.currServiceName = resp.body.menu[prop];
              }
            }
            else{
              this[this.mapMenuLinkToTab[prop]].children.push(
                {
                  title: this.mapSubmenuToTitle[prop],
                  link: '/'+resp.body.menu[prop]
                }
              );
            }
            this[this.mapMenuLinkToTab[prop]].enabled = true;
          }
        }



        //merge all of the tabs into menu
        ['agentAssignmentTab', 'pddTab', 'leadResponseTab', 'eDMTab'].forEach((elem)=>{
          this.menu.push(this[elem]);
        });
        this.leftsidebar.setLeftsidebarMenuNameCode(this.menu, resp.body.name, resp.body.code);
      }, (error : any) => {
        console.log('error:', error)
      }
    );
  }

}
