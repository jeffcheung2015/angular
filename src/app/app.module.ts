import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { PddcampaigntransactiontableComponent } from './components/pddcampaigntransactiontable/pddcampaigntransactiontable.component';
import { PddcampaigntableComponent } from './components/pddcampaigntable/pddcampaigntable.component';
import { PddcampaigntransactionService } from './services/pddcampaigntransaction.service';
import { PddcampaignService } from './services/pddcampaign.service';
import { PageNotFoundComponent } from './components/notfound.component';
import { DefaultPageComponent } from './components/defaultpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalheaderComponent } from './components/layout/globalheader/globalheader.component';
import { GlobalfooterComponent } from './components/layout/globalfooter/globalfooter.component';
import { LeftsidebarComponent } from './components/layout/leftsidebar/leftsidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AgentassignmentComponent } from './pages/agentassignment/agentassignment.component';
import { SearchrecordComponent } from './components/searchrecord/searchrecord.component';
import { AgentassignmentService } from './services/agentassignment.service';
import { LayoutService } from './services/layout.service';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { SearchcriteriaComponent } from './components/searchcriteria/searchcriteria.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { DetailssearchrecordComponent } from './components/detailssearchrecord/detailssearchrecord.component';
import { CampaigndetailsComponent } from './components/campaigndetails/campaigndetails.component';
import { PddindexComponent } from './pages/pddindex/pddindex.component';

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
    SearchcriteriaComponent,
    DetailssearchrecordComponent,
    CampaigndetailsComponent,
    PddindexComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
    MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule,
    MatDividerModule, MatExpansionModule,MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule,MatRadioModule,MatRippleModule, MatSelectModule, MatSidenavModule,
    MatSliderModule,MatSlideToggleModule,MatSnackBarModule,MatSortModule,MatTableModule,
    MatTabsModule, MatToolbarModule,MatTooltipModule,MatTreeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    FormsModule,ReactiveFormsModule,
    NgbDatepickerModule

  ],
  providers: [PddcampaigntransactionService, PddcampaignService,
    AgentassignmentService, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
