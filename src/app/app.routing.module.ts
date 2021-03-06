import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./components/notfound.component";
import {DefaultPageComponent} from "./components/defaultpage.component";
import {AppComponent} from "./app.component";
import {AgentassignmentComponent} from "./pages/agentassignment/agentassignment.component";

import { LeadresponseComponent } from './pages/leadresponse/leadresponse.component';
import { EdmComponent } from './pages/edm/edm.component';
import { PddComponent } from './pages/pdd/pdd.component';
import { MenuGuard } from './guards/menu.guard';

const appRoutes: Routes = [



  { path: 'easAgentDetail', component: AgentassignmentComponent , canActivate: [MenuGuard]},
  { path: 'easCampaignDetail', component: AgentassignmentComponent , canActivate: [MenuGuard]},
  { path: 'easViewEmail', component: AgentassignmentComponent , canActivate: [MenuGuard]},

  { path: 'easAgentInterface', component: LeadresponseComponent , canActivate: [MenuGuard]},
  { path: 'easAPInterface', component: LeadresponseComponent , canActivate: [MenuGuard]},
  { path: 'easAOInterface', component: LeadresponseComponent , canActivate: [MenuGuard]},

  //to be commented out
  { path: 'easAgentAssignGI', component: AgentassignmentComponent},
  { path: 'easClientDetail', component: AgentassignmentComponent},
  { path: 'easAgentAssignCS', component: AgentassignmentComponent},
  { path: 'easLeadExtensionAppl', component: PddComponent},
  { path: 'easLeadExtensionApproval', component: PddComponent},
  { path: 'easLeadSummary', component: PddComponent},

  { path: 'easEDM', component: EdmComponent},
  { path: 'easEDMManagementForm', component: EdmComponent},
  { path: 'easEDMHistory', component: EdmComponent},
  //to be commented out

  //to be uncommented
  // { path: 'easAgentAssignGI', component: AgentassignmentComponent , canActivate: [MenuGuard]},
  // { path: 'easAgentAssignCS', component: AgentassignmentComponent , canActivate: [MenuGuard]},
  // { path: 'easClientDetail', component: AgentassignmentComponent , canActivate: [MenuGuard]},
  // { path: 'easLeadExtensionAppl', component: PddComponent},
  // { path: 'easLeadExtensionApproval', component: PddComponent , canActivate: [MenuGuard]},
  // { path: 'easLeadSummary', component: PddComponent , canActivate: [MenuGuard]},

  // { path: 'easEDM', component: EdmComponent , canActivate: [MenuGuard]},
  // { path: 'easEDMManagementForm', component: EdmComponent , canActivate: [MenuGuard]},
  // { path: 'easEDMHistory', component: EdmComponent , canActivate: [MenuGuard]},
  //to be uncommented

  { path: '', component: DefaultPageComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
	  imports: [
	    RouterModule.forRoot(
	      appRoutes,
	      { enableTracing: true }
	    )
	  ],
	  exports: [
	    RouterModule
	  ],
	  declarations: []
})
export class AppRoutingModule {}
