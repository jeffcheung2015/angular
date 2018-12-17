//module
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { CustomdatepickerModule } from './modules/material/customdatepicker/customdatepicker.module';
//service
import { LoginUserService } from './services/loginUser.service';
import { LeadresponseService } from './services/leadresponse.service';
import { EdmService } from './services/edm.service';
import { PddService } from './services/pdd.service';
import { AgentassignmentService } from './services/agentassignment.service';
import { LayoutService } from './services/layout.service';
import { LoaderinterceptorService } from './services/loaderinterceptor.service';
import { ExcelService } from './services/excel.service';
//component
import { LayoutComponent } from './components/layout/layout.component';
import { SearchrecordComponent } from './components/agentAssign/searchrecord/searchrecord.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/notfound.component';
import { DefaultPageComponent } from './components/defaultpage.component';
import { GlobalheaderComponent } from './components/layout/globalheader/globalheader.component';
import { GlobalfooterComponent } from './components/layout/globalfooter/globalfooter.component';
import { LeftsidebarComponent } from './components/layout/leftsidebar/leftsidebar.component';
import { AgentassignmentComponent } from './pages/agentassignment/agentassignment.component';
import { SearchcriteriaComponent } from './components/agentAssign/searchcriteria/searchcriteria.component';
import { DetailssearchrecordComponent } from './components/agentAssign/detailssearchrecord/detailssearchrecord.component';
import { AgentinterfaceComponent } from './components/leadresponse/agentinterface/agentinterface.component';
import { ApuplineinterfaceComponent } from './components/leadresponse/apuplineinterface/apuplineinterface.component';
import { AointerfaceComponent } from './components/leadresponse/aointerface/aointerface.component';
import { AosearchcriteriaComponent } from './components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component';
import { LeadresponseComponent } from './pages/leadresponse/leadresponse.component';
import { EdmComponent } from './pages/edm/edm.component';
import { PddComponent } from './pages/pdd/pdd.component';
import { ViewemailComponent } from './components/agentAssign/viewemail/viewemail.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoaderComponent } from './components/common/loader/loader.component';
//other
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EdmmanagementformComponent } from './components/edm/edmmanagementform/edmmanagementform.component';
import { EdmhistoryComponent } from './components/edm/edmhistory/edmhistory.component';
import { EdmlistComponent } from './components/edm/edmlist/edmlist.component';
import { Step1Component } from './components/edm/edmmanagementform/step1/step1.component';
import { Step2Component } from './components/edm/edmmanagementform/step2/step2.component';
import { Step3Component } from './components/edm/edmmanagementform/step3/step3.component';
import { PddlistComponent } from './components/pdd/pddlist/pddlist.component';
import { PddsummaryComponent } from './components/pdd/pddsummary/pddsummary.component';
import { PddleadextapprovalComponent } from './components/pdd/pddleadextapproval/pddleadextapproval.component';
import { ClientcampaigndetailsComponent } from './components/agentAssign/clientcampaigndetails/clientcampaigndetails.component';
import { ApsearchcriteriaComponent } from './components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component';
import { CustomfileinputComponent } from './components/common/customfileinput/customfileinput.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
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
    AgentinterfaceComponent,
    ApuplineinterfaceComponent,
    AointerfaceComponent,
    AosearchcriteriaComponent,
    LeadresponseComponent,
    EdmComponent,
    PddComponent,
    ViewemailComponent,
    LoaderComponent,
    EdmmanagementformComponent,
    EdmhistoryComponent,
    EdmlistComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    PddlistComponent,
    PddsummaryComponent,
    PddleadextapprovalComponent,
    ClientcampaigndetailsComponent,
    ApsearchcriteriaComponent,
    CustomfileinputComponent,
  ],
  imports: [
    NgbModule,
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
    NgbDatepickerModule,CustomdatepickerModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  providers: [AgentassignmentService, LayoutService,LeadresponseService,
    EdmService, PddService, LoginUserService, ExcelService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderinterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
