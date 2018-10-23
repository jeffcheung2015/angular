import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PddcampaigntransactiontableComponent} from "./components/pddcampaigntransactiontable/pddcampaigntransactiontable.component";
import {PddcampaigntableComponent} from "./components/pddcampaigntable/pddcampaigntable.component";
import {PageNotFoundComponent} from "./components/notfound.component";
import {DefaultPageComponent} from "./components/defaultpage.component";
import {AppComponent} from "./app.component";
import {AgentassignmentComponent} from "./pages/agentassignment/agentassignment.component";
import {PddindexComponent} from "./pages/pddindex/pddindex.component";

import { ApuplineinterfaceComponent } from './components/apuplineinterface/apuplineinterface.component';
import { AointerfaceComponent } from './components/aointerface/aointerface.component';
import { LeadresponseComponent } from './pages/leadresponse/leadresponse.component';


const appRoutes: Routes = [
  { path: 'PddTransactions', component: PddcampaigntransactiontableComponent },
  { path: 'PddCampaigns',  component: PddcampaigntableComponent },

  { path: 'easAgentAssignGI', component: AgentassignmentComponent },
  { path: 'easAgentAssignCS', component: AgentassignmentComponent },
  { path: 'easAgentDetail', component: AgentassignmentComponent },
  { path: 'easCampaignDetail', component: AgentassignmentComponent },
  { path: 'easViewEmail', component: AgentassignmentComponent },

  { path: 'easAgentInterface', component: LeadresponseComponent },
  { path: 'easAPInterface', component: LeadresponseComponent },
  { path: 'easAOInterface', component: LeadresponseComponent },


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
