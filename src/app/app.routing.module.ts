import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PddcampaigntransactiontableComponent} from "./components/pddcampaigntransactiontable/pddcampaigntransactiontable.component";
import {PddcampaigntableComponent} from "./components/pddcampaigntable/pddcampaigntable.component";
import {PageNotFoundComponent} from "./components/notfound.component";
import {DefaultPageComponent} from "./components/defaultpage.component";
import {AppComponent} from "./app.component";
import {AgentassignmentComponent} from "./components/agentassignment/agentassignment.component";


const appRoutes: Routes = [
  { path: 'PddTransactions', component: PddcampaigntransactiontableComponent },
  { path: 'PddCampaigns',  component: PddcampaigntableComponent },
  { path: 'Agent', component: AgentassignmentComponent },
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
