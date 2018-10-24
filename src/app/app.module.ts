//module
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
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

//service
import { LoginUserService } from './services/loginUser.service';
import { PddcampaigntransactionService } from './services/pddcampaigntransaction.service';
import { PddcampaignService } from './services/pddcampaign.service';
import { LeadresponseService } from './services/leadresponse.service';
import { EdmService } from './services/edm.service';
import { PddService } from './services/pdd.service';
import { AgentassignmentService } from './services/agentassignment.service';
import { LayoutService } from './services/layout.service';

//component
import { LayoutComponent } from './components/layout/layout.component';
import { SearchrecordComponent } from './components/searchrecord/searchrecord.component';
import { AppComponent } from './app.component';
import { PddcampaigntransactiontableComponent } from './components/pddcampaigntransactiontable/pddcampaigntransactiontable.component';
import { PddcampaigntableComponent } from './components/pddcampaigntable/pddcampaigntable.component';
import { PageNotFoundComponent } from './components/notfound.component';
import { DefaultPageComponent } from './components/defaultpage.component';
import { GlobalheaderComponent } from './components/layout/globalheader/globalheader.component';
import { GlobalfooterComponent } from './components/layout/globalfooter/globalfooter.component';
import { LeftsidebarComponent } from './components/layout/leftsidebar/leftsidebar.component';
import { AgentassignmentComponent } from './pages/agentassignment/agentassignment.component';
import { SearchcriteriaComponent } from './components/searchcriteria/searchcriteria.component';
import { DetailssearchrecordComponent } from './components/detailssearchrecord/detailssearchrecord.component';
import { CampaigndetailsComponent } from './components/campaigndetails/campaigndetails.component';
import { PddindexComponent } from './pages/pddindex/pddindex.component';
import { AgentinterfaceComponent } from './components/agentinterface/agentinterface.component';
import { CustomerdetailComponent } from './components/customerdetail/customerdetail.component';
import { LeadextensionapplicationComponent } from './components/leadextensionapplication/leadextensionapplication.component';
import { UpselldetailsComponent } from './components/upselldetails/upselldetails.component';
import { ApuplineinterfaceComponent } from './components/apuplineinterface/apuplineinterface.component';
import { AointerfaceComponent } from './components/aointerface/aointerface.component';
import { LeadresponseComponent } from './pages/leadresponse/leadresponse.component';
import { EdmComponent } from './pages/edm/edm.component';
import { PddComponent } from './pages/pdd/pdd.component';
import { ViewemailComponent } from './components/viewemail/viewemail.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    AgentinterfaceComponent,
    CustomerdetailComponent,
    LeadextensionapplicationComponent,
    UpselldetailsComponent,
    ApuplineinterfaceComponent,
    AointerfaceComponent,
    LeadresponseComponent,
    EdmComponent,
    PddComponent,
    ViewemailComponent,
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
    NgbDatepickerModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  providers: [PddcampaigntransactionService, PddcampaignService,
    AgentassignmentService, LayoutService,LeadresponseService,
    EdmService, PddService, LoginUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
