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
    "easAgentDetail",
    "easClientDetail",
    "easCampaignDetail"
  ]
  //map the corresponding menu link received from resp body into menu title
  mapMenuLinkToTab : object = {
    easAgentAssignCS: "agentAssignmentTab",
    easAgentAssignGI: "agentAssignmentTab",

    easAgentInterface: "leadResponseTab",
    easAOInterface: "leadResponseTab",
    easAPInterface: "leadResponseTab",

    easLeadSummary:"pddTab",
    easLeadExtensionAppl:"pddTab",
    easLeadExtensionApproval:"pddTab",

    easEDM:"eDMTab"
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
    "easAgentAssignGI" : "Agent Assignment",
    "easAgentAssignCS" : "Agent Assignment",

    "easLeadExtensionApproval":"Lead extension approval",
    "easLeadSummary":"Summary",
    "easLeadExtensionAppl":"Application for Assigned Lead",

    "easAgentInterface" : "Agent interface",
    "easAPInterface" : "Ap-upline interface",
    "easAOInterface" : "AO interface",

    "easEDM" : "eDM"
  }
  ngOnInit() {
    this.layoutService.getLeftSideBarMenu({}, 'menuApi').subscribe((resp : any) =>{
        resp.body.menu.forEach((elem)=>{
          if(!this.ignoredMenu.includes(elem)){ //non detail pages
            if(['easAgentAssignCS', 'easAgentAssignGI', 'easEDM'].includes(elem)){
              this[this.mapMenuLinkToTab[elem]].link = '/'+elem;
              if(['easAgentAssignCS', 'easAgentAssignGI'].includes(elem)){
                //store in it so that later be used in other component
                this.agentassignmentService.currServiceName = elem;
              }
            }
            else{
              this[this.mapMenuLinkToTab[elem]].children.push(
                {
                  title: this.mapSubmenuToTitle[elem],
                  link: '/'+elem
                }
              );
            }
            this[this.mapMenuLinkToTab[elem]].enabled = true;
          }
        });
        //merge all of the tabs into menu object
        ['agentAssignmentTab', 'pddTab', 'leadResponseTab', 'eDMTab'].forEach((elem)=>{
          if(this[elem].enabled){
            this.menu.push(this[elem]);
          }
        });
        this.leftsidebar.setLeftsidebarMenuNameCode(this.menu, resp.body.name, resp.body.code);
      }, (error : any) => {
        console.log('error:', error)
      }
    );
  }

}
