import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTableModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { PddcampaigntransactiontableComponent } from './components/pddcampaigntransactiontable/pddcampaigntransactiontable.component';
import { PddcampaigntableComponent } from './components/pddcampaigntable/pddcampaigntable.component';
import { PddcampaigntransactionService } from './services/pddcampaigntransaction.service';
import { PddcampaignService } from './services/pddcampaign.service';
import { PageNotFoundComponent } from './components/notfound.component';
import { DefaultPageComponent } from './components/defaultpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GlobalheaderComponent } from './components/globalheader/globalheader.component';
import { GlobalfooterComponent } from './components/globalfooter/globalfooter.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AgentassignmentComponent } from './components/agentassignment/agentassignment.component';
import { SearchrecordComponent } from './components/searchrecord/searchrecord.component';
import { AgentassignmentService } from './services/agentassignment.service';
import { TablerecordComponent } from './components/tablerecord/tablerecord.component';

@NgModule({
  declarations: [
    AppComponent,
    PddcampaigntransactiontableComponent,
    PddcampaigntableComponent,
    PageNotFoundComponent,
    DefaultPageComponent,
    GlobalheaderComponent,
    GlobalfooterComponent,
    LeftsidebarComponent,
    LayoutComponent,
    AgentassignmentComponent,
    SearchrecordComponent,
    TablerecordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [PddcampaigntransactionService, PddcampaignService,
    AgentassignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
