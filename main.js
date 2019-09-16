(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer{flex:1 1 auto}.button{padding:0 14px}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(http, router, translateService) {
        this.http = http;
        this.router = router;
        this.translateService = translateService;
        this.result = '';
        translateService.addLangs(['en', 'zh']);
        translateService.setDefaultLang('zh');
        translateService.use('zh');
        Object(lodash__WEBPACK_IMPORTED_MODULE_4__["set"])(window, 'easLang', 'zh');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modules_material_customdatepicker_customdatepicker_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/material/customdatepicker/customdatepicker.module */ "./src/app/modules/material/customdatepicker/customdatepicker.module.ts");
/* harmony import */ var _services_loginUser_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/loginUser.service */ "./src/app/services/loginUser.service.ts");
/* harmony import */ var _services_leadresponse_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/leadresponse.service */ "./src/app/services/leadresponse.service.ts");
/* harmony import */ var _services_edm_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/edm.service */ "./src/app/services/edm.service.ts");
/* harmony import */ var _services_pdd_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/pdd.service */ "./src/app/services/pdd.service.ts");
/* harmony import */ var _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/agentassignment.service */ "./src/app/services/agentassignment.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _services_loaderinterceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/loaderinterceptor.service */ "./src/app/services/loaderinterceptor.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_agentAssign_searchrecord_searchrecord_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/agentAssign/searchrecord/searchrecord.component */ "./src/app/components/agentAssign/searchrecord/searchrecord.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_notfound_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/notfound.component */ "./src/app/components/notfound.component.ts");
/* harmony import */ var _components_defaultpage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/defaultpage.component */ "./src/app/components/defaultpage.component.ts");
/* harmony import */ var _components_layout_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/layout/globalheader/globalheader.component */ "./src/app/components/layout/globalheader/globalheader.component.ts");
/* harmony import */ var _components_layout_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/layout/globalfooter/globalfooter.component */ "./src/app/components/layout/globalfooter/globalfooter.component.ts");
/* harmony import */ var _components_layout_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/layout/leftsidebar/leftsidebar.component */ "./src/app/components/layout/leftsidebar/leftsidebar.component.ts");
/* harmony import */ var _pages_agentassignment_agentassignment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/agentassignment/agentassignment.component */ "./src/app/pages/agentassignment/agentassignment.component.ts");
/* harmony import */ var _components_agentAssign_searchcriteria_searchcriteria_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/agentAssign/searchcriteria/searchcriteria.component */ "./src/app/components/agentAssign/searchcriteria/searchcriteria.component.ts");
/* harmony import */ var _components_agentAssign_detailssearchrecord_detailssearchrecord_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/agentAssign/detailssearchrecord/detailssearchrecord.component */ "./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.ts");
/* harmony import */ var _components_leadresponse_agentinterface_agentinterface_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/leadresponse/agentinterface/agentinterface.component */ "./src/app/components/leadresponse/agentinterface/agentinterface.component.ts");
/* harmony import */ var _components_leadresponse_apuplineinterface_apuplineinterface_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/leadresponse/apuplineinterface/apuplineinterface.component */ "./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.ts");
/* harmony import */ var _components_leadresponse_aointerface_aointerface_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/leadresponse/aointerface/aointerface.component */ "./src/app/components/leadresponse/aointerface/aointerface.component.ts");
/* harmony import */ var _components_leadresponse_aointerface_aosearchcriteria_aosearchcriteria_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component */ "./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.ts");
/* harmony import */ var _pages_leadresponse_leadresponse_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/leadresponse/leadresponse.component */ "./src/app/pages/leadresponse/leadresponse.component.ts");
/* harmony import */ var _pages_edm_edm_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/edm/edm.component */ "./src/app/pages/edm/edm.component.ts");
/* harmony import */ var _pages_pdd_pdd_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/pdd/pdd.component */ "./src/app/pages/pdd/pdd.component.ts");
/* harmony import */ var _components_agentAssign_viewemail_viewemail_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/agentAssign/viewemail/viewemail.component */ "./src/app/components/agentAssign/viewemail/viewemail.component.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _components_common_loader_loader_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/common/loader/loader.component */ "./src/app/components/common/loader/loader.component.ts");
/* harmony import */ var _components_edm_edmmanagementform_edmmanagementform_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/edm/edmmanagementform/edmmanagementform.component */ "./src/app/components/edm/edmmanagementform/edmmanagementform.component.ts");
/* harmony import */ var _components_edm_edmhistory_edmhistory_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/edm/edmhistory/edmhistory.component */ "./src/app/components/edm/edmhistory/edmhistory.component.ts");
/* harmony import */ var _components_edm_edmlist_edmlist_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/edm/edmlist/edmlist.component */ "./src/app/components/edm/edmlist/edmlist.component.ts");
/* harmony import */ var _components_edm_edmmanagementform_step1_step1_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/edm/edmmanagementform/step1/step1.component */ "./src/app/components/edm/edmmanagementform/step1/step1.component.ts");
/* harmony import */ var _components_edm_edmmanagementform_step2_step2_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/edm/edmmanagementform/step2/step2.component */ "./src/app/components/edm/edmmanagementform/step2/step2.component.ts");
/* harmony import */ var _components_edm_edmmanagementform_step3_step3_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/edm/edmmanagementform/step3/step3.component */ "./src/app/components/edm/edmmanagementform/step3/step3.component.ts");
/* harmony import */ var _components_pdd_pddlist_pddlist_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/pdd/pddlist/pddlist.component */ "./src/app/components/pdd/pddlist/pddlist.component.ts");
/* harmony import */ var _components_pdd_pddsummary_pddsummary_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/pdd/pddsummary/pddsummary.component */ "./src/app/components/pdd/pddsummary/pddsummary.component.ts");
/* harmony import */ var _components_pdd_pddleadextapproval_pddleadextapproval_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/pdd/pddleadextapproval/pddleadextapproval.component */ "./src/app/components/pdd/pddleadextapproval/pddleadextapproval.component.ts");
/* harmony import */ var _components_agentAssign_clientcampaigndetails_clientcampaigndetails_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/agentAssign/clientcampaigndetails/clientcampaigndetails.component */ "./src/app/components/agentAssign/clientcampaigndetails/clientcampaigndetails.component.ts");
/* harmony import */ var _components_leadresponse_apuplineinterface_apsearchcriteria_apsearchcriteria_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component */ "./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.ts");
/* harmony import */ var _components_common_customfileinput_customfileinput_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/common/customfileinput/customfileinput.component */ "./src/app/components/common/customfileinput/customfileinput.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//module














//service








//component





















//other













function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_39__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                _components_notfound_component__WEBPACK_IMPORTED_MODULE_23__["PageNotFoundComponent"],
                _components_defaultpage_component__WEBPACK_IMPORTED_MODULE_24__["DefaultPageComponent"],
                _components_layout_globalheader_globalheader_component__WEBPACK_IMPORTED_MODULE_25__["GlobalheaderComponent"],
                _components_layout_globalfooter_globalfooter_component__WEBPACK_IMPORTED_MODULE_26__["GlobalfooterComponent"],
                _components_layout_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_27__["LeftsidebarComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_20__["LayoutComponent"],
                _pages_agentassignment_agentassignment_component__WEBPACK_IMPORTED_MODULE_28__["AgentassignmentComponent"],
                _components_agentAssign_searchrecord_searchrecord_component__WEBPACK_IMPORTED_MODULE_21__["SearchrecordComponent"],
                _components_agentAssign_searchcriteria_searchcriteria_component__WEBPACK_IMPORTED_MODULE_29__["SearchcriteriaComponent"],
                _components_agentAssign_detailssearchrecord_detailssearchrecord_component__WEBPACK_IMPORTED_MODULE_30__["DetailssearchrecordComponent"],
                _components_leadresponse_agentinterface_agentinterface_component__WEBPACK_IMPORTED_MODULE_31__["AgentinterfaceComponent"],
                _components_leadresponse_apuplineinterface_apuplineinterface_component__WEBPACK_IMPORTED_MODULE_32__["ApuplineinterfaceComponent"],
                _components_leadresponse_aointerface_aointerface_component__WEBPACK_IMPORTED_MODULE_33__["AointerfaceComponent"],
                _components_leadresponse_aointerface_aosearchcriteria_aosearchcriteria_component__WEBPACK_IMPORTED_MODULE_34__["AosearchcriteriaComponent"],
                _pages_leadresponse_leadresponse_component__WEBPACK_IMPORTED_MODULE_35__["LeadresponseComponent"],
                _pages_edm_edm_component__WEBPACK_IMPORTED_MODULE_36__["EdmComponent"],
                _pages_pdd_pdd_component__WEBPACK_IMPORTED_MODULE_37__["PddComponent"],
                _components_agentAssign_viewemail_viewemail_component__WEBPACK_IMPORTED_MODULE_38__["ViewemailComponent"],
                _components_common_loader_loader_component__WEBPACK_IMPORTED_MODULE_40__["LoaderComponent"],
                _components_edm_edmmanagementform_edmmanagementform_component__WEBPACK_IMPORTED_MODULE_41__["EdmmanagementformComponent"],
                _components_edm_edmhistory_edmhistory_component__WEBPACK_IMPORTED_MODULE_42__["EdmhistoryComponent"],
                _components_edm_edmlist_edmlist_component__WEBPACK_IMPORTED_MODULE_43__["EdmlistComponent"],
                _components_edm_edmmanagementform_step1_step1_component__WEBPACK_IMPORTED_MODULE_44__["Step1Component"],
                _components_edm_edmmanagementform_step2_step2_component__WEBPACK_IMPORTED_MODULE_45__["Step2Component"],
                _components_edm_edmmanagementform_step3_step3_component__WEBPACK_IMPORTED_MODULE_46__["Step3Component"],
                _components_pdd_pddlist_pddlist_component__WEBPACK_IMPORTED_MODULE_47__["PddlistComponent"],
                _components_pdd_pddsummary_pddsummary_component__WEBPACK_IMPORTED_MODULE_48__["PddsummaryComponent"],
                _components_pdd_pddleadextapproval_pddleadextapproval_component__WEBPACK_IMPORTED_MODULE_49__["PddleadextapprovalComponent"],
                _components_agentAssign_clientcampaigndetails_clientcampaigndetails_component__WEBPACK_IMPORTED_MODULE_50__["ClientcampaigndetailsComponent"],
                _components_leadresponse_apuplineinterface_apsearchcriteria_apsearchcriteria_component__WEBPACK_IMPORTED_MODULE_51__["ApsearchcriteriaComponent"],
                _components_common_customfileinput_customfileinput_component__WEBPACK_IMPORTED_MODULE_52__["CustomfileinputComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerModule"], _modules_material_customdatepicker_customdatepicker_module__WEBPACK_IMPORTED_MODULE_11__["CustomdatepickerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                    }
                })
            ],
            providers: [_services_agentassignment_service__WEBPACK_IMPORTED_MODULE_16__["AgentassignmentService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_17__["LayoutService"], _services_leadresponse_service__WEBPACK_IMPORTED_MODULE_13__["LeadresponseService"],
                _services_edm_service__WEBPACK_IMPORTED_MODULE_14__["EdmService"], _services_pdd_service__WEBPACK_IMPORTED_MODULE_15__["PddService"], _services_loginUser_service__WEBPACK_IMPORTED_MODULE_12__["LoginUserService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_19__["ExcelService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _services_loaderinterceptor_service__WEBPACK_IMPORTED_MODULE_18__["LoaderinterceptorService"],
                    multi: true
                },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notfound.component */ "./src/app/components/notfound.component.ts");
/* harmony import */ var _components_defaultpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/defaultpage.component */ "./src/app/components/defaultpage.component.ts");
/* harmony import */ var _pages_agentassignment_agentassignment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/agentassignment/agentassignment.component */ "./src/app/pages/agentassignment/agentassignment.component.ts");
/* harmony import */ var _pages_leadresponse_leadresponse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/leadresponse/leadresponse.component */ "./src/app/pages/leadresponse/leadresponse.component.ts");
/* harmony import */ var _pages_edm_edm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/edm/edm.component */ "./src/app/pages/edm/edm.component.ts");
/* harmony import */ var _pages_pdd_pdd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pdd/pdd.component */ "./src/app/pages/pdd/pdd.component.ts");
/* harmony import */ var _guards_menu_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/menu.guard */ "./src/app/guards/menu.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: 'easAgentDetail', component: _pages_agentassignment_agentassignment_component__WEBPACK_IMPORTED_MODULE_4__["AgentassignmentComponent"], canActivate: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_8__["MenuGuard"]] },
    { path: 'easCampaignDetail', component: _pages_agentassignment_agentassignment_component__WEBPACK_IMPORTED_MODULE_4__["AgentassignmentComponent"], canActivate: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_8__["MenuGuard"]] },
    { path: 'easViewEmail', component: _pages_agentassignment_agentassignment_component__WEBPACK_IMPORTED_MODULE_4__["AgentassignmentComponent"], canActivate: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_8__["MenuGuard"]] },
    { path: 'easAgentInterface', component: _pages_leadresponse_leadresponse_component__WEBPACK_IMPORTED_MODULE_5__["LeadresponseComponent"], canActivate: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_8__["MenuGuard"]] },
    { path: 'easAPInterface', component: _pages_leadresponse_leadresponse_component__WEBPACK_IMPORTED_MODULE_5__["LeadresponseComponent"], canActivate: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_8__["MenuGuard"]] },
    { path: 'easAOInterface', component: _pages_leadresponse_leadresponse_component__WEBPACK_IMPORTED_MODULE_5__["LeadresponseComponent"], canActivate: [_guards_menu_guard__WEBPACK_IMPORTED_MODULE_8__["MenuGuard"]] },
    //to be commented out
    { path: 'easAgentAssignGI', component: _pages_agentassignment_agentassignment_component__WEBPACK_IMPORTED_MODULE_4__["AgentassignmentComponent"] },
    { path: 'easClientDetail', component: _pages_agentassignment_agentassignment_component__WEBPACK_IMPORTED_MODULE_4__["AgentassignmentComponent"] },
    { path: 'easAgentAssignCS', component: _pages_agentassignment_agentassignment_component__WEBPACK_IMPORTED_MODULE_4__["AgentassignmentComponent"] },
    { path: 'easLeadExtensionAppl', component: _pages_pdd_pdd_component__WEBPACK_IMPORTED_MODULE_7__["PddComponent"] },
    { path: 'easLeadExtensionApproval', component: _pages_pdd_pdd_component__WEBPACK_IMPORTED_MODULE_7__["PddComponent"] },
    { path: 'easLeadSummary', component: _pages_pdd_pdd_component__WEBPACK_IMPORTED_MODULE_7__["PddComponent"] },
    { path: 'easEDM', component: _pages_edm_edm_component__WEBPACK_IMPORTED_MODULE_6__["EdmComponent"] },
    { path: 'easEDMManagementForm', component: _pages_edm_edm_component__WEBPACK_IMPORTED_MODULE_6__["EdmComponent"] },
    { path: 'easEDMHistory', component: _pages_edm_edm_component__WEBPACK_IMPORTED_MODULE_6__["EdmComponent"] },
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
    { path: '', component: _components_defaultpage_component__WEBPACK_IMPORTED_MODULE_3__["DefaultPageComponent"], pathMatch: 'full' },
    { path: '**', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/agentAssign/clientcampaigndetails/clientcampaigndetails.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/agentAssign/clientcampaigndetails/clientcampaigndetails.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currSubPage == 'easCampaignDetail'\" class=\"row div-campaignDetails\">\n    <div class=\"panel\">\n        <div class=\"panel-body slide-body\">\n            <div class=\"row\">\n                <div class=\"clearfix\">\n                    <div id=\"accordioninpanel\" class=\"accordion-group clearfix\">\n                        <div class=\"accordion-item col-lg-12 col-md-12\">\n                            <a><h4 class=\"h4-campaignDetails\">Campaign Details</h4></a>\n                            <div id=\"my-policy-diary\" class=\"clearfix\">\n                                <div class=\"client-detail compaign-detail\">\n                                    <div class=\"col-lg-6 col-md-6 detail-box\">\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer \">Campaign Code</div>\n                                            <div *ngIf=\"campaignDetailInfo.campaignCode\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer \">{{campaignDetailInfo.campaignCode}}</div>\n                                            <div *ngIf=\"!campaignDetailInfo.campaignCode\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer \">N/A</div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">Campaign Start Date</div>\n                                            <div *ngIf=\"campaignDetailInfo.startDate\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">{{campaignDetailInfo.startDate | date:'MM/dd/yyyy'}}</div>\n                                            <div *ngIf=\"!campaignDetailInfo.startDate\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">N/A</div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer \">Campaign End Date</div>\n                                            <div *ngIf=\"campaignDetailInfo.endDate\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer \">{{campaignDetailInfo.endDate | date: 'MM/dd/yyyy'}}</div>\n                                            <div *ngIf=\"!campaignDetailInfo.endDate\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer \">N/A</div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">Asia Miles to Premium Rate</div>\n                                            <div *ngIf=\"campaignDetailInfo.premiumFromAM && campaignDetailInfo.amEntitled\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">HK${{campaignDetailInfo.premiumFromAM}} = {{campaignDetailInfo.amEntitled}} Mile</div>\n                                            <div *ngIf=\"!campaignDetailInfo.premiumFromAM || !campaignDetailInfo.amEntitled\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">HK${{campaignDetailInfo.premiumFromAM}} = {{campaignDetailInfo.amEntitled}} Mile</div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">Premium Percent off</div>\n                                            <div *ngIf=\"campaignDetailInfo.premiumDisc\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">{{campaignDetailInfo.premiumDisc}}%</div>\n                                            <div *ngIf=\"!campaignDetailInfo.premiumDisc\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">N/A</div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">Generic Code</div>\n                                            <div *ngIf=\"campaignDetailInfo.genericCode\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">{{campaignDetailInfo.genericCode}}</div>\n                                            <div *ngIf=\"!campaignDetailInfo.genericCode\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">N/A</div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">Promotion Code Pool</div>\n                                            <div *ngIf=\"campaignDetailInfo.promoPool\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">{{campaignDetailInfo.promoPool}}</div>\n                                            <div *ngIf=\"!campaignDetailInfo.promoPool\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">N/A</div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">Promotion Code Unit</div>\n                                            <div *ngIf=\"campaignDetailInfo.promoUnit\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">{{campaignDetailInfo.promoUnit}}</div>\n                                            <div *ngIf=\"!campaignDetailInfo.promoUnit\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">N/A</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-6 col-md-6 detail-box\">\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">Partner Code</div>\n                                            <div *ngIf=\"campaignDetailInfo.partnerCode\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">{{campaignDetailInfo.partnerCode}}</div>\n                                            <div *ngIf=\"!campaignDetailInfo.partnerCode\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">N/A</div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">Partner Name</div>\n                                            <div *ngIf=\"campaignDetailInfo.partnerName\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">{{campaignDetailInfo.partnerName}}</div>\n                                            <div *ngIf=\"!campaignDetailInfo.partnerName\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">N/A</div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">Product Subtype</div>\n                                            <div *ngIf=\"campaignDetailInfo.prodSubType\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">{{campaignDetailInfo.prodSubType}}</div>\n                                            <div *ngIf=\"!campaignDetailInfo.prodSubType\" class=\"col-lg-6 col-md-6 col-xs-6 div-fieldContainer\">N/A</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"accordion-item col-lg-6 col-md-6\">\n                            <a><h4 class=\"h4-promoCodeUsage\">Promotion Code Usage</h4></a>\n                            <div id=\"my-policy-diary\" class=\"clearfix\">\n                                <div class=\"client-detail\">\n                                  <div *ngIf=\"campaignDetailInfo.promoUsage\" class=\"col-lg-12 detail-box div-promoContainer\">\n                                      <p>{{campaignDetailInfo.promoUsage}}</p>\n                                  </div>\n                                  <div *ngIf=\"!campaignDetailInfo.promoUsage\" class=\"col-lg-12 detail-box div-promoContainer\">\n                                      <p>N/A</p>\n                                  </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"accordion-item col-lg-12 col-md-12 col-xs-12\">\n                            <h4 class=\"h4-remarks\">Remarks</h4>\n                            <div *ngIf=\"campaignDetailInfo.remarks\" class=\"col-md-6\" id=\"remarkDiv\">\n                              {{campaignDetailInfo.remarks}}\n                            </div>\n                            <div *ngIf=\"!campaignDetailInfo.endDate\" class=\"col-md-6\" id=\"remarkDiv\">\n                              N/A\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"button-box clearfix\">\n                        <input routerLink=\"/{{gobackRouteLink}}\" type=\"submit\" class=\" btn btn-default table-btn float-left all-btn\" value=\"Back\">\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"currSubPage == 'easClientDetail'\" class=\"row div-clientDetails\">\n  <div class=\"col-md-12\">\n      <div class=\"panel\">\n          <div class=\"panel-body slide-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-12 clearfix\">\n                    <form [formGroup]=\"clientDetailForm\" method=\"POST\" (ngSubmit)=\"onSubmitSaveClientDetail()\">\n                      <div id=\"accordioninpanel\" class=\"accordion-group clearfix\">\n                          <div class=\"accordion-item col-lg-12 col-md-12\">\n                              <a><h4 class=\"h4-clientDetailSubTitle\">Client Details</h4></a>\n                              <div id=\"my-policy-diary\" class=\"clearfix\">\n                                  <div class=\"client-detail\">\n                                      <div class=\"col-lg-6 col-md-6 detail-box\">\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-xs-6 \" >Full Name</div>\n                                            <div *ngIf=\"clientDetailInfo.fullName\" class=\"col-lg-6 col-md-6 col-xs-6 \" >{{clientDetailInfo.fullName}}</div>\n                                            <div *ngIf=\"!clientDetailInfo.fullName\" class=\"col-lg-6 col-md-6 col-xs-6 \" >N/A</div>\n                                        </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Mobile no.</div>\n                                              <div *ngIf=\"clientDetailInfo.mobileNo\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.mobileNo}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.mobileNo\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6 \" >ID card No.</div>\n                                              <div *ngIf=\"clientDetailInfo.idCardNo\" class=\"col-lg-6 col-md-6 col-xs-6 \" >{{clientDetailInfo.idCardNo}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.idCardNo\" class=\"col-lg-6 col-md-6 col-xs-6 \" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Date of Submission</div>\n                                              <div *ngIf=\"clientDetailInfo.dateOfSubmission\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.dateOfSubmission | date:'MM/dd/yyyy'}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.dateOfSubmission\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Campaign Code</div>\n                                              <div *ngIf=\"clientDetailInfo.campaignCode\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.campaignCode}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.campaignCode\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.campaignCode}}</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Communication Code</div>\n                                              <div *ngIf=\"clientDetailInfo.communicationCode\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.communicationCode}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.communicationCode\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                      </div>\n                                      <div class=\"col-lg-6 col-md-6 detail-box\">\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Email Address</div>\n                                              <div *ngIf=\"clientDetailInfo.emailAddr\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.emailAddr}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.emailAddr\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6 \" >Date of Birth</div>\n                                              <div *ngIf=\"clientDetailInfo.birthDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.birthDate | date:'MM/dd/yyyy'}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.birthDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Gender</div>\n                                              <div *ngIf=\"clientDetailInfo.gender\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.gender}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.gender\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Class</div>\n                                              <div *ngIf=\"clientDetailInfo.prodClass\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.prodClass}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.prodClass\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n\n                          <div class=\"accordion-item col-lg-6 col-md-6\">\n                              <a><h4 class=\"h4-clientDetailSubTitle\">Assigned Financial Consultant</h4></a>\n                              <div id=\"my-policy-diary\" class=\"clearfix\">\n                                  <div class=\"client-detail\">\n                                      <div class=\"col-lg-12 detail-box\">\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6 \" >Agent Code</div>\n                                              <div *ngIf=\"clientDetailInfo.agentCode\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.agentCode}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.agentCode\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Financial Consultant Name</div>\n                                              <div *ngIf=\"clientDetailInfo.consultantName\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.consultantName}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.consultantName\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Financial Consultant Phone</div>\n                                              <div *ngIf=\"clientDetailInfo.consultantPhone\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.consultantPhone}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.consultantPhone\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Assigned Date</div>\n                                              <div *ngIf=\"clientDetailInfo.assignedDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.assignedDate | date:'MM/dd/yyyy'}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.assignedDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Date & Time of SMS/ email sent</div>\n                                              <div *ngIf=\"clientDetailInfo.smsEmailSentDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.smsEmailSentDate | date:'MM/dd/yyyy'}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.smsEmailSentDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >First Contact Date with Customer</div>\n                                              <div *ngIf=\"clientDetailInfo.firstContactDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.firstContactDate | date:'MM/dd/yyyy'}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.firstContactDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Assignment Status</div>\n                                              <div *ngIf=\"clientDetailInfo.assignmentStatus\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{assignmentStatusMapToText[clientDetailInfo.assignmentStatus]}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.assignmentStatus\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Expiry Date of Financial Consultant account ownership</div>\n                                              <div *ngIf=\"clientDetailInfo.accountExpiryDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.accountExpiryDate | date:'MM/dd/yyyy'}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.accountExpiryDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n\n                          <div class=\"accordion-item col-lg-6 col-md-6\">\n                              <a><h4 class=\"h4-clientDetailSubTitle\">Re-assigned Financial Consultant</h4></a>\n                              <div id=\"my-policy-diary\" class=\"clearfix\">\n                                  <div class=\"client-detail\">\n                                      <div class=\"col-lg-12 detail-box\">\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Agent Code</div>\n                                              <div *ngIf=\"clientDetailInfo.reAgentCode\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.reAgentCode}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.reAgentCode\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Financial Consultant Name</div>\n                                              <div *ngIf=\"clientDetailInfo.reConsultantName\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.reConsultantName}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.reConsultantName\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Financial Consultant Phone</div>\n                                              <div *ngIf=\"clientDetailInfo.reConsultantPhone\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.reConsultantPhone}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.reConsultantPhone\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                          <div class=\"row\">\n                                              <div class=\"col-lg-6 col-md-6 col-xs-6\" >Assigned Date</div>\n                                              <div *ngIf=\"clientDetailInfo.reAssignedDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >{{clientDetailInfo.reAssignedDate | date:'MM/dd/yyyy'}}</div>\n                                              <div *ngIf=\"!clientDetailInfo.reAssignedDate\" class=\"col-lg-6 col-md-6 col-xs-6\" >N/A</div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n\n                          <div class=\"accordion-item col-lg-12 col-md-12 col-xs-12\">\n                            <span class=\"checkbox-wrapper one-line span-refuseContact\">\n                              <input formControlName=\"refuseContact\" [checked]=\"refuseContactMapToBool[clientDetailInfo.refuseContact]\" class=\"chkaction\" type=\"checkbox\" id=\"catrgory-1\" value=\"b87d7dae7ebdb27dd14a48059495d52d1f\" name=\"category[]\">\n                              <label for=\"catrgory-1\" class=\"checkbox-uncheck\"><img src=\"assets/img/icon_checkbox.png\">Refuse financial consultant to contact (拒絕顧問聯絡)</label>\n                              <label for=\"catrgory-1\" class=\"checkbox-checked\"><img src=\"assets/img/icon_checkbox_checked.png\">Refuse financial consultant to contact (拒絕顧問聯絡)</label>\n                            </span>\n                          </div>\n                          <div class=\"div-consultantRemarks accordion-item col-lg-12 col-md-12 col-xs-12\">\n                            <h5 class=\"h5-remarksTitle\">Remarks to Financial Consultant</h5>\n                            <textarea formControlName=\"remarksToConsultant\" class=\"col-md-6 textarea-remarks\"></textarea>\n                          </div>\n\n                      </div>\n\n                      <div class=\"button-box clearfix\">\n                          <input type=\"submit\" class=\" btn btn-primary table-btn float-left all-btn\" value=\"Save\">\n                          <input type=\"button\" routerLink=\"/{{gobackRouteLink}}\" class=\" btn btn-default table-btn float-right all-btn\" value=\"Close\">\n                      </div>\n                    </form>\n\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/agentAssign/clientcampaigndetails/clientcampaigndetails.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/agentAssign/clientcampaigndetails/clientcampaigndetails.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-campaignDetails .panel-body{padding:0px !important}.div-campaignDetails .panel-body .accordion-group .accordion-item{padding:0px !important}.div-campaignDetails .panel-body .accordion-group .h4-campaignDetails{color:#FE0000;border-bottom:1px solid #EBEBEB;padding:20px 0px;margin-left:14px}.div-campaignDetails .panel-body .accordion-group .h4-promoCodeUsage{color:#FE0000;border-bottom:1px solid #EBEBEB;padding:20px 0px;margin-left:14px}.div-campaignDetails .panel-body .accordion-group .h4-remarks{margin:20px 0 0 14px;color:#FE0000}.div-campaignDetails .panel-body .accordion-group .div-fieldContainer{padding-left:5px !important}.div-campaignDetails .panel-body .accordion-group .div-promoContainer{padding-left:16px !important}.div-campaignDetails .panel-body .button-box{padding-left:10px !important}.div-clientDetails .span-refuseContact{margin-left:20px}.div-clientDetails .h4-clientDetailSubTitle{color:#FE0000;border-bottom:1px solid #EBEBEB;padding:20px 0px;margin-left:20px}.div-clientDetails .div-consultantRemarks .h5-remarksTitle{margin:20px 0 0 20px}.div-clientDetails .div-consultantRemarks .textarea-remarks{margin-left:20px}\n"

/***/ }),

/***/ "./src/app/components/agentAssign/clientcampaigndetails/clientcampaigndetails.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/agentAssign/clientcampaigndetails/clientcampaigndetails.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ClientcampaigndetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientcampaigndetailsComponent", function() { return ClientcampaigndetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/agentassignment.service */ "./src/app/services/agentassignment.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientcampaigndetailsComponent = /** @class */ (function () {
    function ClientcampaigndetailsComponent(router, agentassignmentService) {
        this.router = router;
        this.agentassignmentService = agentassignmentService;
        this.campaignDetailInfo = {
            campaignCode: "",
            startDate: "",
            endDate: "",
            genericCode: "",
            promoPool: "",
            promoUnit: "",
            partnerCode: "",
            partnerName: "",
            prodSubType: "",
            promoUsage: "",
            remarks: "",
            premiumFromAM: "",
            amEntitled: ""
        };
        this.clientDetailInfo = {
            fullName: "",
            mobileNo: "",
            idCardNo: "",
            dateOfSubmission: "",
            campaignCode: "",
            communicationCode: "",
            emailAddr: "",
            birthDate: "",
            gender: "",
            prodClass: "",
            agentCode: "",
            consultantName: "",
            consultantPhone: "",
            assignedDate: "",
            smsEmailSentDate: "",
            firstContactDate: "",
            assignmentStatus: "",
            accountExpiryDate: "",
            refuseContact: "",
            remarksToConsultant: "",
            reAgentCode: "",
            reConsultantName: "",
            reConsultantPhone: "",
            reAssignedDate: ""
        };
        this.assignmentStatusMapToText = {
            0: "",
            1: "To apply for extension",
            2: "Applied extension",
            3: "Opt-out from this program",
            4: "Re-assigned"
        };
        this.refuseContactMapToBool = {
            0: false,
            1: true
        };
        this.clientDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            refuseContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            remarksToConsultant: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    ClientcampaigndetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currSubPage === 'easCampaignDetail') {
            var campaignCode = this.agentassignmentService.currCampaignCd || '';
            if (campaignCode === '') {
                this.router.navigate(['/']);
            }
            else {
                var sentParams = {
                    campaignCode: campaignCode
                };
                this.agentassignmentService.getCampaignDetail(sentParams, 'campaignDetails').subscribe(function (resp) {
                    for (var prop in resp.body) {
                        var isDateType = ['startDate', 'endDate'].indexOf(prop) !== -1;
                        _this.campaignDetailInfo[prop] = (isDateType) ? resp.body[prop].substr(0, 10) :
                            (resp.body[prop] || "N/A");
                    }
                }, function (error) {
                    console.log('>>> Error getting campaign details', error);
                });
            }
        }
        else {
            var clientCode = this.agentassignmentService.currClientCd || '';
            if (clientCode === '') {
                this.router.navigate(['/']);
            }
            else {
                var sentParams = {
                    clientCode: clientCode
                };
                this.agentassignmentService.getClientDetail(sentParams, 'clientDetails').subscribe(function (resp) {
                    for (var prop in resp.body) {
                        var isDateType = ['dateOfSubmission', 'birthDate', 'assignedDate',
                            'smsEmailSentDate', 'firstContactDate', 'accountExpiryDate',
                            'reAssignedDate'].indexOf(prop) !== -1;
                        if (prop == 'remarksToConsultant') {
                            _this.clientDetailForm.controls[prop].setValue(resp.body[prop]);
                        }
                        else if (prop == 'refuseContact') {
                            _this.clientDetailInfo[prop] = (resp.body[prop] != null) ? resp.body[prop] : 0;
                        }
                        else if (isDateType) {
                            _this.clientDetailInfo[prop] = (resp.body[prop]) ? resp.body[prop].substr(0, 10) : null;
                        }
                        else {
                            _this.clientDetailInfo[prop] = resp.body[prop] || "N/A";
                        }
                    }
                }, function (error) {
                    console.log('>>> Error getting client details', error);
                });
            }
        }
    };
    ClientcampaigndetailsComponent.prototype.onSubmitSaveClientDetail = function () {
        var sentParams = {
            refuseContact: this.clientDetailForm.controls['refuseContact'].value ? "1" : "0",
            remarksToConsultant: this.clientDetailForm.controls['remarksToConsultant'].value,
            policyNo: this.agentassignmentService.currClientCd
        };
        this.agentassignmentService.postClientDetail(sentParams, 'sendParams').subscribe(function (resp) {
            console.log('resp: ', resp);
        }, function (error) {
            console.error('>>> Error occurs while posting client details');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ClientcampaigndetailsComponent.prototype, "currSubPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ClientcampaigndetailsComponent.prototype, "gobackRouteLink", void 0);
    ClientcampaigndetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientcampaigndetails',
            template: __webpack_require__(/*! ./clientcampaigndetails.component.html */ "./src/app/components/agentAssign/clientcampaigndetails/clientcampaigndetails.component.html"),
            styles: [__webpack_require__(/*! ./clientcampaigndetails.component.scss */ "./src/app/components/agentAssign/clientcampaigndetails/clientcampaigndetails.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_2__["AgentassignmentService"]])
    ], ClientcampaigndetailsComponent);
    return ClientcampaigndetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- modal in subpage agent details -->\n<div class=\"modal fade \" id=\"onLeaveModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"onLeaveModalLabel\">\n  <form [formGroup]=\"onLeaveModalForm\" class=\"onLeaveModalForm\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"onLeaveModalLabel\">On Leave</h4>\n        </div>\n        <div class=\"modal-body clearfix\">\n          <div class=\"col-md-6\">\n            <label class=\"label-fromField\">From</label>\n            <input readonly placeholder=\"DD/MM/YYYY\" class=\"search-by-input\"\n            (dateChange)=\"onLeaveDateChange($event, 0)\"\n            matInput [min]=\"currDate\" [matDatepicker]=\"onLeaveFromPicker\"\n            formControlName=\"onLeaveFrom\" name=\"onLeaveFromField\">\n            <mat-datepicker-toggle matSuffix [for]=\"onLeaveFromPicker\">\n              <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n            </mat-datepicker-toggle>\n            <mat-datepicker #onLeaveFromPicker></mat-datepicker>\n          </div>\n          <div class=\"col-md-6\">\n            <label class=\"label-toField\">To</label>\n            <input readonly placeholder=\"DD/MM/YYYY\" class=\"search-by-input\"\n            (dateChange)=\"onLeaveDateChange($event, 1)\"\n            matInput [min]=\"minDateTo\" [matDatepicker]=\"onLeaveToPicker\"\n            formControlName=\"onLeaveTo\" name=\"onLeaveToField\">\n            <mat-datepicker-toggle matSuffix [for]=\"onLeaveToPicker\">\n              <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n            </mat-datepicker-toggle>\n            <mat-datepicker #onLeaveToPicker></mat-datepicker>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button [disabled]=\"!onLeaveModalForm.controls['onLeaveFrom'].value || !onLeaveModalForm.controls['onLeaveTo'].value \" type=\"submit\" class=\"btn btn-primary table-btn a-saveLeaveDateBtn\" data-dismiss=\"modal\">Save</button>\n          <button type=\"button\" class=\"btn btn-default table-btn\" data-dismiss=\"modal\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<!-- select btn modal -->\n<div class=\"modal fade \" id=\"selectBtnModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"selectBtnModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"selectBtnModalLabel\">Are you sure to assign?</h4>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary table-btn a-selectYesBtn\" data-dismiss=\"modal\">Yes</button>\n        <button type=\"button\" class=\"btn btn-default table-btn\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"div-detailSearchRecord\">\n  <div class=\"clearfix div-detailSearchRecordCriteria\">\n    <h4 class=\"float-left h4-searchCriteriaText\">Search Criteria:</h4>\n    <h4 class=\"h4-criteriaText\">\n      <ng-container *ngFor=\"let criteria of searchCriterias; let i = index;\">\n        <ng-container *ngIf=\"criteria\">“{{criteria}}”\n          <ng-container *ngIf=\"i < searchCriterias.length-1 && criteria\">,</ng-container>\n        </ng-container>\n      </ng-container>\n    </h4>\n    <h4 class=\"float-right add-bottom h4-noOfRenewals\">Table No. Of Renewals: {{noOfRenewals}}</h4>\n  </div>\n  <div class=\"table-wrapper table-responsive div-detailSearchRecordDataTable\">\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover table-detailSearchRecord\">\n      <thead>\n        <tr class=\"row1\">\n          <th class=\"noscroll\" *ngFor=\"let colName of displayedColumns\">\n            {{colName}}\n          </th>\n        </tr>\n      </thead>\n    </table>\n    <div class=\"div-goToPage-showPerPage\">\n      <div class=\"div-goToPage\">\n        <span class=\"span-goToPage\">Go to page</span>\n        <div class=\"div-goToPage_wrapper\">\n          <input type=\"text\" class=\"input-goToPage_left\" [(ngModel)]=\"currPage\" value=\"{{currPage}}\"/>\n          <input type=\"text\" class=\"input-goToPage_right\" value=\"/ {{noOfPage}}\" disabled/>\n          <input class=\"button-goToPage_go\" value=\"GO\" type=\"button\" (click)=\"changeCurrTablePage(currPage)\"/>\n        </div>\n      </div>\n      <ul class=\"ul-showPerPage\">\n        <span>show</span>\n        <li><a [ngClass]=\"mapToLengthMenuNum[5]\" (click)=\"changeTablePerPage(5)\">5</a></li>\n        <li><a [ngClass]=\"mapToLengthMenuNum[10]\" (click)=\"changeTablePerPage(10)\">10</a></li>\n        <li><a [ngClass]=\"mapToLengthMenuNum[20]\" (click)=\"changeTablePerPage(20)\">20</a></li>\n        <span>per page</span>\n      </ul>\n\n      <input type=\"button\" routerLink=\"/{{gobackRouteLink}}\" class=\"input-detailSearchRecordBack btn btn-default table-btn all-btn\" value=\"Back\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".onLeaveModalForm .modal-header .modal-title{color:#FE0000}.onLeaveModalForm .modal-body .label-fromField,.onLeaveModalForm .modal-body .label-toField{display:block}.onLeaveModalForm .modal-body .material-icons{color:red}.onLeaveModalForm .modal-footer .a-saveLeaveDateBtn{float:left}#selectBtnModal .modal-title{text-align:center}#selectBtnModal .a-selectYesBtn{float:left}.div-detailSearchRecord .div-detailSearchRecordCriteria{width:100%}.div-detailSearchRecord .div-detailSearchRecordCriteria .h4-searchCriteriaText{white-space:pre}.div-detailSearchRecord .div-detailSearchRecordCriteria .h4-criteriaText{word-break:break-all}.div-detailSearchRecord .div-detailSearchRecordCriteria .h4-noOfRenewals{white-space:nowrap;margin-left:auto}.div-detailSearchRecord .dataTables_wrapper .dataTables_info{display:none}.div-detailSearchRecord .div-detailSearchRecordDataTable{text-align:center;padding-top:0px}.div-detailSearchRecord .div-detailSearchRecordDataTable .table-detailSearchRecord{width:100% !important}.div-detailSearchRecord .div-detailSearchRecordDataTable .table-detailSearchRecord .sorting_asc,.div-detailSearchRecord .div-detailSearchRecordDataTable .table-detailSearchRecord .sorting_desc{background-image:none;cursor:unset}.div-detailSearchRecord .div-goToPage-showPerPage{display:-webkit-box;position:relative}.div-detailSearchRecord .div-goToPage-showPerPage .div-goToPage{display:flex;position:relative;left:38%}.div-detailSearchRecord .div-goToPage-showPerPage .div-goToPage .span-goToPage{line-height:50px;color:gray}.div-detailSearchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper{display:inline-block}.div-detailSearchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_left{margin-left:10px;border-radius:10px 0px 0px 10px;border-right:0px;text-align:right;color:gray}.div-detailSearchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_right{position:relative;left:-10px;color:gray;border-left:0px;border-radius:0px}.div-detailSearchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper input{width:80px;background-color:transparent}.div-detailSearchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .button-goToPage_go{position:relative;left:-12px;border-radius:0px 10px 10px 0px;background-color:#c8c8c8;color:black}.div-detailSearchRecord .div-goToPage-showPerPage .ul-showPerPage{list-style:none !important;display:flex;position:absolute;top:-26px;right:0px;float:right}.div-detailSearchRecord .div-goToPage-showPerPage .ul-showPerPage li{margin:0px 10px}.div-detailSearchRecord .div-goToPage-showPerPage .ul-showPerPage .inactive-gray{color:gray}.div-detailSearchRecord .div-goToPage-showPerPage .ul-showPerPage .active-red{color:red}.div-detailSearchRecord .div-goToPage-showPerPage .input-detailSearchRecordBack{position:absolute;right:0px;top:0px}\n"

/***/ }),

/***/ "./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DetailssearchrecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailssearchrecordComponent", function() { return DetailssearchrecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/agentassignment.service */ "./src/app/services/agentassignment.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _utils_convertformat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/convertformat */ "./src/app/utils/convertformat.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};










var DetailssearchrecordComponent = /** @class */ (function () {
    function DetailssearchrecordComponent(agentassignmentService, http, renderer2, router) {
        this.agentassignmentService = agentassignmentService;
        this.http = http;
        this.renderer2 = renderer2;
        this.router = router;
        this.searchCriterias = ["", "", ""];
        this.searchCriteriaFieldName = ["agentCode", "agentPhone", "agentName"];
        this.defaultCriterias = ["", "", ""];
        this.noOfRenewals = 0;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pageInfo = {};
        this.currPage = 1;
        this.currDate = new Date();
        this.dataTableJustInitialized = false;
        this.currAgentCode = "";
        this.currLeaveId = "";
        this.currPolicyNo = "";
        this.onLeaveModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            onLeaveFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            onLeaveTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('')
        });
        //
        //map the page num to the jquery elem of page num
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "active-red",
            "20": "inactive-gray",
        };
        //for handling the datatables's link
        //use router.navigate instead of href in dom 'a', as href will refresh whole page
        this.onclickEventInit = false; //onchange would reset this back to false
    }
    //to set the min, max date of from / to once onleavefrom / to is changed
    DetailssearchrecordComponent.prototype.onLeaveDateChange = function (e, fromOrTo) {
        this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
    };
    DetailssearchrecordComponent.prototype.ngOnChanges = function () {
        this.currAgentCode = "";
        this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
    };
    DetailssearchrecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currPolicyNo = this.agentassignmentService.currPolNo || "";
        if (this.currPolicyNo === '') {
            this.router.navigate(['/']);
        }
        //to check if curr full agent list's agent are old agent type / new agent Type
        this.agentPoolSubscription = this.agentassignmentService.getCurrAgentPoolType({ policyNo: this.currPolicyNo }, 'getPoolType').subscribe(function (resp) {
            _this.currAgentListPoolType = parseInt(resp.body.poolType);
            if ([_constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"].OLD_POOL_TYPE, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"].ADDITIONAL_POOL_TYPE].indexOf(_this.currAgentListPoolType) != -1) {
                _this.displayedColumns = _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"]["DetailSearchRecordOldPoolTypeColumnName"];
                _this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"]["DetailSearchRecordOldPoolTypeColumnField"];
            }
            else if (_this.currAgentListPoolType === _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"].NEW_POOL_TYPE) {
                _this.displayedColumns = _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"]["DetailSearchRecordColumnName"];
                _this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"]["DetailSearchRecordColumnField"];
            }
            else {
                console.error(">>> Pool type error, poolType:", resp.body.poolType);
                _this.router.navigate(['/']);
                return null;
            }
            var colArr = [], dataArr = [];
            _this.displayedColumnsName.forEach(function (val, index) {
                colArr.push([_constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"].OLD_POOL_TYPE, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"].ADDITIONAL_POOL_TYPE].indexOf(_this.currAgentListPoolType) != -1 || index != 6 ? {
                    data: val
                } : {
                    data: val,
                    width: '15%' // bigger width for [onLeave] col
                });
            });
            _this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                scrollX: true,
                scrollY: true,
                columnDefs: _this.agentDetailsColumnDef(),
                ajax: _this.agentDetailsAjax(),
                processing: true,
                serverSide: true,
                language: {
                    info: "",
                    paginate: {
                        first: '« first',
                        previous: '‹ prev',
                        next: 'next ›',
                        last: 'last »'
                    },
                    //display none length Menu and add a new custom menu
                    // to change the hidden length menu
                    lengthMenu: "",
                },
                searching: false,
                columns: colArr
            };
            _this.initDatatableAndClassToTrigger();
            _this.dataTableJustInitialized = true;
        }, function (error) { console.error(error); });
        Object(lodash__WEBPACK_IMPORTED_MODULE_4__["set"])(window, 'currServiceName', this.agentassignmentService.currServiceName);
    };
    DetailssearchrecordComponent.prototype.initDatatableAndClassToTrigger = function () {
        var _this = this;
        $('.table-detailSearchRecord').on('page.dt', function (event, settings) {
            $('.input-goToPage_left').val((settings._iDisplayStart / settings.oInit.pageLength) + 1);
        });
        //all the following btns are placed inside the agentassignment.component.html
        this.classToTrigger = [
            { type: "setCurrRow", className: "a-addBtn", callback: function () { _this.addBtnClicked(); } },
            { type: "setCurrRow", className: "a-selectBtn", callback: function () { } },
            { type: "setCurrRowAndSubmit", className: "a-resetBtn", callback: function () { _this.resetLeaveRecord(); } },
            { type: "submit", className: "a-saveLeaveDateBtn", callback: function () { _this.saveLeaveRecord(); } },
            { type: "submit", className: "a-selectYesBtn", callback: function () { _this.selectYesRecord(); } },
        ];
    };
    DetailssearchrecordComponent.prototype.resetLeaveRecord = function () {
        var _this = this;
        var queryParams = {
            leaveId: this.currLeaveId
        };
        this.agentassignmentService.postResetLeaveRecord(queryParams, "sendParams").subscribe(function (resp) {
            console.log("resp:", resp);
            _this.refreshAndReloadSearchRecordTable(_this.defaultCriterias);
        }, function (error) { return console.error(error); });
    };
    DetailssearchrecordComponent.prototype.addBtnClicked = function () {
        //reset the form's Value
        this.onLeaveModalForm.controls['onLeaveFrom'].setValue('');
        this.onLeaveModalForm.controls['onLeaveTo'].setValue('');
    };
    DetailssearchrecordComponent.prototype.saveLeaveRecord = function () {
        var _this = this;
        //preprocess the leave start dt and leave end dt,
        var leaveStartDate = this.onLeaveModalForm.controls['onLeaveFrom'].value;
        var leaveEndDate = this.onLeaveModalForm.controls['onLeaveTo'].value;
        if (!leaveStartDate || !leaveEndDate || leaveEndDate - leaveStartDate < 0 || (leaveStartDate.getTime() - new Date().getTime()) < -86400000) {
            throw new Error('leaveStartDt || leaveEndDt error');
        }
        var queryParams = {
            leaveId: this.currLeaveId,
            agentCode: this.currAgentCode,
            leaveStartDate: _utils_convertformat__WEBPACK_IMPORTED_MODULE_7__["default"].dateToDDMMYYYY(leaveStartDate),
            leaveEndDate: _utils_convertformat__WEBPACK_IMPORTED_MODULE_7__["default"].dateToDDMMYYYY(leaveEndDate)
        };
        this.agentassignmentService.postSaveLeaveRecord(queryParams, "sendParams").subscribe(function (resp) {
            console.log("resp:", resp);
            _this.refreshAndReloadSearchRecordTable(_this.defaultCriterias);
        }, function (error) { return console.log(error); });
    };
    DetailssearchrecordComponent.prototype.selectYesRecord = function () {
        var _this = this;
        var queryParams = {
            agentCode: this.currAgentCode,
            policyNo: this.currPolicyNo
        };
        this.agentassignmentService.postSelectYesLeaveRecord(queryParams, "sendParams").subscribe(function (resp) {
            _this.router.navigate(['/' + _this.agentassignmentService.currServiceName]);
        }, function (error) { return console.error(error); });
    };
    DetailssearchrecordComponent.prototype.ngAfterViewInit = function () {
    };
    DetailssearchrecordComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.dataTableJustInitialized) {
            this.dtTrigger.next();
            //fetch the datatable's settings
            //since angular-datatables is not supporting changing table page in option yet
            //make use of settings.oApi._fnPageChange to change the page
            //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
            this.dataTableSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])($.fn['dataTable'], 'settings[0]');
            //for handling the btn inside datatables
            if (!this.onclickEventInit) {
                this.onclickEventInit = true;
                this.bodyRendererListener = this.renderer2.listen("body", 'click', function (event) {
                    _this.classToTrigger.forEach(function (elem, key) {
                        if ($(event.target).hasClass(elem.className)) {
                            //add, select, reset btn that is inside the tr row
                            //only these btns have the info of the closest tr for setting currently selected row
                            if (['setCurrRow', 'setCurrRowAndSubmit'].indexOf(elem.type) !== -1) {
                                var rowDataStr = $(event.target).closest("tr").attr("rowdata");
                                var rowDataObj = JSON.parse(rowDataStr);
                                var leaveId = rowDataObj.onLeave ? rowDataObj.onLeave.split(";")[0] : null;
                                _this.currLeaveId = leaveId;
                                _this.currAgentCode = rowDataObj.agentCode;
                            }
                            elem.callback();
                        }
                    });
                });
            }
            this.dataTableJustInitialized = false;
        }
    };
    DetailssearchrecordComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        var toBeDestroyArray = ['bodyRendererListener', 'dtTrigger', 'dataTableAjaxSubscription', 'agentPoolSubscription'];
        toBeDestroyArray.forEach(function (elem, key) {
            if (_this[elem] && elem == 'bodyRendererListener') {
                _this.bodyRendererListener();
            }
            else if (_this[elem] && elem != 'bodyRendererListener') {
                _this[elem].unsubscribe();
            }
        });
    };
    DetailssearchrecordComponent.prototype.changeTablePerPage = function (val) {
        var _this = this;
        //reset all the length menu 's class to gray color
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "inactive-gray",
            "20": "inactive-gray",
        };
        this.mapToLengthMenuNum[parseInt(val)] = "active-red";
        //reset the datatable after changing dtOptions to redraw the table
        this.dtOptions.pageLength = val; //change table's no of records
        this.dTable.dtInstance.then(function (dtInstance) {
            //redraw table only need these 2 funcs
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
        this.currPage = 1;
        this.noOfPage = Math.ceil(this.noOfRenewals / this.dtOptions.pageLength);
        $(".input-goToPage_left").val(1);
    };
    DetailssearchrecordComponent.prototype.changeCurrTablePage = function (page) {
        if (page !== "" && /^\d+$/.test(page)) {
            console.log('Change to page: ' + page);
            var pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true);
            console.log((pageChangeStatus) ? 'Current page changed to ' + page : "Fail to change page, page exceed no of page");
            this.currPage = page;
        }
    };
    DetailssearchrecordComponent.prototype.refreshAndReloadSearchRecordTable = function (_searchCriteria) {
        var _this = this;
        this.searchCriterias = _searchCriteria;
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
        var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(this.dTable, "dtInstance");
        if (dTableInstance) {
            dTableInstance.then(function (dtInstance) {
                //redraw table only need these 2 funcs
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
    };
    DetailssearchrecordComponent.prototype.agentDetailsColumnDef = function () {
        return [{
                targets: "_all",
                orderable: false,
                createdCell: function (td, cellData, rowData, row, col) {
                    var redBtnClass = "btn btn-primary table-btn";
                    var grayBtnClass = "btn btn-default table-btn";
                    var convertDate = function (date, opt) {
                        return (opt === "MMDD") ? (date.getMonth() + 1) + '/' + date.getDate() :
                            date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " +
                                ((opt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
                    };
                    var formatDateYYYYMMDD = function (date, splitStr, toDateType) {
                        return (toDateType) ? new Date(date.getFullYear() + splitStr + (date.getMonth() + 1) + splitStr + date.getDate()) :
                            date.getFullYear() + splitStr + (date.getMonth() + 1) + splitStr + date.getDate();
                    };
                    var onLeave = rowData.onLeave;
                    var splitOnLeave = (onLeave) ? onLeave.split(";") : null; //[0] =leaveId, [1] =onleave start end date
                    var onLeaveP, onLeaveDt, onLeaveStartDt, onLeaveEndDt, isEarlierThanLeavePeriod = false, isWithinLeavePeriod = false;
                    var currDate = new Date();
                    var poolType = rowData.poolType;
                    if (splitOnLeave) {
                        onLeaveDt = splitOnLeave[1].split(',');
                        onLeaveStartDt = new Date(onLeaveDt[0].substr(0, 10));
                        onLeaveEndDt = new Date(onLeaveDt[1].substr(0, 10));
                        var formattedCurrDate = formatDateYYYYMMDD(currDate, '-', true);
                        isEarlierThanLeavePeriod = formattedCurrDate.getTime() - onLeaveEndDt.getTime() <= 0;
                        isWithinLeavePeriod = formattedCurrDate.getTime() - onLeaveStartDt.getTime() >= 0 && formattedCurrDate.getTime() - onLeaveEndDt.getTime() <= 0;
                        //compare current date with the on leave start dt and end dt
                        var pStyle = "style=\"margin:auto;padding:10px;" + ((isWithinLeavePeriod) ? "color:lightgray;\"" : "\"");
                        onLeaveP = "<p " + pStyle + ">" + convertDate(onLeaveStartDt, "MMDD") + "-" + convertDate(onLeaveEndDt, "MMDD") + "</p>";
                    }
                    var aOrSpanStyle = ""; // for col 4 [lastAssignDate] and col 6 [onleave]
                    if (col <= 4 && !cellData || cellData === '') {
                        $(td).html("<span " + ((isWithinLeavePeriod) ? "style=\"color:lightgray\"" : "") + ">-</span>");
                    }
                    switch (col) {
                        case 4:
                            var closestTrObj = $(td).closest('tr');
                            $(closestTrObj).attr("rowData", JSON.stringify(rowData));
                            if (cellData) {
                                var convertDateData = new Date(cellData.substr(0, 10));
                                $(td).html(convertDate(convertDateData, 'withoutMins'));
                            }
                            break;
                        case 5:
                            $(td).html("<a class=\"" + redBtnClass + " a-selectBtn\" data-toggle=\"modal\" data-target=\"#selectBtnModal\">Select</a>");
                            break;
                        case 6:
                            aOrSpanStyle += "margin:auto;";
                            var divStyle = "display:inline-flex;width:100%;";
                            //OLD_POOL_TYPE and ADDITIONAL_POOL_TYPE in gi interface, onleave col should be hidden
                            //cs interface doenst have such a concern
                            if (window['currServiceName'] === "easAgentAssignGI" &&
                                [_constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"].OLD_POOL_TYPE, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"].ADDITIONAL_POOL_TYPE].indexOf(poolType) != -1) {
                                $(td).html("");
                            }
                            else if (!onLeave || !isEarlierThanLeavePeriod) {
                                $(td).html("<div style=\"" + divStyle + "\">" +
                                    "<a style=\"" + aOrSpanStyle + "\" class=\"" + grayBtnClass +
                                    " a-addBtn\" data-toggle=\"modal\" data-target=\"#onLeaveModal\">Add</a></div>");
                            }
                            else {
                                $(td).html("<div style=\"" + divStyle + "\">" +
                                    onLeaveP + "<a style=\"" + aOrSpanStyle + "\" class=\"" + grayBtnClass +
                                    " a-resetBtn\" >Reset</a></div>");
                            }
                            break;
                        default:
                            aOrSpanStyle += ((isWithinLeavePeriod) ? "color:lightgray;" : "");
                            $(td).html("<span style=\"" + aOrSpanStyle + "\">" + cellData + "</span>");
                            break;
                    }
                }
            }];
    };
    DetailssearchrecordComponent.prototype.agentDetailsAjax = function () {
        var _this = this;
        return function (params, callback, settings) {
            var queryParams = {};
            var draw, start, length, unusedParams;
            (draw = params.draw, start = params.start, length = params.length, params, unusedParams = __rest(params, ["draw", "start", "length"]));
            queryParams = {
                draw: draw, start: start, length: length
            };
            //put all the params from searchCriteria into queryParams
            _this.searchCriterias.forEach(function (data, key) {
                if (data) {
                    queryParams[_this.searchCriteriaFieldName[key]] = data;
                }
            });
            queryParams["policyNo"] = _this.currPolicyNo;
            _this.dataTableAjaxSubscription = _this.agentassignmentService.getAgentDetailRecord(queryParams, 'dataTable').subscribe(function (resp) {
                _this.noOfRenewals = resp.body.recordsFiltered;
                _this.noOfPage = Math.ceil(_this.noOfRenewals / _this.dtOptions.pageLength);
                _this.currPage = (resp.body.recordsFiltered >= 1) ? _this.currPage : 0;
                //preprocessing the resp.body.data
                var resArr = { data: Array() };
                resp.body.data.forEach(function (elem, key) {
                    var leaveId, leaveStartDate, leaveEndDate, restAttrObj;
                    (leaveId = elem.leaveId, leaveStartDate = elem.leaveStartDate, leaveEndDate = elem.leaveEndDate, elem, restAttrObj = __rest(elem, ["leaveId", "leaveStartDate", "leaveEndDate"]));
                    Object(lodash__WEBPACK_IMPORTED_MODULE_4__["set"])(restAttrObj, "assign", null);
                    if (_this.currAgentListPoolType === _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"].NEW_POOL_TYPE) { //only new pool type has on leave col
                        var dateStr = (!leaveId || leaveId === 0) ? null :
                            leaveId + ";" + leaveStartDate + "," + leaveEndDate;
                        //the leaveId should be later split out
                        Object(lodash__WEBPACK_IMPORTED_MODULE_4__["set"])(restAttrObj, "onLeave", dateStr);
                    }
                    resArr.data.push(restAttrObj);
                });
                //
                callback({
                    data: resArr.data,
                    recordsTotal: resp.body.recordsTotal,
                    recordsFiltered: resp.body.recordsFiltered
                });
            });
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailssearchrecordComponent.prototype, "gobackRouteLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], DetailssearchrecordComponent.prototype, "dTable", void 0);
    DetailssearchrecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detailssearchrecord',
            template: __webpack_require__(/*! ./detailssearchrecord.component.html */ "./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.html"),
            styles: [__webpack_require__(/*! ./detailssearchrecord.component.scss */ "./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_agentassignment_service__WEBPACK_IMPORTED_MODULE_1__["AgentassignmentService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], DetailssearchrecordComponent);
    return DetailssearchrecordComponent;
}());



/***/ }),

/***/ "./src/app/components/agentAssign/searchcriteria/searchcriteria.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/agentAssign/searchcriteria/searchcriteria.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row div-searchCriteria\"><div class=\"col-md-12\">\n    <div class=\"panel\">\n        <div class=\"panel-body slide-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12 clearfix\">\n                    <div id=\"accordioninpanel\" class=\"accordion-group\">\n                        <div class=\"accordion-item\">\n                            <a class=\"accordion-title collapsed\" data-toggle=\"collapse\" data-parent=\"#accordioninpanel\" href=\"#my-policy-diary\">\n                              <h4>Input your Search Criteria(s)</h4>\n                            </a>\n                            <div id=\"my-policy-diary\" class=\"collapse\" style=\"\">\n                                <div class=\"accordion-body\">\n                                  <div *ngIf=\"currSubPage == 'easAgentDetail'\">\n                                      <form [formGroup]=\"searchForm\" method=\"POST\" (ngSubmit)=\"onSubmitSearchCriteria()\">\n                                          <div>\n                                              <div class=\"search-by-col-wrap\">\n                                                  <div class=\"search-by-col\">\n                                                      <div>\n                                                          <label>Agent Code</label>\n                                                          <input formControlName=\"agentCode\" name=\"agentCodeField\" class=\"search-by-input\" type=\"text\">\n                                                      </div>\n                                                      <div>\n                                                          <label>Agent Phone</label>\n                                                          <input formControlName=\"agentPhone\" name=\"agentPhoneField\" class=\"search-by-input\" type=\"text\">\n                                                      </div>\n                                                      <div>\n                                                          <label>Agent Name</label>\n                                                          <input formControlName=\"agentName\" name=\"agentNameField\" class=\"search-by-input\" type=\"text\">\n                                                      </div>\n                                                  </div>\n\n                                                  <div class=\"clearfix\"></div>\n                                              </div>\n                                          </div>\n\n                                          <div class=\"text-left\">\n                                              <input [disabled]=\"!searchForm.valid\" type=\"submit\" class=\"btn btn-primary table-btn\" value=\"Search\">\n                                              <input type=\"reset\" class=\"btn btn-default table-btn\" value=\"Reset\">\n                                          </div>\n                                      </form>\n                                    </div>\n                                    <div *ngIf=\"currSubPage=='easAgentAssignGI'\">\n                                      <form [formGroup]=\"searchForm\" method=\"POST\" (ngSubmit)=\"onSubmitSearchCriteria()\">\n                                        <div>\n                                            <div class=\"search-by-col-wrap\">\n                                                <div class=\"search-by-col\">\n                                                    <div>\n                                                        <label>Full Name</label>\n                                                        <input formControlName=\"fullName\" class=\"search-by-input\" name=\"fullNameField\"type=\"text\">\n                                                    </div>\n                                                    <div>\n                                                        <label>Policy No.</label>\n                                                        <input formControlName=\"policyNo\" name=\"policyNoField\" class=\"search-by-input\" type=\"text\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"search-by-col\">\n                                                    <div>\n                                                        <label>Mobile No.</label>\n                                                        <input formControlName=\"mobileNo\" name=\"mobileNoField\" class=\"search-by-input\" type=\"text\">\n                                                    </div>\n                                                    <div>\n                                                        <label>Email Address</label>\n                                                        <input formControlName=\"emailAddr\" name=\"emailAddrField\" class=\"search-by-input\" type=\"email\">\n                                                    </div>\n                                                    <div>\n                                                        <label>ID Card No.</label>\n                                                        <input formControlName=\"idCardNo\" name=\"idCardnoField\" class=\"search-by-input\" type=\"text\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"div-dateOfSubmissionWrapper\">\n                                                    <div> <span class=\"span-dateOfSubmissionFrom\">Date of Submission From</span>\n                                                        <div class=\"div-dateOfSubmissionFrom\">\n                                                            <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfSubmissionChange($event, 0)\" matInput [max]=\"maxDateFrom\" [matDatepicker]=\"dateOfSubmissionFromPicker\" formControlName=\"dateOfSubmissionFrom\" name=\"dateOfSubmissionFromField\" placeholder=\"DD/MM/YYYY\">\n                                                            <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionFromPicker\">\n                                                              <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                                            </mat-datepicker-toggle>\n                                                            <mat-datepicker #dateOfSubmissionFromPicker></mat-datepicker>\n                                                        </div>\n                                                    </div>\n                                                    <span class=\"span-dateOfSubmissionTo\">To</span>\n                                                    <div>\n                                                      <div class=\"div-dateOfSubmissionTo\">\n                                                        <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfSubmissionChange($event, 1)\" matInput [min]=\"minDateTo\" [matDatepicker]=\"dateOfSubmissionToPicker\" formControlName=\"dateOfSubmissionTo\" name=\"dateOfSubmissionToField\" placeholder=\"DD/MM/YYYY\">\n                                                        <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionToPicker\">\n                                                          <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                                        </mat-datepicker-toggle>\n                                                        <mat-datepicker #dateOfSubmissionToPicker></mat-datepicker>\n                                                      </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"search-by-col\">\n                                                    <div>\n                                                        <label>Assignment</label>\n                                                        <div class=\"dropdown-redarrow search-by-dropdown div-assignmentOption\">\n                                                            <select formControlName=\"assignmentOption\" name=\"assignmentOptionField\">\n                                                                <option value=\"\"></option>\n                                                                <option value=\"A\">Assign</option>\n                                                                <option value=\"AA\">Auto Assigned</option>\n                                                                <option value=\"R\">Re-assign</option>\n                                                            </select>\n                                                            <div class=\"select-selected\"></div>\n                                                            <div class=\"select-items select-hide\"><!--same-as-selected-->\n                                                              <div>&nbsp;</div>\n                                                              <div>Assign</div>\n                                                              <div>Auto Assigned</div>\n                                                              <div>Re-assign</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                            </div>\n                                        </div>\n                                        <div class=\"text-left\">\n                                            <input type=\"submit\" [disabled]=\"!searchForm.valid\" class=\"btn-search btn btn-primary table-btn\" value=\"Search\">\n                                            <input (click)=\"resetDateRangeRestrictAndDropDownOption()\" type=\"reset\" class=\"btn-reset btn btn-default table-btn\" value=\"Reset\">\n                                        </div>\n                                    </form>\n                                    </div>\n                                    <div *ngIf=\"currSubPage=='easAgentAssignCS'\">\n                                      <form [formGroup]=\"searchForm\" method=\"POST\" (ngSubmit)=\"onSubmitSearchCriteria()\">\n                                        <div>\n                                            <div class=\"search-by-col-wrap\">\n                                                <div class=\"search-by-col\">\n                                                    <div>\n                                                        <label>Full Name</label>\n                                                        <input formControlName=\"fullName\" name=\"fullNameField\" class=\"search-by-input\" type=\"text\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"search-by-col\">\n                                                    <div>\n                                                        <label>Mobile No.</label>\n                                                        <input formControlName=\"mobileNo\" name=\"mobileNoField\" class=\"search-by-input\" type=\"text\">\n                                                    </div>\n                                                    <div>\n                                                        <label>Email Address</label>\n                                                        <input formControlName=\"emailAddr\" name=\"emailAddrField\" class=\"search-by-input\" type=\"email\">\n                                                    </div>\n                                                    <div>\n                                                        <label>ID Card No.</label>\n                                                        <input formControlName=\"idCardNo\" name=\"idCardnoField\" class=\"search-by-input\" type=\"text\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"div-dateOfSubmissionWrapper\">\n                                                    <div> <span class=\"span-dateOfSubmissionFrom\">Date of Submission From</span>\n                                                        <div class=\"div-dateOfSubmissionFrom\">\n                                                            <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfSubmissionChange($event, 0)\" matInput [max]=\"maxDateFrom\" [matDatepicker]=\"dateOfSubmissionFromPicker\" formControlName=\"dateOfSubmissionFrom\" name=\"dateOfSubmissionFromField\" placeholder=\"DD/MM/YYYY\">\n                                                            <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionFromPicker\">\n                                                              <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                                            </mat-datepicker-toggle>\n                                                            <mat-datepicker #dateOfSubmissionFromPicker></mat-datepicker>\n                                                        </div>\n                                                    </div>\n                                                    <span class=\"span-dateOfSubmissionTo\">To</span>\n                                                    <div>\n                                                      <div class=\"div-dateOfSubmissionTo\">\n                                                        <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfSubmissionChange($event, 1)\" matInput [min]=\"minDateTo\" [matDatepicker]=\"dateOfSubmissionToPicker\" formControlName=\"dateOfSubmissionTo\" name=\"dateOfSubmissionToField\" placeholder=\"DD/MM/YYYY\">\n                                                        <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionToPicker\">\n                                                          <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                                        </mat-datepicker-toggle>\n                                                        <mat-datepicker #dateOfSubmissionToPicker></mat-datepicker>\n                                                      </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"search-by-col\">\n                                                    <div>\n                                                        <label>Assignment</label>\n                                                        <div class=\"dropdown-redarrow search-by-dropdown div-assignmentOption\">\n                                                            <select formControlName=\"assignmentOption\" name=\"assignmentOptionField\">\n                                                                <option value=\"\"></option>\n                                                                <option value=\"A\">Assign</option>\n                                                                <option value=\"R\">Re-assign</option>\n                                                            </select>\n                                                            <div class=\"select-selected\"></div>\n                                                            <div class=\"select-items select-hide\"><!--same-as-selected-->\n                                                              <div>&nbsp;</div>\n                                                              <div>Assign</div>\n                                                              <div>Re-assign</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div>\n                                                        <label>Contact customer within 2 days</label>\n                                                        <div class=\"dropdown-redarrow search-by-dropdown div-contactCustomerOption\">\n                                                            <select formControlName=\"contactCustomerOption\" name=\"contactCustomerOptionField\">\n                                                                <option value=\"\"></option>\n                                                                <option value=\"Y\">Yes</option>\n                                                                <option value=\"N\">No</option>\n                                                            </select>\n                                                            <div class=\"select-selected\"></div>\n                                                            <div class=\"select-items select-hide\"><!--same-as-selected-->\n                                                              <div>&nbsp;</div>\n                                                              <div>Yes</div>\n                                                              <div>No</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div>\n                                                        <label>Assignment Status</label>\n                                                        <div class=\"dropdown-redarrow search-by-dropdown div-assignmentStatusOption\">\n                                                            <select formControlName=\"assignmentStatusOption\" name=\"assignmentStatusOptionField\">\n                                                                <option value=\"\"></option>\n                                                                <option value=\"1\">To apply for extension</option>\n                                                                <option value=\"2\">Applied extension</option>\n                                                                <option value=\"3\">Opt-out from this program</option>\n                                                                <option value=\"4\">Re-assigned</option>\n                                                            </select>\n                                                            <div class=\"select-selected\"></div>\n                                                            <div class=\"select-items select-hide\"><!--same-as-selected-->\n                                                              <div>&nbsp;</div>\n                                                              <div>To apply for extension</div>\n                                                              <div>Applied extension</div>\n                                                              <div>Opt-out from this program</div>\n                                                              <div>Re-assigned</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                            </div>\n                                        </div>\n                                        <div class=\"text-left\">\n                                            <input type=\"submit\" [disabled]=\"!searchForm.valid\" class=\"btn-search btn btn-primary table-btn\" value=\"Search\">\n                                            <input (click)=\"resetDateRangeRestrictAndDropDownOption()\" type=\"reset\" class=\"btn-reset btn btn-default table-btn\" value=\"Reset\">\n                                        </div>\n                                    </form>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div></div>\n"

/***/ }),

/***/ "./src/app/components/agentAssign/searchcriteria/searchcriteria.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/agentAssign/searchcriteria/searchcriteria.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-searchCriteria .ng-invalid{border-color:red !important}.div-searchCriteria .div-dateOfSubmissionWrapper{margin-bottom:10px;display:inline-flex}.div-searchCriteria .div-dateOfSubmissionWrapper .span-dateOfSubmissionFrom{margin-bottom:10px}.div-searchCriteria .div-dateOfSubmissionWrapper .div-dateOfSubmissionFrom{margin-right:65px}.div-searchCriteria .div-dateOfSubmissionWrapper .span-dateOfSubmissionTo{position:relative;left:-20px;margin-top:30px}.div-searchCriteria .div-dateOfSubmissionWrapper .div-dateOfSubmissionTo{margin-top:21px}.div-searchCriteria .btn-search,.div-searchCriteria .btn-reset{padding:6px !important}.div-searchCriteria input{line-height:10px;height:40px !important;border-color:#cccccc}.div-searchCriteria .div-dateOfSubmissionFrom,.div-searchCriteria .div-dateOfSubmissionTo{position:relative}.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfSubmissionBtn,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfSubmissionBtn{position:absolute;top:0px;right:0px;background:transparent;width:100%}.div-searchCriteria .div-dateOfSubmissionFrom .mat-icon.material-icons,.div-searchCriteria .div-dateOfSubmissionTo .mat-icon.material-icons{color:red}.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfSubmission,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfSubmission{width:230px;line-height:10px}\n"

/***/ }),

/***/ "./src/app/components/agentAssign/searchcriteria/searchcriteria.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/agentAssign/searchcriteria/searchcriteria.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchcriteriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcriteriaComponent", function() { return SearchcriteriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/agentassignment.service */ "./src/app/services/agentassignment.service.ts");
/* harmony import */ var _utils_convertformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/convertformat */ "./src/app/utils/convertformat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchcriteriaComponent = /** @class */ (function () {
    function SearchcriteriaComponent(agentassignmentService, renderer2) {
        this.agentassignmentService = agentassignmentService;
        this.renderer2 = renderer2;
        this.dropDownInitialized = false;
        this.mapOptionValToTxt = {
            "": "&nbsp;",
            "A": "Assign",
            "AA": "Auto Assigned",
            "R": "Re-assign",
            "Y": "Yes",
            "N": "No",
            "1": "To apply for extension",
            "2": "Applied extension",
            "3": "Opt-out from this program",
            "4": "Re-assigned"
        };
    }
    SearchcriteriaComponent.prototype.closeAllDropDown = function () {
        this.dropdownDivArray.forEach(function (elem, key) {
            if ($("." + elem + " .select-selected").hasClass("select-arrow-active")) {
                $("." + elem + " .select-selected").removeClass("select-arrow-active");
                $("." + elem + " .select-items").addClass("select-hide");
            }
        });
    };
    SearchcriteriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropdownDivArray = this.currSubPage === 'easAgentAssignCS' ?
            ["div-assignmentOption", "div-contactCustomerOption", "div-assignmentStatusOption"] : ["div-assignmentOption"];
        this.bodyRendererListener = this.renderer2.listen("body", 'click', function (event) {
            if (!$(event.target).hasClass("select-selected")) {
                _this.closeAllDropDown();
            }
        });
    };
    SearchcriteriaComponent.prototype.ngOnChanges = function (changes) {
        var mobileNoValidator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)];
        var numValidator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')];
        var numEngValidator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z]+')];
        var numEngSpaceValidator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z ]+')];
        this.criteriaObj = this.currSubPage === 'easAgentAssignGI' ? this.agentassignmentService.currGISearchCriteria :
            this.currSubPage === 'easAgentAssignCS' ? this.agentassignmentService.currCSSearchCriteria : {};
        this.searchForm = (this.currSubPage === 'easAgentAssignGI') ?
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.fullName, numEngSpaceValidator),
                policyNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.policyNo, numValidator),
                mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.mobileNo, mobileNoValidator),
                emailAddr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.emailAddr, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
                idCardNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.idCardNo, numEngSpaceValidator),
                dateOfSubmissionFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.dateOfSubmissionFrom),
                dateOfSubmissionTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.dateOfSubmissionTo),
                assignmentOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.assignmentOption)
            }) : (this.currSubPage === 'easAgentAssignCS') ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.fullName, numEngSpaceValidator),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.mobileNo, mobileNoValidator),
            emailAddr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.emailAddr, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            idCardNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.idCardNo, numEngSpaceValidator),
            dateOfSubmissionFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.dateOfSubmissionFrom),
            dateOfSubmissionTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.dateOfSubmissionTo),
            assignmentOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.assignmentOption),
            contactCustomerOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.contactCustomerOption),
            assignmentStatusOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.criteriaObj.assignmentStatusOption)
        }) : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            agentCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', numEngValidator),
            agentPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', mobileNoValidator),
            agentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', numEngSpaceValidator)
        });
        this.minDateTo = this.criteriaObj.dateOfSubmissionFrom || null;
        this.maxDateFrom = this.criteriaObj.dateOfSubmissionTo || null;
        this.dropDownInitialized = (['easAgentAssignCS', 'easAgentAssignGI'].indexOf(this.currSubPage) !== -1) ?
            false : this.dropDownInitialized;
    };
    //set the option according to the curr value of the corresponding select elem
    SearchcriteriaComponent.prototype.setOptionDivHTML = function (_criteriaObj) {
        if (this.currSubPage == 'easAgentAssignGI') {
            $(".div-assignmentOption .select-selected").html(this.mapOptionValToTxt[_criteriaObj.assignmentOption]);
        }
        else if (this.currSubPage == 'easAgentAssignCS') {
            $(".div-assignmentOption .select-selected").html(this.mapOptionValToTxt[_criteriaObj.assignmentOption]);
            $(".div-contactCustomerOption .select-selected").html(this.mapOptionValToTxt[_criteriaObj.contactCustomerOption]);
            $(".div-assignmentStatusOption .select-selected").html(this.mapOptionValToTxt[_criteriaObj.assignmentStatusOption]);
        }
    };
    SearchcriteriaComponent.prototype.resetDateRangeRestrictAndDropDownOption = function () {
        this.maxDateFrom = null;
        this.minDateTo = null;
        $(".select-selected").html("&nbsp;");
    };
    //search criteria's drop down is dynamically generated by jquery
    //and should be called when the subpage has just changed
    SearchcriteriaComponent.prototype.initDropdown = function (fieldName) {
        var divFieldName = ".div-" + fieldName + " ";
        $(divFieldName + ".select-items div:eq(" + ((fieldName !== 'assignmentOption') ? '0' : '1') + ")").addClass("same-as-selected");
        $(divFieldName + ".select-selected").text($(divFieldName + ".select-items div:eq(" + ((fieldName !== 'assignmentOption') ? '0' : '1') + ")").text());
        //select-selected select-arrow-active
        //select-hide, same-as-selected
        $(divFieldName + ".select-selected").on("click", function () {
            $(divFieldName + ".select-items").removeClass("select-hide");
            $(divFieldName + ".select-selected").addClass("select-arrow-active");
        });
        //
        var selectOptionNameMapVal = {}; //select option name map to val
        for (var i = 0; i < $("[name=" + fieldName + "Field] option").length; i++) {
            var currOption = $("[name=" + fieldName + "Field] option:eq(" + i + ")");
            selectOptionNameMapVal[currOption.html()] = currOption.val();
        }
        //register event for div
        var selectItemsChildren = $(divFieldName + '.select-items').children();
        for (var j = 0; j < selectItemsChildren.length; j++) {
            $(divFieldName + ".select-items div:eq(" + j + ")").on('click', function (e) {
                $(divFieldName + ".select-selected").removeClass("select-arrow-active");
                $(divFieldName + ".select-selected").text($(e.target).text());
                $(divFieldName + ".select-items").addClass("select-hide");
                for (var k = 0; k < selectItemsChildren.length; k++) {
                    $(divFieldName + ".select-items div:eq(" + k + ")").removeClass("same-as-selected");
                }
                $(e.target).addClass("same-as-selected");
                $("[name='" + fieldName + "Field']").val(selectOptionNameMapVal[$(e.target).text()]);
            });
        }
    };
    SearchcriteriaComponent.prototype.ngAfterViewChecked = function () {
        if (!this.dropDownInitialized) {
            if (this.currSubPage === 'easAgentAssignGI') {
                this.initDropdown('assignmentOption'); //the 'assignment' dropdown is dynamically generated
            }
            else {
                this.initDropdown('assignmentOption'); //the 'assignment' dropdown is dynamically generated
                this.initDropdown('contactCustomerOption'); //the 'assignment' dropdown is dynamically generated
                this.initDropdown('assignmentStatusOption'); //the 'assignment' dropdown is dynamically generated
            }
            if (['easAgentAssignGI', 'easAgentAssignCS'].indexOf(this.currSubPage) !== -1) {
                this.setOptionDivHTML(this.criteriaObj);
            }
            this.dropDownInitialized = true;
        }
    };
    //to set the min, max date of from / to once submissionfrom / to is changed
    SearchcriteriaComponent.prototype.dateOfSubmissionChange = function (e, fromOrTo) {
        this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
    };
    SearchcriteriaComponent.prototype.onSubmitSearchCriteria = function () {
        var _a, _b, _c;
        if (this.searchForm.status === 'VALID') {
            //date validation
            if ((this.searchForm.value.dateOfSubmissionFrom &&
                !new Date(this.searchForm.value.dateOfSubmissionFrom).getTime()) ||
                (this.searchForm.value.dateOfSubmissionTo &&
                    !new Date(this.searchForm.value.dateOfSubmissionTo).getTime())) {
                console.error('>>> Invalid searchCriteria inputs');
                return null;
            }
        }
        else {
            console.error('>>> Invalid searchCriteria inputs');
            return null;
        }
        var fullName, policyNo, mobileNo, emailAddr, idCardNo, dateOfSubmissionFrom, dateOfSubmissionTo, assignmentOption, contactCustomerOption, assignmentStatusOption, agentCode, agentPhone, agentName, queryParams;
        //angular reactive form cannot read value of a select elm
        //has to use jquery to read the div value and overwrite the search criterias that sent
        //to searchRecordComponent first
        assignmentOption = "", contactCustomerOption = "", assignmentStatusOption = "";
        if (this.currSubPage === 'easAgentAssignGI') {
            assignmentOption = $('[name=assignmentOptionField]').val();
        }
        else if (this.currSubPage === 'easAgentAssignCS') {
            assignmentOption = $('[name=assignmentOptionField]').val();
            contactCustomerOption = $('[name=contactCustomerOptionField]').val();
            assignmentStatusOption = $('[name=assignmentStatusOptionField]').val();
        }
        var isAgentAssign = ['easAgentAssignGI', 'easAgentAssignCS'].indexOf(this.currSubPage) !== -1;
        if (isAgentAssign) {
            if (this.currSubPage === 'easAgentAssignGI') {
                (_a = this.searchForm.value, fullName = _a.fullName, policyNo = _a.policyNo, mobileNo = _a.mobileNo, emailAddr = _a.emailAddr, idCardNo = _a.idCardNo, dateOfSubmissionFrom = _a.dateOfSubmissionFrom, dateOfSubmissionTo = _a.dateOfSubmissionTo);
                queryParams = { fullName: fullName, policyNo: policyNo, mobileNo: mobileNo, emailAddr: emailAddr, idCardNo: idCardNo, dateOfSubmissionFrom: dateOfSubmissionFrom, dateOfSubmissionTo: dateOfSubmissionTo, assignmentOption: assignmentOption };
                this.agentassignmentService.setCurrCriteria("currGISearchCriteria", queryParams);
            }
            else {
                (_b = this.searchForm.value, fullName = _b.fullName, mobileNo = _b.mobileNo, emailAddr = _b.emailAddr, idCardNo = _b.idCardNo, dateOfSubmissionFrom = _b.dateOfSubmissionFrom, dateOfSubmissionTo = _b.dateOfSubmissionTo);
                queryParams = { fullName: fullName, mobileNo: mobileNo, emailAddr: emailAddr, idCardNo: idCardNo, dateOfSubmissionFrom: dateOfSubmissionFrom, dateOfSubmissionTo: dateOfSubmissionTo, assignmentOption: assignmentOption, contactCustomerOption: contactCustomerOption, assignmentStatusOption: assignmentStatusOption };
                this.agentassignmentService.setCurrCriteria("currCSSearchCriteria", queryParams);
            }
        }
        else {
            (_c = this.searchForm.value, agentCode = _c.agentCode, agentPhone = _c.agentPhone, agentName = _c.agentName);
            queryParams = { agentCode: agentCode, agentPhone: agentPhone, agentName: agentName };
        }
        //transform the raw date to formatted locale date string DDMMYYYY
        dateOfSubmissionFrom = !dateOfSubmissionFrom ? dateOfSubmissionFrom : _utils_convertformat__WEBPACK_IMPORTED_MODULE_3__["default"].dateToDDMMYYYY(new Date(dateOfSubmissionFrom));
        dateOfSubmissionTo = !dateOfSubmissionTo ? dateOfSubmissionTo : _utils_convertformat__WEBPACK_IMPORTED_MODULE_3__["default"].dateToDDMMYYYY(new Date(dateOfSubmissionTo));
        var searchCriteriaArr = (this.currSubPage === 'easAgentAssignGI') ?
            [fullName, policyNo, mobileNo, emailAddr, idCardNo, dateOfSubmissionFrom, dateOfSubmissionTo, assignmentOption] :
            (this.currSubPage === 'easAgentAssignCS') ?
                [fullName, mobileNo, emailAddr, idCardNo, dateOfSubmissionFrom, dateOfSubmissionTo, assignmentOption, contactCustomerOption, assignmentStatusOption] :
                [agentCode, agentPhone, agentName];
        var property = (isAgentAssign) ? "searchRecordComponent" : "detailSearchRecordComponent";
        this[property].refreshAndReloadSearchRecordTable(searchCriteriaArr);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchcriteriaComponent.prototype, "currSubPage", void 0);
    SearchcriteriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchcriteria',
            template: __webpack_require__(/*! ./searchcriteria.component.html */ "./src/app/components/agentAssign/searchcriteria/searchcriteria.component.html"),
            styles: [__webpack_require__(/*! ./searchcriteria.component.scss */ "./src/app/components/agentAssign/searchcriteria/searchcriteria.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_agentassignment_service__WEBPACK_IMPORTED_MODULE_2__["AgentassignmentService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], SearchcriteriaComponent);
    return SearchcriteriaComponent;
}());



/***/ }),

/***/ "./src/app/components/agentAssign/searchrecord/searchrecord.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/agentAssign/searchrecord/searchrecord.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade \" id=\"btnMsgModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"btnMsgModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"btnMsgModalLabel\">{{popUpMsg}}</h4>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default table-btn btn-ok\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- modal in agent assignment -->\n<div class=\"div-searchRecord\">\n  <div class=\"clearfix div-searchRecordCriteria\">\n    <h4 class=\"float-left  h4-searchCriteriaText\">Search Criteria:</h4>\n    <h4 class=\"h4-criteriaText\">\n      <ng-container *ngFor=\"let criteria of searchCriterias; let i = index;\">\n        <ng-container *ngIf=\"(currSubPage=='easAgentAssignGI' && criteria && i < 7) || (currSubPage=='easAgentAssignCS' && criteria && i < 6)\">“{{criteria}}”\n          <ng-container *ngIf=\"i < searchCriterias.length-1 && criteria\">,</ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"(currSubPage=='easAgentAssignGI' && criteria && i >= 7) || (currSubPage=='easAgentAssignCS' && criteria && i >= 6)\">“{{mapOptionTextIntoVal[criteria]}}”\n          <ng-container *ngIf=\"i < searchCriterias.length-1 && criteria\">,</ng-container>\n        </ng-container>\n      </ng-container>\n    </h4>\n    <h4 class=\"float-right add-bottom h4-noOfCustomer\">Table No. Of Customers: {{noOfCustomer}}</h4>\n  </div>\n  <div class=\"table-wrapper table-responsive div-searchRecordDataTable\">\n    <table *ngIf=\"currSubPage=='easAgentAssignGI'\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover table-searchRecord\">\n      <thead>\n        <tr class=\"row1 tr-row1\">\n            <th class=\"noscroll\" rowspan=\"2\">Class</th>\n            <th class=\"noscroll\" rowspan=\"2\">Policy No.</th>\n            <th class=\"noscroll\" rowspan=\"2\">Prulife Pol. No.</th>\n            <th class=\"noscroll\" rowspan=\"2\">Name of the Applicant</th>\n            <th class=\"noscroll\" rowspan=\"2\">ID Card No</th>\n            <th rowspan=\"2\">Opt Out customer(GI)</th>\n            <th rowspan=\"2\">Opt Out customer(Life)</th>\n            <th colspan=\"3\" class=\"th-textCenter\">Current Agent</th>\n            <th></th>\n            <th></th>\n            <th></th>\n            <th></th>\n            <th></th>\n            <th colspan=\"1\" class=\"th-textCenter\">Assign Agent</th>\n            <th rowspan=\"2\">PruChat,Email Send Date(to agent)</th>\n            <th rowspan=\"2\" colspan=\"1\">SMS,Email Send Date(to customer)/ View Customer Email</th>\n        </tr>\n        <tr class=\"row2 tr-row2\">\n            <th class=\"table-subtitle\">Agent Name</th>\n            <th class=\"table-subtitle\">Agent Code</th>\n            <th class=\"table-subtitle\">Agent Phone</th>\n            <th>Date of Submission</th>\n            <th>Campaign Code</th>\n            <th>Assignment Type</th>\n            <th>Preferred Agent Name</th>\n            <th>Preferred Agent Phone</th>\n            <th class=\"table-subtitle\">\n              <div style=\"display:flex;justify-content:space-around;\">\n                <div class=\"table-subtitle\" style=\"width:150px;\">Agent Code</div>\n                <div class=\"table-subtitle\" style=\"width:150px;\">Agent Name</div>\n                <div class=\"table-subtitle\" style=\"width:150px;\">Agent Phone</div>\n                <div class=\"table-subtitle\" style=\"width:150px;\">Agent Assigned Date</div>\n              </div>\n            </th>\n        </tr>\n      </thead>\n    </table>\n\n    <table *ngIf=\"currSubPage=='easAgentAssignCS'\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover table-searchRecord\">\n      <thead>\n        <tr class=\"row1 tr-row1\">\n          <th class=\"noscroll\" rowspan=\"2\">Full Name</th>\n          <th class=\"noscroll\" rowspan=\"2\">Email Address</th>\n          <th rowspan=\"2\">Mobile No</th>\n          <th rowspan=\"2\">Date of Submission</th>\n          <th rowspan=\"2\">Class</th>\n          <th rowspan=\"2\">Policy No.</th>\n          <th rowspan=\"2\">Date of Birth</th>\n          <th rowspan=\"2\">ID Card No.</th>\n          <th rowspan=\"2\">Gender</th>\n          <th rowspan=\"2\">Opt Out customer(GI)</th>\n          <th rowspan=\"2\">Opt Out customer(Life)</th>\n          <th rowspan=\"2\">Campaign Code</th>\n          <th colspan=\"1\" class=\"th-textCenter\">Assign Agent</th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n        </tr>\n        <tr class=\"row2 tr-row2\">\n          <th class=\"table-subtitle\">\n            <div style=\"display:flex;justify-content:space-around;\">\n              <div class=\"table-subtitle\" style=\"width:150px;\">Agent Code</div>\n              <div class=\"table-subtitle\" style=\"width:150px;\">Agent Name</div>\n              <div class=\"table-subtitle\" style=\"width:150px;\">Agent Phone</div>\n              <div class=\"table-subtitle\" style=\"width:150px;\">Agent Assigned Date</div>\n            </div>\n          </th>\n          <th>First Contact Date with Customer</th>\n          <th>Contact customer within 2 days</th>\n          <th>Assignment Status</th>\n          <th>Expiry Date of agent account ownership</th>\n          <th>PruChat, Email Send Date (to agent)</th>\n          <th>SMS, Email Send Date (to customer) / View Customer Email or eDM</th>\n        </tr>\n      </thead>\n    </table>\n    <div class=\"div-goToPage-showPerPage\">\n      <div class=\"div-goToPage\">\n        <span class=\"span-goToPage\">Go to page</span>\n        <div class=\"div-goToPage_wrapper\">\n          <input type=\"text\" class=\"input-goToPage_left\" [(ngModel)]=\"currPage\" value=\"{{currPage}}\"/>\n          <input type=\"text\" class=\"input-goToPage_right\" value=\"/ {{noOfPage}}\" disabled/>\n          <input class=\"button-goToPage_go\" value=\"GO\" type=\"button\" (click)=\"changeCurrTablePage(currPage)\"/>\n        </div>\n      </div>\n      <ul class=\"ul-showPerPage\">\n        <span>show</span>\n        <li><a [ngClass]=\"mapToLengthMenuNum[5]\" (click)=\"changeTablePerPage(5)\">5</a></li>\n        <li><a [ngClass]=\"mapToLengthMenuNum[10]\" (click)=\"changeTablePerPage(10)\">10</a></li>\n        <li><a [ngClass]=\"mapToLengthMenuNum[20]\" (click)=\"changeTablePerPage(20)\">20</a></li>\n        <span>per page</span>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/agentAssign/searchrecord/searchrecord.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/agentAssign/searchrecord/searchrecord.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#btnMsgModal .modal-header{border-bottom:0px}#btnMsgModal .modal-header .modal-title{text-align:center;padding-top:90px}.div-searchRecord .div-searchRecordCriteria{width:100%}.div-searchRecord .div-searchRecordCriteria .h4-searchCriteriaText{white-space:pre}.div-searchRecord .div-searchRecordCriteria .h4-criteriaText{word-break:break-all}.div-searchRecord .div-searchRecordCriteria .h4-noOfCustomer{margin-left:auto;white-space:nowrap}.div-searchRecord .dataTables_wrapper .dataTables_info{display:none}.div-searchRecord .div-searchRecordDataTable{text-align:center;width:100%;padding-top:0px}.div-searchRecord .div-searchRecordDataTable .table-searchRecord{margin:0px}.div-searchRecord .div-searchRecordDataTable .table-searchRecord .sorting_asc,.div-searchRecord .div-searchRecordDataTable .table-searchRecord .sorting_desc{background-image:none;cursor:unset}.div-searchRecord .div-goToPage-showPerPage{display:-webkit-box;position:relative}.div-searchRecord .div-goToPage-showPerPage .div-goToPage{display:flex;position:relative;left:38%}.div-searchRecord .div-goToPage-showPerPage .div-goToPage .span-goToPage{line-height:50px;color:gray}.div-searchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper{display:inline-block}.div-searchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_left{margin-left:10px;border-radius:10px 0px 0px 10px;border-right:0px;text-align:right;color:gray}.div-searchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_right{position:relative;left:-10px;color:gray;border-left:0px;border-radius:0px}.div-searchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper input{width:80px;background-color:transparent}.div-searchRecord .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .button-goToPage_go{position:relative;left:-12px;border-radius:0px 10px 10px 0px;background-color:#c8c8c8;color:black}.div-searchRecord .div-goToPage-showPerPage .ul-showPerPage{list-style:none !important;display:flex;position:absolute;top:-26px;right:0px;float:right}.div-searchRecord .div-goToPage-showPerPage .ul-showPerPage li{margin:0px 10px}.div-searchRecord .div-goToPage-showPerPage .ul-showPerPage .inactive-gray{color:gray}.div-searchRecord .div-goToPage-showPerPage .ul-showPerPage .active-red{color:red}\n"

/***/ }),

/***/ "./src/app/components/agentAssign/searchrecord/searchrecord.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/agentAssign/searchrecord/searchrecord.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchrecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchrecordComponent", function() { return SearchrecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/agentassignment.service */ "./src/app/services/agentassignment.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _utils_convertformat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/convertformat */ "./src/app/utils/convertformat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};









var SearchrecordComponent = /** @class */ (function () {
    function SearchrecordComponent(agentassignmentService, http, router, renderer2) {
        this.agentassignmentService = agentassignmentService;
        this.http = http;
        this.router = router;
        this.renderer2 = renderer2;
        this.noOfCustomer = 0;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pageInfo = {};
        this.currPage = 1;
        this.mapOptionTextIntoVal = {
            "": "",
            "A": "Assign",
            "AA": "Auto Assigned",
            "R": "Re-assign",
            "Y": "Yes",
            "N": "No",
            "1": "To apply for extension",
            "2": "Applied extension",
            "3": "Opt-out from this program",
            "4": "Re-assigned"
        };
        //map the page num to the jquery elem of page num
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "active-red",
            "20": "inactive-gray",
        };
        //for handling the datatables's link,
        //use router.navigate instead of href in dom 'a', as href will refresh whole page
        this.onclickEventInit = false; //onchange would reset this back to false
    }
    SearchrecordComponent.prototype.ngOnChanges = function () {
        this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
    };
    SearchrecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currSubPage === 'easAgentAssignGI') {
            this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"]["GISearchRecordColumnField"];
            this.classToTrigger = [
                { className: 'a-campaignCode', url: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].route['CampaignDetail'] },
                { className: 'a-assignBtn', url: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].route['AgentDetail'] },
                { className: 'a-reassignBtn', url: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].route['AgentDetail'] },
                { className: 'a-viewEmail', url: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].route['ViewEmail'] },
                { className: 'a-pruchatEmailBtn', callback: function (polno) { _this.showPopUpMsg(polno, "pruchat"); } },
                { className: 'a-smsEmailBtn', callback: function (polno) { _this.showPopUpMsg(polno, "sms"); } },
            ];
            this.searchCriteriaFieldName = ["fullName", "policyNo", "mobileNo", "emailAddr", "idCardNo",
                "dateOfSubmissionFrom", "dateOfSubmissionTo", "assignmentOption"];
        }
        else { //easAgentAssignCS
            this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"]["CSSearchRecordColumnField"];
            this.classToTrigger = [
                { className: 'a-clientDetail', url: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].route['ClientDetail'] },
                { className: 'a-campaignCode', url: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].route['CampaignDetail'] },
                { className: 'a-assignBtn', url: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].route['AgentDetail'] },
                { className: 'a-reassignBtn', url: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].route['AgentDetail'] },
                { className: 'a-viewEmailOrEDM', url: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].route['ViewEmail'] },
                { className: 'a-pruchatEmailBtn', callback: function (polno) { _this.showPopUpMsg(polno, "pruchat"); } },
                { className: 'a-smsEmailBtn', callback: function (polno) { _this.showPopUpMsg(polno, "sms"); } },
            ];
            this.searchCriteriaFieldName = ["fullName", "mobileNo", "emailAddr", "idCardNo",
                "dateOfSubmissionFrom", "dateOfSubmissionTo", "assignmentOption",
                "contactCustomerOption", "assignmentStatusOption"];
        }
        this.initSearchCriteriaBasedOnSearchHistory();
        //call a func to pass and reset the searchCriteriaComponent's searchRecordComponent ref
        var colArr = [], dataArr = [];
        this.displayedColumnsName.forEach(function (val, index) {
            colArr.push({
                data: val,
                orderable: false
            });
        });
        this.dtOptions = {
            fixedColumns: {
                leftColumns: (this.currSubPage === 'easAgentAssignGI') ? 5 : 2,
                heightMatch: 'auto'
            },
            scrollCollapse: true,
            responsive: true,
            pagingType: 'full_numbers',
            pageLength: 10,
            scrollX: true,
            scrollY: false,
            columnDefs: (this.currSubPage === 'easAgentAssignGI') ? this.agentAssignedGIColumnDef() : this.agentAssignedCSColumnDef(),
            ajax: this.agentAssignedAjax(),
            processing: true,
            serverSide: true,
            language: {
                info: "",
                paginate: {
                    first: '« first',
                    previous: '‹ prev',
                    next: 'next ›',
                    last: 'last »'
                },
                //display none length Menu and add a new custom menu
                // to change the hidden length menu
                lengthMenu: "",
            },
            searching: false,
            columns: colArr,
        };
    };
    //init the search criteria based on the search history
    SearchrecordComponent.prototype.initSearchCriteriaBasedOnSearchHistory = function () {
        var criteria = (this.currSubPage == 'easAgentAssignCS') ? this.agentassignmentService.currCSSearchCriteria : this.agentassignmentService.currGISearchCriteria;
        var resArr = [];
        for (var key in criteria) {
            if (criteria.hasOwnProperty(key)) {
                var isInstanceOfDate = criteria[key] instanceof Date;
                resArr.push(isInstanceOfDate ? _utils_convertformat__WEBPACK_IMPORTED_MODULE_8__["default"].dateToDDMMYYYY(criteria[key]) : criteria[key]);
            }
        }
        this.searchCriterias = resArr;
    };
    SearchrecordComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        $('.table-searchRecord').on('page.dt', function (event, settings) {
            $('.input-goToPage_left').val((settings._iDisplayStart / settings.oInit.pageLength) + 1);
        });
    };
    //for pruchat, sms option only
    SearchrecordComponent.prototype.showPopUpMsg = function (polNo, type) {
        var _this = this;
        var params = polNo;
        if (type === 'pruchat') {
            this.agentassignmentService.postResendPruchat(params, 'sendParams').subscribe(function (resp) {
                //this api in all cases have only one elem inside the list
                var code = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(resp, 'code[0]');
                var errMsg = (code && code !== _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_CODE.SUCCESS_CODE) ? Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(resp, 'errMsg[0]') : _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].MSG.PRUCHAT_EMAIL_SUCCESS;
                _this.setPopUpMsg(errMsg);
                $("#btnMsgModal").modal('show');
            }, function (error) {
                console.error(">>> Error occurs");
                $("#btnMsgModal").modal('show');
            });
        }
        else if (type === 'sms') {
            this.agentassignmentService.postResendSMS(params, 'sendParams').subscribe(function (resp) {
                //this api in all cases have only one elem inside the list
                var code = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(resp, 'code[0]');
                var errMsg = (code && code !== _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_CODE.SUCCESS_CODE) ? Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(resp, 'errMsg[0]') : _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"].MSG.SMS_EMAIL_SUCCESS;
                _this.setPopUpMsg(errMsg);
                $("#btnMsgModal").modal('show');
            }, function (error) {
                console.error(">>> Error occurs");
                $("#btnMsgModal").modal('show');
            });
        }
    };
    SearchrecordComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        //fetch the datatable's settings
        //since angular-datatables is not supporting changing table page in dtoption yet
        //make use of settings.oApi._fnPageChange to change the page
        //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
        this.dataTableSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])($.fn['dataTable'], 'settings[0]');
        //for handling the btn inside datatables
        //should be called here as datatable's btns and links are initialized only after [ngAfterViewInit/ngAfterViewChecked]
        if (!this.onclickEventInit) {
            if (this.bodyRendererListener) {
                this.bodyRendererListener();
            }
            this.onclickEventInit = true;
            this.bodyRendererListener = this.renderer2.listen("body", 'click', function (event) {
                _this.classToTrigger.forEach(function (elem, key) {
                    if ($(event.target).hasClass(elem.className)) {
                        //read queryParams attr
                        //e.g. queryParams="abc:2,ddd:4" ...
                        var paramsToBePassed_1 = {};
                        var queryParamsStr = $(event.target).attr("queryParams");
                        if (queryParamsStr) {
                            var queryParamsArray = queryParamsStr.split(',');
                            queryParamsArray.forEach(function (elem, key) {
                                var elemPair = elem.split(':');
                                Object(lodash__WEBPACK_IMPORTED_MODULE_4__["set"])(paramsToBePassed_1, elemPair[0], elemPair[1]);
                            });
                        }
                        if (elem.callback) {
                            elem.callback(paramsToBePassed_1);
                        }
                        if (elem.url) {
                            switch (elem.className) {
                                case 'a-assignBtn':
                                case 'a-reassignBtn':
                                    _this.agentassignmentService.currPolNo = paramsToBePassed_1['policyNo'];
                                    break;
                                case 'a-viewEmail':
                                case 'a-viewEmailOrEDM':
                                    _this.agentassignmentService.currEmailId = (_this.currSubPage === 'easAgentAssignCS') ?
                                        paramsToBePassed_1['lastEmailOrEDMId'] : paramsToBePassed_1['lastEmailId'];
                                    break;
                                case 'a-campaignCode':
                                    _this.agentassignmentService.currCampaignCd = paramsToBePassed_1['campaignCode'];
                                    break;
                                case 'a-clientDetail':
                                    _this.agentassignmentService.currClientCd = paramsToBePassed_1['policyNo'];
                                    break;
                            }
                            _this.router.navigate([elem.url]);
                        }
                    }
                });
            });
        }
    };
    SearchrecordComponent.prototype.ngOnDestroy = function () {
        if (this.bodyRendererListener) {
            this.bodyRendererListener();
        }
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
    };
    SearchrecordComponent.prototype.changeTablePerPage = function (val) {
        var _this = this;
        //reset all the length menu 's class to gray color
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "inactive-gray",
            "20": "inactive-gray",
        };
        this.mapToLengthMenuNum[parseInt(val)] = "active-red";
        //reset the datatable after changing dtOptions to redraw the table
        this.dtOptions.pageLength = val; //change table's no of records
        this.dTable.dtInstance.then(function (dtInstance) {
            //redraw table only need these 2 funcs
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
        this.noOfPage = Math.ceil(this.noOfCustomer / this.dtOptions.pageLength);
        this.currPage = 1;
    };
    SearchrecordComponent.prototype.changeCurrTablePage = function (page) {
        if (page !== "" && /^\d+$/.test(page)) {
            var pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true);
            this.currPage = page;
        }
    };
    //called outside of this component via this obj's reference
    SearchrecordComponent.prototype.refreshAndReloadSearchRecordTable = function (_searchCriteria) {
        var _this = this;
        if (_searchCriteria === void 0) { _searchCriteria = []; }
        this.searchCriterias = _searchCriteria;
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
        var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(this.dTable, "dtInstance");
        if (dTableInstance) {
            dTableInstance.then(function (dtInstance) {
                //redraw table only need these 2 funcs
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
    };
    SearchrecordComponent.prototype.agentAssignedCSColumnDef = function () {
        return [
            { targets: 12, width: '800px' },
            { targets: [0, 1], width: '80px' },
            { targets: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18], width: '130px' },
            {
                targets: "_all",
                createdCell: function (td, cellData, rowData, row, col) {
                    var agentInfoSplitStrArr = rowData.agentInfo.split(";");
                    var agentCode = agentInfoSplitStrArr[0], agentName = agentInfoSplitStrArr[1], agentPhone = agentInfoSplitStrArr[2];
                    var convertDate = function (date) {
                        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " ";
                    };
                    //F re-assign btn
                    //G assign btn
                    var rowSymbol = (agentCode != 'null') ? 'F' : 'G';
                    if (!cellData) {
                        $(td).html("<span>-</span>");
                    }
                    else if (col == 0) { //client dtls
                        //to be done split eng chinese name
                        $(td).html("<a class=\"a-clientDetail\" queryParams=\"policyNo:" + rowData.polNo + "\">" + cellData + "</a>");
                    }
                    else if ([3, 6, 13, 16].indexOf(col) !== -1) {
                        var cellDataStr = cellData.substr(0, 10);
                        $(td).html("<span>" + convertDate(new Date(cellDataStr)) + "</span>");
                    }
                    else if (col == 11) { //campaign dtls
                        $(td).html("<a class=\"a-campaignCode\" queryParams=\"campaignCode:" + cellData + "\">" + cellData + "</a>");
                    }
                    else if (col === 12) { //assign agent col
                        var redBtnClass = "btn btn-primary table-btn";
                        var grayBtnClass = "btn btn-default table-btn";
                        var displayInlineStyle = "style='display: inline-flex;float: left;'";
                        var pStyle = "style=\"word-break: break-all;white-space: normal;\"";
                        var assignBtnHTML = "<a class=\"" + redBtnClass + " a-assignBtn\" queryParams=\"policyNo:" + rowData.polNo + "\">Assign</a>";
                        var reassignBtnHTML = "<a class=\"" + redBtnClass + " a-reassignBtn\" queryParams=\"policyNo:" + rowData.polNo + "\">Re-assign</a>";
                        var pruchatBtnHTML = "<a class=\"" + grayBtnClass + " a-pruchatEmailBtn\" queryParams=\"policyNo:" + rowData.polNo + "\">PruChat & Email to Agent(Resend)</a>";
                        var smsEmailBtnHTML = "<a class=\"" + grayBtnClass + " a-smsEmailBtn\" queryParams=\"policyNo:" + rowData.polNo + "\">SMS & Email to Customer(Resend)</a>";
                        //agentAssignedDate comes from splitstr of rowData.agentInfo
                        var agentAssignedDate = agentInfoSplitStrArr[3] != 'null' ? new Date(agentInfoSplitStrArr[3].substr(0, 10)) : "";
                        $(td).addClass((rowSymbol === 'F') ? 're-assign' : '');
                        var tdValRowHTML = "<td><p " + pStyle + ">" + agentCode + "</p></td>\n          <td><p " + pStyle + ">" + agentName + "</p></td>\n          <td><p " + pStyle + ">" + agentPhone + "</p></td>\n          <td><p " + pStyle + ">" + (agentAssignedDate ? convertDate(agentAssignedDate) : "") + "</p></td>";
                        var firstRow = '', secRow = '';
                        switch (rowSymbol) {
                            case 'G':
                                firstRow = "<div " + displayInlineStyle + ">" + assignBtnHTML + "</div>";
                                break;
                            case 'F': //val reassign pru sms (2)
                                firstRow = "<tr class=\"re-assign\">" + tdValRowHTML + "</tr>";
                                secRow = "<tr><td colspan=\"4\" class=\"re-assign\">" +
                                    "<div " + displayInlineStyle + "><div>" +
                                    reassignBtnHTML + "</div><div>" + pruchatBtnHTML + "</div><div>" + smsEmailBtnHTML + "</div></div>" +
                                    "</td></tr>";
                                break;
                        }
                        var firstSecRowHtml = firstRow + secRow;
                        var htmlStr = (rowSymbol === 'F') ?
                            "<table style=\"table-layout:fixed;width:100%;height:100%\">" + firstSecRowHtml + "</table>" : firstSecRowHtml;
                        $(td).html(htmlStr);
                    }
                    else if (col == 15) {
                        var mapStatusToText = {
                            "1": "To apply for extension",
                            "2": "Applied extension",
                            "3": "Opt-out from this program",
                            "4": "Re-assigned"
                        };
                        $(td).html(cellData ? mapStatusToText[cellData.toString()] : "-");
                    }
                    else if ([17, 18].indexOf(col) !== -1) { //pruchat and SMS col
                        $(td).addClass((rowSymbol === 'B') ? 're-assign' : '');
                        var dataArrSrc = (col == 17) ? rowData.pruchatEmailSendDate : rowData.smsEmailSendDate;
                        var tdhtml_1 = "";
                        if (dataArrSrc && dataArrSrc.length != 0) {
                            dataArrSrc.forEach(function (data) {
                                //parsing the format of data in IE browser as IE browser doesnt support certain kind of format of date string
                                var year = data.substr(0, 4);
                                var month = data.substr(5, 2);
                                var day = data.substr(8, 2);
                                var hour = data.substr(11, 2);
                                var min = data.substr(14, 2);
                                var processedDt = day + '/' + month + '/' + year + ' ' + hour + ":" + min;
                                //
                                tdhtml_1 += "<p>" + processedDt + "</p>";
                            });
                            tdhtml_1 += (rowData.lastEmailOrEDMId && col == 18) ?
                                "<a class=\"a-viewEmailOrEDM\" queryParams=\"lastEmailOrEDMId:" + rowData.lastEmailOrEDMId + "\"'>View email or EDM</a>" : "";
                        }
                        else {
                            tdhtml_1 = 'N/A';
                        }
                        $(td).html(tdhtml_1);
                    }
                    else {
                        $(td).html(cellData);
                    }
                }
            }
        ];
    };
    SearchrecordComponent.prototype.agentAssignedGIColumnDef = function () {
        return [
            { targets: 17, width: '130px' },
            { targets: 15, width: '800px' },
            { targets: [0, 1, 2, 3, 4], width: '80px' },
            { targets: [5, 6, 7, 8, 9, 10, 11, 12], width: '130px' },
            {
                targets: "_all",
                createdCell: function (td, cellData, rowData, row, col) {
                    var assignType = rowData.assignmentType;
                    var agentInfoSplitStrArr = rowData.agentInfo.split(";");
                    var agentCode = agentInfoSplitStrArr[0], agentName = agentInfoSplitStrArr[1], agentPhone = agentInfoSplitStrArr[2];
                    var convertDate = function (date) {
                        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " ";
                    };
                    //A,D,F assign btn only
                    //B val reassign pru sms
                    //C val pru sms
                    //E sms btn only
                    var rowSymbol = (assignType == 1 && agentCode == 'null') ? 'A' :
                        (assignType == 1 && agentCode != 'null') ? 'B' :
                            (assignType == 2) ? 'C' :
                                (assignType == 3) ? 'D' :
                                    (assignType == 4) ? 'E' :
                                        'F'; //assignType 5
                    if (col < 15) {
                        if (!cellData) { //for those null data
                            $(td).html('-');
                        }
                        else {
                            if (col === 10) { //col 10 convert date str into proper format dd/MM/YYYY
                                var convertDateData = new Date(cellData.substr(0, 10));
                                $(td).html(convertDate(convertDateData));
                            }
                            else if (col == 11) { //campaign code, put campaign code as attr later
                                $(td).html('<a class="a-campaignCode" queryParams="campaignCode:' + rowData.campaignCode + '">' + cellData + '</a>');
                            }
                            else if (col == 12) {
                                var assignTypeToText = ["Assign New Agent Pool", "Auto Assign Life Agent", "Assign GI Agent Pool", "GIEB Sales Support", "-"];
                                $(td).html("<span>" + assignTypeToText[cellData - 1] + "</span>");
                            }
                        }
                    }
                    else if (col === 15) {
                        $(td).css('padding', '8px 20px');
                        var redBtnClass = "btn btn-primary table-btn";
                        var grayBtnClass = "btn btn-default table-btn";
                        var displayInlineStyle = "style='display: inline-flex;float: left;'";
                        var pStyle = "style=\"word-break: break-all;white-space: normal;\"";
                        var assignBtnHTML = "<a class=\"" + redBtnClass + " a-assignBtn\" queryParams=\"policyNo:" + rowData.polNo + "\">Assign</a>";
                        var reassignBtnHTML = "<a class=\"" + redBtnClass + " a-reassignBtn\" queryParams=\"policyNo:" + rowData.polNo + "\">Re-assign</a>";
                        var pruchatBtnHTML = "<a class=\"" + grayBtnClass + " a-pruchatEmailBtn\" queryParams=\"policyNo:" + rowData.polNo + "\">PruChat & Email to Agent(Resend)</a>";
                        var smsEmailBtnHTML = "<a class=\"" + grayBtnClass + " a-smsEmailBtn\" queryParams=\"policyNo:" + rowData.polNo + "\">SMS & Email to Customer(Resend)</a>";
                        var agentAssignedDate = (agentInfoSplitStrArr[3] != 'null') ? new Date(agentInfoSplitStrArr[3].substr(0, 10)) : "";
                        $(td).addClass((rowSymbol === 'B') ? 're-assign' : '');
                        var tdValRowHTML = "<td><p " + pStyle + ">" + agentCode + "</p></td>\n          <td><p " + pStyle + ">" + agentName + "</p></td>\n          <td><p " + pStyle + ">" + agentPhone + "</p></td>\n          <td><p " + pStyle + ">" + (agentAssignedDate ? convertDate(agentAssignedDate) : "") + "</p></td>";
                        var firstRow = '', secRow = '';
                        switch (rowSymbol) {
                            case 'A':
                                firstRow = "<div " + displayInlineStyle + ">" + assignBtnHTML + "</div>";
                                break;
                            case 'B': //val reassign pru sms (2)
                                firstRow = "<tr class=\"re-assign\">" + tdValRowHTML + "</tr>";
                                secRow = "<tr><td colspan=\"4\" class=\"re-assign\" style=\"padding: 8px 0px;\">" +
                                    "<div " + displayInlineStyle + "><div>" +
                                    reassignBtnHTML + "</div><div>" + pruchatBtnHTML + "</div><div>" + smsEmailBtnHTML + "</div></div>" +
                                    "</td></tr>";
                                break;
                            case 'C': //val pru sms (2)
                                firstRow = "<tr>" + tdValRowHTML + "</tr>";
                                secRow = "<tr><td colspan=\"4\" style=\"padding: 8px 0px;\">" +
                                    "<div " + displayInlineStyle + "><div>" +
                                    pruchatBtnHTML + "</div><div>" + smsEmailBtnHTML + "</div>" +
                                    "</td></tr>";
                                break;
                            case 'D':
                                if (!agentAssignedDate) {
                                    firstRow = "<div " + displayInlineStyle + ">" + assignBtnHTML + "</div>";
                                }
                                else {
                                    firstRow = "<tr>" + tdValRowHTML + "</tr>";
                                    secRow = "<tr><td colspan=\"4\" style=\"padding: 8px 0px;\">" +
                                        "<div " + displayInlineStyle + "><div>" +
                                        pruchatBtnHTML + "</div><div>" + smsEmailBtnHTML + "</div>" +
                                        "</td></tr>";
                                }
                                break;
                            case 'E': //sms (1)
                                firstRow = "<div " + displayInlineStyle + ">" + smsEmailBtnHTML + "</div>";
                                break;
                            case 'F':
                                if (!agentAssignedDate) {
                                    firstRow = "<div " + displayInlineStyle + ">" + assignBtnHTML + "</div>";
                                }
                                else {
                                    firstRow = "<tr>" + tdValRowHTML + "</tr>";
                                    secRow = "<tr><td colspan=\"4\" style=\"padding: 8px 0px;\">" +
                                        "<div " + displayInlineStyle + "><div>" +
                                        pruchatBtnHTML + "</div><div>" + smsEmailBtnHTML + "</div>" +
                                        "</td></tr>";
                                }
                                break;
                        }
                        var firstSecRowHtml = firstRow + secRow;
                        var htmlStr = (['B', 'C'].indexOf(rowSymbol) !== -1 ||
                            (['D', 'F'].indexOf(rowSymbol) !== -1 && agentAssignedDate)) ?
                            "<table style=\"table-layout:fixed;width:100%;height:100%\">" + firstSecRowHtml + "</table>" : firstSecRowHtml;
                        $(td).html(htmlStr);
                    }
                    else if (col >= 16) { //pruchat sms Section
                        $(td).addClass((rowSymbol === 'B') ? 're-assign' : '');
                        var dataArrSrc = (col === 16) ? rowData.agentSentDate : rowData.customerSentDate;
                        var tdhtml_2 = "";
                        if (dataArrSrc && dataArrSrc.length != 0) {
                            dataArrSrc.forEach(function (data) {
                                //parsing the format of data in IE browser as IE browser doesnt support certain kind of format of date string
                                var year = data.substr(0, 4);
                                var month = data.substr(5, 2);
                                var day = data.substr(8, 2);
                                var hour = data.substr(11, 2);
                                var min = data.substr(14, 2);
                                var processedDt = day + '/' + month + '/' + year + ' ' + hour + ":" + min;
                                //
                                tdhtml_2 += "<p>" + processedDt + "</p>";
                            });
                            tdhtml_2 += (rowData.lastEmailId && col === 17) ?
                                "<a class=\"a-viewEmail\" queryParams=\"lastEmailId:" + rowData.lastEmailId + "\"'>View email</a>" : "";
                        }
                        else {
                            tdhtml_2 = 'N/A';
                        }
                        $(td).html(tdhtml_2);
                    }
                }
            }
        ];
    };
    SearchrecordComponent.prototype.agentAssignedAjax = function () {
        var _this = this;
        return function (params, callback, settings) {
            var queryParams = {};
            var draw, start, length, unusedParams;
            (draw = params.draw, start = params.start, length = params.length, params, unusedParams = __rest(params, ["draw", "start", "length"]));
            queryParams = {
                draw: draw, start: start, length: length
            };
            //put all the params from searchCriteria into queryParams
            _this.searchCriterias.forEach(function (data, key) {
                if (data) {
                    queryParams[_this.searchCriteriaFieldName[key]] = data;
                }
            });
            _this.agentassignmentService.getAgentAssignmentRecord(queryParams, 'dataTable', _this.currSubPage).subscribe(function (resp) {
                _this.noOfCustomer = resp.body.recordsFiltered;
                _this.noOfPage = Math.ceil(_this.noOfCustomer / _this.dtOptions.pageLength);
                _this.currPage = (resp.body.recordsFiltered >= 1) ? _this.currPage : 0;
                var resArr = [];
                //preprocess data
                resp.body.data.forEach(function (elem, key) {
                    var agentCode, agentName, agentPhone, agentAssignedDate, restAttrObj, agentInfo;
                    (agentCode = elem.agentCode, agentName = elem.agentName, agentPhone = elem.agentPhone, agentAssignedDate = elem.agentAssignedDate, elem, restAttrObj = __rest(elem, ["agentCode", "agentName", "agentPhone", "agentAssignedDate"]));
                    agentInfo = agentCode + ";" + agentName + ";" + agentPhone + ";" + agentAssignedDate;
                    Object(lodash__WEBPACK_IMPORTED_MODULE_4__["set"])(restAttrObj, 'agentInfo', agentInfo);
                    resArr.push(restAttrObj);
                });
                callback({
                    data: resArr,
                    recordsTotal: _this.noOfCustomer,
                    recordsFiltered: _this.noOfCustomer
                });
            }, function (error) { return console.error('>>> agentAssignmentRecord GET request fails.'); });
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SearchrecordComponent.prototype, "setPopUpMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchrecordComponent.prototype, "popUpMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchrecordComponent.prototype, "currSubPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], SearchrecordComponent.prototype, "dTable", void 0);
    SearchrecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchrecord',
            template: __webpack_require__(/*! ./searchrecord.component.html */ "./src/app/components/agentAssign/searchrecord/searchrecord.component.html"),
            styles: [__webpack_require__(/*! ./searchrecord.component.scss */ "./src/app/components/agentAssign/searchrecord/searchrecord.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_agentassignment_service__WEBPACK_IMPORTED_MODULE_1__["AgentassignmentService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], SearchrecordComponent);
    return SearchrecordComponent;
}());



/***/ }),

/***/ "./src/app/components/agentAssign/viewemail/viewemail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/agentAssign/viewemail/viewemail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-viewemail\">\n  <label class=\"label-emailSubject\">Email Subject: {{emailSubject}}</label><br/>\n  <label class=\"label-receiverName\">Receiver Name: {{receiverName}}</label><br/>\n  <label class=\"label-receiverEmail\">Receiver Email: {{receiver}}</label><hr/>\n  <div [innerHTML]=\"emailContent\">\n  </div>\n  <div class=\"button-box div-backBtn clearfix\">\n      <input routerLink=\"/{{gobackRouteLink}}\" type=\"submit\" class=\" btn btn-default table-btn float-left all-btn\" value=\"Back\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/agentAssign/viewemail/viewemail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/agentAssign/viewemail/viewemail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-viewemail .div-backBtn input{position:relative;left:50%;-webkit-transform:translate(-50%, 0%);transform:translate(-50%, 0%)}\n"

/***/ }),

/***/ "./src/app/components/agentAssign/viewemail/viewemail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/agentAssign/viewemail/viewemail.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewemailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewemailComponent", function() { return ViewemailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/agentassignment.service */ "./src/app/services/agentassignment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewemailComponent = /** @class */ (function () {
    function ViewemailComponent(activatedRoute, router, agentassignmentService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.agentassignmentService = agentassignmentService;
    }
    ViewemailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lastEmailId = this.agentassignmentService.currEmailId || "";
        if (this.lastEmailId == '') {
            this.router.navigate(['/']);
        }
        var queryParams = {
            lastEmailId: this.lastEmailId
        };
        this.agentassignmentService.getViewEmail(queryParams, 'viewEmail').subscribe(function (resp) {
            _this.emailSubject = resp.body.emailSubject;
            _this.emailContent = resp.body.emailContent;
            _this.receiverName = resp.body.receiverName;
            _this.receiver = resp.body.receiver;
            _this.status = resp.body.status;
        }, function (error) { return console.error(error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ViewemailComponent.prototype, "gobackRouteLink", void 0);
    ViewemailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewemail',
            template: __webpack_require__(/*! ./viewemail.component.html */ "./src/app/components/agentAssign/viewemail/viewemail.component.html"),
            styles: [__webpack_require__(/*! ./viewemail.component.scss */ "./src/app/components/agentAssign/viewemail/viewemail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_1__["AgentassignmentService"]])
    ], ViewemailComponent);
    return ViewemailComponent;
}());



/***/ }),

/***/ "./src/app/components/common/customfileinput/customfileinput.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/customfileinput/customfileinput.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomfileinputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomfileinputComponent", function() { return CustomfileinputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// this component helps writing files into DOM from angular form controls
// all inputs with [type=file] attribute will be applied with this customized control value accessor
// angular form (model) => CustomfileinputComponent [ControlValueAccessor] => DOM (view)
// Usage:
// no need to do anything, just use input[type=file] in the target elemenet
// without this component, directly setting formControl with base64 image files will result in error
// e.g. this.form.get('fileInput').setValue("base64...")
// ERROR DOMException: Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string.
var CustomfileinputComponent = /** @class */ (function () {
    function CustomfileinputComponent() {
        //func to be called when file val changes
        this.onChange = function (file) { };
        this.onTouched = function () { };
    }
    CustomfileinputComponent_1 = CustomfileinputComponent;
    //allows angular to upd this.value (the model)
    CustomfileinputComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    //allows angular to reg a func to call when the model changes
    CustomfileinputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CustomfileinputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    var CustomfileinputComponent_1;
    CustomfileinputComponent = CustomfileinputComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input[type=file]',
            // templateUrl: './customfileinput.component.html',
            // styleUrls: ['./customfileinput.component.scss'],
            template: '',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CustomfileinputComponent_1; }),
                    multi: true
                }]
        })
    ], CustomfileinputComponent);
    return CustomfileinputComponent;
}());



/***/ }),

/***/ "./src/app/components/common/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n    <mat-progress-spinner\n      class=\"loader\"\n\n      color=\"primary\"\n      mode=\"indeterminate\"\n    ></mat-progress-spinner>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/common/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/common/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-overlay{position:fixed;z-index:555555;background:white;width:100%;height:100%;left:0px;top:0px;opacity:0.96}.loader-overlay .loader{width:100px;height:100px;top:45%;left:45%}\n"

/***/ }),

/***/ "./src/app/components/common/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = true;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/common/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/common/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/defaultpage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/defaultpage.component.ts ***!
  \*****************************************************/
/*! exports provided: DefaultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function() { return DefaultPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultPageComponent = /** @class */ (function () {
    function DefaultPageComponent() {
    }
    DefaultPageComponent.prototype.ngOnInit = function () {
        //once clicked remove the active tab of parent tab
        $("#sidebar").children(".active").removeClass("active");
        //hide the sub tab once clicked the home page icon
        $(".hasChild ul.acc-menu").css("display", "none");
    };
    DefaultPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '&nbsp;'
        }),
        __metadata("design:paramtypes", [])
    ], DefaultPageComponent);
    return DefaultPageComponent;
}());



/***/ }),

/***/ "./src/app/components/edm/edmhistory/edmhistory.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/edm/edmhistory/edmhistory.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n<div class=\"panel\">\n<div class=\"panel-body slide-body\">\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"panel panel-midnightblue\">\n            <div class=\"panel-heading\">\n                <h4>\n                    <ul class=\"nav nav-tabs\">\n                        <li class=\"active\"><a href=\"#template\" data-toggle=\"tab\"><span>Template</span></a></li>\n                        <li class=\"\"><a href=\"#coverage-details\" data-toggle=\"tab\" (click)=\"refreshTable()\">Customer List</a></li>\n                    </ul>\n                </h4>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"template\">\n                        <div class=\"col-md-12 step1\" style=\"display: block\">\n                            <div class=\"col-md-9 step1-left\">\n                                <div class=\"form-group clearfix\">\n                                    <p class=\"control-label\" for=\"inputSuccess1\">Template <i class=\"iconfont popover1\">&#xe628;</i></p>\n                                    <div class=\"inputSuccess1 dropdown-redarrow search-by-dropdown col-md-6\">\n                                        <div class=\"select-selected\">\n                                          Template {{eDMHistoryDtl.template}}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"clearfix form-block\">\n                                    <p class=\"control-label\" for=\"inputSuccess1\">Email Subject</p>\n                                    <div class=\"inputSuccess1\">\n                                        <input type=\"text\" class=\"col-md-6\" value=\"{{eDMHistoryDtl.emailSubject}}\" disabled>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group clearfix\">\n                                    <p class=\"control-label\" for=\"inputSuccess1\">Greeting Text <i class=\"iconfont\">&#xe628;</i></p>\n                                    <div class=\"inputSuccess1\">\n                                        <textarea cols=\"60\" rows=\"10\" disabled>{{eDMHistoryDtl.greeting}}</textarea>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group clearfix\">\n                                    <p class=\"control-label\" for=\"inputSuccess1\">Banner Image (Main)</p>\n                                    <p style=\"color:#AAAAAA;\">800W X 600H (px),  JPG / PNG / BMP </p>\n                                    <img src=\"\" alt=\"\">\n                                    <p class=\"img-title\"></p>\n\n                                </div>\n\n                                <div class=\"form-group clearfix\">\n                                    <h5 style=\"color: #333333;\">Campaign 1</h5>\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Title</p>\n                                        <div class=\"inputSuccess1\">\n                                            <input type=\"text\" class=\"col-md-6\" value=\"{{eDMHistoryDtl.campaign1Title}}\" disabled>\n                                        </div>\n                                    </div>\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Description <i class=\"iconfont popover2\">&#xe628;</i></p>\n                                        <div class=\"inputSuccess1\">\n                                            <textarea cols=\"60\" rows=\"10\" disabled>{{eDMHistoryDtl.campaign1Desc}}</textarea>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group clearfix\">\n                                    <h5 style=\"color: #333333;\">Campaign 2</h5>\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Title</p>\n                                        <div class=\"inputSuccess1\">\n                                            <input type=\"text\" class=\"col-md-6\" value=\"{{eDMHistoryDtl.campaign2Title}}\" disabled>\n                                        </div>\n                                    </div>\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Description <i class=\"iconfont\">&#xe628;</i></p>\n                                        <div class=\"inputSuccess1\">\n                                            <textarea cols=\"60\" rows=\"10\" disabled>{{eDMHistoryDtl.campaign2Desc}}</textarea>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group clearfix\">\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Button Title (Primary)</p>\n                                        <div class=\"inputSuccess1\">\n                                            <input type=\"text\" class=\"col-md-6\" value=\"{{eDMHistoryDtl.button1Title}}\" disabled>\n                                        </div>\n                                    </div>\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Button Link (Primary)</p>\n                                        <div class=\"inputSuccess1\">\n                                            <input type=\"text\" class=\"col-md-6 btn-link1\" placeholder=\"Default\" value=\"{{eDMHistoryDtl.button1Link}}\" disabled>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group clearfix\">\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Button Title (Secondary)</p>\n                                        <div class=\"inputSuccess1\">\n                                            <input type=\"text\" class=\"col-md-6\" value=\"{{eDMHistoryDtl.button2Title}}\" disabled>\n                                        </div>\n                                    </div>\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Button Title (Secondary)</p>\n                                        <div class=\"inputSuccess1\">\n                                            <input type=\"text\" class=\"col-md-6\" placeholder=\"http://\" value=\"{{eDMHistoryDtl.button2Link}}\" disabled>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group clearfix\">\n                                    <p class=\"control-label\" for=\"inputSuccess1\">Bottom Banner (B)</p>\n                                    <p style=\"color:#AAAAAA;\">800W X 600H (px),  JPG / PNG / BMP </p>\n                                    <img src=\"\" alt=\"\">\n                                    <p class=\"img-title\"></p>\n                                </div>\n\n                                <div class=\"form-group clearfix\">\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Button Title (Bottom Banner)</p>\n                                        <div class=\"inputSuccess1\">\n                                            <input type=\"text\" class=\"col-md-6\" value=\"{{eDMHistoryDtl.button3Title}}\"  disabled>\n                                        </div>\n                                    </div>\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Button Link (Bottom Banner)</p>\n                                        <div class=\"inputSuccess1\">\n                                            <input type=\"text\" class=\"col-md-6\" placeholder=\"http://\" value=\"{{eDMHistoryDtl.button3Link}}\" disabled>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group clearfix\">\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Campaign TnC <i class=\"iconfont\">&#xe628;</i></p>\n                                        <div class=\"inputSuccess1\">\n                                            <textarea cols=\"60\" rows=\"10\" disabled>{{eDMHistoryDtl.campaignTnc}}</textarea>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Standard TnC<i class=\"iconfont\">&#xe628;</i></p>\n                                        <div class=\"inputSuccess1\">\n                                            <textarea cols=\"60\" rows=\"10\" disabled>{{eDMHistoryDtl.standardTnc}}</textarea>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                            </div>\n                            <div class=\"col-md-3 step1-right\">\n                                <button routerLink=\"/easEDM\" class=\"width100\" style=\"background: #AAAAAA;text-align: center\">\n                                    Close</button>\n                            </div>\n                            <div class=\"col-md-12 step-bottom \">\n                                <div class=\"form-group clearfix\">\n                                    <div class=\"clearfix form-block\">\n                                        <p class=\"control-label\" for=\"inputSuccess1\">Communication Code</p>\n                                        <div class=\"inputSuccess1\">\n                                            <input type=\"text\" class=\"col-md-6\" value=\"{{eDMHistoryDtl.communicationCd}}\" disabled>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group clearfix\" style=\"border: none;\">\n                                    <div class=\"col-md-12 clearfix hidden-xs\" style=\"padding: 0;\">\n                                        <div class=\"btn-left float-left\">\n                                            <button routerLink=\"/easEDM\" style=\"background:#AAAAAA;width: 150px;\" class=\"col-xs-12 to-step2\">Close\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane\" id=\"coverage-details\">\n                        <div class=\"row\" style=\"margin-left: 25px;\">\n                            <div class=\"col-md-12 clearfix div-edmHistoryCustomerlist\">\n                                <div class=\"clearfix div-tableHeaderWrapper\">\n                                    <h5 class=\"float-right add-bottom\">Total No. of Customer: {{noOfCustomers}}</h5>\n                                </div>\n                                <div class=\"\">\n                                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered no-search datatables7 table-edmHistoryCustomerlist\">\n                                        <thead>\n                                          <tr class=\"row1 tr-row1\">\n                                              <th *ngFor=\"let colName of displayedColumns\">\n                                                {{colName}}\n                                              </th>\n                                          </tr>\n                                        </thead>\n                                    </table>\n                                </div>\n                                <div class=\"div-goToPage-showPerPage\">\n                                  <div class=\"div-goToPage\">\n                                    <span class=\"span-goToPage\">Go to page</span>\n                                    <div class=\"div-goToPage_wrapper\">\n                                      <input type=\"text\" class=\"input-goToPage_left\" [(ngModel)]=\"currPage\" value=\"{{currPage}}\"/>\n                                      <input type=\"text\" class=\"input-goToPage_right\" value=\"/ {{noOfPage}}\" disabled/>\n                                      <input class=\"button-goToPage_go\" value=\"GO\" type=\"button\" (click)=\"changeCurrTablePage(currPage)\"/>\n                                    </div>\n                                  </div>\n                                  <ul class=\"ul-showPerPage\">\n                                    <span>show</span>\n                                    <li><a [ngClass]=\"mapToLengthMenuNum[5]\" (click)=\"changeTablePerPage(5)\">5</a></li>\n                                    <li><a [ngClass]=\"mapToLengthMenuNum[10]\" (click)=\"changeTablePerPage(10)\">10</a></li>\n                                    <li><a [ngClass]=\"mapToLengthMenuNum[20]\" (click)=\"changeTablePerPage(20)\">20</a></li>\n                                    <span>per page</span>\n                                  </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edm/edmhistory/edmhistory.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/edm/edmhistory/edmhistory.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-edmHistoryCustomerlist{text-align:center}.div-edmHistoryCustomerlist .div-tableHeaderWrapper{height:40px}.div-edmHistoryCustomerlist .table-edmHistoryCustomerlist{width:100% !important}.div-edmHistoryCustomerlist .table-edmHistoryCustomerlist .sorting_asc,.div-edmHistoryCustomerlist .table-edmHistoryCustomerlist .sorting_desc{background-image:none;cursor:unset}.div-edmHistoryCustomerlist .div-goToPage-showPerPage{display:-webkit-box;position:relative}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .div-goToPage{display:flex;position:relative;left:38%}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .div-goToPage .span-goToPage{line-height:50px;color:gray}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper{display:inline-block}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_left{margin-left:10px;border-radius:10px 0px 0px 10px;border-right:0px;text-align:right;color:gray}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_right{position:relative;left:-10px;color:gray;border-left:0px;border-radius:0px}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper input{width:80px;background-color:transparent}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .button-goToPage_go{position:relative;left:-12px;border-radius:0px 10px 10px 0px;background-color:#c8c8c8;color:black}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .ul-showPerPage{list-style:none !important;display:flex;position:absolute;top:-26px;right:0px;float:right}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .ul-showPerPage li{margin:0px 10px}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .ul-showPerPage .inactive-gray{color:gray}.div-edmHistoryCustomerlist .div-goToPage-showPerPage .ul-showPerPage .active-red{color:red}\n"

/***/ }),

/***/ "./src/app/components/edm/edmhistory/edmhistory.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edm/edmhistory/edmhistory.component.ts ***!
  \*******************************************************************/
/*! exports provided: EdmhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdmhistoryComponent", function() { return EdmhistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_edm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/edm.service */ "./src/app/services/edm.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};






var EdmhistoryComponent = /** @class */ (function () {
    function EdmhistoryComponent(edmService) {
        this.edmService = edmService;
        this.eDMHistoryCustomerList = [];
        this.noOfCustomers = 0;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.displayedColumns = _constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"]["EDMHistoryCustomer"];
        this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"]["EDMHistoryCustomerField"];
        this.currPage = 1;
        //map the page num to the jquery elem of page num
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "active-red",
            "20": "inactive-gray",
        };
        this.customerListHasBeenDisplayed = false;
    }
    EdmhistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var templateQueryParams = {
            communicationCd: 'ABC122C01'
        };
        this.edmService.getHistoryTemplates(templateQueryParams, "getHistory").subscribe(function (resp) {
            console.log("resp", resp);
            _this.eDMHistoryDtl = resp.body;
        });
        var colArr = [], dataArr = [];
        this.displayedColumnsName.forEach(function (val, index) {
            colArr.push({
                data: val,
                orderable: false,
                width: '25%'
            });
        });
        this.dtOptions = {
            scrollCollapse: true,
            responsive: true,
            pagingType: 'full_numbers',
            pageLength: 10,
            scrollX: true,
            scrollY: false,
            columnDefs: this.edmHistoryCustomerListColumnDef(),
            ajax: this.edmHistoryCustomerListAjax(),
            processing: true,
            serverSide: true,
            language: {
                info: "",
                paginate: {
                    first: '« first',
                    previous: '‹ prev',
                    next: 'next ›',
                    last: 'last »'
                },
                //display none length Menu and add a new custom menu
                // to change the hidden length menu
                lengthMenu: "",
            },
            searching: false,
            columns: colArr,
        };
        $('.table-edmHistoryCustomerlist').on('page.dt', function (event, settings) {
            $('.input-goToPage_left').val((settings._iDisplayStart / settings.oInit.pageLength) + 1);
        });
    };
    EdmhistoryComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    EdmhistoryComponent.prototype.ngOnDestroy = function () {
        if (this.bodyRendererListener) {
            this.bodyRendererListener();
        }
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
    };
    EdmhistoryComponent.prototype.refreshTable = function () {
        var _this = this;
        //for some reason the customer list table hidden on load once displayed when `Customer List` tab is clicked,
        //the table header's width isnt calculated correctly. so it is fixed whenever the `Customer List` is clicked
        if (!this.customerListHasBeenDisplayed) {
            var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(this.dTable, "dtInstance");
            if (dTableInstance) {
                dTableInstance.then(function (dtInstance) {
                    //redraw table only need these 2 funcs
                    dtInstance.destroy();
                    _this.dtTrigger.next();
                });
            }
            this.customerListHasBeenDisplayed = true;
        }
    };
    EdmhistoryComponent.prototype.changeTablePerPage = function (val) {
        var _this = this;
        //reset all the length menu 's class to gray color
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "inactive-gray",
            "20": "inactive-gray",
        };
        this.mapToLengthMenuNum[parseInt(val)] = "active-red";
        //reset the datatable after changing dtOptions to redraw the table
        this.dtOptions.pageLength = val; //change table's no of records
        var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(this.dTable, "dtInstance");
        if (dTableInstance) {
            this.dTable.dtInstance.then(function (dtInstance) {
                //redraw table only need these 2 funcs
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
        this.noOfPage = Math.ceil(this.noOfCustomers / this.dtOptions.pageLength);
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
    };
    EdmhistoryComponent.prototype.changeCurrTablePage = function (page) {
        if (page !== "" && /^\d+$/.test(page)) {
            var pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true);
            this.currPage = parseInt(page);
        }
    };
    EdmhistoryComponent.prototype.edmHistoryCustomerListColumnDef = function () {
        return [{
                targets: "_all",
                createdCell: function (td, cellData, rowData, row, col) {
                    if (col == 2) {
                        return $(td).html("<span>" + ((cellData == 0) ? 'Pending' : 'Sent') + "</span>");
                    }
                    else if (col == 3) {
                        if (!cellData) {
                            return $(td).html("<span>N/A</span>");
                        }
                        else {
                            var dateStr = cellData.substr(0, 4) + "/" + cellData.substr(5, 2) + "/" + cellData.substr(8, 2) + " " + cellData.substr(11, 5);
                            return $(td).html("<span>" + dateStr + "</span>");
                        }
                    }
                    else {
                        return $(td).html("<span>" + cellData + "</span>");
                    }
                }
            }];
    };
    EdmhistoryComponent.prototype.edmHistoryCustomerListAjax = function () {
        var _this = this;
        return function (params, callback, settings) {
            var queryParams = {};
            var draw, start, length, unusedParams;
            (draw = params.draw, start = params.start, length = params.length, params, unusedParams = __rest(params, ["draw", "start", "length"]));
            queryParams = {
                draw: draw, start: start, length: length
            };
            _this.edmService.getHistoryCustomerlist(queryParams, 'dataTable').subscribe(function (resp) {
                _this.noOfCustomers = resp.body.recordsFiltered;
                _this.noOfPage = Math.ceil(_this.noOfCustomers / _this.dtOptions.pageLength);
                _this.currPage = (resp.body.recordsFiltered >= 1) ? _this.currPage : 0;
                callback({
                    data: resp.body.data,
                    recordsTotal: resp.body.recordsTotal,
                    recordsFiltered: resp.body.recordsFiltered
                });
            }, function (error) {
                console.error("error: ", error);
            });
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], EdmhistoryComponent.prototype, "dTable", void 0);
    EdmhistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edmhistory',
            template: __webpack_require__(/*! ./edmhistory.component.html */ "./src/app/components/edm/edmhistory/edmhistory.component.html"),
            styles: [__webpack_require__(/*! ./edmhistory.component.scss */ "./src/app/components/edm/edmhistory/edmhistory.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_edm_service__WEBPACK_IMPORTED_MODULE_1__["EdmService"]])
    ], EdmhistoryComponent);
    return EdmhistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/edm/edmlist/edmlist.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/edm/edmlist/edmlist.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal fade export-list\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"myModalLabel\" style=\"color: #FE0000;\">Export List</h4>\n            </div>\n            <div class=\"modal-body clearfix\">\n                <div class=\"row\">\n                    <label class=\"radio-wrapper\">Select All\n                        <input type=\"radio\" checked=\"checked\" name=\"method\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                </div>\n                <div class=\"row\">\n                    <span class=\"float-left\" style=\"color: #EBEBEB;\">OR</span>\n                    <div class=\"col-md-10\" style=\"padding-top: 8px;\">\n                        <hr style=\"color: #EBEBEB;\" align=\"center\">\n\n                    </div>\n                </div>\n                <div class=\"row export-date\">\n                    <label class=\"radio-wrapper\" style=\"width: 20px;float: left;\">\n                        <input type=\"radio\" checked=\"checked\" name=\"method\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                    <div class=\"col-md-5\">\n                        <label style=\"display: block\">Submission Date from</label>\n                        <input placeholder=\"DD/MM/YYYY\" class=\"search-by-input datepicker1\" type=\"text\">\n                    </div>\n                    <div class=\"col-md-5\">\n                        <label style=\"display: block\">To</label>\n                        <input placeholder=\"DD/MM/YYYY\" class=\"search-by-input datepicker1\" type=\"text\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary table-btn\">Export</button>\n                <button type=\"button\" class=\"btn btn-default table-btn\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<div class=\"col-md-12\">\n<div class=\"panel\">\n<div class=\"panel-body\">\n\n<div class=\"table-wrapper div-edmListTable\">\n  <div class=\"div-headerWrapper\">\n      <h4 class=\"h4-tableHeader\">eDM Management</h4>\n      <div class=\"div-noOfETemplateAndAddNewBtn\">\n        <span class=\"span-noOfETemplate\">Table No. Of eTemplate:\n          <ng-container *ngIf=\"noOfETemplate\">{{noOfETemplate}}</ng-container>\n          <ng-container *ngIf=\"!noOfETemplate\">0</ng-container>\n        </span>\n        <button routerLink=\"/easEDMManagementForm\" class=\"export-btn add-btn\">\n          <i class=\"fa fa-plus-circle\"></i>\n          <span>Add New</span>\n        </button>\n      </div>\n  </div>\n  <div class=\"table-responsive div-edmListWrapper\">\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover table-edmList\">\n      <thead>\n        <tr class=\"row1 tr-row1\">\n            <th>Template</th>\n            <th>Communication Code</th>\n            <th>Campaign title</th>\n            <th>Last Edit</th>\n            <th>Sent time</th>\n            <th>Action</th>\n        </tr>\n      </thead>\n    </table>\n    <div class=\"div-goToPage-showPerPage\">\n      <div class=\"div-goToPage\">\n        <span class=\"span-goToPage\">Go to page</span>\n        <div class=\"div-goToPage_wrapper\">\n          <input type=\"text\" class=\"input-goToPage_left\" [(ngModel)]=\"currPage\" value=\"{{currPage}}\"/>\n          <input type=\"text\" class=\"input-goToPage_right\" value=\"/ {{noOfPage}}\" disabled/>\n          <input class=\"button-goToPage_go\" value=\"GO\" type=\"button\" (click)=\"changeCurrTablePage(currPage)\"/>\n        </div>\n      </div>\n      <ul class=\"ul-showPerPage\">\n        <span>show</span>\n        <li><a [ngClass]=\"mapToLengthMenuNum[5]\" (click)=\"changeTablePerPage(5)\">5</a></li>\n        <li><a [ngClass]=\"mapToLengthMenuNum[10]\" (click)=\"changeTablePerPage(10)\">10</a></li>\n        <li><a [ngClass]=\"mapToLengthMenuNum[20]\" (click)=\"changeTablePerPage(20)\">20</a></li>\n        <span>per page</span>\n      </ul>\n    </div>\n  </div>\n  </div>\n\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edm/edmlist/edmlist.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/edm/edmlist/edmlist.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-edmListTable{text-align:center}.div-edmListTable .div-edmListWrapper{width:100%}.div-edmListTable .div-headerWrapper .h4-tableHeader{color:red;float:left}.div-edmListTable .div-headerWrapper .span-noOfETemplate{color:red;font-size:20px;font-weight:400;margin-right:30px}.div-edmListTable .div-headerWrapper .div-noOfETemplateAndAddNewBtn{float:right}.div-edmListTable .table-edmList{width:100% !important}.div-edmListTable .table-edmList th.noscroll{font-size:12px}.div-edmListTable .table-edmList .sorting_asc,.div-edmListTable .table-edmList .sorting_desc{background-image:none;cursor:unset}.div-edmListTable .div-goToPage-showPerPage{display:-webkit-box;position:relative}.div-edmListTable .div-goToPage-showPerPage .div-goToPage{display:flex;position:relative;left:38%}.div-edmListTable .div-goToPage-showPerPage .div-goToPage .span-goToPage{line-height:50px;color:gray}.div-edmListTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper{display:inline-block}.div-edmListTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_left{margin-left:10px;border-radius:10px 0px 0px 10px;border-right:0px;text-align:right;color:gray}.div-edmListTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_right{position:relative;left:-10px;color:gray;border-left:0px;border-radius:0px}.div-edmListTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper input{width:80px;background-color:transparent}.div-edmListTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .button-goToPage_go{position:relative;left:-12px;border-radius:0px 10px 10px 0px;background-color:#c8c8c8;color:black}.div-edmListTable .ul-showPerPage{list-style:none !important;display:flex;position:absolute;top:-26px;right:0px;float:right}.div-edmListTable .ul-showPerPage li{margin:0px 10px}.div-edmListTable .ul-showPerPage .inactive-gray{color:gray}.div-edmListTable .ul-showPerPage .active-red{color:red}\n"

/***/ }),

/***/ "./src/app/components/edm/edmlist/edmlist.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edm/edmlist/edmlist.component.ts ***!
  \*************************************************************/
/*! exports provided: EdmlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdmlistComponent", function() { return EdmlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _services_edm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/edm.service */ "./src/app/services/edm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};








var EdmlistComponent = /** @class */ (function () {
    function EdmlistComponent(http, renderer2, edmService, router) {
        this.http = http;
        this.renderer2 = renderer2;
        this.edmService = edmService;
        this.router = router;
        this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"]["EDMListColumnField"];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currPage = 1;
        this.noOfETemplate = 0;
        //map the page num to the jquery elem of page num
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "active-red",
            "20": "inactive-gray",
        };
        //for handling the datatables's link
        //use router.navigate instead of href in dom 'a', as href will refresh whole page
        this.onclickEventInit = false; //onchange would reset this back to false
    }
    EdmlistComponent.prototype.ngOnChanges = function () {
        this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
    };
    EdmlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var colArr = [], dataArr = [];
        this.displayedColumnsName.forEach(function (val) {
            colArr.push({
                data: val,
                orderable: false,
            });
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            scrollX: true,
            scrollY: true,
            columnDefs: this.edmListColumnDef(),
            ajax: this.edmListAjax(),
            processing: true,
            serverSide: true,
            language: {
                info: "",
                paginate: {
                    first: '« first',
                    previous: '‹ prev',
                    next: 'next ›',
                    last: 'last »'
                },
                //display none length Menu and add a new custom menu
                // to change the hidden length menu
                lengthMenu: "",
            },
            searching: false,
            columns: colArr,
        };
        $('.table-edmList').on('page.dt', function (event, settings) {
            $('.input-goToPage_left').val((settings._iDisplayStart / settings.oInit.pageLength) + 1);
        });
        this.classToTrigger = [
            { type: 'redirect', className: "a-view", callback: function (paramsToBePassed) { _this.edmViewBtnOnClick(paramsToBePassed); } },
            { type: 'redirect', className: "a-edit", callback: function (paramsToBePassed) { _this.edmEditBtnOnClick(paramsToBePassed); } },
        ];
    };
    EdmlistComponent.prototype.edmViewBtnOnClick = function (paramsToBePassed) {
        this.edmService.currCommunicationCode = paramsToBePassed.commCode;
        this.edmService.currEdmId = paramsToBePassed.edmId;
        this.router.navigate(['/easEDMHistory']);
    };
    EdmlistComponent.prototype.edmEditBtnOnClick = function (paramsToBePassed) {
        this.edmService.currCommunicationCode = paramsToBePassed.commCode;
        this.edmService.currEdmId = paramsToBePassed.edmId;
        this.router.navigate(['/easEDMManagementForm']);
    };
    EdmlistComponent.prototype.refreshTable = function () {
        var _this = this;
        var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(this.dTable, "dtInstance");
        if (dTableInstance) {
            dTableInstance.then(function (dtInstance) {
                //redraw table only need these 2 funcs
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
    };
    EdmlistComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    EdmlistComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        //fetch the datatable's settings
        //since angular-datatables is not supporting changing table page in option yet
        //make use of settings.oApi._fnPageChange to change the page
        //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
        this.dataTableSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])($.fn['dataTable'], 'settings[0]');
        //for handling the btn inside datatables
        if (!this.onclickEventInit) {
            this.onclickEventInit = true;
            this.bodyRendererListener = this.renderer2.listen("body", 'click', function (event) {
                _this.classToTrigger.forEach(function (elem, key) {
                    if ($(event.target).hasClass(elem.className)) {
                        if (elem.type === 'redirect') {
                            //read queryParams attr
                            //e.g. queryParams="abc:2,ddd:4" ...
                            var paramsToBePassed_1 = {};
                            var queryParamsStr = $(event.target).attr("queryParams");
                            if (queryParamsStr) {
                                var queryParamsArray = queryParamsStr.split(',');
                                queryParamsArray.forEach(function (elem, key) {
                                    var elemPair = elem.split(':');
                                    Object(lodash__WEBPACK_IMPORTED_MODULE_3__["set"])(paramsToBePassed_1, elemPair[0], elemPair[1]);
                                });
                            }
                            elem.callback(paramsToBePassed_1);
                        }
                    }
                });
            });
        }
    };
    EdmlistComponent.prototype.ngOnDestroy = function () {
        if (this.bodyRendererListener) {
            this.bodyRendererListener();
        }
    };
    EdmlistComponent.prototype.changeTablePerPage = function (val) {
        var _this = this;
        //reset all the length menu 's class to gray color
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "inactive-gray",
            "20": "inactive-gray",
        };
        this.mapToLengthMenuNum[parseInt(val)] = "active-red";
        //reset the datatable after changing dtOptions to redraw the table
        this.dtOptions.pageLength = val; //change table's no of records
        this.dTable.dtInstance.then(function (dtInstance) {
            //redraw table only need these 2 funcs
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
        this.noOfPage = Math.ceil(this.noOfETemplate / this.dtOptions.pageLength);
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
    };
    EdmlistComponent.prototype.changeCurrTablePage = function (page) {
        if (page !== "" && /^\d+$/.test(page)) {
            var pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true);
            this.currPage = Number(page);
        }
    };
    EdmlistComponent.prototype.edmListColumnDef = function () {
        return [{
                targets: "_all",
                orderable: false,
                createdCell: function (td, cellData, rowData, row, col) {
                    //funcs
                    var convertDate = function (date, minsOpt) {
                        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " +
                            ((minsOpt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
                    };
                    //styles
                    var html = "";
                    switch (col) {
                        case 3:
                        case 4:
                            var formattedDt = (cellData) ? new Date(cellData.substr(0, 10)) : null;
                            $(td).html("<span>" + ((formattedDt) ? convertDate(formattedDt, 'withMins') : "-") + "</span>");
                            break;
                        case 5:
                            var actionStr = (cellData === 1) ? "View" : "Edit";
                            $(td).html("<span class=\"" +
                                ((cellData === 1) ? "a-view" : "a-edit") + "\" queryParams=\"commCode:" + rowData.communicationCode + ",edmId:" + rowData.edmId + "\">" + actionStr + "</span>");
                            break;
                        default:
                            $(td).html(((typeof cellData == "string" && cellData.length > 25) ? "<span class=\"css-wordBreakAll\">" : "<span>") +
                                cellData + "</span>");
                            break;
                    }
                }
            }];
    };
    EdmlistComponent.prototype.edmListAjax = function () {
        var _this = this;
        return function (params, callback, settings) {
            var unusedParams, draw, start, length;
            (draw = params.draw, start = params.start, length = params.length, params, unusedParams = __rest(params, ["draw", "start", "length"])); //do without columns attr inside params
            var queryParams = {
                draw: draw, start: start, length: length
            };
            _this.dataTableAjaxSubscription = _this.edmService.getEdmList(queryParams, 'dataTable').subscribe(function (resp) {
                console.log("resp:", resp);
                _this.noOfPage = Math.ceil(resp.body.recordsTotal / _this.dtOptions.pageLength);
                _this.currPage = (resp.body.recordsFiltered >= 1) ? _this.currPage : 0;
                _this.noOfETemplate = resp.body.recordsFiltered;
                //
                callback({
                    data: resp.body.data,
                    recordsTotal: resp.body.recordsTotal,
                    recordsFiltered: resp.body.recordsFiltered
                });
            }, function (error) { console.error(error); });
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], EdmlistComponent.prototype, "dTable", void 0);
    EdmlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edmlist',
            template: __webpack_require__(/*! ./edmlist.component.html */ "./src/app/components/edm/edmlist/edmlist.component.html"),
            styles: [__webpack_require__(/*! ./edmlist.component.scss */ "./src/app/components/edm/edmlist/edmlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_edm_service__WEBPACK_IMPORTED_MODULE_7__["EdmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EdmlistComponent);
    return EdmlistComponent;
}());



/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/edmmanagementform.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/edmmanagementform.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel div-edmmanagementForm\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 clearfix\">\n                <div class=\"col-md-12 step-bar div-stepBar\">\n                  <span class=\"step\" [ngClass]=\"edmPageInfo.currStep =='step1' ? 'active' : ''\">\n                      <b>Step1.</b>\n                      Select and Edit Template\n                  </span>\n                  <span class=\"step\" [ngClass]=\"edmPageInfo.currStep =='step2' ? 'active' : ''\">\n                      <b>Step2.</b>\n                      Select eDM Receiver\n                  </span>\n                  <span class=\"step\" [ngClass]=\"edmPageInfo.currStep =='step3' ? 'active' : ''\">\n                      <b>Step3.</b>\n                      Send Confirmation\n                  </span>\n                </div>\n                <app-step1 [edmPageInfo]=\"edmPageInfo\" *ngIf=\"edmPageInfo.currStep == 'step1'\"></app-step1>\n                <app-step2 [edmPageInfo]=\"edmPageInfo\" *ngIf=\"edmPageInfo.currStep == 'step2'\"></app-step2>\n                <app-step3 [edmPageInfo]=\"edmPageInfo\" *ngIf=\"edmPageInfo.currStep == 'step3'\"></app-step3>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/edmmanagementform.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/edmmanagementform.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-edmmanagementForm .div-stepBar{background:white;border-radius:10px 10px 0px 0px}\n"

/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/edmmanagementform.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/edmmanagementform.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EdmmanagementformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdmmanagementformComponent", function() { return EdmmanagementformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EdmmanagementformComponent = /** @class */ (function () {
    function EdmmanagementformComponent() {
        //pass by ref so that child can trigger the upd of this page
        this.edmPageInfo = {
            currStep: "step1",
            commCode: "" //to be set in step1 and later be used in step2 sub page posting method
        };
    }
    EdmmanagementformComponent.prototype.ngOnInit = function () {
    };
    EdmmanagementformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edmmanagementform',
            template: __webpack_require__(/*! ./edmmanagementform.component.html */ "./src/app/components/edm/edmmanagementform/edmmanagementform.component.html"),
            styles: [__webpack_require__(/*! ./edmmanagementform.component.scss */ "./src/app/components/edm/edmmanagementform/edmmanagementform.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EdmmanagementformComponent);
    return EdmmanagementformComponent;
}());



/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/step1/step1.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/step1/step1.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade \" id=\"ErrMsgModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"errMsgModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"errMsgModalLabel\" *ngFor=\"let errMsg of errMsgArr\">\n          {{errMsg}}\n        </h4>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default table-btn btn-ok\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-md-12 step1 edm-bodyBottom\" style=\"display: block\">\n  <form [formGroup]=\"edmManagementStep1Form\" method=\"POST\" (ngSubmit)=\"onSubmitStep1()\">\n    <div class=\"col-md-8 step1-left \">\n        <div class=\"form-group clearfix\">\n            <p class=\"control-label\" for=\"inputSuccess1\">Template<i class=\"iconfont popover1\">&#xe628;</i></p>\n            <div class=\"inputSuccess1 dropdown-redarrow search-by-dropdown col-md-6 div-templateOption\">\n                <select formControlName=\"template\" name=\"templateOptionField\">\n                  <option value=\"0\"></option>\n                  <option value=\"1\">Template1</option>\n                  <option value=\"2\">Template2</option>\n                  <option value=\"3\">Template3</option>\n                </select>\n                <div class=\"select-selected\"\n                [style.border-color]=\"edmManagementStep1Form.get('template').invalid && edmStep1FormSubmitted ? 'red' : '#CCCCCC'\">\n                  {{templateOptionMapStr[edmManagementStep1Form.get('template').value]}}\n                </div>\n                <div class=\"select-items select-hide\"><!--same-as-selected-->\n                  <div></div>\n                  <div>Template1</div>\n                  <div>Template2</div>\n                  <div>Template3</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix\">\n            <p class=\"control-label\" for=\"inputSuccess1\">Email Subject</p>\n            <div class=\"inputSuccess1\">\n                <input [style.border-color]=\"edmStep1FormSubmitted && edmManagementStep1Form.get('emailSubject').invalid ? 'red' : '#CCCCCC'\"\n                axlength=\"100\" formControlName=\"emailSubject\" name=\"emailSubjField\" type=\"text\" class=\"col-md-6\">\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix\">\n            <p class=\"control-label\" for=\"inputSuccess1\">Greeting Text <i class=\"iconfont popover1\">&#xe628;</i></p>\n            <div class=\"inputSuccess1\">\n                <textarea maxlength=\"200\" formControlName=\"greeting\" name=\"greetingTxtField\" id=\"greet-text\" cols=\"60\" rows=\"10\"></textarea>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix div-bannerFile\">\n            <p class=\"control-label\" for=\"inputSuccess1\">Banner Image (Main)</p>\n            <p style=\"color:#AAAAAA;\">800W X 600H (px),  JPG / PNG / BMP </p>\n            <div class=\"div-fileWrapper\">\n              <a href=\"javascript:;\" class=\"file\">\n                  <i class=\"fa fa-upload\"></i>\n                  Choose File...\n                  <input (change)=\"onSelectFile($event, 'banner1')\"\n                  formControlName=\"banner1File\" name=\"mainBannerImgFileField\" type=\"file\" id=\"uploadFile\" class=\"uploadFile\">\n              </a>\n              <span class=\"span-fileName\">{{edmManagementStep1Form.get('banner1').value}}</span>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix\">\n            <h5 style=\"color: #333333;\">Campaign 1</h5>\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Title</p>\n                <div class=\"inputSuccess1\">\n                    <input maxlength=\"100\" formControlName=\"campaign1Title\" name=\"campaign1TitleField\" type=\"text\" class=\"col-md-6\">\n                </div>\n            </div>\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Description <i class=\"iconfont popover2\">&#xe628;</i></p>\n                <div class=\"inputSuccess1\">\n                    <textarea maxlength=\"255\" formControlName=\"campaign1Desc\" name=\"campaign1DescField\" id=\"greet-text1\" cols=\"60\" rows=\"10\"></textarea>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix\">\n            <h5 style=\"color: #333333;\">Campaign 2</h5>\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Title</p>\n                <div class=\"inputSuccess1\">\n                    <input maxlength=\"100\" formControlName=\"campaign2Title\" name=\"campaign2TitleField\" type=\"text\" class=\"col-md-6\">\n                </div>\n            </div>\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Description <i class=\"iconfont popover2\">&#xe628;</i></p>\n                <div class=\"inputSuccess1\">\n                    <textarea maxlength=\"255\" formControlName=\"campaign2Desc\" name=\"campaign2DescField\" id=\"greet-text1\" cols=\"60\" rows=\"10\"></textarea>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix\">\n            <h5 style=\"color: #333333;\">Campaign 3</h5>\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Title</p>\n                <div class=\"inputSuccess1\">\n                    <input maxlength=\"100\" formControlName=\"campaign3Title\" name=\"campaign3TitleField\" type=\"text\" class=\"col-md-6\">\n                </div>\n            </div>\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Description <i class=\"iconfont popover2\">&#xe628;</i></p>\n                <div class=\"inputSuccess1\">\n                    <textarea maxlength=\"255\" formControlName=\"campaign3Desc\" name=\"campaign3DescField\" id=\"greet-text1\" cols=\"60\" rows=\"10\"></textarea>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix\">\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Button Title (Primary)</p>\n                <div class=\"inputSuccess1\">\n                    <input maxlength=\"100\" formControlName=\"button1Title\" name=\"priButtonTitleField\" type=\"text\" class=\"col-md-6\">\n                </div>\n            </div>\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Button Link (Primary)</p>\n                <div class=\"inputSuccess1\">\n                    <input maxlength=\"255\" formControlName=\"button1Link\" name=\"priButtonLinkField\" type=\"text\" class=\"col-md-6 btn-link1\" placeholder=\"Default\" disabled>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix\">\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Button Title (Secondary)</p>\n                <div class=\"inputSuccess1\">\n                    <input maxlength=\"10\" formControlName=\"button2Title\" name=\"secButtonTitleField\" type=\"text\" class=\"col-md-6\">\n                </div>\n            </div>\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Button Link (Secondary)</p>\n                <div class=\"inputSuccess1\">\n                    <input formControlName=\"button2Link\" name=\"secButtonLinkField\" type=\"text\" class=\"col-md-6\" placeholder=\"http://\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix div-bannerFile\" [style.display]=\"['2','3'].indexOf(edmManagementStep1Form.get('template').value) != -1 ? 'block' : 'none'\">\n            <p class=\"control-label\" for=\"inputSuccess1\">Bottom Banner (B)</p>\n            <p style=\"color:#AAAAAA;\">800W X 600H (px),  JPG / PNG / BMP</p>\n            <div class=\"div-fileWrapper\">\n              <a href=\"javascript:;\" class=\"file\">\n                  <i class=\"fa fa-upload\"></i>\n                  Choose File...\n                  <input (change)=\"onSelectFile($event, 'banner1')\"\n                  formControlName=\"banner2File\" name=\"bottomBannerImgFileField\" type=\"file\" id=\"uploadFile\" class=\"uploadFile\">\n              </a>\n              <span class=\"span-fileName\">{{edmManagementStep1Form.get('banner2').value}}</span>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix\">\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Button Title (Bottom Banner)</p>\n                <div class=\"inputSuccess1\">\n                    <input maxlength=\"10\" type=\"text\" formControlName=\"button3Title\" name=\"bottomBannerButtonTitleField\" class=\"col-md-6\">\n                </div>\n            </div>\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Button Link (Bottom Banner)</p>\n                <div class=\"inputSuccess1\">\n                    <input type=\"text\" formControlName=\"button3Link\" name=\"bottomBannerButtonLinkField\" class=\"col-md-6\" placeholder=\"http://\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group clearfix\">\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Campaign T&C <i  data-trigger=\"focus\" class=\"iconfont popover2\">&#xe628;</i></p>\n                <div class=\"inputSuccess1\">\n                    <textarea maxlength=\"255\" formControlName=\"campaignTnc\" name=\"campaignTncField\" id=\"greet-text\" cols=\"60\" rows=\"10\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"clearfix form-block\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Standard T&C <i class=\"iconfont popover2\">&#xe628;</i></p>\n                <div class=\"inputSuccess1\">\n                    <textarea maxlength=\"255\" formControlName=\"standardTnc\" name=\"standardTncField\" id=\"greet-text\" cols=\"60\" rows=\"10\"></textarea>\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n    <div class=\"col-md-3 step1-right div-step1RightPart\">\n        <button type=\"button\" class=\"width100\" (click)=\"onSaveAndClose()\">\n          <div class=\"div-iconTextWrapper\">\n            <div class=\"div-step1RightPartBtn\">\n              <i class=\"iconfont\">&#xe61b;</i>\n            </div>\n            <span>Save and Close</span>\n          </div>\n        </button>\n        <button type=\"button\" class=\"width100\">\n          <div class=\"div-iconTextWrapper\">\n            <div class=\"div-step1RightPartBtn\">\n              <i class=\"iconfont\">&#xe61d;</i>\n            </div>\n            <span>Preview</span>\n          </div>\n        </button>\n        <button type=\"button\" class=\"width100\" routerLink=\"/easEDM\">\n          <div class=\"div-iconTextWrapper\">\n            <div class=\"div-step1RightPartBtn\">\n              <i class=\"iconfont\">&#xe619;</i>\n            </div>\n            <span>Cancel</span>\n          </div>\n        </button>\n    </div>\n    <div class=\"col-md-12 step-bottom div-stepBottom\">\n        <div class=\"form-group clearfix\">\n            <div class=\"clearfix form-block div-commCodeErrorWrapper\">\n                <p class=\"control-label\" for=\"inputSuccess1\">Communication Code</p>\n                <div class=\"inputSuccess1\">\n                  <input [style.border-color]=\"edmStep1FormSubmitted && edmManagementStep1Form.get('communicationCd').invalid ? 'red' : '#CCCCCC'\"\n                  formControlName=\"communicationCd\" name=\"communicationCdField\" type=\"text\" class=\"col-md-6\">\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group clearfix\">\n            <div class=\"col-md-8 send-email div-sendTestEmail\">\n                <span class=\"col-md-4\">Send test email</span>\n                <div class=\"col-md-8 div-sendTestEmailInputBtnGroup\">\n                    <input name=\"sendTestEmailField\" type=\"text\" >\n                    <button type=\"button\" (click)=\"sendTestEmail()\">Send</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group clearfix\">\n            <div class=\"col-md-12 clearfix hidden-xs\">\n               <div class=\"btn-left float-left\">\n                   <button type=\"submit\" class=\"col-xs-12 to-step2\">\n                     <i class=\"iconfont\">&#xe862;</i>\n                       <span>Next</span>\n                   </button>\n               </div>\n               <div class=\"btn-right float-right\">\n                   <button (click)=\"onSaveAndClose()\"><i class=\"iconfont\">&#xe61b;</i>\n                       <span>Save and Close</span>\n                   </button>\n                   <button type=\"button\"><i class=\"iconfont\">&#xe61d;</i>\n                       <span>Preview</span></button>\n                   <button type=\"button\" routerLink=\"/easEDM\"><i class=\"iconfont\">&#xe619;</i>\n                       <span>Cancel</span>\n                   </button>\n               </div>\n            </div>\n        </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/step1/step1.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/step1/step1.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ErrMsgModal .modal-header{border-bottom:unset !important}.edm-bodyBottom .ng-invalid.ng-dirty,.edm-bodyBottom .div-templateOption .ng-invalid{border-color:red !important}.edm-bodyBottom textarea{resize:none}.edm-bodyBottom .step1-left .div-bannerFile .div-fileWrapper{display:inline-flex}.edm-bodyBottom .step1-left .div-bannerFile .div-fileWrapper .span-fileName{margin:auto;padding-left:20px}.edm-bodyBottom .div-step1RightPart .div-iconTextWrapper{display:inline-flex}.edm-bodyBottom .div-step1RightPart .div-iconTextWrapper .div-step1RightPartBtn{width:35px;margin-right:0px}.edm-bodyBottom .div-stepBottom .div-commCodeErrorWrapper .span-communicationCodeErrorMsg{color:red}.edm-bodyBottom .div-stepBottom .div-commCodeErrorWrapper .span-communicationCodeErrorMsg-show{display:block}.edm-bodyBottom .div-stepBottom .div-commCodeErrorWrapper .span-communicationCodeErrorMsg-hide{display:none}.edm-bodyBottom .div-stepBottom .div-sendTestEmail{padding-left:0px !important;display:inline-flex}.edm-bodyBottom .div-stepBottom .div-sendTestEmail span{padding-left:0px !important}.edm-bodyBottom .div-stepBottom .div-sendTestEmail .div-sendTestEmailInputBtnGroup{display:inline-flex}\n"

/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/step1/step1.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/step1/step1.component.ts ***!
  \***************************************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_edm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/edm.service */ "./src/app/services/edm.service.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants/constants */ "./src/app/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Step1Component = /** @class */ (function () {
    function Step1Component(router, edmService, renderer2) {
        this.router = router;
        this.edmService = edmService;
        this.renderer2 = renderer2;
        this.edmManagementStep1Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            template: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[1-3]')]),
            emailSubject: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            greeting: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]),
            banner1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            banner1File: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            campaign1Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            campaign1Desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]),
            campaign2Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            campaign2Desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]),
            campaign3Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            campaign3Desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]),
            button1Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            button1Link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]),
            button2Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            button2Link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            banner2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            banner2File: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            button3Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            button3Link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            campaignTnc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]),
            standardTnc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]),
            communicationCd: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9a-zA-Z]+')])
        });
        this.edmManagementStep1TestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            testEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
        });
        this.templateOptionMapStr = {
            0: '',
            1: 'Template1',
            2: 'Template2',
            3: 'Template3'
        };
        this.edmStep1FormSubmitted = false;
        this.errMsgArr = [];
        this.dropdownDivArray = ["div-templateOption"];
    }
    Step1Component.prototype.closeAllDropDown = function () {
        this.dropdownDivArray.forEach(function (elem, key) {
            if ($("." + elem + " .select-selected").hasClass("select-arrow-active")) {
                $("." + elem + " .select-selected").removeClass("select-arrow-active");
                $("." + elem + " .select-items").addClass("select-hide");
            }
        });
    };
    Step1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.bodyRendererListener = this.renderer2.listen("body", 'click', function (event) {
            if (!$(event.target).hasClass("select-selected")) {
                _this.closeAllDropDown();
            }
        });
        //to be removed, the constants.localOrVm
        if (_constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"].localOrVm == "local" || this.edmService.currCommunicationCode) { //edit mode, not add mode
            var queryParams = {
                communicationCd: this.edmService.currCommunicationCode
            };
            this.fetchFormHistorySubscription = this.edmService.getHistoryTemplates(queryParams, "getHistory").subscribe(function (resp) {
                console.log("resp: ", resp);
                //store a copy of this template's all fields into edmService
                _this.edmService.currEdmManagementFormObj = resp.body;
                //set edmManagementStep1Form based on the val of resp.body
                _this.edmManagementStep1Form.controls['template'].setValue(resp.body.template);
                _this.edmManagementStep1Form.controls['emailSubject'].setValue(resp.body.emailSubject);
                _this.edmManagementStep1Form.controls['greeting'].setValue(resp.body.greeting);
                _this.edmManagementStep1Form.controls['banner1'].setValue(resp.body.banner1);
                _this.edmManagementStep1Form.controls['banner1File'].setValue(resp.body.banner1File);
                _this.edmManagementStep1Form.controls['campaign1Title'].setValue(resp.body.campaign1Title);
                _this.edmManagementStep1Form.controls['campaign1Desc'].setValue(resp.body.campaign1Desc);
                _this.edmManagementStep1Form.controls['campaign2Title'].setValue(resp.body.campaign2Title);
                _this.edmManagementStep1Form.controls['campaign2Desc'].setValue(resp.body.campaign2Desc);
                _this.edmManagementStep1Form.controls['campaign3Title'].setValue(resp.body.campaign3Title);
                _this.edmManagementStep1Form.controls['campaign3Desc'].setValue(resp.body.campaign3Desc);
                _this.edmManagementStep1Form.controls['button1Title'].setValue(resp.body.button1Title);
                _this.edmManagementStep1Form.controls['button1Link'].setValue(resp.body.button1Link);
                _this.edmManagementStep1Form.controls['button2Title'].setValue(resp.body.button2Title);
                _this.edmManagementStep1Form.controls['button2Link'].setValue(resp.body.button2Link);
                _this.edmManagementStep1Form.controls['banner2'].setValue(resp.body.banner2);
                _this.edmManagementStep1Form.controls['banner2File'].setValue(resp.body.banner2File);
                _this.edmManagementStep1Form.controls['button3Title'].setValue(resp.body.button3Title);
                _this.edmManagementStep1Form.controls['button3Link'].setValue(resp.body.button3Link);
                _this.edmManagementStep1Form.controls['campaignTnc'].setValue(resp.body.campaignTnc);
                _this.edmManagementStep1Form.controls['standardTnc'].setValue(resp.body.standardTnc);
                _this.edmManagementStep1Form.controls['communicationCd'].setValue(resp.body.communicationCd);
            }, function (error) {
                console.error("step1component error: ", error);
            });
        }
    };
    Step1Component.prototype.ngOnDestroy = function () {
        var _this = this;
        var toBeDestroyArray = ['bodyRendererListener', 'fetchFormHistorySubscription'];
        toBeDestroyArray.forEach(function (elem, key) {
            if (_this[elem] && elem == 'bodyRendererListener') {
                _this.bodyRendererListener();
            }
            else if (_this[elem] && elem != 'bodyRendererListener') {
                _this[elem].unsubscribe();
            }
        });
    };
    Step1Component.prototype.ngAfterViewInit = function () {
        this.initPopoverChooseFileJquery();
        this.initDropdown();
    };
    Step1Component.prototype.onSubmitStep1 = function () {
        this.edmStep1FormSubmitted = true;
        this.fetchFormParamsAndPost();
    };
    Step1Component.prototype.onSaveAndClose = function () {
        this.fetchFormParamsAndPost();
        this.edmStep1FormSubmitted = true;
        this.router.navigate(['/easEDM']);
        window.scrollTo(0, 0);
    };
    Step1Component.prototype.setTemplateOption = function () {
        $(".div-templateOption .select-selected").text($(".div-templateOption .select-items div:eq(0)").text());
    };
    Step1Component.prototype.fetchFormParamsAndPost = function () {
        var _this = this;
        var params = {
            template: this.edmManagementStep1Form.controls['template'].value,
            emailSubject: this.edmManagementStep1Form.controls['emailSubject'].value,
            greeting: this.edmManagementStep1Form.controls['greeting'].value,
            banner1: this.edmManagementStep1Form.controls['banner1'].value,
            banner1File: this.edmManagementStep1Form.controls['banner1File'].value,
            campaign1Title: this.edmManagementStep1Form.controls['campaign1Title'].value,
            campaign1Desc: this.edmManagementStep1Form.controls['campaign1Desc'].value,
            campaign2Title: this.edmManagementStep1Form.controls['campaign2Title'].value,
            campaign2Desc: this.edmManagementStep1Form.controls['campaign2Desc'].value,
            campaign3Title: this.edmManagementStep1Form.controls['campaign3Title'].value,
            campaign3Desc: this.edmManagementStep1Form.controls['campaign3Desc'].value,
            button1Title: this.edmManagementStep1Form.controls['button1Title'].value,
            button1Link: this.edmManagementStep1Form.controls['button1Link'].value,
            button2Title: this.edmManagementStep1Form.controls['button2Title'].value,
            button2Link: this.edmManagementStep1Form.controls['button2Link'].value,
            banner2: this.edmManagementStep1Form.controls['banner2'].value,
            banner2File: this.edmManagementStep1Form.controls['banner2File'].value,
            button3Title: this.edmManagementStep1Form.controls['button3Title'].value,
            button3Link: this.edmManagementStep1Form.controls['button3Link'].value,
            campaignTnc: this.edmManagementStep1Form.controls['campaignTnc'].value,
            standardTnc: this.edmManagementStep1Form.controls['standardTnc'].value,
            communicationCd: this.edmManagementStep1Form.controls['communicationCd'].value
        };
        if (this.edmManagementStep1Form.invalid) {
            console.error(">>> step1component edmManagementStep1Form has invalid fields");
        }
        else {
            this.edmPageInfo.commCode = params.communicationCd;
            this.edmService.postSubmitOrSave(params, 'sendParams').subscribe(function (resp) {
                console.log("resp: ", resp);
                //reset the errMsgArr and comm code input field css
                _this.isSetStep1ErrPrompt(true);
                var codeList = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(resp, 'code');
                var errMsgList = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(resp, 'errMsg');
                //00000 : ok
                //00001 : dup comm Code
                //00002 : no template is selected
                if (codeList && codeList[0] == _constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"].STATUS_CODE.SUCCESS_CODE) {
                    _this.edmPageInfo.currStep = "step2";
                    window.scrollTo(0, 0);
                }
                else if (codeList && codeList[0] != _constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"].STATUS_CODE.SUCCESS_CODE) {
                    codeList.forEach(function (elem, key) {
                        _this.errMsgArr.push(errMsgList[key]);
                    });
                    _this.isSetStep1ErrPrompt(false);
                    $("#ErrMsgModal").modal('show');
                }
                else {
                    console.error(">>> No code and errmsg found in server's response.");
                }
            }, function (error) {
                console.error("error: ", error);
            });
        }
    };
    Step1Component.prototype.isSetStep1ErrPrompt = function (isReset) {
        this.errMsgArr = (isReset) ? [] : this.errMsgArr;
        //setCommCodeInputFieldCSS
        $("[name=\"communicationCdField\"]").css("border-color", (isReset) ? 'unset' : 'red');
    };
    Step1Component.prototype.onSelectFile = function (event, fieldName) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            //store the image file name
            this.edmManagementStep1Form.controls[fieldName].setValue(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(event, 'target.files[0].name', ''));
            //called upon the reader finished reading the image
            reader.onload = function (event) {
                //store the image file data
                _this.edmManagementStep1Form.controls[fieldName + 'File'].setValue(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(event, 'target.result', ''));
            };
        }
    };
    Step1Component.prototype.sendTestEmail = function () {
        var params = {
            testEmail: $("[name=sendTestEmailField]").val()
        };
        this.edmService.postSendTestEmail(params, 'sendParams').subscribe(function (resp) {
            console.log("resp: ", resp);
        }, function (error) {
            console.error("error: ", error);
        });
    };
    Step1Component.prototype.initDropdown = function () {
        var _this = this;
        $("[name=templateOptionField]").val("1"); //initialize the select into default val first
        $(".div-templateOption .select-items div:eq(0)").addClass("same-as-selected");
        //$(".div-templateOption .select-selected").text($(".div-templateOption .select-items div:eq(0)").text());
        //select-selected select-arrow-active
        //select-hide, same-as-selected
        $(".div-templateOption .select-selected").on("click", function (event) {
            $(".div-templateOption .select-items").removeClass("select-hide");
            $(".div-templateOption .select-selected").addClass("select-arrow-active");
        });
        //
        var selectOptionNameMapVal = {}; //select option name map to val
        for (var i = 0; i < $("[name=templateOptionField] option").length; i++) {
            var currOption = $("[name=templateOptionField] option:eq(" + i + ")");
            selectOptionNameMapVal[currOption.html()] = currOption.val();
        }
        var selectItemsChildren = $('.div-templateOption .select-items').children();
        for (var j = 0; j < selectItemsChildren.length; j++) {
            $(".div-templateOption .select-items div:eq(" + j + ")").on('click', function (e) {
                $(".div-templateOption .select-selected").removeClass("select-arrow-active");
                //$(".div-templateOption .select-selected").text($(e.target).text());
                $(".div-templateOption .select-items").addClass("select-hide");
                for (var k = 0; k < selectItemsChildren.length; k++) {
                    $(".div-templateOption .select-items div:eq(" + k + ")").removeClass("same-as-selected");
                }
                $(e.target).addClass("same-as-selected");
                $("[name=templateOptionField]").val(selectOptionNameMapVal[$(e.target).text()]);
                _this.edmManagementStep1Form.controls['template'].setValue(selectOptionNameMapVal[$(e.target).text()]);
            });
        }
    };
    Step1Component.prototype.initPopoverChooseFileJquery = function () {
        //Choose File... btn, popover1 and popover2
        $('.uploadFile').change(function (file, type) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(file, 'target.files[0]', null)) {
                $(this).parent('.file').siblings('.filename').text(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(file, 'target.files[0].name'));
            }
            ;
        });
        function keywords_content(popover) {
            if (popover == 'popover1') {
                var data = $('<div class="clearfix"><p><span class="title">Tip : Templates preview</span></p><div class="clearfix img-group"><div class=""><img src="assets/img/group243.png" alt=""></div><div class=""><img src="./assets/img/group244.png" alt=""></div><div class=""><img src="./assets/img/group245.png" alt=""></div></div></div>');
                return data;
            }
            else if (popover == 'popover2') {
                var data = $('<div class="clearfix"><p><span class="title">Tip : Auto-fill Tag</span></p><p>Information could be automatically\n' +
                    'generated by including text below:</p><p style="font-weight: bold;margin-top: 30px;">##CUSTOMER_NAME##</p><p style="margin-bottom: 30px">Customer’s name</p><p style="font-weight: bold">##CUSTOMER_NAME_1##</p><p style="font-weight: bold">##CUSTOMER_NAME_2##</p><p style="font-weight: bold">##CUSTOMER_NAME_3##</p><p>Campaign’s name according to the text \n' +
                    'user entered within the same template.</p></div>');
                return data;
            }
        }
        var popover1 = $(".popover1");
        var popover2 = $(".popover2");
        popover1.popover({
            html: true,
            content: function () {
                return keywords_content('popover1');
            },
            trigger: 'hover'
        });
        popover2.popover({
            html: true,
            content: function () {
                return keywords_content('popover2');
            },
            trigger: 'hover'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Step1Component.prototype, "edmPageInfo", void 0);
    Step1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! ./step1.component.html */ "./src/app/components/edm/edmmanagementform/step1/step1.component.html"),
            styles: [__webpack_require__(/*! ./step1.component.scss */ "./src/app/components/edm/edmmanagementform/step1/step1.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_edm_service__WEBPACK_IMPORTED_MODULE_4__["EdmService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/step2/step2.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/step2/step2.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 step2 div-step2 edm-bodyBottom\">\n  <form [formGroup]=\"edmManagementStep2Form\" method=\"POST\" (ngSubmit)=\"onSubmitSearchCriteria()\">\n    <div id=\"accordioninpanel\" class=\"accordion-group\">\n        <div class=\"accordion-item\">\n            <a class=\"accordion-title collapsed\" data-toggle=\"collapse\" data-parent=\"#accordioninpanel\" href=\"#my-policy-diary\"><h4>Input Customer Search Criteria(s)</h4></a>\n            <div id=\"my-policy-diary\" class=\"collapse in\">\n                <div class=\"accordion-body\">\n                      <div>\n                          <div class=\"search-by-col-wrap\">\n                              <div class=\"search-by-col\">\n                                  <div>\n                                      <label>Surname</label>\n                                      <input formControlName=\"surname\" name=\"surnameField\" class=\"search-by-input\" type=\"text\">\n                                  </div>\n                                  <div>\n                                      <label>First Name</label>\n                                      <input formControlName=\"firstName\" name=\"firstNameField\" class=\"search-by-input\" type=\"text\">\n                                  </div>\n                                  <div>\n                                      <label>Gender</label>\n                                      <div class=\"dropdown-redarrow search-by-dropdown div-genderOption\">\n                                          <select formControlName=\"genderOption\" name=\"genderOptionField\" >\n                                              <option value=\"\"></option>\n                                              <option value=\"M\">Male</option>\n                                              <option value=\"F\">Female</option>\n                                          </select>\n                                          <div class=\"select-selected\"></div>\n                                          <div class=\"select-items select-hide\">\n                                            <div>&nbsp;</div>\n                                            <div>Male</div>\n                                            <div>Female</div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"search-by-col\">\n                                  <div>\n                                      <label>Mobile No.</label>\n                                      <input formControlName=\"mobileNo\" name=\"mobileNoField\" class=\"search-by-input\" type=\"text\">\n                                  </div>\n                                  <div>\n                                      <label>Client ID</label>\n                                      <input formControlName=\"clientId\" name=\"clientIdField\" class=\"search-by-input\" type=\"email\">\n                                  </div>\n                                  <div>\n                                      <label>Birthday Month (Jan - Dec)</label>\n                                      <div class=\"dropdown-redarrow search-by-dropdown div-birthdayOption\">\n                                          <select formControlName=\"birthdayOption\" name=\"birthdayOptionField\" >\n                                              <option value=\"\" monthName=\"\"></option>\n                                              <option value=\"01\" monthName=\"January\">January</option>\n                                              <option value=\"02\" monthName=\"February\">February</option>\n                                              <option value=\"03\" monthName=\"March\">March</option>\n                                              <option value=\"04\" monthName=\"April\">April</option>\n                                              <option value=\"05\" monthName=\"May\">May</option>\n                                              <option value=\"06\" monthName=\"June\">June</option>\n                                              <option value=\"07\" monthName=\"July\">July</option>\n                                              <option value=\"08\" monthName=\"August\">August</option>\n                                              <option value=\"09\" monthName=\"September\">September</option>\n                                              <option value=\"10\" monthName=\"October\">October</option>\n                                              <option value=\"11\" monthName=\"November\">November</option>\n                                              <option value=\"12\" monthName=\"December\">December</option>\n                                          </select>\n                                          <div class=\"select-selected\"></div>\n                                          <div class=\"select-items select-hide\"><!--same-as-selected-->\n                                            <div>&nbsp;</div>\n                                            <div>January</div>\n                                            <div>February</div>\n                                            <div>March</div>\n                                            <div>April</div>\n                                            <div>May</div>\n                                            <div>June</div>\n                                            <div>July</div>\n                                            <div>August</div>\n                                            <div>September</div>\n                                            <div>October</div>\n                                            <div>November</div>\n                                            <div>December</div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"search-by-col\">\n                                  <div>\n                                      <label>Email</label>\n                                      <input formControlName=\"email\" name=\"emailField\" class=\"search-by-input\" type=\"text\">\n                                  </div>\n                              </div>\n                              <div class=\"search-by-col\">\n                                  <div>\n                                      <label>Campaign Code</label>\n                                      <input formControlName=\"campaignCd\" name=\"campaignCdField\" class=\"search-by-input\" type=\"text\">\n                                  </div>\n                                  <div>\n                                      <label>Partner Code</label>\n                                      <input formControlName=\"partnerCd\" name=\"partnerCdField\" class=\"search-by-input\" type=\"text\">\n                                  </div>\n                                  <div>\n                                      <label>Partner Name</label>\n                                      <input formControlName=\"partnerName\" name=\"partnerNameField\" class=\"search-by-input\" type=\"text\">\n                                  </div>\n                              </div>\n                              <div class=\"search-by-col div-dateOfSubmissionWrapper\">\n                                <div class=\"div-labelDivDateOfSubmissionFrom\">\n                                    <label>Date of Submission From</label>\n                                    <div class=\"div-dateOfSubmissionFrom\">\n                                        <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfSubmissionChange($event, 0)\" matInput [max]=\"maxDateFrom\" [matDatepicker]=\"dateOfSubmissionFromPicker\" formControlName=\"dateOfSubmissionFrom\" name=\"dateOfSubmissionFromField\" placeholder=\"DD/MM/YYYY\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionFromPicker\">\n                                          <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                        </mat-datepicker-toggle>\n                                        <mat-datepicker #dateOfSubmissionFromPicker></mat-datepicker>\n                                    </div>\n                                </div>\n                                <span class=\"span-dateOfSubmissionText\">To &nbsp;</span>\n                                <div class=\"div-dateOfSubmissionTo\">\n                                  <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfSubmissionChange($event, 1)\" matInput [min]=\"minDateTo\" [matDatepicker]=\"dateOfSubmissionToPicker\" formControlName=\"dateOfSubmissionTo\" name=\"dateOfSubmissionToField\" placeholder=\"DD/MM/YYYY\">\n                                  <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionToPicker\">\n                                    <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                  </mat-datepicker-toggle>\n                                  <mat-datepicker #dateOfSubmissionToPicker></mat-datepicker>\n                                </div>\n                              </div>\n                              <div class=\"search-by-col\" style=\"margin:20px 0 \">\n                                  <span class=\"checkbox-wrapper\">\n                                    <input formControlName=\"selfService\" name=\"selfServiceField\" class=\"chkaction\" type=\"checkbox\" id=\"catrgory-1\">\n                                    <label for=\"catrgory-1\" class=\"checkbox-uncheck\"><img src=\"assets/img/icon_checkbox.png\">Self Service</label>\n                                    <label for=\"catrgory-1\" class=\"checkbox-checked\"><img src=\"assets/img/icon_checkbox_checked.png\">Self Service</label>\n                                  </span>\n                                  <span class=\"checkbox-wrapper\" style=\"margin-left: 20px;\">\n                                    <input formControlName=\"failUpsell6Months\" name=\"failUpsell6MonthsField\" class=\"chkaction\" type=\"checkbox\" id=\"catrgory-2\">\n                                    <label for=\"catrgory-2\" class=\"checkbox-uncheck\"><img src=\"assets/img/icon_checkbox.png\">Unsuccessful Upsell in 6 months</label>\n                                    <label for=\"catrgory-2\" class=\"checkbox-checked\"><img src=\"assets/img/icon_checkbox_checked.png\">Unsuccessful Upsell in 6 months</label>\n                                  </span>                                  \n                              </div>\n                              <div class=\"clearfix\"></div>\n                          </div>\n                      </div>\n                      <div class=\"text-left\">\n                          <input type=\"submit\" class=\"btn btn-primary table-btn\" value=\"Search\">\n                          <input type=\"reset\" (click)=\"resetDateRangeRestrictAndDropDownOption()\" class=\"btn btn-default table-btn\" value=\"Reset\">\n                      </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </form>\n</div>\n\n<div class=\"row div-step2-bottom\">\n    <div class=\"col-md-12 \">\n        <div class=\"panel\">\n            <div class=\"panel-body div-panelBody\">\n                <div class=\"row\">\n                  <div class=\"clearfix div-searchCriteriaList\" >\n                      <h4 class=\"float-left h4-searchCriteriaList\">Search Criteria: </h4>\n                      <h4 class=\"h4-criteriaText\">\n                        <ng-container *ngFor=\"let criteria of searchCriteriasDisplay; let i = index;\">\n                          <ng-container *ngIf=\"criteria\">“{{criteria}}”\n                            <ng-container *ngIf=\"i < searchCriteriasDisplay.length-1 && criteria\">,</ng-container>\n                          </ng-container>\n                        </ng-container>\n                      </h4>\n                      <h4 class=\"float-right add-bottom h4-noOfRecords\">Total No. of Records: {{noOfRecords}}</h4>\n                  </div>\n                  <div class=\"col-md-12 clearfix div-edmManagementFormSearchRecordBody\">\n                      <div>\n                          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"table table-striped table-bordered no-search datatables6 table-edmManagementForm\">\n                              <thead>\n                              <tr class=\"row1\">\n                                  <th class=\"noscroll\" class=\"th-grayCheckbox\"><input type=\"checkbox\"></th>\n                                  <th>Customer Name</th>\n                                  <th>Gender</th>\n                                  <th>Email Address</th>\n                                  <th>Birthday Year</th>\n                                  <th>Birthday Month</th>\n                                  <th>Campaign Code</th>\n                                  <th>Partner Code</th>\n                                  <th>Partner Name</th>\n                                  <th>Assignment Type</th>\n                                  <th>Submission Date</th>\n                              </tr>\n                              </thead>\n                          </table>\n                      </div>\n                      <div class=\"div-goToPage-showPerPage\">\n                        <div class=\"div-goToPage\">\n                          <span class=\"span-goToPage\">Go to page</span>\n                          <div class=\"div-goToPage_wrapper\">\n                            <input type=\"text\" class=\"input-goToPage_left\" [(ngModel)]=\"currPage\" value=\"{{currPage}}\"/>\n                            <input type=\"text\" class=\"input-goToPage_right\" value=\"/ {{noOfPage}}\" disabled/>\n                            <input class=\"button-goToPage_go\" value=\"GO\" type=\"button\" (click)=\"changeCurrTablePage(currPage)\"/>\n                          </div>\n                        </div>\n                        <ul class=\"ul-showPerPage\">\n                          <span>show</span>\n                          <li><a [ngClass]=\"mapToLengthMenuNum[5]\" (click)=\"changeTablePerPage(5)\">5</a></li>\n                          <li><a [ngClass]=\"mapToLengthMenuNum[10]\" (click)=\"changeTablePerPage(10)\">10</a></li>\n                          <li><a [ngClass]=\"mapToLengthMenuNum[20]\" (click)=\"changeTablePerPage(20)\">20</a></li>\n                          <span>per page</span>\n                        </ul>\n                      </div>\n                  </div>\n                  <div class=\"col-md-12 clearfix hidden-xs step2-btn\">\n                      <div class=\"btn-left float-left\">\n                          <button (click)=\"onSubmitStep2()\" class=\"to-step3\" style=\"background: #FE0000; color: #ffffff;\"><i class=\"iconfont\">&#xe61f;</i>\n                              <span>Send</span>\n                          </button>\n                          <button (click)=\"goBackStep1()\" class=\"to-step1\" style=\"background: #EFEFEF; color: #333333;\"><i class=\"iconfont\">&#xe620;</i>\n                              <span>Back</span>\n                          </button>\n                      </div>\n                      <div class=\"btn-right float-right\">\n                          <button routerLink=\"/easEDM\"><i class=\"iconfont\">&#xe619;</i>\n                              <span>Cancel</span></button>\n                      </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/step2/step2.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/step2/step2.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-step2 .ng-invalid{border-color:red !important}.div-step2 textarea{resize:none}.div-step2 input{line-height:10px;height:40px !important;border-color:#cccccc}.div-step2 .div-dateOfSubmissionWrapper{display:inline-flex}.div-step2 .div-dateOfSubmissionWrapper .span-dateOfSubmissionText{margin:40px 20px 0px 30px}.div-step2 .div-dateOfSubmissionWrapper .div-labelDivDateOfSubmissionFrom{width:230px !important}.div-step2 .div-dateOfSubmissionWrapper .div-dateOfSubmissionFrom,.div-step2 .div-dateOfSubmissionWrapper .div-dateOfSubmissionTo{position:relative;display:inline-flex}.div-step2 .div-dateOfSubmissionWrapper .div-dateOfSubmissionFrom .input-dateOfSubmissionBtn,.div-step2 .div-dateOfSubmissionWrapper .div-dateOfSubmissionTo .input-dateOfSubmissionBtn{position:absolute;top:0px;right:0px;background:transparent;width:100%}.div-step2 .div-dateOfSubmissionWrapper .div-dateOfSubmissionFrom .mat-icon.material-icons,.div-step2 .div-dateOfSubmissionWrapper .div-dateOfSubmissionTo .mat-icon.material-icons{color:red}.div-step2 .div-dateOfSubmissionWrapper .div-dateOfSubmissionFrom .input-dateOfSubmission,.div-step2 .div-dateOfSubmissionWrapper .div-dateOfSubmissionTo .input-dateOfSubmission{width:230px;line-height:10px}.div-step2 .div-dateOfSubmissionWrapper .div-dateOfSubmissionTo{margin-top:30px;width:230px}.div-step2-bottom .div-panelBody{margin-top:15px}.div-step2-bottom .div-panelBody .div-searchCriteriaList{height:40px}.div-step2-bottom .div-panelBody .div-searchCriteriaList .h4-searchCriteriaList{white-space:pre}.div-step2-bottom .div-panelBody .div-searchCriteriaList .h4-criteriaText{word-break:break-all}.div-step2-bottom .div-panelBody .div-searchCriteriaList .h4-noOfRecords{color:red;margin-left:auto;white-space:nowrap}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody{text-align:center}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .table-edmManagementForm{width:100% !important}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage{display:-webkit-box;position:relative}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .div-goToPage{display:flex;position:relative;left:38%}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .div-goToPage .span-goToPage{line-height:50px;color:gray}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper{display:inline-block}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_left{margin-left:10px;border-radius:10px 0px 0px 10px;border-right:0px;text-align:right;color:gray}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_right{position:relative;left:-10px;color:gray;border-left:0px;border-radius:0px}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper input{width:80px;background-color:transparent}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .button-goToPage_go{position:relative;left:-12px;border-radius:0px 10px 10px 0px;background-color:#c8c8c8;color:black}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .ul-showPerPage{list-style:none !important;display:flex;position:absolute;top:-26px;right:0px;float:right}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .ul-showPerPage li{margin:0px 10px}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .ul-showPerPage .inactive-gray{color:gray}.div-step2-bottom .div-panelBody .div-edmManagementFormSearchRecordBody .div-goToPage-showPerPage .ul-showPerPage .active-red{color:red}\n"

/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/step2/step2.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/step2/step2.component.ts ***!
  \***************************************************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_edm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/edm.service */ "./src/app/services/edm.service.ts");
/* harmony import */ var _services_loginUser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/loginUser.service */ "./src/app/services/loginUser.service.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _utils_convertformat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/convertformat */ "./src/app/utils/convertformat.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};










var Step2Component = /** @class */ (function () {
    //would need to redraw the datatable within this comp's this.loginUserService.usercodeObs$.subscribe() if this is still false
    function Step2Component(edmService, loginUserService, renderer2, router) {
        this.edmService = edmService;
        this.loginUserService = loginUserService;
        this.renderer2 = renderer2;
        this.router = router;
        //use policyNo as unique id to get the user selected records
        this.selectedRecords = []; //should be cleared whenever the search criteria is refreshed
        //to be converted from selectedRecords, the elem should be seperated by a delimiter ','
        //only will selectedRecords be converted into selectedRecordsStr when the form is submitted
        this.edmManagementStep2Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z ]+')]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z ]+')]),
            genderOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            clientId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z]+')]),
            birthdayOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            campaignCd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z]+')]),
            partnerCd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z]+')]),
            partnerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z ]+')]),
            dateOfSubmissionFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dateOfSubmissionTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            selfService: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            failUpsell6Months: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"]["EDMStep2Field"];
        this.noOfRecords = 0;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.searchCriteriaFieldName = ["surname", "firstName", "genderOption",
            "mobileNo", "clientId", "birthdayOption",
            "email",
            "campaignCd", "partnerCd", "partnerName",
            "dateOfSubmissionFrom", "dateOfSubmissionTo",
            "selfService", "failUpsell6Months"];
        this.currPage = 1;
        //map the page num to the jquery elem of page num
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "active-red",
            "20": "inactive-gray",
        };
        this.polNoList = [];
        this.isDatatableFormRecordsFetched = false;
        this.dropdownDivArray = ["div-birthdayOption", "div-genderOption"];
    }
    Step2Component.prototype.goBackStep1 = function () {
        console.log("go from step2 to step1");
        this.edmPageInfo.currStep = "step1";
        window.scrollTo(0, 0);
    };
    Step2Component.prototype.onSubmitStep2 = function () {
        console.log("go from step2 to step3");
        var queryParams = {
            selectedRecordsStr: this.convertSelectedRecordIntoArray(this.selectedRecords)
        };
        this.edmService.postEdmReceiver(queryParams, 'sendParams').subscribe(function (resp) {
            console.log(resp);
        }, function (error) {
            console.log('>>> postEdmReceiver error:', error);
        });
        this.edmPageInfo.currStep = "step3";
        window.scrollTo(0, 0);
    };
    Step2Component.prototype.convertSelectedRecordIntoArray = function (selectedRecords) {
        var selectedRecordsStr = "";
        selectedRecords.forEach(function (elem, key) {
            selectedRecordsStr += (key !== selectedRecords.length - 1) ? (elem + ",") : elem;
        });
        console.log(selectedRecordsStr);
        return selectedRecordsStr;
    };
    Step2Component.prototype.onSubmitSearchCriteria = function () {
        if (this.edmManagementStep2Form.status === 'VALID') {
            //date validation
            if ((this.edmManagementStep2Form.value.dateOfSubmissionFrom &&
                !new Date(this.edmManagementStep2Form.value.dateOfSubmissionFrom).getTime()) ||
                (this.edmManagementStep2Form.value.dateOfSubmissionTo &&
                    !new Date(this.edmManagementStep2Form.value.dateOfSubmissionTo).getTime())) {
                console.error('>>> Invalid searchCriteria inputs');
                return null;
            }
        }
        else {
            console.error('>>> Invalid searchCriteria inputs');
            return null;
        }
        var surname = this.edmManagementStep2Form.controls['surname'].value;
        var firstName = this.edmManagementStep2Form.controls['firstName'].value;
        var genderOption = $("[name=genderOptionField]").val();
        var mobileNo = this.edmManagementStep2Form.controls['mobileNo'].value;
        var clientId = this.edmManagementStep2Form.controls['clientId'].value;
        var birthdayOption = Number($("[name=birthdayOptionField]").val()) || "";
        var email = this.edmManagementStep2Form.controls['email'].value;
        var campaignCd = this.edmManagementStep2Form.controls['campaignCd'].value;
        var partnerCd = this.edmManagementStep2Form.controls['partnerCd'].value;
        var partnerName = this.edmManagementStep2Form.controls['partnerName'].value;
        var dateOfSubmissionFrom = this.edmManagementStep2Form.controls['dateOfSubmissionFrom'].value;
        var dateOfSubmissionTo = this.edmManagementStep2Form.controls['dateOfSubmissionTo'].value;
        var selfService = this.edmManagementStep2Form.controls['selfService'].value || false;
        var failUpsell6Months = this.edmManagementStep2Form.controls['failUpsell6Months'].value || false;
        var selfServiceStr = selfService ? 'Self Service: true' : 'Self Service: false';
        var failUpsell6MonthsStr = failUpsell6Months ? 'Unsuccessful Upsell in 6 months: true' : 'Unsuccessful Upsell in 6 months: false';
        var birthdayOptionToOptionIndex = birthdayOption;
        var birthdayOptionStr = birthdayOption ? $('[name=birthdayOptionField] option:eq(' + birthdayOptionToOptionIndex + ')').attr("monthName") : '';
        //further pre process the date of submission
        dateOfSubmissionFrom = dateOfSubmissionFrom ? _utils_convertformat__WEBPACK_IMPORTED_MODULE_5__["default"].dateToDDMMYYYY(new Date(dateOfSubmissionFrom)) : dateOfSubmissionFrom;
        dateOfSubmissionTo = dateOfSubmissionTo ? _utils_convertformat__WEBPACK_IMPORTED_MODULE_5__["default"].dateToDDMMYYYY(new Date(dateOfSubmissionTo)) : dateOfSubmissionTo;
        //
        this.searchCriterias = [surname, firstName, genderOption, mobileNo, clientId,
            birthdayOption,
            email, campaignCd, partnerCd,
            partnerName, dateOfSubmissionFrom, dateOfSubmissionTo,
            selfService, failUpsell6Months];
        this.searchCriteriasDisplay = [surname, firstName, genderOption, mobileNo, clientId, birthdayOptionStr, email, campaignCd, partnerCd,
            partnerName, dateOfSubmissionFrom, dateOfSubmissionTo,
            selfServiceStr, failUpsell6MonthsStr];
        //clear all the elems in selectedRecords array
        this.selectedRecords.length = 0;
        this.refreshAndReloadSearchRecordTable();
    };
    Step2Component.prototype.closeAllDropDown = function () {
        this.dropdownDivArray.forEach(function (elem, key) {
            if ($("." + elem + " .select-selected").hasClass("select-arrow-active")) {
                $("." + elem + " .select-selected").removeClass("select-arrow-active");
                $("." + elem + " .select-items").addClass("select-hide");
            }
        });
    };
    Step2Component.prototype.ngOnInit = function () {
        var _this = this;
        //if no this.loginUserService.usercode not yet fetched, should go back to default page,
        //as usercode is used to fetch records and whole polno list related to this agent
        if (!this.loginUserService.usercode && _constants_constants__WEBPACK_IMPORTED_MODULE_4__["default"].localOrVm === 'vm') {
            this.router.navigate(['/']);
        }
        this.searchCriterias = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["fill"])(new Array(14), "");
        //preset the checkbox fields with false init value
        this.searchCriterias[12] = "false";
        this.searchCriterias[13] = "false";
        var colArr = [], dataArr = [];
        this.displayedColumnsName.forEach(function (val, index) {
            colArr.push({
                data: val,
                orderable: false,
                width: '100px'
            });
        });
        this.dtOptions = {
            fixedColumns: {
                leftColumns: 1
            },
            scrollCollapse: true,
            responsive: true,
            pagingType: 'full_numbers',
            pageLength: 10,
            scrollX: true,
            scrollY: false,
            columnDefs: this.edmManagementFormRecordColumnDef(),
            ajax: this.edmManagementFormRecordAjax(),
            processing: true,
            serverSide: true,
            language: {
                info: "",
                paginate: {
                    first: '« first',
                    previous: '‹ prev',
                    next: 'next ›',
                    last: 'last »'
                },
                //display none length Menu and add a new custom menu
                // to change the hidden length menu
                lengthMenu: "",
            },
            searching: false,
            columns: colArr,
        };
        $('.table-edmManagementForm').on('page.dt', function (event, settings) {
            $('.input-goToPage_left').val((settings._iDisplayStart / settings.oInit.pageLength) + 1);
        });
        //get the whole available list of customer's polno for curr edm template here and store it into edmService
        this.agentCodeSubscription = this.loginUserService.usercodeObs$.subscribe(function (resp) {
            var queryParams = {
                agentCode: resp
            };
            _this.allPolNoSubscription = _this.edmService.getAllPolNoList(queryParams, 'retrieve').subscribe(function (resp) {
                _this.edmService.polNoList = resp.body;
            });
        });
    };
    Step2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initDropdown("birthdayOption");
        this.initDropdown("genderOption");
        this.dtTrigger.next();
        this.relistenThCheckbox();
        this.bodyRendererClickListener = this.renderer2.listen("body", "click", function (event) {
            if (!$(event.target).hasClass("select-selected")) {
                _this.closeAllDropDown();
            }
        });
        this.bodyRendererChangeListener = this.renderer2.listen("body", 'change', function (event) {
            if ($(event.target).hasClass('a-checkbox')) { //only check the checkbox with class a-checkbox
                var queryParams = $(event.target).attr("queryParams");
                var policyNo = queryParams.split(":")[1];
                if ($(event.target).prop('checked')) { //when checkbox is checked, add policyNo into selectedRecords
                    //only add into the selectedRecords array if the policyNo doesnt exist in selectedRecords
                    if (_this.selectedRecords.indexOf(policyNo) === -1) {
                        _this.selectedRecords.push(policyNo);
                    }
                }
                else { //when checkbox isnt checked, remove policyNo from selectedRecords
                    var theIndexOfTargetPersonId = _this.selectedRecords.indexOf(policyNo);
                    if (theIndexOfTargetPersonId !== -1) {
                        //remove the specific elem from the selectedRecords
                        _this.selectedRecords.splice(theIndexOfTargetPersonId, 1);
                    }
                }
                console.log('selectedRecords: ', _this.selectedRecords);
            }
        });
    };
    Step2Component.prototype.ngAfterViewChecked = function () {
        //fetch the datatable's settings
        //since angular-datatables is not supporting changing table page in dtoption yet
        //make use of settings.oApi._fnPageChange to change the page
        //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
        this.dataTableSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])($.fn['dataTable'], 'settings[0]');
    };
    Step2Component.prototype.ngOnDestroy = function () {
        if (this.bodyRendererChangeListener) {
            this.bodyRendererChangeListener();
        }
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.allPolNoSubscription) {
            this.allPolNoSubscription.unsubscribe();
        }
        if (this.agentCodeSubscription) {
            this.agentCodeSubscription.unsubscribe();
        }
    };
    Step2Component.prototype.changeTablePerPage = function (val) {
        var _this = this;
        //reset all the length menu 's class to gray color
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "inactive-gray",
            "20": "inactive-gray",
        };
        this.mapToLengthMenuNum[parseInt(val)] = "active-red";
        //reset the datatable after changing dtOptions to redraw the table
        this.dtOptions.pageLength = val; //change table's no of records
        this.dTable.dtInstance.then(function (dtInstance) {
            //redraw table only need these 2 funcs
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
        this.noOfPage = Math.ceil(this.noOfRecords / this.dtOptions.pageLength);
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
        this.relistenThCheckbox();
    };
    Step2Component.prototype.relistenThCheckbox = function () {
        var _this = this;
        $('.th-grayCheckbox').off();
        $('.th-grayCheckbox').on('change', function () {
            //a-checkbox happens to be doubled due to the fact that angular-datatable create an extra copy of col and put it on
            //the cols that are specified as fixed by fixedColumns option, so the size needs to be divided by 2
            //the first half and sec half are referring the same group of elements
            //but the clickable checkboxes are the sec half which is placed on top of first half
            //so we are going to take sec half here
            var aCheckboxSize = $(".a-checkbox").length;
            Object(lodash__WEBPACK_IMPORTED_MODULE_8__["range"])(aCheckboxSize / 2, aCheckboxSize).forEach(function (elem, key) {
                //store the init checked info of the current .a-checkbox
                var currACheckboxChecked = $(".a-checkbox:eq(" + elem + ")").prop('checked');
                //[! check] all the checkboxes in this page
                $('.a-checkbox:eq(' + elem + ')').prop('checked', !currACheckboxChecked);
                //push all the policyNos that attached in the checkboxes into selectedRecords array
                var queryParamsAttr = $('.a-checkbox:eq(' + elem + ')').attr('queryParams');
                var policyNo = queryParamsAttr.split(":")[1];
                if (currACheckboxChecked) {
                    var indexOfPersonId = _this.selectedRecords.indexOf(policyNo);
                    if (indexOfPersonId !== -1) { //the policyNo should be exist, otherwise should be an error
                        _this.selectedRecords.splice(indexOfPersonId, 1);
                    }
                    //
                }
                else {
                    _this.selectedRecords.push(policyNo);
                }
            });
            console.log(_this.selectedRecords);
        });
    };
    Step2Component.prototype.changeCurrTablePage = function (page) {
        if (page !== "" && /^\d+$/.test(page)) {
            console.log('Change to page: ' + page);
            var pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true);
            console.log((pageChangeStatus) ? 'Current page changed to ' + page : "Fail to change page, page exceed no of page");
            this.currPage = Number(page);
        }
        this.relistenThCheckbox();
    };
    //refresh and reload inside this component
    Step2Component.prototype.refreshAndReloadSearchRecordTable = function () {
        var _this = this;
        var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.dTable, "dtInstance");
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
        if (dTableInstance) {
            dTableInstance.then(function (dtInstance) {
                //redraw table only need these 2 funcs
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
        this.relistenThCheckbox();
    };
    Step2Component.prototype.edmManagementFormRecordColumnDef = function () {
        return [{
                targets: "_all",
                createdCell: function (td, cellData, rowData, row, col) {
                    var convertDate = function (date) {
                        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    };
                    if (col === 0) {
                        return $(td).html("<input type=\"checkbox\" class=\"a-checkbox\" queryParams=\"policyNo:" +
                            rowData.policyNo
                            + "\" " + (cellData === 1 ? "checked" : "") + "/>");
                    }
                    else if (col === 10) {
                        var convertDateData = cellData ? new Date(cellData.substr(0, 10)) : undefined;
                        return $(td).html("<span>" + (convertDateData ? convertDate(convertDateData) : "-") + "</span>");
                    }
                    else {
                        return $(td).html(((typeof cellData == "string" && cellData.length > 20) ? "<span class=\"css-wordBreakAll\">" : "<span>") +
                            cellData + "</span>");
                    }
                }
            }];
    };
    Step2Component.prototype.edmManagementFormRecordAjax = function () {
        var _this = this;
        return function (params, callback, settings) {
            var queryParams = {};
            var draw, start, length, unusedParams;
            (draw = params.draw, start = params.start, length = params.length, params, unusedParams = __rest(params, ["draw", "start", "length"]));
            queryParams = {
                draw: draw, start: start, length: length,
                agentCode: _this.loginUserService.usercode
            };
            if (_this.edmPageInfo.commCode) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_8__["set"])(queryParams, 'commCode', _this.edmPageInfo.commCode);
            }
            //put all the params from searchCriteria into queryParams
            _this.searchCriterias.forEach(function (data, key) {
                if (key >= 12) { //checkbox fields. even the field return false should be posted to server
                    queryParams[_this.searchCriteriaFieldName[key]] = data;
                }
                else {
                    if (data) {
                        queryParams[_this.searchCriteriaFieldName[key]] = data;
                    }
                }
            });
            _this.edmService.getManagementFormSearchRecord(queryParams, 'dataTable').subscribe(function (resp) {
                _this.noOfRecords = resp.body.recordsFiltered;
                _this.noOfPage = Math.ceil(_this.noOfRecords / _this.dtOptions.pageLength);
                _this.currPage = (resp.body.recordsFiltered >= 1) ? _this.currPage : 0;
                var respDataArr = [];
                //local convert json into server page changing mode
                /*let startPt = (this.currPage-1) * this.dtOptions.pageLength;
                let endPt = startPt + this.dtOptions.pageLength;
                //[variable: checkbox = 1 [checked] according to the this.selectedRecords variable]
                resp.body.data.forEach((elem, key)=>{
                  if(key >= startPt && key < endPt){
                  //if the policyNo is found inside the selectedRecords, then the checkbox attr should be 1 and should be checked
                    _set(elem, "checkbox", (this.selectedRecords.indexOf(elem.policyNo) === -1) ? 0 : 1);
                    respDataArr.push(elem);
                  }
                }, (error)=>{
                  console.error(">>> getManagementFormSearchRecord error:", error);
                });
                console.log(startPt, endPt, this.currPage)*/
                //local json would not work, this is for vm only
                //[variable: checkbox = 1 [checked] according to the this.selectedRecords variable]
                resp.body.data.forEach(function (elem, key) {
                    //if the policyNo is found inside the selectedRecords, then the checkbox attr should be 1 and should be checked
                    Object(lodash__WEBPACK_IMPORTED_MODULE_8__["set"])(elem, "checkbox", (_this.selectedRecords.indexOf(elem.policyNo) === -1) ? 0 : 1);
                    respDataArr.push(elem);
                });
                callback({
                    data: respDataArr,
                    recordsTotal: resp.body.recordsTotal,
                    recordsFiltered: resp.body.recordsFiltered
                });
            }, function (error) {
                console.error("error: ", error);
            });
        };
    };
    Step2Component.prototype.initDropdown = function (fieldName) {
        $("[name=" + fieldName + "Field]").val($("[name=\"" + fieldName + "Field\"] option:eq(0)").val()); //initialize the select into default val first
        $(".div-" + fieldName + " .select-items div:eq(0)").addClass("same-as-selected");
        $(".div-" + fieldName + " .select-selected").text($(".div-" + fieldName + " .select-items div:eq(0)").text());
        //select-selected select-arrow-active
        //select-hide, same-as-selected
        $(".div-" + fieldName + " .select-selected").on("click", function (event) {
            $(".div-" + fieldName + " .select-items").removeClass("select-hide");
            $(".div-" + fieldName + " .select-selected").addClass("select-arrow-active");
        });
        //
        var selectOptionNameMapVal = {}; //select option name map to val
        for (var i = 0; i < $("[name=" + fieldName + "Field] option").length; i++) {
            var currOption = $("[name=" + fieldName + "Field] option:eq(" + i + ")");
            selectOptionNameMapVal[currOption.html()] = currOption.val();
        }
        var selectItemsChildren = $('.div-' + fieldName + ' .select-items').children();
        for (var j = 0; j < selectItemsChildren.length; j++) {
            $(".div-" + fieldName + " .select-items div:eq(" + j + ")").on('click', function (e) {
                $(".div-" + fieldName + " .select-selected").removeClass("select-arrow-active");
                $(".div-" + fieldName + " .select-selected").text($(e.target).text());
                $(".div-" + fieldName + " .select-items").addClass("select-hide");
                for (var k = 0; k < selectItemsChildren.length; k++) {
                    $(".div-" + fieldName + " .select-items div:eq(" + k + ")").removeClass("same-as-selected");
                }
                $(e.target).addClass("same-as-selected");
                $("[name=" + fieldName + "Field]").val(selectOptionNameMapVal[$(e.target).text()]);
            });
        }
    };
    //to set the min, max date of from / to once submissionfrom / to is changed
    Step2Component.prototype.dateOfSubmissionChange = function (e, fromOrTo) {
        this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
    };
    Step2Component.prototype.resetDateRangeRestrictAndDropDownOption = function () {
        this.minDateTo = null;
        this.maxDateFrom = null;
        $(".select-selected").html("&nbsp;");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Step2Component.prototype, "edmPageInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], Step2Component.prototype, "dTable", void 0);
    Step2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! ./step2.component.html */ "./src/app/components/edm/edmmanagementform/step2/step2.component.html"),
            styles: [__webpack_require__(/*! ./step2.component.scss */ "./src/app/components/edm/edmmanagementform/step2/step2.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_edm_service__WEBPACK_IMPORTED_MODULE_2__["EdmService"],
            _services_loginUser_service__WEBPACK_IMPORTED_MODULE_3__["LoginUserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], Step2Component);
    return Step2Component;
}());



/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/step3/step3.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/step3/step3.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 step3 edm-bodyBottom\">\n    <div class=\"email-box\">\n        <img src=\"assets/img/mail.png\" alt=\"\">\n        <p>Email has been added to schedule job.</p>\n        <button routerLink=\"/easEDM\">Back to List</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/step3/step3.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/step3/step3.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edm/edmmanagementform/step3/step3.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/edm/edmmanagementform/step3/step3.component.ts ***!
  \***************************************************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Step3Component = /** @class */ (function () {
    function Step3Component() {
    }
    Step3Component.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Step3Component.prototype, "edmPageInfo", void 0);
    Step3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step3',
            template: __webpack_require__(/*! ./step3.component.html */ "./src/app/components/edm/edmmanagementform/step3/step3.component.html"),
            styles: [__webpack_require__(/*! ./step3.component.scss */ "./src/app/components/edm/edmmanagementform/step3/step3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Step3Component);
    return Step3Component;
}());



/***/ }),

/***/ "./src/app/components/layout/globalfooter/globalfooter.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/layout/globalfooter/globalfooter.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-globalFooter\" role=\"contentinfo\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 footer-title\">EAS</div>\n            <div class=\"footer-link\">\n                <a href=\"#\">{{'FOOTER.DISCLAIMER_AND_RIGHT' | translate}}</a>\n                <a href=\"#\">{{'FOOTER.SECURITY_POLICY' | translate}}</a>\n                <a href=\"#\">{{'FOOTER.PRIVACY_POLICY' | translate}}</a>\n            </div>\n        </div>\n    </div>\n</footer>\n\n<div id=\"back-to-top\"><i class=\"fa fa-long-arrow-up\"></i></div>\n"

/***/ }),

/***/ "./src/app/components/layout/globalfooter/globalfooter.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/layout/globalfooter/globalfooter.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-globalFooter{z-index:999;position:relative}\n"

/***/ }),

/***/ "./src/app/components/layout/globalfooter/globalfooter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/layout/globalfooter/globalfooter.component.ts ***!
  \**************************************************************************/
/*! exports provided: GlobalfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalfooterComponent", function() { return GlobalfooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalfooterComponent = /** @class */ (function () {
    function GlobalfooterComponent() {
    }
    GlobalfooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-globalfooter',
            template: __webpack_require__(/*! ./globalfooter.component.html */ "./src/app/components/layout/globalfooter/globalfooter.component.html"),
            styles: [__webpack_require__(/*! ./globalfooter.component.scss */ "./src/app/components/layout/globalfooter/globalfooter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GlobalfooterComponent);
    return GlobalfooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/globalheader/globalheader.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/layout/globalheader/globalheader.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-inverse navbar-fixed-top\" role=\"banner\">\n    <a id=\"leftmenu-trigger\" class=\"tooltips\" data-toggle=\"tooltip\" data-placement=\"right\">\n        <div></div>\n        <span></span>\n        <span></span>\n        <span></span>\n    </a>\n    <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\" routerLink=\"/\">Prudential</a>\n    </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/layout/globalheader/globalheader.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/layout/globalheader/globalheader.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/layout/globalheader/globalheader.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/layout/globalheader/globalheader.component.ts ***!
  \**************************************************************************/
/*! exports provided: GlobalheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalheaderComponent", function() { return GlobalheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalheaderComponent = /** @class */ (function () {
    function GlobalheaderComponent() {
    }
    GlobalheaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-globalheader',
            template: __webpack_require__(/*! ./globalheader.component.html */ "./src/app/components/layout/globalheader/globalheader.component.html"),
            styles: [__webpack_require__(/*! ./globalheader.component.scss */ "./src/app/components/layout/globalheader/globalheader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GlobalheaderComponent);
    return GlobalheaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-layoutWrapper\">\n  <app-globalheader></app-globalheader>\n\n  <div id=\"page-container\">\n\n    <app-leftsidebar\n      [username]=\"username\"\n      [usercode]=\"usercode\"\n    ></app-leftsidebar>\n    <router-outlet></router-outlet>\n  </div>\n  <app-loader></app-loader>\n  <app-globalfooter></app-globalfooter>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leftsidebar/leftsidebar.component */ "./src/app/components/layout/leftsidebar/leftsidebar.component.ts");
/* harmony import */ var _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/agentassignment.service */ "./src/app/services/agentassignment.service.ts");
/* harmony import */ var _services_loginUser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loginUser.service */ "./src/app/services/loginUser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(layoutService, agentassignmentService, loginUserService) {
        this.layoutService = layoutService;
        this.agentassignmentService = agentassignmentService;
        this.loginUserService = loginUserService;
        this.menu = []; //to be passed down to leftsidebar
        //detail pages are ignored in menu
        this.ignoredMenu = [
            "easAgentDetail",
            "easClientDetail",
            "easCampaignDetail"
        ];
        //map the corresponding menu link received from resp body into menu title
        this.mapMenuLinkToTab = {
            easAgentAssignCS: "agentAssignmentTab",
            easAgentAssignGI: "agentAssignmentTab",
            easAgentInterface: "leadResponseTab",
            easAOInterface: "leadResponseTab",
            easAPInterface: "leadResponseTab",
            easLeadSummary: "pddTab",
            easLeadExtensionAppl: "pddTab",
            easEDM: "eDMTab"
        };
        this.agentAssignmentTab = {
            title: "Agent Assignment",
            children: [],
            enabled: false
        };
        this.pddTab = {
            title: "PDD",
            children: [],
            enabled: false
        };
        this.leadResponseTab = {
            title: "Lead Response",
            children: [],
            enabled: false
        };
        this.eDMTab = {
            title: "eDM",
            children: [],
            enabled: false
        };
        this.mapSubmenuToTitle = {
            "easAgentAssignGI": "Agent Assignment",
            "easAgentAssignCS": "Agent Assignment",
            "easLeadExtensionAppl": "Lead extension approval",
            "easLeadSummary": "Summary",
            "easAgentInterface": "Agent interface",
            "easAPInterface": "Ap-upline interface",
            "easAOInterface": "AO interface",
            "easEDM": "eDM"
        };
        //only these 10 page name would be checked
        this.menuPageName = ["easAgentAssignGI", "easAgentAssignCS",
            "easLeadExtensionAppl", "easLeadSummary",
            "easAgentInterface", "easAPInterface", "easAOInterface", "easEDM"];
        //later be stored in layoutservice for global accessing purpose
        this.allowedRoutes = []; //the access allowed routes array is determined by the menu retrieved
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutService.getLeftSideBarMenu({}, 'menuApi').subscribe(function (resp) {
            resp.body.menu.forEach(function (elem) {
                if (_this.menuPageName.indexOf(elem) !== -1 && _this.ignoredMenu.indexOf(elem) === -1) { //is eas menu Page and non detail pages
                    //keep an record in allowedRoutes so as to determine the accessibility of routes
                    _this.allowedRoutes.push(elem);
                    if (['easAgentAssignCS', 'easAgentAssignGI', 'easEDM'].indexOf(elem) !== -1) {
                        _this[_this.mapMenuLinkToTab[elem]].link = '/' + elem;
                        if (['easAgentAssignCS', 'easAgentAssignGI'].indexOf(elem) !== -1) {
                            //store in it so that later be used in other component
                            _this.agentassignmentService.currServiceName = elem;
                        }
                    }
                    else {
                        _this[_this.mapMenuLinkToTab[elem]].children.push({
                            title: _this.mapSubmenuToTitle[elem],
                            link: '/' + elem
                        });
                    }
                    _this[_this.mapMenuLinkToTab[elem]].enabled = true;
                }
            });
            //merge all of the tabs into menu object
            ['agentAssignmentTab', 'pddTab', 'leadResponseTab', 'eDMTab'].forEach(function (elem) {
                if (_this[elem].enabled) {
                    _this.menu.push(_this[elem]);
                }
            });
            _this.loginUserService.setAllowedRoutes(_this.allowedRoutes);
            _this.username = resp.body.name;
            _this.usercode = resp.body.code;
            _this.loginUserService.setCurrentLoginUserInfo(resp.body.name, resp.body.code);
            _this.leftsidebar.setLeftsidebarMenuNameCode(_this.menu);
        }, function (error) {
            console.error('error:', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_2__["LeftsidebarComponent"]),
        __metadata("design:type", _leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_2__["LeftsidebarComponent"])
    ], LayoutComponent.prototype, "leftsidebar", void 0);
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"],
            _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_3__["AgentassignmentService"],
            _services_loginUser_service__WEBPACK_IMPORTED_MODULE_4__["LoginUserService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/leftsidebar/leftsidebar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/layout/leftsidebar/leftsidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN SIDEBAR -->\n<nav class=\"nav-leftsidebar\" id=\"page-leftbar\" role=\"navigation\">\n        <!-- BEGIN SIDEBAR MENU -->\n    <ul class=\"acc-menu\" id=\"sidebar\">\n        <li id=\"title\">Engagement Assignment System</li>\n        <li class=\"li-menuheader\" id=\"info\">\n            <div><i class=\"icon-circle-user\"></i>&nbsp;&nbsp;{{username}} ({{usercode}})</div>\n            <div><i class=\"icon-calendar\"></i>{{currDate | date:'EE, MMM d y'}}</div>\n            <div><p *ngIf=\"isLeadResponseRole\" class=\"p-langChange\" (click)=\"changeLang()\">{{translateTxt}}</p></div>\n            <div><i class=\"iconfont\">&#xe618;</i></div>\n        </li>\n        <li id=\"min-menu\" class=\"bg-black\" (click)=\"minimizeMenu()\">\n            <i *ngIf=\"menuMinimized\" class=\"icon-max-menu\"></i>\n            <i *ngIf=\"!menuMinimized\" class=\"icon-mini-menu\"></i>\n            <ng-container *ngIf=\"isLeadResponseRole\">\n              <span *ngIf=\"menuMinimized\">{{'LEFT_SIDEBAR_MENU.MAXMIZE_MENU' | translate }}</span>\n              <span *ngIf=\"!menuMinimized\">{{'LEFT_SIDEBAR_MENU.MINIMIZE_MENU' | translate }}</span>\n            </ng-container>\n            <ng-container *ngIf=\"!isLeadResponseRole\">\n              <span *ngIf=\"!menuMinimized\">Minimize Menu</span>\n              <span *ngIf=\"menuMinimized\">Maxmize Menu</span>\n            </ng-container>\n        </li>\n        <ng-container *ngIf=\"menu\">\n          <li *ngFor=\"let tabElem of menu\" >\n            <ng-container *ngIf=\"tabElem.enabled && tabElem.title != 'Lead Response'\">\n              <a *ngIf=\"tabElem.link\" routerLink=\"/{{tabElem.link}}\" routerLinkActive=\"tab-active\"><!--agentAssignment , edm-->\n                <i *ngIf=\"tabElem.title=='Agent Assignment'\" class=\"iconfont\">&#xe615;</i>\n                <i *ngIf=\"tabElem.title=='eDM'\" class=\"iconfont\">&#xe616;</i>\n                <span>{{tabElem.title}}</span>\n              </a>\n              <ng-container *ngIf=\"!tabElem.link\">\n                <a href=\"javascript:;\" *ngIf=\"tabElem.title=='PDD'\">\n                  <i class=\"iconfont\">&#xe617;</i><span>{{tabElem.title}}</span>\n                </a>\n                <ul class=\"acc-menu\" style=\"display: none;\">\n                  <li *ngFor=\"let subElem of tabElem.children\">\n                    <a (click)=\"handleActiveTabLogic($event)\" routerLink=\"/{{subElem.link}}\" routerLinkActive=\"tab-active\"><span>{{subElem.title}}</span></a>\n                  </li>\n                </ul>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"tabElem.enabled && tabElem.title == 'Lead Response'\">\n              <a href=\"javascript:;\">\n                <i class=\"iconfont\">&#xe617;</i><span>{{'LEFT_SIDEBAR_MENU.LEAD_RESPONSE' | translate }}</span>\n              </a>\n              <ul class=\"acc-menu\" style=\"display: none;\">\n                <li *ngIf=\"leadResponseTab.agentInterface\">\n                  <a (click)=\"handleActiveTabLogic($event)\" routerLink=\"/easAgentInterface\" routerLinkActive=\"tab-active\"><span>{{'LEFT_SIDEBAR_MENU.AGENT_INTERFACE' | translate }}</span></a>\n                </li>\n                <li *ngIf=\"leadResponseTab.apUplineInterface\">\n                  <a (click)=\"handleActiveTabLogic($event)\" routerLink=\"/easAPInterface\" routerLinkActive=\"tab-active\"><span>{{'LEFT_SIDEBAR_MENU.AP_UPLINE_INTERFACE' | translate }}</span></a>\n                </li>\n                <li *ngIf=\"leadResponseTab.aoInterface\">\n                  <a (click)=\"handleActiveTabLogic($event)\" routerLink=\"/easAOInterface\" routerLinkActive=\"tab-active\"><span>{{'LEFT_SIDEBAR_MENU.AO_INTERFACE' | translate }}</span></a>\n                </li>\n              </ul>\n            </ng-container>\n\n          </li>\n        </ng-container>\n    </ul>\n    <!-- END SIDEBAR MENU -->\n</nav>\n"

/***/ }),

/***/ "./src/app/components/layout/leftsidebar/leftsidebar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/layout/leftsidebar/leftsidebar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-leftsidebar{min-height:93.9vh}.nav-leftsidebar .acc-menu #title{border:unset !important}.nav-leftsidebar .acc-menu .li-menuheader{border:unset !important;width:unset !important;color:white !important}.nav-leftsidebar .acc-menu .li-menuheader .p-langChange{margin:0 5px;border:2px solid white;padding:4px;cursor:pointer}.nav-leftsidebar .tab-active{font-weight:600 !important}\n"

/***/ }),

/***/ "./src/app/components/layout/leftsidebar/leftsidebar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/layout/leftsidebar/leftsidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: LeftsidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftsidebarComponent", function() { return LeftsidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_loginUser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/loginUser.service */ "./src/app/services/loginUser.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeftsidebarComponent = /** @class */ (function () {
    function LeftsidebarComponent(activatedRoute, translateService, loginUserService) {
        this.activatedRoute = activatedRoute;
        this.translateService = translateService;
        this.loginUserService = loginUserService;
        this.translateTxt = "En";
        this.isLeadResponseRole = false;
        this.isParentTabCSSinited = false;
        this.menuMinimized = false;
        //hard code in html, using this obj to check existence of all three pages
        this.leadResponseTab = {
            agentInterface: false,
            apUplineInterface: false,
            aoInterface: false
        };
        this.currentLang = translateService.currentLang;
    }
    LeftsidebarComponent.prototype.changeLang = function () {
        var currLang = this.currentLang;
        var nextLang = currLang === 'en' ? 'zh' : 'en';
        this.translateService.use(nextLang);
        this.translateTxt = nextLang === 'en' ? '中' : 'En';
        this.currentLang = nextLang;
    };
    LeftsidebarComponent.prototype.ngOnInit = function () {
        this.currDate = new Date();
    };
    //put this func in sub tabs, so that when sublink is being clicked, all the parent tab will have
    //'active' class removed, and add 'active' class to this curr subtab's parent tab
    LeftsidebarComponent.prototype.handleActiveTabLogic = function (event) {
        var parentTab = $(event.target).closest('li').parent().closest('li');
        if (parentTab) {
            //remove all other parent tab's `active` class
            $("#sidebar").children(".active").removeClass("active");
            //add active class to this curr sub tab's parent tab
            parentTab.addClass("active");
        }
    };
    //first init the active parent tab based on curr route
    LeftsidebarComponent.prototype.ngAfterViewChecked = function () {
        if (!this.isParentTabCSSinited && $('ul.acc-menu a').length > 0) {
            var targetAnchor;
            $.each($('ul.acc-menu a'), function () {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this, 'href') == window.location) {
                    targetAnchor = this;
                    return false;
                }
                ;
            });
            var parent = $(targetAnchor).closest('li');
            while (true) {
                parent.addClass('active');
                parent.closest('ul.acc-menu').show().closest('li').addClass('active');
                parent = $(parent).parents('li').eq(0);
                if ($(parent).parents('ul.acc-menu').length <= 0)
                    break;
            }
            ;
            var liElem = $('li');
            var liHasUlChild = liElem.filter(function () {
                return $(this).find('ul.acc-menu').length;
            });
            $(liHasUlChild).addClass('hasChild');
            this.isParentTabCSSinited = true;
        }
    };
    LeftsidebarComponent.prototype.minimizeMenu = function () {
        this.menuMinimized = !this.menuMinimized;
    };
    //set back the language to eng if the user isnt a role that would have access to leadResp tab
    LeftsidebarComponent.prototype.setLangToEng = function () {
        this.translateService.use('en');
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(window, 'easLang', 'en');
    };
    LeftsidebarComponent.prototype.setLeftsidebarMenuNameCode = function (_menu) {
        var _this = this;
        //hardcode the lead response tab pages
        _menu.forEach(function (elem, key) {
            if (elem.title === 'Lead Response') {
                _this.loginUserService.setIsLeadRespRole(true);
                _this.isLeadResponseRole = true;
                elem.children.forEach(function (elem, key) {
                    switch (elem.title) {
                        case 'Agent interface':
                            _this.leadResponseTab.agentInterface = true;
                            break;
                        case 'Ap-upline interface':
                            _this.leadResponseTab.apUplineInterface = true;
                            break;
                        case 'AO interface':
                            _this.leadResponseTab.aoInterface = true;
                            break;
                    }
                });
            }
        });
        if (!this.loginUserService.isLeadResponseRole) {
            this.setLangToEng();
        }
        this.menu = _menu;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LeftsidebarComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LeftsidebarComponent.prototype, "usercode", void 0);
    LeftsidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leftsidebar',
            template: __webpack_require__(/*! ./leftsidebar.component.html */ "./src/app/components/layout/leftsidebar/leftsidebar.component.html"),
            styles: [__webpack_require__(/*! ./leftsidebar.component.scss */ "./src/app/components/layout/leftsidebar/leftsidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_loginUser_service__WEBPACK_IMPORTED_MODULE_3__["LoginUserService"]])
    ], LeftsidebarComponent);
    return LeftsidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/leadresponse/agentinterface/agentinterface.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/leadresponse/agentinterface/agentinterface.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- modal in customer details -->\n<div class=\"modal fade \" id=\"customerDetailModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"customerDetailModalLabel\">\n  <form [formGroup]=\"customerDetailModalForm\" class=\"customerDetailModalForm\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-topPart\">\n          <button type=\"button\" class=\"btn btn-default table-btn a-closeBtn\" data-dismiss=\"modal\">X</button>\n        </div>\n        <div class=\"modal-body clearfix\">\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.CUSTOMER_DTL.CUSTOMER_NAME' | translate}}: {{currCustomerName}}</label><br />\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.CUSTOMER_DTL.PHONE' | translate}}: {{currPhone}}</label><br />\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.CUSTOMER_DTL.EMAIL' | translate}}: {{currEmail}}</label><br />\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.CUSTOMER_DTL.ASSIGNMENT_DT' | translate}}: {{currAssignmentDt | date:'dd/MM/yyyy hh:mm'}}</label><br />\n          <label class=\"col-12 label-fromField\"><span>{{'AGENT_INTERFACE.CUSTOMER_DTL.FIRST_CONTACT_DT' | translate}}:</span>\n            <ng-container *ngIf=\"currFirstContactDt\">\n              {{customerDetailModalForm.controls['firstContactDt'].value | date:'dd/MM/yyyy'}}\n            </ng-container>\n            <ng-container *ngIf=\"!currFirstContactDt\">\n              <input placeholder=\"DD/MM/YYYY\" class=\"search-by-input\"\n              matInput [max]=\"currDate\" [matDatepicker]=\"firstContactDtPicker\"\n              formControlName=\"firstContactDt\" name=\"firstContactDtField\">\n\n              <mat-datepicker-toggle matSuffix [for]=\"firstContactDtPicker\">\n                <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n              </mat-datepicker-toggle>\n              <mat-datepicker #firstContactDtPicker></mat-datepicker>\n            </ng-container>\n          </label>\n        </div>\n        <div class=\"modal-footer\">\n          <button [disabled]=\"currFirstContactDt\"\n            type=\"submit\" class=\"btn btn-primary table-btn a-customerDtlSubmitBtn\" data-dismiss=\"modal\">{{'AGENT_INTERFACE.CUSTOMER_DTL.SUBMIT' | translate}}</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<!-- modal in lead extension application -->\n<div class=\"modal fade \" id=\"leadExtensionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"leadExtensionModalLabel\">\n  <form [formGroup]=\"leadExtensionModalForm\" class=\"leadExtensionModalForm\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-topPart\">\n          <button type=\"button\" class=\"btn btn-default table-btn a-closeBtn\" data-dismiss=\"modal\">X</button>\n        </div>\n        <div class=\"modal-body clearfix\">\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.LEAD_EXT_APPLICATION.REASON_OF_EXT' | translate}}:\n            <span *ngIf=\"currAssignmentStatus == '2'\">{{currReasonOfExt}}</span>\n            <input *ngIf=\"currAssignmentStatus != '2'\" placeholder=\"Please state reasons here.\" class=\"search-by-input\"\n            formControlName=\"reasonOfExt\" name=\"reasonOfExtField\">\n\n          </label><br />\n\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.LEAD_EXT_APPLICATION.APP_REVIEW_DESC' | translate}}\n              <button [disabled]=\"currAssignmentStatus == '2'\" type=\"submit\" class=\"btn btn-primary table-btn a-leadExtSubmitBtn\" data-dismiss=\"modal\">\n                {{'AGENT_INTERFACE.LEAD_EXT_APPLICATION.SUBMIT' | translate}}</button>\n          </label><br />\n\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.LEAD_EXT_APPLICATION.APPLICATION_EXT' | translate}}:\n            <span *ngIf=\"currApplicationExt == 2\" class=\"span-blue\">{{'AGENT_INTERFACE.LEAD_EXT_APPLICATION.TO_BE_REVIEWED' | translate}}</span>\n            <span *ngIf=\"currApplicationExt == 3\" class=\"span-green\">{{'AGENT_INTERFACE.LEAD_EXT_APPLICATION.APPROVED' | translate}}</span>\n            <span *ngIf=\"currApplicationExt == 4\" class=\"span-red\">{{'AGENT_INTERFACE.LEAD_EXT_APPLICATION.REJECTED' | translate}}</span>\n          </label>\n        </div>\n        <div class=\"modal-footer\">\n\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<!-- modal in upsell details -->\n<div class=\"modal fade \" id=\"upsellDetailModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upsellDetailModalLabel\">\n  <form [formGroup]=\"upsellDetailModalForm\" class=\"upsellDetailModalForm\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-topPart\">\n          <button type=\"button\" class=\"btn btn-default table-btn a-closeBtn\" data-dismiss=\"modal\">X</button>\n        </div>\n        <div class=\"modal-body clearfix\">\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.UPSELL_DTL.CUSTOMER_NAME' | translate}}: {{currCustomerName}}</label><br />\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.UPSELL_DTL.LIFE_POL_NO' | translate}}:\n            <input placeholder=\"Please Input Pol No.\" class=\"search-by-input\"\n            formControlName=\"upsellLifePolNo\" name=\"upsellLifePolNoField\">\n          </label><br />\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.UPSELL_DTL.LIFE_PROD' | translate}}:\n            <input placeholder=\"Please Input Product Name\" class=\"search-by-input\"\n            formControlName=\"upsellLifeProd\" name=\"upsellLifeProdField\">\n          </label><br />\n          <label class=\"col-12 label-fromField\">{{'AGENT_INTERFACE.UPSELL_DTL.AFYP' | translate}}:\n            <input placeholder=\"Please Input AFYP\" class=\"search-by-input\"\n            formControlName=\"afyp\" name=\"afypField\">\n          </label>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button [disabled]=\"!upsellDetailModalForm.valid\" type=\"submit\" class=\"btn btn-primary table-btn a-upsellDtlSubmitBtn\" data-dismiss=\"modal\">{{'AGENT_INTERFACE.UPSELL_DTL.SUBMIT' | translate}}</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n<div class=\"table-wrapper table-responsive div-agentInterfaceDataTable\">\n  <h4 class=\"h4-tableHeader\">{{'AGENT_INTERFACE.TABLE_TITLE' | translate}}</h4>\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover table-agentInterface\">\n    <thead>\n      <tr class=\"row1\">\n        <th>{{'AGENT_AO_INTERFACE_COLS.CUSTOMER_NAME' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.PHONE' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.EMAIL' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.SUBMISSION_DT' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.PROD' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.ASSIGNMENT_DT' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.FIRST_CONTACT_DT' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.ASSIGNMENT_STATUS' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.APPLICATION_EXT' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.CS_REMARKS' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.LIFE_POL_NO' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.LIFE_PROD' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.AFYP' | translate}}</th>\n      </tr>\n    </thead>\n  </table>\n  <div class=\"div-goToPage-showPerPage\">\n    <div class=\"div-goToPage\">\n      <span class=\"span-goToPage\">{{'DATATABLE_CONSTANTS.GO_TO_PAGE' | translate}}</span>\n      <div class=\"div-goToPage_wrapper\">\n        <input type=\"text\" class=\"input-goToPage_left\" [(ngModel)]=\"currPage\" value=\"{{currPage}}\"/>\n        <input type=\"text\" class=\"input-goToPage_right\" value=\"/ {{noOfPage}}\" disabled/>\n        <input class=\"button-goToPage_go\" value=\"GO\" type=\"button\" (click)=\"changeCurrTablePage(currPage)\"/>\n      </div>\n    </div>\n    <ul class=\"ul-showPerPage\">\n      <span>{{'DATATABLE_CONSTANTS.SHOW' | translate}}</span>\n      <li><a [ngClass]=\"mapToLengthMenuNum[5]\" (click)=\"changeTablePerPage(5)\">5</a></li>\n      <li><a [ngClass]=\"mapToLengthMenuNum[10]\" (click)=\"changeTablePerPage(10)\">10</a></li>\n      <li><a [ngClass]=\"mapToLengthMenuNum[20]\" (click)=\"changeTablePerPage(20)\">20</a></li>\n      <span>{{'DATATABLE_CONSTANTS.PER_PAGE' | translate}}</span>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/leadresponse/agentinterface/agentinterface.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/leadresponse/agentinterface/agentinterface.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#leadExtensionModal .span-blue{color:lightskyblue}#leadExtensionModal .span-green{color:mediumseagreen}#leadExtensionModal .span-red{color:red}.modal .modal-topPart .a-closeBtn{display:flex;margin-left:auto;justify-content:center;min-width:50px !important}.modal .modal-body{padding:0px 20px !important}.modal .modal-body .ng-invalid{border-color:red}.modal .modal-body .mat-input-element{height:40px;width:230px}.modal .modal-footer{padding:10px 20px !important}.div-agentInterfaceDataTable{text-align:center}.div-agentInterfaceDataTable .h4-tableHeader{float:left;color:black;font-weight:bold}.div-agentInterfaceDataTable .table-agentInterface{width:100% !important}.div-agentInterfaceDataTable .table-agentInterface .sorting_asc,.div-agentInterfaceDataTable .table-agentInterface .sorting_desc{background-image:none;cursor:unset}.div-agentInterfaceDataTable .div-goToPage-showPerPage{display:-webkit-box;position:relative}.div-agentInterfaceDataTable .div-goToPage-showPerPage .div-goToPage{display:flex;position:relative;left:38%}.div-agentInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .span-goToPage{line-height:50px;color:gray}.div-agentInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper{display:inline-block}.div-agentInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_left{margin-left:10px;border-radius:10px 0px 0px 10px;border-right:0px;text-align:right;color:gray}.div-agentInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_right{position:relative;left:-10px;color:gray;border-left:0px;border-radius:0px}.div-agentInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper input{width:80px;background-color:transparent}.div-agentInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .button-goToPage_go{position:relative;left:-12px;border-radius:0px 10px 10px 0px;background-color:#c8c8c8;color:black}.div-agentInterfaceDataTable .ul-showPerPage{list-style:none !important;display:flex;position:absolute;top:-26px;right:0px;float:right}.div-agentInterfaceDataTable .ul-showPerPage li{margin:0px 10px}.div-agentInterfaceDataTable .ul-showPerPage .inactive-gray{color:gray}.div-agentInterfaceDataTable .ul-showPerPage .active-red{color:red}\n"

/***/ }),

/***/ "./src/app/components/leadresponse/agentinterface/agentinterface.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/leadresponse/agentinterface/agentinterface.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgentinterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentinterfaceComponent", function() { return AgentinterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_leadresponse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/leadresponse.service */ "./src/app/services/leadresponse.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _utils_convertformat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/convertformat */ "./src/app/utils/convertformat.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};










var AgentinterfaceComponent = /** @class */ (function () {
    function AgentinterfaceComponent(leadresponseService, http, renderer2, translateService) {
        this.leadresponseService = leadresponseService;
        this.http = http;
        this.renderer2 = renderer2;
        this.translateService = translateService;
        this.currDate = new Date();
        //displayedColumns : string[] = constants["AgentInterfaceColumnName"];
        this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"]["AgentInterfaceColumnField"];
        this.customerDetailModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstContactDt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.leadExtensionModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            reasonOfExt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.upsellDetailModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            upsellLifePolNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9a-zA-Z ]+')]),
            upsellLifeProd: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9a-zA-Z ]+')]),
            afyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')])
        });
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pageInfo = {};
        this.currPage = 1;
        this.currSelectedAgentCode = "";
        //map the page num to the jquery elem of page num
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "active-red",
            "20": "inactive-gray",
        };
        //for handling the datatables's link
        //use router.navigate instead of href in dom 'a', as href will refresh whole page
        this.onclickEventInit = false; //onchange would reset this back to false
    }
    AgentinterfaceComponent.prototype.ngOnChanges = function () {
        this.currSelectedAgentCode = "";
        this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
    };
    AgentinterfaceComponent.prototype.loadObjFromLangJson = function (path, storeVarStr) {
        var _this = this;
        this.translateService.get(path).subscribe(function (resp) {
            _this[storeVarStr] = resp;
        });
    };
    AgentinterfaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateOnLangChangeSubscription = this.translateService.onLangChange.subscribe(function (event) {
            //for updting the variables inside the datatable with the correct language
            _this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
            _this.loadObjFromLangJson("DATATABLE_CONSTANTS", "translateDatatableConstants");
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(window, 'easLang') !== event.lang) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.sEmptyTable', (event.lang === 'en') ? "No data available in table" : "列表中沒有可用數據");
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.sInfoEmpty', (event.lang === 'en') ? "Showing 0 to 0 of 0 entries" : "顯示由 0 到 0 在 0個數據中");
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.oPaginate.sFirst', (event.lang === 'en') ? '« first' : '« 第一頁');
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.oPaginate.sPrevious', (event.lang === 'en') ? '‹ prev' : '‹ 上一頁');
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.oPaginate.sNext', (event.lang === 'en') ? 'next ›' : '下一頁 ›');
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.oPaginate.sLast', (event.lang === 'en') ? 'last »' : '最後頁 »');
                console.log(event.lang, _this.dtOptions);
                _this.refreshTable();
            }
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(window, 'easLang', event.lang); //tmply store lang into easLang attr of window
        });
        this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
        this.loadObjFromLangJson("DATATABLE_CONSTANTS", "translateDatatableConstants");
        var easLang = this.translateService.currentLang;
        var colArr = [], dataArr = [];
        this.displayedColumnsName.forEach(function (val) {
            colArr.push({
                data: val
            });
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            scrollX: true,
            scrollY: true,
            columnDefs: this.agentInterfaceColumnDef(),
            ajax: this.agentInterfaceAjax(),
            processing: true,
            serverSide: true,
            language: {
                emptyTable: (easLang === 'en') ? "No data available in table" : "列表中沒有可用數據",
                infoEmpty: (easLang === 'en') ? "Showing 0 to 0 of 0 entries" : "顯示由 0 到 0 在 0個數據",
                info: "",
                paginate: {
                    first: (easLang === 'en') ? '« first' : '« 第一頁',
                    previous: (easLang === 'en') ? '‹ prev' : '‹ 上一頁',
                    next: (easLang === 'en') ? 'next ›' : '下一頁 ›',
                    last: (easLang === 'en') ? 'last »' : '最後頁 »'
                },
                //display none length Menu and add a new custom menu
                // to change the hidden length menu
                lengthMenu: "",
            },
            searching: false,
            columns: colArr,
        };
        $('.table-agentInterface').on('page.dt', function (event, settings) {
            console.log('Page change:', event, settings);
            $('.input-goToPage_left').val((settings._iDisplayStart / settings.oInit.pageLength) + 1);
        });
        this.classToTrigger = [
            { type: 'modal', className: "a-modalLink" },
            { type: 'submit', className: "a-customerDtlSubmitBtn", callback: function () { _this.setCustomerDtl(); } },
            { type: 'submit', className: "a-leadExtSubmitBtn", callback: function () { _this.setLeadExt(); } },
            { type: 'submit', className: "a-upsellDtlSubmitBtn", callback: function () { _this.setUpsellDtl(); } }
        ];
    };
    AgentinterfaceComponent.prototype.setCustomerDtl = function () {
        var _this = this;
        var firstContactDt = this.customerDetailModalForm.controls['firstContactDt'].value;
        if (firstContactDt >= new Date()) { //double check if firstContactDt >= currDate
            throw new Error('firstContactDt error');
        }
        var queryParams = {
            firstContactDt: _utils_convertformat__WEBPACK_IMPORTED_MODULE_8__["default"].dateToDDMMYYYY(firstContactDt),
            polNo: this.currPolNo
        };
        this.leadresponseService.postCustomerDtlRecord(queryParams, "sendParams").subscribe(function (resp) {
            console.log("resp:", resp);
            _this.refreshTable();
        }, function (error) { return console.log(error); });
    };
    AgentinterfaceComponent.prototype.setLeadExt = function () {
        var _this = this;
        var queryParams = {
            reasonOfExt: this.leadExtensionModalForm.controls['reasonOfExt'].value,
            polNo: this.currPolNo
        };
        this.leadresponseService.postLeadExtRecord(queryParams, "sendParams").subscribe(function (resp) {
            console.log("resp:", resp);
            _this.refreshTable();
        }, function (error) { return console.log(error); });
    };
    AgentinterfaceComponent.prototype.setUpsellDtl = function () {
        var _this = this;
        var upsellDetailModalForm = this.upsellDetailModalForm;
        if (upsellDetailModalForm.status !== 'VALID') {
            console.error(">>> Upsell detail invalid input");
            return null;
        }
        var queryParams = {
            lifePolNo: upsellDetailModalForm.controls['upsellLifePolNo'].value,
            lifePolCls: upsellDetailModalForm.controls['upsellLifeProd'].value,
            lifeAfyp: upsellDetailModalForm.controls['afyp'].value,
            polNo: this.currPolNo
        };
        this.leadresponseService.postUpsellDtlRecord(queryParams, "sendParams").subscribe(function (resp) {
            console.log("resp:", resp);
            _this.refreshTable();
        }, function (error) { return console.log(error); });
    };
    AgentinterfaceComponent.prototype.refreshTable = function () {
        var _this = this;
        var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(this.dTable, "dtInstance");
        if (dTableInstance) {
            dTableInstance.then(function (dtInstance) {
                //redraw table only need these 2 funcs
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
    };
    AgentinterfaceComponent.prototype.setCurrSelectedAgentCode = function (queryParams) {
        this.currSelectedAgentCode = "";
    };
    AgentinterfaceComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AgentinterfaceComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        //fetch the datatable's settings
        //since angular-datatables is not supporting changing table page in option yet
        //make use of settings.oApi._fnPageChange to change the page
        //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
        this.dataTableSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])($.fn['dataTable'], 'settings[0]');
        //for handling the btn inside datatables
        if (!this.onclickEventInit) {
            this.onclickEventInit = true;
            this.bodyRendererListener = this.renderer2.listen("body", 'click', function (event) {
                _this.classToTrigger.forEach(function (elem, key) {
                    if ($(event.target).hasClass(elem.className)) {
                        if (elem.type === 'submit') {
                            elem.callback();
                        }
                        else if (elem.type === 'modal') {
                            //app ext obj map
                            //
                            var rowDataStr = $(event.target).closest("tr").attr("rowdata");
                            var rowDataObj = JSON.parse(rowDataStr);
                            var dataTarget = $(event.target).attr('data-target');
                            //the cols that need to be split
                            var customerInfoSplit = rowDataObj.customerInfo.split(":");
                            var polNo = customerInfoSplit[0];
                            var customerName = customerInfoSplit[1];
                            //===============
                            var assignmentInfoSplit = rowDataObj.assignmentInfo.split(":");
                            var assignmentStatus = assignmentInfoSplit[0];
                            var reasonOfExt = assignmentInfoSplit[2];
                            //
                            switch (dataTarget) {
                                case '#customerDetailModal':
                                    _this.currCustomerName = customerName;
                                    _this.currPhone = rowDataObj.phone;
                                    _this.currEmail = rowDataObj.email;
                                    _this.currAssignmentDt = rowDataObj.agentAssignmentDt;
                                    //just act as a temp storage of `firstContactDt`
                                    //so as to determine if the input field of firstContactDt should display or not
                                    _this.currFirstContactDt = rowDataObj.firstContactDt;
                                    _this.customerDetailModalForm.controls['firstContactDt'].setValue((rowDataObj.firstContactDt) ?
                                        new Date(rowDataObj.firstContactDt.substr(0, 10)) : '');
                                    break;
                                case '#leadExtensionModal':
                                    _this.currAssignmentStatus = assignmentStatus;
                                    //applicationExt can only be read only
                                    _this.currApplicationExt = (rowDataObj.applicationExt);
                                    //reasonOfExt can be either read only or write and read, depends on applied or to apply for
                                    _this.currReasonOfExt = reasonOfExt;
                                    _this.leadExtensionModalForm.controls['reasonOfExt'].setValue(reasonOfExt);
                                    break;
                                case '#upsellDetailModal':
                                    _this.currCustomerName = customerName;
                                    _this.upsellDetailModalForm.controls['upsellLifeProd'].setValue(rowDataObj.upsellLifeProd);
                                    _this.upsellDetailModalForm.controls['upsellLifePolNo'].setValue(rowDataObj.upsellLifePolNo);
                                    _this.upsellDetailModalForm.controls['afyp'].setValue(rowDataObj.afyp);
                                    break;
                            }
                            //in no matter which condition should polno be assigned as all post reqs need polno parameter
                            _this.currPolNo = polNo;
                        }
                    }
                });
            });
        }
    };
    AgentinterfaceComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        var toBeDestroyArray = ['bodyRendererListener', 'dtTrigger', 'translateOnLangChangeSubscription', 'dataTableAjaxSubscription'];
        toBeDestroyArray.forEach(function (elem, key) {
            if (_this[elem] && elem == 'bodyRendererListener') {
                _this.bodyRendererListener();
            }
            else if (_this[elem] && elem != 'bodyRendererListener') {
                _this[elem].unsubscribe();
            }
        });
    };
    AgentinterfaceComponent.prototype.changeTablePerPage = function (val) {
        var _this = this;
        //reset all the length menu 's class to gray color
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "inactive-gray",
            "20": "inactive-gray",
        };
        this.mapToLengthMenuNum[parseInt(val)] = "active-red";
        //reset the datatable after changing dtOptions to redraw the table
        this.dtOptions.pageLength = val; //change table's no of records
        this.dTable.dtInstance.then(function (dtInstance) {
            //redraw table only need these 2 funcs
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
    };
    AgentinterfaceComponent.prototype.changeCurrTablePage = function (page) {
        if (page !== "" && /^\d+$/.test(page)) {
            console.log('Change to page: ' + page);
            var pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true);
            console.log((pageChangeStatus) ? 'Current page changed to ' + page : "Fail to change page, page exceed no of page");
            this.currPage = page;
        }
    };
    AgentinterfaceComponent.prototype.agentInterfaceColumnDef = function () {
        return [{
                targets: "_all",
                orderable: false,
                createdCell: function (td, cellData, rowData, row, col) {
                    var easLang = window['easLang'];
                    //datatable data [need to be preprocessed first]
                    var customerInfoSplit = rowData.customerInfo.split(":");
                    var assignmentInfoSplit = rowData.assignmentInfo.split(":");
                    var polNo = customerInfoSplit[0];
                    var customerName = customerInfoSplit[1];
                    var assignmentStatus = assignmentInfoSplit[0];
                    var showExt = assignmentInfoSplit[1];
                    //funcs
                    var convertDate = function (date, minsOpt) {
                        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " +
                            ((minsOpt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
                    };
                    //styles
                    var cursorStyle = "style=\"cursor: pointer;\"";
                    var optOutReassignStyle = "style=\"color:gray; border: solid 0px;\"";
                    //those fields that has assignmentstatus as Optout / reassigned need to be specially handled.
                    //customerName, applicationStatus and applicationExt gray in color, cs remarks can be viewed
                    var optoutOrReassign = ["3", "4"].indexOf(assignmentStatus) !== -1;
                    var isRejected = rowData.applicationExt === '4';
                    var html = "";
                    switch (col) {
                        case 0:
                            //store the whole row's data into closest tr of this cell
                            var closestTrObj = $(td).closest('tr');
                            $(closestTrObj).attr("rowData", JSON.stringify(rowData));
                            html = optoutOrReassign ? "<a " + optOutReassignStyle + " class=\"a-modalLink css-wordBreakAll\" polno=\"" + polNo + "\" >" + customerName + "</a>" :
                                "<a class=\"a-modalLink css-wordBreakAll\" polNo=\"" + polNo + "\"" + cursorStyle +
                                    " data-toggle=\"modal\" data-target=\"#customerDetailModal\">" + customerName + "</a>";
                            $(td).html(html);
                            break;
                        case 3:
                        case 5:
                        case 6:
                            html = (cellData && !optoutOrReassign) ? convertDate(new Date(cellData.substr(0, 10)), 'withoutMins') : '<span></span>';
                            $(td).html(html);
                            break;
                        case 7:
                        case 8:
                            html = "";
                            var statusNumMapToText = (easLang === 'en') ?
                                ["", "Applied for extension", "Opt-out from this program", "Re-assigned"] :
                                ["", "已申請延長", "拒絕顧問聯絡", "已另派顧問"];
                            var extNumMapToText = (easLang === 'en') ?
                                ["", "To be reviewed", "Approved", "Rejected"] :
                                ["", "待部門審閱", "已批准延長", "申請被拒絕"];
                            var toApplyForExTxt = (easLang === 'en') ? "To apply for extension" : "申請延長";
                            cellData = (col == 7) ? assignmentStatus : cellData; //reassign back the extracted assignmentstatus to cellData for col == 7
                            var text = (col == 7) ? statusNumMapToText[cellData - 1] : extNumMapToText[cellData - 1];
                            if (col == 7 && cellData == 1) { //blank || To apply for extension (to be determined by inside the if condition)
                                if (!rowData.upsellLifePolNo && showExt === 'true') { //5 months  5*30 days
                                    html += "<a class=\"a-modalLink\" " + cursorStyle + "data-toggle=\"modal\" data-target=\"#leadExtensionModal\" " + ">" + toApplyForExTxt + "</a>";
                                }
                                else {
                                    html += "<span></span>";
                                }
                            }
                            else if (col == 7 && cellData == 2) { //applied extension
                                html += "<span>" + text + "</span>";
                            }
                            else if (col == 8 && (cellData == 2 || cellData == 3)) { //To be reviewed || Approved
                                html += (optoutOrReassign) ? "<span " + optOutReassignStyle + ">" + text + "</span>" : //optout or reassign then this cell should be in gray color
                                    "<a class=\"a-modalLink\" " + cursorStyle + " data-toggle=\"modal\" data-target=\"#leadExtensionModal\">" + text + "</a>";
                            }
                            else { //opt-out || reassigned || rejected
                                html += "<span " + ((optoutOrReassign) ? optOutReassignStyle : "") + ">" + text + "</span>";
                            }
                            $(td).html((cellData) ? html : "<span></span>");
                            break;
                        case 10:
                        case 11:
                        case 12:
                            var aPromptText = "";
                            var colPosToPrompTxt = {
                                10: (easLang === 'en') ? 'Please input Pol no.' : '請填寫保單號碼',
                                11: (easLang === 'en') ? 'Please input Product name' : '請填寫壽險產品',
                                12: (easLang === 'en') ? 'Please input AFYP' : '請填寫 AFYP'
                            };
                            aPromptText = (cellData) ? cellData : colPosToPrompTxt[col];
                            html = (optoutOrReassign) ? "<span></span>" :
                                ("<a class=\"a-modalLink\" " + cursorStyle + " data-toggle=\"modal\" data-target=\"#upsellDetailModal\">" + aPromptText + "</a>");
                            $(td).html(html);
                            break;
                        default:
                            $(td).html((cellData && !optoutOrReassign) ? ((typeof cellData == "string" && cellData.length > 25) ? "<span class=\"css-wordBreakAll\">" : "<span>") +
                                cellData + '</span>' : "<span></span>");
                            break;
                    }
                }
            }];
    };
    AgentinterfaceComponent.prototype.agentInterfaceAjax = function () {
        var _this = this;
        return function (params, callback, settings) {
            var unusedParams, draw, start, length;
            (draw = params.draw, start = params.start, length = params.length, params, unusedParams = __rest(params, ["draw", "start", "length"])); //do without columns attr inside params
            var queryParams = {
                draw: draw, start: start, length: length
            };
            _this.dataTableAjaxSubscription = _this.leadresponseService.getAgentInterfaceRecord(queryParams, 'dataTable').subscribe(function (resp) {
                //preprocessing the resp.body.data
                var resArr = { data: Array() };
                resp.body.data.forEach(function (elem, key) {
                    //separate some unwanted params from other params
                    var polNo, customerName, reasonOfExt, assignmentStatus, showExt, restAttrObj;
                    (polNo = elem.polNo, customerName = elem.customerName, reasonOfExt = elem.reasonOfExt, assignmentStatus = elem.assignmentStatus, showExt = elem.showExt, elem, restAttrObj = __rest(elem, ["polNo", "customerName", "reasonOfExt", "assignmentStatus", "showExt"]));
                    //customerInfo put both polNo and customerName into one col and later be processed in agentInterfaceColumnDef
                    var customerInfo = (polNo ? polNo : '') + ":" + (customerName ? customerName : '');
                    //assignmentInfo put both reasonOfExt and assignmentStatus into one col and later be processed in agentInterfaceColumnDef
                    var assignmentInfo = (assignmentStatus ? assignmentStatus : '') + ":" +
                        (showExt ? showExt : '') + ":" + (reasonOfExt ? reasonOfExt : '');
                    restAttrObj['customerInfo'] = customerInfo;
                    restAttrObj['assignmentInfo'] = assignmentInfo;
                    resArr.data.push(restAttrObj);
                });
                _this.noOfPage = Math.ceil(resp.body.recordsTotal / _this.dtOptions.pageLength);
                _this.currPage = (resp.body.recordsFiltered >= 1) ? _this.currPage : 0;
                //
                callback({
                    data: resArr.data,
                    recordsTotal: resp.body.recordsTotal,
                    recordsFiltered: resp.body.recordsFiltered
                });
            });
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], AgentinterfaceComponent.prototype, "dTable", void 0);
    AgentinterfaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agentinterface',
            template: __webpack_require__(/*! ./agentinterface.component.html */ "./src/app/components/leadresponse/agentinterface/agentinterface.component.html"),
            styles: [__webpack_require__(/*! ./agentinterface.component.scss */ "./src/app/components/leadresponse/agentinterface/agentinterface.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_leadresponse_service__WEBPACK_IMPORTED_MODULE_1__["LeadresponseService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], AgentinterfaceComponent);
    return AgentinterfaceComponent;
}());



/***/ }),

/***/ "./src/app/components/leadresponse/aointerface/aointerface.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/leadresponse/aointerface/aointerface.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper table-responsive div-aoInterfaceDataTable\">\n  <h4 class=\"h4-tableHeader\">{{'AO_INTERFACE.TABLE_TITLE' | translate}}</h4>\n\n  <div class=\"clearfix div-aoSearchRecordCriteria\">\n    <h4 class=\"float-left h4-searchCriteriaText\">{{'AO_INTERFACE.SEARCH_CRITERIA' | translate}}:</h4>\n    <h4 class=\"h4-criteriaText\">\n      <ng-container *ngFor=\"let criteria of searchCriterias; let i = index;\">\n        <ng-container *ngIf=\"criteria\">“{{criteria}}”\n          <ng-container *ngIf=\"i < searchCriterias.length-1 && criteria\">,</ng-container>\n        </ng-container>\n      </ng-container>\n    </h4>\n    <h4 class=\"float-right add-bottom h4-noOfRecords\">{{'AO_INTERFACE.NO_OF_RECORDS' | translate}}: {{noOfRecords}}</h4>\n  </div>\n\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover table-aoInterface\">\n    <thead>\n      <tr class=\"row1\">\n        <th>{{'AGENT_AO_INTERFACE_COLS.AGENT_CD' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.CUSTOMER_NAME' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.PHONE' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.EMAIL' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.SUBMISSION_DT' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.PROD' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.ASSIGNMENT_DT' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.FIRST_CONTACT_DT' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.ASSIGNMENT_STATUS' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.APPLICATION_EXT' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.CS_REMARKS' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.LIFE_POL_NO' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.LIFE_PROD' | translate}}</th>\n        <th>{{'AGENT_AO_INTERFACE_COLS.AFYP' | translate}}</th>\n      </tr>\n    </thead>\n  </table>\n  <div class=\"div-goToPage-showPerPage\">\n    <div class=\"div-goToPage\">\n      <span class=\"span-goToPage\">{{'DATATABLE_CONSTANTS.GO_TO_PAGE' | translate}}</span>\n      <div class=\"div-goToPage_wrapper\">\n        <input type=\"text\" class=\"input-goToPage_left\" [(ngModel)]=\"currPage\" value=\"{{currPage}}\"/>\n        <input type=\"text\" class=\"input-goToPage_right\" value=\"/ {{noOfPage}}\" disabled/>\n        <input class=\"button-goToPage_go\" value=\"GO\" type=\"button\" (click)=\"changeCurrTablePage(currPage)\"/>\n      </div>\n    </div>\n    <ul class=\"ul-showPerPage\">\n      <span>{{'DATATABLE_CONSTANTS.SHOW' | translate}}</span>\n      <li><a [ngClass]=\"mapToLengthMenuNum[5]\" (click)=\"changeTablePerPage(5)\">5</a></li>\n      <li><a [ngClass]=\"mapToLengthMenuNum[10]\" (click)=\"changeTablePerPage(10)\">10</a></li>\n      <li><a [ngClass]=\"mapToLengthMenuNum[20]\" (click)=\"changeTablePerPage(20)\">20</a></li>\n      <span>{{'DATATABLE_CONSTANTS.PER_PAGE' | translate}}</span>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/leadresponse/aointerface/aointerface.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/leadresponse/aointerface/aointerface.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#leadExtensionModal .span-blue{color:lightskyblue}#leadExtensionModal .span-green{color:mediumseagreen}#leadExtensionModal .span-red{color:red}.modal .modal-topPart .a-closeBtn{display:flex;margin-left:auto;justify-content:center}.div-aoInterfaceDataTable{text-align:center}.div-aoInterfaceDataTable .h4-tableHeader{width:100%;text-align:left;margin-bottom:15px;color:black;font-weight:bold}.div-aoInterfaceDataTable .div-aoSearchRecordCriteria{width:100%}.div-aoInterfaceDataTable .div-aoSearchRecordCriteria .h4-searchCriteriaText{white-space:pre}.div-aoInterfaceDataTable .div-aoSearchRecordCriteria .h4-criteriaText{text-align:left;word-break:break-all}.div-aoInterfaceDataTable .div-aoSearchRecordCriteria .h4-noOfRecords{white-space:nowrap;margin-left:auto}.div-aoInterfaceDataTable .table-aoInterface{width:100% !important}.div-aoInterfaceDataTable .table-aoInterface .sorting_asc,.div-aoInterfaceDataTable .table-aoInterface .sorting_desc{background-image:none;cursor:unset}.div-aoInterfaceDataTable .div-goToPage-showPerPage{display:-webkit-box;position:relative}.div-aoInterfaceDataTable .div-goToPage-showPerPage .div-goToPage{display:flex;position:relative;left:38%}.div-aoInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .span-goToPage{line-height:50px;color:gray}.div-aoInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper{display:inline-block}.div-aoInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_left{margin-left:10px;border-radius:10px 0px 0px 10px;border-right:0px;text-align:right;color:gray}.div-aoInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_right{position:relative;left:-10px;color:gray;border-left:0px;border-radius:0px}.div-aoInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper input{width:80px;background-color:transparent}.div-aoInterfaceDataTable .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .button-goToPage_go{position:relative;left:-12px;border-radius:0px 10px 10px 0px;background-color:#c8c8c8;color:black}.div-aoInterfaceDataTable .ul-showPerPage{list-style:none !important;display:flex;position:absolute;top:-26px;right:0px;float:right}.div-aoInterfaceDataTable .ul-showPerPage li{margin:0px 10px}.div-aoInterfaceDataTable .ul-showPerPage .inactive-gray{color:gray}.div-aoInterfaceDataTable .ul-showPerPage .active-red{color:red}\n"

/***/ }),

/***/ "./src/app/components/leadresponse/aointerface/aointerface.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/leadresponse/aointerface/aointerface.component.ts ***!
  \******************************************************************************/
/*! exports provided: AointerfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AointerfaceComponent", function() { return AointerfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_leadresponse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/leadresponse.service */ "./src/app/services/leadresponse.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};








var AointerfaceComponent = /** @class */ (function () {
    function AointerfaceComponent(leadresponseService, renderer2, translateService) {
        this.leadresponseService = leadresponseService;
        this.renderer2 = renderer2;
        this.translateService = translateService;
        //displayedColumns : string[] = constants["AOInterfaceColumnName"];
        this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_7__["default"]["AOInterfaceColumnField"];
        this.displayDefaultNoRecord = true;
        this.customerDetailModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstContactDt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.leadExtensionModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            reasonOfExt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            applicationExt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.upsellDetailModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            upsellLifePolNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            upsellLifeProd: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            afyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        //
        this.searchCriterias = [];
        this.searchCriteriasFieldName = ["dateOfSubmissionFrom", "dateOfSubmissionTo",
            "dateOfAssignmentFrom", "dateOfAssignmentTo", "agentCode"];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pageInfo = {};
        this.currPage = 1;
        this.currSelectedAgentCode = "";
        //map the page num to the jquery elem of page num
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "active-red",
            "20": "inactive-gray",
        };
        //for handling the datatables's link
        //use router.navigate instead of href in dom 'a', as href will refresh whole page
        this.onclickEventInit = false; //onchange would reset this back to false
    }
    AointerfaceComponent.prototype.loadObjFromLangJson = function (path, storeVarStr) {
        var _this = this;
        this.translateService.get(path).subscribe(function (resp) {
            _this[storeVarStr] = resp;
        });
    };
    AointerfaceComponent.prototype.ngOnChanges = function () {
        this.currSelectedAgentCode = "";
        this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
    };
    AointerfaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateOnLangChangeSubscription = this.translateService.onLangChange.subscribe(function (event) {
            //for updting the variables inside the datatable with the correct language
            _this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
            _this.loadObjFromLangJson("DATATABLE_CONSTANTS", "translateDatatableConstants");
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(window, 'easLang') !== event.lang) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.sEmptyTable', (event.lang === 'en') ? "No data available in table" : "列表中沒有可用數據");
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.sInfoEmpty', (event.lang === 'en') ? "Showing 0 to 0 of 0 entries" : "顯示由 0 到 0 在 0個數據中");
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.oPaginate.sFirst', (event.lang === 'en') ? '« first' : '« 第一頁');
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.oPaginate.sPrevious', (event.lang === 'en') ? '‹ prev' : '‹ 上一頁');
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.oPaginate.sNext', (event.lang === 'en') ? 'next ›' : '下一頁 ›');
                Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(_this.dtOptions, 'oLanguage.oPaginate.sLast', (event.lang === 'en') ? 'last »' : '最後頁 »');
                _this.refreshTable();
            }
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(window, 'easLang', event.lang); //tmply store lang into easLang attr of window
        });
        this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
        this.loadObjFromLangJson("DATATABLE_CONSTANTS", "translateDatatableConstants");
        var easLang = this.translateService.currentLang;
        var colArr = [], dataArr = [];
        this.displayedColumnsName.forEach(function (val) {
            colArr.push({
                data: val
            });
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            scrollX: true,
            scrollY: true,
            columnDefs: this.aoInterfaceColumnDef(),
            ajax: this.aoInterfaceAjax(),
            processing: true,
            serverSide: true,
            language: {
                emptyTable: (easLang === 'en') ? "No data available in table" : "列表中沒有可用數據",
                infoEmpty: (easLang === 'en') ? "Showing 0 to 0 of 0 entries" : "顯示由 0 到 0 在 0個數據中",
                info: "",
                paginate: {
                    first: (easLang === 'en') ? '« first' : '« 第一頁',
                    previous: (easLang === 'en') ? '‹ prev' : '‹ 上一頁',
                    next: (easLang === 'en') ? 'next ›' : '下一頁 ›',
                    last: (easLang === 'en') ? 'last »' : '最後頁 »'
                },
                //display none length Menu and add a new custom menu
                // to change the hidden length menu
                lengthMenu: "",
            },
            searching: false,
            columns: colArr,
        };
        $('.table-aoInterface').on('page.dt', function (event, settings) {
            console.log('Page change:', event, settings);
            $('.input-goToPage_left').val((settings._iDisplayStart / settings.oInit.pageLength) + 1);
        });
        this.classToTrigger = [
            { type: 'modal', className: "a-modalLink" },
            { type: 'submit', className: "a-customerDtlSubmitBtn", callback: function () { _this.setCustomerDtl(); } },
            { type: 'submit', className: "a-leadExtSubmitBtn", callback: function () { _this.setLeadExt(); } },
            { type: 'submit', className: "a-upsellDtlSubmitBtn", callback: function () { _this.setUpsellDtl(); } }
        ];
    };
    AointerfaceComponent.prototype.setCustomerDtl = function () {
        var queryParams = {
            firstContactDt: this.customerDetailModalForm.controls['firstContactDt'].value,
            polNo: this.currPolNo
        };
        this.leadresponseService.postCustomerDtlRecord(queryParams, "sendParams").subscribe(function (resp) {
            console.log("resp:", resp);
        }, function (error) { return console.log(error); });
    };
    AointerfaceComponent.prototype.setLeadExt = function () {
        var queryParams = {
            reasonOfExt: this.leadExtensionModalForm.controls['reasonOfExt'].value,
            applicationExt: this.leadExtensionModalForm.controls['applicationExt'].value,
            polNo: this.currPolNo
        };
        this.leadresponseService.postLeadExtRecord(queryParams, "sendParams").subscribe(function (resp) {
            console.log("resp:", resp);
        }, function (error) { return console.log(error); });
    };
    AointerfaceComponent.prototype.setUpsellDtl = function () {
        var queryParams = {
            lifePolNo: this.upsellDetailModalForm.controls['upsellLifePolNo'].value,
            lifePolCls: this.upsellDetailModalForm.controls['upsellLifeProd'].value,
            lifeAfyp: this.upsellDetailModalForm.controls['afyp'].value,
            polNo: this.currPolNo
        };
        this.leadresponseService.postUpsellDtlRecord(queryParams, "sendParams").subscribe(function (resp) {
            console.log("resp:", resp);
        }, function (error) { return console.log(error); });
    };
    AointerfaceComponent.prototype.setCurrSelectedAgentCode = function (queryParams) {
        this.currSelectedAgentCode = "";
    };
    AointerfaceComponent.prototype.refreshAndReloadSearchRecordTable = function (_searchCriteria) {
        this.searchCriterias = _searchCriteria;
        if (this.displayDefaultNoRecord) {
            this.displayDefaultNoRecord = false;
        }
        this.refreshTable();
    };
    AointerfaceComponent.prototype.refreshTable = function () {
        var _this = this;
        var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(this.dTable, "dtInstance");
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
        if (dTableInstance) {
            dTableInstance.then(function (dtInstance) {
                //redraw table only need these 2 funcs
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
    };
    AointerfaceComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AointerfaceComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        //fetch the datatable's settings
        //since angular-datatables is not supporting changing table page in option yet
        //make use of settings.oApi._fnPageChange to change the page
        //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
        this.dataTableSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])($.fn['dataTable'], 'settings[0]');
        //for handling the btn inside datatables
        if (!this.onclickEventInit) {
            this.onclickEventInit = true;
            this.bodyRendererListener = this.renderer2.listen("body", 'click', function (event) {
                _this.classToTrigger.forEach(function (elem, key) {
                    if ($(event.target).hasClass(elem.className) && elem.type === 'submit') {
                        elem.callback();
                    }
                    else if ($(event.target).hasClass(elem.className) && elem.type === 'modal') {
                        //app ext obj map
                        var extNumMapToText = [
                            "",
                            "To be reviewed",
                            "Approved",
                            "Rejected" //rejected
                        ];
                        //
                        var rowDataStr = $(event.target).closest("tr").attr("rowdata");
                        var rowDataObj = JSON.parse(rowDataStr);
                        var dataTarget = $(event.target).attr('data-target');
                        //the cols that need to be split
                        var customerInfoSplit = rowDataObj.customerInfo.split(":");
                        var polNo = customerInfoSplit[0];
                        var customerName = customerInfoSplit[1];
                        //===============
                        var assignmentInfoSplit = rowDataObj.assignmentInfo.split(":");
                        var assignmentStatus = assignmentInfoSplit[0];
                        var reasonOfExt = assignmentInfoSplit[1];
                        //
                        switch (dataTarget) {
                            case '#customerDetailModal':
                                _this.currCustomerName = customerName;
                                _this.currPhone = rowDataObj.phone;
                                _this.currEmail = rowDataObj.email;
                                _this.currAssignmentDt = rowDataObj.agentAssignmentDt;
                                _this.customerDetailModalForm.controls['firstContactDt'].setValue(new Date(rowDataObj.firstContactDt));
                                break;
                            case '#leadExtensionModal':
                                _this.currAssignmentStatus = assignmentStatus;
                                _this.leadExtensionModalForm.controls['reasonOfExt'].setValue(reasonOfExt);
                                _this.leadExtensionModalForm.controls['applicationExt'].setValue(extNumMapToText[rowDataObj.applicationExt - 1]);
                                break;
                            case '#upsellDetailModal':
                                _this.currCustomerName = customerName;
                                _this.upsellDetailModalForm.controls['upsellLifeProd'].setValue(rowDataObj.upsellLifeProd);
                                _this.upsellDetailModalForm.controls['upsellLifePolNo'].setValue(rowDataObj.upsellLifePolNo);
                                _this.upsellDetailModalForm.controls['afyp'].setValue(rowDataObj.afyp);
                                break;
                        }
                        //in no matter which condition should polno be assigned as all post reqs need polno parameter
                        _this.currPolNo = polNo;
                    }
                });
            });
        }
    };
    AointerfaceComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        var toBeDestroyArray = ['bodyRendererListener', 'dtTrigger', 'translateOnLangChangeSubscription', 'dataTableAjaxSubscription'];
        toBeDestroyArray.forEach(function (elem, key) {
            if (_this[elem] && elem == 'bodyRendererListener') {
                _this.bodyRendererListener();
            }
            else if (_this[elem] && elem != 'bodyRendererListener') {
                _this[elem].unsubscribe();
            }
        });
    };
    AointerfaceComponent.prototype.changeTablePerPage = function (val) {
        var _this = this;
        //reset all the length menu 's class to gray color
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "inactive-gray",
            "20": "inactive-gray",
        };
        this.mapToLengthMenuNum[parseInt(val)] = "active-red";
        //reset the datatable after changing dtOptions to redraw the table
        this.dtOptions.pageLength = val; //change table's no of records
        this.dTable.dtInstance.then(function (dtInstance) {
            //redraw table only need these 2 funcs
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
    };
    AointerfaceComponent.prototype.changeCurrTablePage = function (page) {
        if (page !== "" && /^\d+$/.test(page)) {
            console.log('Change to page: ' + page);
            var pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true);
            console.log((pageChangeStatus) ? 'Current page changed to ' + page : "Fail to change page, page exceed no of page");
            this.currPage = page;
        }
    };
    AointerfaceComponent.prototype.aoInterfaceColumnDef = function () {
        return [{
                targets: "_all",
                orderable: false,
                createdCell: function (td, cellData, rowData, row, col) {
                    var easLang = window['easLang'];
                    //datatable data [need to be preprocessed first]
                    var customerInfoSplit = rowData.customerInfo.split(":");
                    var assignmentInfoSplit = rowData.assignmentInfo.split(":");
                    var polNo = customerInfoSplit[0];
                    var customerName = customerInfoSplit[1];
                    var assignmentStatus = assignmentInfoSplit[0];
                    var showExt = assignmentInfoSplit[1];
                    //funcs
                    var convertDate = function (date, minsOpt) {
                        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " +
                            ((minsOpt == "withMins") ? date.getHours() + ":" + date.getMinutes() : "");
                    };
                    //styles
                    var cursorStyle = "style=\"cursor: pointer;\"";
                    var optOutReassignStyle = "style=\"color:gray; border: solid 0px;\"";
                    //those fields that has assignmentstatus as Optout / reassigned need to be specially handled.
                    //customerName, applicationStatus and applicationExt gray in color, cs remarks can be viewed
                    var optoutOrReassign = ["3", "4"].indexOf(assignmentStatus) !== -1;
                    var isRejected = rowData.applicationExt === '4';
                    var html = "";
                    switch (col) {
                        case 1:
                            //store the whole row's data into closest tr of this cell
                            var closestTrObj = $(td).closest('tr');
                            $(closestTrObj).attr("rowData", JSON.stringify(rowData));
                            html = optoutOrReassign ? "<span class=\"css-wordBreakAll\"" + optOutReassignStyle + ">" + customerName + "</span>" :
                                "<span>" + customerName + "</span>";
                            $(td).html(html);
                            break;
                        case 4:
                        case 6:
                        case 7:
                            html = (cellData && !optoutOrReassign) ? convertDate(new Date(cellData.substr(0, 10)), 'withoutMins') : '<span></span>';
                            $(td).html(html);
                            break;
                        case 8:
                        case 9:
                            html = "";
                            var statusNumMapToText = (easLang === 'en') ?
                                ["", "Applied for extension", "Opt-out from this program", "Re-assigned"] :
                                ["", "已申請延長", "拒絕顧問聯絡", "已另派顧問"];
                            var extNumMapToText = (easLang === 'en') ?
                                ["", "To be reviewed", "Approved", "Rejected"] :
                                ["", "待部門審閱", "已批准延長", "申請被拒絕"];
                            cellData = (col == 8) ? assignmentStatus : cellData; //reassign back the extracted assignmentstatus to cellData for col == 7
                            var text = (col == 8) ? statusNumMapToText[cellData - 1] : extNumMapToText[cellData - 1];
                            if (col == 8 && cellData == 1) { //blank || To apply for extension (to be determined by inside the if condition)
                                if (!rowData.upsellLifePolNo && showExt === 'true') { //5 months  5*30 days
                                    html += "<span>" +
                                        ((easLang === "en") ? "To apply for extension" : "\u7533\u8ACB\u5EF6\u9577") + "</span>";
                                }
                                else {
                                    html += "<span></span>";
                                }
                            }
                            else if (col == 8 && cellData == 2) { //applied extension
                                html += "<span>" + text + "</span>";
                            }
                            else if (col == 9 && (cellData == 2 || cellData == 3)) { //To be reviewed || Approved
                                html += (optoutOrReassign) ? "<span " + optOutReassignStyle + ">" + text + "</span>" : //optout or reassign then this cell should be in gray color
                                    "<span>" + text + "</span>";
                            }
                            else { //opt-out || reassigned || rejected
                                html += "<span " + ((optoutOrReassign) ? optOutReassignStyle : "") + ">" + text + "</span>";
                            }
                            $(td).html((cellData) ? html : "<span></span>");
                            break;
                        case 11:
                        case 12:
                        case 13:
                            var aPromptText = "";
                            aPromptText = (cellData) ? cellData : "";
                            html = (optoutOrReassign) ? "<span></span>" :
                                ("<span>" + aPromptText + "</span>");
                            $(td).html(html);
                            break;
                        default:
                            $(td).html((cellData && !optoutOrReassign) ? ((typeof cellData == "string" && cellData.length > 25) ? "<span class=\"css-wordBreakAll\">" : "<span>") +
                                cellData + '</span>' : "<span></span>");
                            break;
                    }
                }
            }];
    };
    AointerfaceComponent.prototype.aoInterfaceAjax = function () {
        var _this = this;
        return function (params, callback, settings) {
            var unusedParams, draw, start, length;
            (draw = params.draw, start = params.start, length = params.length, params, unusedParams = __rest(params, ["draw", "start", "length"])); //do without columns attr inside params
            var queryParams = {
                draw: draw, start: start, length: length
            };
            _this.searchCriterias.forEach(function (elem, key) {
                if (elem) {
                    Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(queryParams, _this.searchCriteriasFieldName[key], elem);
                }
            });
            _this.dataTableAjaxSubscription = _this.leadresponseService.getaoInterfaceRecord(queryParams, 'dataTable').subscribe(function (resp) {
                _this.noOfRecords = (_this.displayDefaultNoRecord) ? 0 : resp.body.recordsFiltered;
                //preprocessing the resp.body.data
                var resArr = { data: Array() };
                resp.body.data.forEach(function (elem, key) {
                    //separate some unwanted params from other params
                    var polNo, customerName, reasonOfExt, assignmentStatus, showExt, restAttrObj;
                    (polNo = elem.polNo, customerName = elem.customerName, reasonOfExt = elem.reasonOfExt, assignmentStatus = elem.assignmentStatus, showExt = elem.showExt, elem, restAttrObj = __rest(elem, ["polNo", "customerName", "reasonOfExt", "assignmentStatus", "showExt"]));
                    //customerInfo put both polNo and customerName into one col and later be processed in agentInterfaceColumnDef
                    var customerInfo = (polNo ? polNo : '') + ":" + (customerName ? customerName : '');
                    //assignmentInfo put both reasonOfExt and assignmentStatus into one col and later be processed in agentInterfaceColumnD
                    var assignmentInfo = (assignmentStatus ? assignmentStatus : '') + ":" +
                        (showExt ? showExt : '') + ":" + (reasonOfExt ? reasonOfExt : '');
                    restAttrObj['customerInfo'] = customerInfo;
                    restAttrObj['assignmentInfo'] = assignmentInfo;
                    resArr.data.push(restAttrObj);
                });
                _this.noOfPage = !_this.displayDefaultNoRecord ? Math.ceil(resp.body.recordsTotal / _this.dtOptions.pageLength) : 0;
                _this.currPage = (!_this.displayDefaultNoRecord && resp.body.recordsFiltered >= 1) ? _this.currPage || 1 : 0;
                //
                callback((_this.displayDefaultNoRecord) ? {
                    data: [],
                    recordsTotal: 0,
                    recordsFiltered: 0
                } : {
                    data: resArr.data,
                    recordsTotal: resp.body.recordsTotal,
                    recordsFiltered: resp.body.recordsFiltered
                });
            });
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], AointerfaceComponent.prototype, "dTable", void 0);
    AointerfaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aointerface',
            template: __webpack_require__(/*! ./aointerface.component.html */ "./src/app/components/leadresponse/aointerface/aointerface.component.html"),
            styles: [__webpack_require__(/*! ./aointerface.component.scss */ "./src/app/components/leadresponse/aointerface/aointerface.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_leadresponse_service__WEBPACK_IMPORTED_MODULE_1__["LeadresponseService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], AointerfaceComponent);
    return AointerfaceComponent;
}());



/***/ }),

/***/ "./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row div-searchCriteria\"><div class=\"col-md-12\">\n    <div class=\"panel\">\n        <div class=\"panel-body slide-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12 clearfix\">\n                    <div id=\"accordioninpanel\" class=\"accordion-group\">\n                        <div class=\"accordion-item\">\n                            <a class=\"accordion-title\" data-toggle=\"collapse\" data-parent=\"#accordioninpanel\" href=\"#my-policy-diary\">\n                              <h4>{{'AO_INTERFACE.INPUT_SEARCH_CRITERIA' | translate}}</h4>\n                            </a>\n                            <div id=\"my-policy-diary\" class=\"collapse in\" style=\"\">\n                                <div class=\"accordion-body\">\n                                  <div>\n                                      <form class=\"form-aoSearchRecordCriteria\" [formGroup]=\"aosearchForm\" method=\"POST\" (ngSubmit)=\"onSubmitSearchCriteria()\">\n                                          <div>\n                                              <div class=\"search-by-col-wrap\">\n                                                  <div class=\"search-by-col div-displayGrid\">\n                                                    <div class=\"div-dateOfSubmissionWrapper\">\n                                                        <div> <span class=\"span-dateOfSubmissionFrom\">{{'AO_INTERFACE.SUBMISSION_DT_FROM' | translate}}</span>\n                                                            <div class=\"div-dateOfSubmissionFrom\">\n                                                                <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfFromToChange($event, 0, 'submission')\" matInput [max]=\"maxDateSubmissionFrom\" [matDatepicker]=\"dateOfSubmissionFromPicker\" formControlName=\"dateOfSubmissionFrom\" name=\"dateOfSubmissionFromField\" placeholder=\"DD/MM/YYYY\">\n                                                                <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionFromPicker\">\n                                                                  <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                                                </mat-datepicker-toggle>\n                                                                <mat-datepicker #dateOfSubmissionFromPicker></mat-datepicker>\n                                                            </div>\n                                                        </div>\n                                                        <span class=\"span-dateOfSubmissionTo\">{{'AO_INTERFACE.TO' | translate}}</span>\n                                                        <div>\n                                                          <div class=\"div-dateOfSubmissionTo\">\n                                                            <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfFromToChange($event, 1, 'submission')\" matInput [min]=\"minDateSubmissionTo\" [matDatepicker]=\"dateOfSubmissionToPicker\" formControlName=\"dateOfSubmissionTo\" name=\"dateOfSubmissionToField\" placeholder=\"DD/MM/YYYY\">\n                                                            <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionToPicker\">\n                                                              <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                                            </mat-datepicker-toggle>\n                                                            <mat-datepicker #dateOfSubmissionToPicker></mat-datepicker>\n                                                          </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"div-dateOfAssignmentWrapper\">\n                                                        <div> <span class=\"span-dateOfAssignmentFrom\">{{'AO_INTERFACE.ASSIGNMENT_DT_FROM' | translate}}</span>\n                                                            <div class=\"div-dateOfAssignmentFrom\">\n                                                                <input readonly class=\"input-dateOfAssignment\" (dateChange)=\"dateOfFromToChange($event, 0, 'assignment')\" matInput [max]=\"maxDateAssignmentFrom\" [matDatepicker]=\"dateOfAssignmentFromPicker\" formControlName=\"dateOfAssignmentFrom\" name=\"dateOfAssignmentFromField\" placeholder=\"DD/MM/YYYY\">\n                                                                <mat-datepicker-toggle matSuffix [for]=\"dateOfAssignmentFromPicker\">\n                                                                  <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                                                </mat-datepicker-toggle>\n                                                                <mat-datepicker #dateOfAssignmentFromPicker></mat-datepicker>\n                                                            </div>\n                                                        </div>\n                                                        <span class=\"span-dateOfAssignmentTo\">{{'AO_INTERFACE.TO' | translate}}</span>\n                                                        <div>\n                                                          <div class=\"div-dateOfAssignmentTo\">\n                                                            <input readonly class=\"input-dateOfAssignment\" (dateChange)=\"dateOfFromToChange($event, 1, 'assignment')\" matInput [min]=\"minDateAssignmentTo\" [matDatepicker]=\"dateOfAssignmentToPicker\" formControlName=\"dateOfAssignmentTo\" name=\"dateOfAssignmentToField\" placeholder=\"DD/MM/YYYY\">\n                                                            <mat-datepicker-toggle matSuffix [for]=\"dateOfAssignmentToPicker\">\n                                                              <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                                                            </mat-datepicker-toggle>\n                                                            <mat-datepicker #dateOfAssignmentToPicker></mat-datepicker>\n                                                          </div>\n                                                        </div>\n                                                    </div>\n                                                    <div>\n                                                        <label>{{'AO_INTERFACE.AGENT_CODE' | translate}}</label>\n                                                        <input formControlName=\"agentCode\" name=\"agentCodeField\" class=\"search-by-input\" type=\"text\">\n                                                    </div>\n                                                  </div>\n                                                  <div class=\"clearfix\"></div>\n                                              </div>\n                                          </div>\n\n                                          <div class=\"text-left\">\n                                              <input [disabled]=\"!aosearchForm.valid\" type=\"submit\" class=\"btn btn-primary table-btn\" value=\"{{'AO_INTERFACE.SEARCH_BTN' | translate}}\">\n                                              <input type=\"reset\" (click)=\"resetDateRangeRestrictAndDropDownOption()\" class=\"btn btn-default table-btn\" value=\"{{'AO_INTERFACE.RESET_BTN' | translate}}\">\n                                          </div>\n                                      </form>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div></div>\n"

/***/ }),

/***/ "./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-searchCriteria .ng-invalid{border-color:red !important}.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid{display:table-caption}.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper{margin-bottom:10px;display:inline-flex}.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .span-dateOfSubmissionFrom,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .span-dateOfAssignmentFrom,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .span-dateOfSubmissionFrom,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .span-dateOfAssignmentFrom{margin-bottom:10px}.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .div-dateOfSubmissionFrom,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .div-dateOfAssignmentFrom,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .div-dateOfSubmissionFrom,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .div-dateOfAssignmentFrom{margin-right:65px}.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .span-dateOfSubmissionTo,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .span-dateOfAssignmentTo,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .span-dateOfSubmissionTo,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .span-dateOfAssignmentTo{position:relative;left:-20px;margin-top:30px}.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .div-dateOfSubmissionTo,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .div-dateOfAssignmentTo,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .div-dateOfSubmissionTo,.div-searchCriteria .form-aoSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .div-dateOfAssignmentTo{margin-top:16px}.div-searchCriteria .form-aoSearchRecordCriteria .btn-search,.div-searchCriteria .form-aoSearchRecordCriteria .btn-reset{padding:6px !important}.div-searchCriteria input{line-height:10px;height:40px !important;border-color:#cccccc}.div-searchCriteria .div-dateOfSubmissionFrom,.div-searchCriteria .div-dateOfSubmissionTo,.div-searchCriteria .div-dateOfAssignmentFrom,.div-searchCriteria .div-dateOfAssignmentTo{position:relative}.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfSubmissionBtn,.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfAssignmentBtn,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfSubmissionBtn,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfAssignmentBtn,.div-searchCriteria .div-dateOfAssignmentFrom .input-dateOfSubmissionBtn,.div-searchCriteria .div-dateOfAssignmentFrom .input-dateOfAssignmentBtn,.div-searchCriteria .div-dateOfAssignmentTo .input-dateOfSubmissionBtn,.div-searchCriteria .div-dateOfAssignmentTo .input-dateOfAssignmentBtn{position:absolute;top:0px;right:0px;background:transparent;width:100%}.div-searchCriteria .div-dateOfSubmissionFrom .mat-icon.material-icons,.div-searchCriteria .div-dateOfSubmissionTo .mat-icon.material-icons,.div-searchCriteria .div-dateOfAssignmentFrom .mat-icon.material-icons,.div-searchCriteria .div-dateOfAssignmentTo .mat-icon.material-icons{color:red}.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfSubmission,.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfAssignment,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfSubmission,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfAssignment,.div-searchCriteria .div-dateOfAssignmentFrom .input-dateOfSubmission,.div-searchCriteria .div-dateOfAssignmentFrom .input-dateOfAssignment,.div-searchCriteria .div-dateOfAssignmentTo .input-dateOfSubmission,.div-searchCriteria .div-dateOfAssignmentTo .input-dateOfAssignment{width:230px;line-height:10px}\n"

/***/ }),

/***/ "./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AosearchcriteriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AosearchcriteriaComponent", function() { return AosearchcriteriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_convertformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/convertformat */ "./src/app/utils/convertformat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AosearchcriteriaComponent = /** @class */ (function () {
    function AosearchcriteriaComponent() {
        this.aosearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dateOfSubmissionFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dateOfSubmissionTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dateOfAssignmentFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dateOfAssignmentTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            agentCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z]+')])
        });
    }
    AosearchcriteriaComponent.prototype.ngOnInit = function () { };
    AosearchcriteriaComponent.prototype.resetDateRangeRestrictAndDropDownOption = function () {
        this.maxDateSubmissionFrom = null;
        this.minDateSubmissionTo = null;
        this.maxDateAssignmentFrom = null;
        this.minDateAssignmentTo = null;
    };
    //to set the min, max date of from / to once submissionfrom / to is changed
    AosearchcriteriaComponent.prototype.dateOfFromToChange = function (e, fromOrTo, assignmentOrSubmission) {
        if (assignmentOrSubmission == 'submission') {
            this[(fromOrTo == 0) ? "minDateSubmissionTo" : "maxDateSubmissionFrom"] = e.value;
        }
        else if (assignmentOrSubmission == 'assignment') {
            this[(fromOrTo == 0) ? "minDateAssignmentTo" : "maxDateAssignmentFrom"] = e.value;
        }
    };
    AosearchcriteriaComponent.prototype.onSubmitSearchCriteria = function () {
        var _a;
        if (this.aosearchForm.status === 'VALID') {
            //date validation
            if ((this.aosearchForm.value.dateOfSubmissionFrom &&
                !new Date(this.aosearchForm.value.dateOfSubmissionFrom).getTime()) ||
                (this.aosearchForm.value.dateOfSubmissionTo &&
                    !new Date(this.aosearchForm.value.dateOfSubmissionTo).getTime()) ||
                (this.aosearchForm.value.dateOfAssignmentFrom &&
                    !new Date(this.aosearchForm.value.dateOfAssignmentFrom).getTime()) ||
                (this.aosearchForm.value.dateOfAssignmentTo &&
                    !new Date(this.aosearchForm.value.dateOfAssignmentTo).getTime())) {
                console.error('>>> Invalid searchCriteria inputs');
                return null;
            }
        }
        else {
            console.error('>>> Invalid searchCriteria inputs');
            return null;
        }
        var agentCode, dateOfAssignmentTo, dateOfAssignmentFrom, dateOfSubmissionTo, dateOfSubmissionFrom;
        (_a = this.aosearchForm.value, agentCode = _a.agentCode, dateOfAssignmentTo = _a.dateOfAssignmentTo, dateOfAssignmentFrom = _a.dateOfAssignmentFrom, dateOfSubmissionTo = _a.dateOfSubmissionTo, dateOfSubmissionFrom = _a.dateOfSubmissionFrom);
        //transform the raw date to formatted locale date string DDMMYYYY
        dateOfSubmissionFrom = !dateOfSubmissionFrom ? dateOfSubmissionFrom : _utils_convertformat__WEBPACK_IMPORTED_MODULE_2__["default"].dateToDDMMYYYY(new Date(dateOfSubmissionFrom));
        dateOfSubmissionTo = !dateOfSubmissionTo ? dateOfSubmissionTo : _utils_convertformat__WEBPACK_IMPORTED_MODULE_2__["default"].dateToDDMMYYYY(new Date(dateOfSubmissionTo));
        dateOfAssignmentFrom = !dateOfAssignmentFrom ? dateOfAssignmentFrom : _utils_convertformat__WEBPACK_IMPORTED_MODULE_2__["default"].dateToDDMMYYYY(new Date(dateOfAssignmentFrom));
        dateOfAssignmentTo = !dateOfAssignmentTo ? dateOfAssignmentTo : _utils_convertformat__WEBPACK_IMPORTED_MODULE_2__["default"].dateToDDMMYYYY(new Date(dateOfAssignmentTo));
        var searchCriteriaArr = [dateOfSubmissionFrom, dateOfSubmissionTo, dateOfAssignmentFrom, dateOfAssignmentTo, agentCode];
        this.aoInterfaceComponent.refreshAndReloadSearchRecordTable(searchCriteriaArr);
    };
    AosearchcriteriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aosearchcriteria',
            template: __webpack_require__(/*! ./aosearchcriteria.component.html */ "./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.html"),
            styles: [__webpack_require__(/*! ./aosearchcriteria.component.scss */ "./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AosearchcriteriaComponent);
    return AosearchcriteriaComponent;
}());



/***/ }),

/***/ "./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row div-searchCriteria\"><div class=\"col-md-12\">\n    <div class=\"panel\">\n        <div class=\"panel-body slide-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12 clearfix\">\n                    <div id=\"accordioninpanel\" class=\"accordion-group\">\n                        <div class=\"accordion-item\">\n                            <a class=\"accordion-title\" data-toggle=\"collapse\" data-parent=\"#accordioninpanel\" href=\"#my-policy-diary\">\n                              <h4>{{'AP_UPLINE_INTERFACE.INPUT_SEARCH_CRITERIA' | translate}}</h4>\n                            </a>\n                            <div id=\"my-policy-diary\" class=\"collapse in\" style=\"\">\n                                <div class=\"accordion-body\">\n                                  <div>\n                                      <form class=\"form-apSearchRecordCriteria\" [formGroup]=\"apsearchForm\" method=\"POST\" (ngSubmit)=\"onSubmitSearchCriteria()\">\n                                          <div>\n                                              <div class=\"search-by-col-wrap\">\n                                                  <div class=\"search-by-col div-displayGrid\">\n                                                    <div>\n                                                        <label>{{'AP_UPLINE_INTERFACE.AGENT_CODE' | translate}}</label>\n                                                        <input formControlName=\"agentCode\" name=\"agentCodeField\" class=\"search-by-input\" type=\"text\">\n                                                    </div>\n                                                  </div>\n                                                  <div class=\"clearfix\"></div>\n                                              </div>\n                                          </div>\n\n                                          <div class=\"text-left\">\n                                              <input [disabled]=\"!apsearchForm.valid\" type=\"submit\" class=\"btn btn-primary table-btn\" value=\"{{'AP_UPLINE_INTERFACE.SEARCH_BTN' | translate}}\">\n                                              <input type=\"reset\" class=\"btn btn-default table-btn\" value=\"{{'AP_UPLINE_INTERFACE.RESET_BTN' | translate}}\">\n                                          </div>\n                                      </form>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div></div>\n"

/***/ }),

/***/ "./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-searchCriteria .ng-invalid{border-color:red !important}.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid{display:table-caption}.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper{margin-bottom:10px;display:inline-flex}.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .span-dateOfSubmissionFrom,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .span-dateOfAssignmentFrom,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .span-dateOfSubmissionFrom,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .span-dateOfAssignmentFrom{margin-bottom:10px}.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .div-dateOfSubmissionFrom,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .div-dateOfAssignmentFrom,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .div-dateOfSubmissionFrom,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .div-dateOfAssignmentFrom{margin-right:65px}.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .span-dateOfSubmissionTo,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .span-dateOfAssignmentTo,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .span-dateOfSubmissionTo,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .span-dateOfAssignmentTo{position:relative;left:-20px;margin-top:30px}.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .div-dateOfSubmissionTo,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfSubmissionWrapper .div-dateOfAssignmentTo,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .div-dateOfSubmissionTo,.div-searchCriteria .form-apSearchRecordCriteria .div-displayGrid .div-dateOfAssignmentWrapper .div-dateOfAssignmentTo{margin-top:16px}.div-searchCriteria .form-apSearchRecordCriteria .btn-search,.div-searchCriteria .form-apSearchRecordCriteria .btn-reset{padding:6px !important}.div-searchCriteria input{line-height:10px;height:40px !important;border-color:#cccccc}.div-searchCriteria .div-dateOfSubmissionFrom,.div-searchCriteria .div-dateOfSubmissionTo,.div-searchCriteria .div-dateOfAssignmentFrom,.div-searchCriteria .div-dateOfAssignmentTo{position:relative}.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfSubmissionBtn,.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfAssignmentBtn,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfSubmissionBtn,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfAssignmentBtn,.div-searchCriteria .div-dateOfAssignmentFrom .input-dateOfSubmissionBtn,.div-searchCriteria .div-dateOfAssignmentFrom .input-dateOfAssignmentBtn,.div-searchCriteria .div-dateOfAssignmentTo .input-dateOfSubmissionBtn,.div-searchCriteria .div-dateOfAssignmentTo .input-dateOfAssignmentBtn{position:absolute;top:0px;right:0px;background:transparent;width:100%}.div-searchCriteria .div-dateOfSubmissionFrom .mat-icon.material-icons,.div-searchCriteria .div-dateOfSubmissionTo .mat-icon.material-icons,.div-searchCriteria .div-dateOfAssignmentFrom .mat-icon.material-icons,.div-searchCriteria .div-dateOfAssignmentTo .mat-icon.material-icons{color:red}.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfSubmission,.div-searchCriteria .div-dateOfSubmissionFrom .input-dateOfAssignment,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfSubmission,.div-searchCriteria .div-dateOfSubmissionTo .input-dateOfAssignment,.div-searchCriteria .div-dateOfAssignmentFrom .input-dateOfSubmission,.div-searchCriteria .div-dateOfAssignmentFrom .input-dateOfAssignment,.div-searchCriteria .div-dateOfAssignmentTo .input-dateOfSubmission,.div-searchCriteria .div-dateOfAssignmentTo .input-dateOfAssignment{width:230px;line-height:10px}\n"

/***/ }),

/***/ "./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ApsearchcriteriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApsearchcriteriaComponent", function() { return ApsearchcriteriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApsearchcriteriaComponent = /** @class */ (function () {
    function ApsearchcriteriaComponent() {
        this.apsearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            agentCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9a-zA-Z]+')])
        });
    }
    ApsearchcriteriaComponent.prototype.ngOnInit = function () { };
    ApsearchcriteriaComponent.prototype.onSubmitSearchCriteria = function () {
        if (this.apsearchForm.status !== 'VALID') {
            console.error('>>> Invalid searchCriteria inputs');
            return null;
        }
        var agentCode = this.apsearchForm.value.agentCode;
        var searchCriteriaArr = [agentCode];
        this.apuplineinterfaceComponent.refreshAndReloadSearchRecordTable(searchCriteriaArr);
    };
    ApsearchcriteriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apsearchcriteria',
            template: __webpack_require__(/*! ./apsearchcriteria.component.html */ "./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.html"),
            styles: [__webpack_require__(/*! ./apsearchcriteria.component.scss */ "./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApsearchcriteriaComponent);
    return ApsearchcriteriaComponent;
}());



/***/ }),

/***/ "./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-apUplineInterfaceWrapper\">\n\n  <div class=\"table-wrapper table-responsive div-apUplineInterfaceDataTable\">\n    <h4 class=\"h4-tableHeader\">{{'AP_UPLINE_INTERFACE.TABLE_TITLE' | translate}}</h4>\n    <!-- newly added searchCriteria -->\n    <div class=\"clearfix div-apSearchRecordCriteria\">\n      <h4 class=\"float-left h4-searchCriteriaText\">{{'AP_UPLINE_INTERFACE.SEARCH_CRITERIA' | translate}}:</h4>\n      <h4 class=\"h4-criteriaText\">\n        <ng-container *ngFor=\"let criteria of searchCriterias; let i = index;\">\n          <ng-container *ngIf=\"criteria\">“{{criteria}}”\n            <ng-container *ngIf=\"i < searchCriterias.length-1 && criteria\">,</ng-container>\n          </ng-container>          \n        </ng-container>\n        &nbsp;\n      </h4>\n      <h4 class=\"float-right add-bottom h4-noOfRecords\">{{'AP_UPLINE_INTERFACE.NO_OF_RECORDS' | translate}}: {{noOfRecords}}</h4>\n    </div>\n    <!-- newly added searchCriteria -->\n    <div class=\"div-apUplineInterface-wrapper\">\n      <table class=\"row-border hover table-apUplineInterface dataTable no-footer\">\n        <thead>\n          <tr class=\"row1\">\n            <th class=\"th-apUplineInterface\">{{'AP_UPLINE_INTERFACE_COLS.AGENT_CD' | translate}}</th>\n            <th class=\"th-apUplineInterface\">{{'AP_UPLINE_INTERFACE_COLS.AGENT_NAME' | translate}}</th>\n            <th class=\"th-apUplineInterface\">{{'AP_UPLINE_INTERFACE_COLS.ASSIGNMENT_DT' | translate}}</th>\n            <th class=\"th-apUplineInterface\">{{'AP_UPLINE_INTERFACE_COLS.ASSIGNMENT_STATUS' | translate}}</th>\n            <th class=\"th-apUplineInterface\">{{'AP_UPLINE_INTERFACE_COLS.NO_OF_LEADS' | translate}}</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"displayedDataArray\">\n          <tr *ngFor=\"let dataRow of displayedDataArray\">\n            <td *ngFor=\"let key of objectKeys(dataRow)\">\n              <span class=\"span-dataRow\" *ngIf=\"dataRow[key]\">\n                <ng-container *ngIf=\"key == 'agentAssignmentDt'\">{{dataRow[key] | date:'dd/MM/yyyy'}}</ng-container>\n                <ng-container *ngIf=\"key == 'assignmentStatus'\">{{(currLang === 'en') ? statusNumMapToTextEN[dataRow[key]-1] : statusNumMapToTextZH[dataRow[key]-1]}}</ng-container>\n                <!-- <ng-container *ngIf=\"key == 'noOfLeadsAssigned'\">\n                  <ng-container *ngIf=\"dataRow['assignmentStatus'] == '4'\">-</ng-container>\n                  <ng-container *ngIf=\"dataRow['assignmentStatus'] != '4'\">{{dataRow[key]}}</ng-container>\n                </ng-container> -->\n                <ng-container *ngIf=\"key != 'agentAssignmentDt' && key != 'assignmentStatus'\">{{dataRow[key]}}</ng-container>\n              </span>\n              <span *ngIf=\"!dataRow[key]\">-</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-apUplineInterfaceWrapper{min-height:500px}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable{text-align:center}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .h4-tableHeader{text-align:left;color:black;font-weight:bold;margin-bottom:30px}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apSearchRecordCriteria{width:100%;margin-bottom:10px}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apSearchRecordCriteria .h4-searchCriteriaText{white-space:pre}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apSearchRecordCriteria .h4-criteriaText{text-align:left;word-break:break-all}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apSearchRecordCriteria .h4-noOfRecords{white-space:nowrap;margin-left:auto}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apUplineInterface-wrapper{max-height:800px;overflow:auto;width:100%}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apUplineInterface-wrapper .table-apUplineInterface{width:100% !important}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apUplineInterface-wrapper .table-apUplineInterface .th-apUplineInterface{background:#db0306;position:-webkit-sticky;position:sticky;top:0}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apUplineInterface-wrapper .table-apUplineInterface .span-dataRow{white-space:nowrap}.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apUplineInterface-wrapper .table-apUplineInterface .sorting_asc,.div-apUplineInterfaceWrapper .div-apUplineInterfaceDataTable .div-apUplineInterface-wrapper .table-apUplineInterface .sorting_desc{background-image:none;cursor:unset}.div-apUplineInterfaceWrapper .mat-progress-spinner-apUplineInterface{margin:150px auto}\n"

/***/ }),

/***/ "./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ApuplineinterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApuplineinterfaceComponent", function() { return ApuplineinterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_leadresponse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/leadresponse.service */ "./src/app/services/leadresponse.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApuplineinterfaceComponent = /** @class */ (function () {
    function ApuplineinterfaceComponent(leadresponseService, http, renderer2, translateService, loaderService) {
        this.leadresponseService = leadresponseService;
        this.http = http;
        this.renderer2 = renderer2;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.displayedColumnsField = _constants_constants__WEBPACK_IMPORTED_MODULE_6__["default"]["APUplineInterfaceColumnField"];
        this.objectKeys = Object.keys; // for looping over all the keys the displayedDataArray's elem
        this.statusNumMapToTextEN = ["", "Applied for extension", "Opt-out from this program", "Re-assigned"];
        this.statusNumMapToTextZH = ["", "已申請延長", "拒絕顧問聯絡", "已另派顧問"];
        this.noOfRecords = 0;
        this.searchCriterias = [];
    }
    ApuplineinterfaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateOnLangChangeSubscription = this.translateService.onLangChange.subscribe(function (event) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_3__["set"])(window, 'easLang', event.lang); //keep track of curr supported page even this comp doesnt use it
            _this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
            _this.currLang = event.lang;
        });
        this.loadObjFromLangJson("LEAD_RESPONSE_COMMON", "translateLeadRespCommon");
        this.currLang = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(window, 'easLang');
        this.classToTrigger = [];
    };
    ApuplineinterfaceComponent.prototype.ngAfterViewInit = function () {
        this.loadDataFromApi(null);
    };
    ApuplineinterfaceComponent.prototype.loadObjFromLangJson = function (path, storeVarStr) {
        var _this = this;
        this.translateService.get(path).subscribe(function (resp) {
            _this[storeVarStr] = resp;
        });
    };
    ApuplineinterfaceComponent.prototype.loadDataFromApi = function (agentCode) {
        var _this = this;
        var queryParams = (agentCode) ? { agentCode: agentCode } : {};
        this.apuplineInterfaceSubscription = this.leadresponseService.getapUplineInterfaceRecord(queryParams, 'apuplineRecord').subscribe(function (resp) {
            //to avoid the case for the default list being too large, and heavy business logic in func postProcessingDisplayedData freezes the browser
            _this.loaderService.show();
            setTimeout(function () {
                _this.displayedDataArray = _this.postProcessingDisplayedData(resp.body);
                _this.noOfRecords = resp.body.length;
                _this.loaderService.hide();
            }, 100); //the browser repaints every 16 milliseconds, delay more than 16 milisecs
        }, function (error) { return console.error(error); });
    };
    ApuplineinterfaceComponent.prototype.refreshAndReloadSearchRecordTable = function (_searchCriteria) {
        this.searchCriterias = _searchCriteria;
        this.loadDataFromApi(this.searchCriterias[0]);
    };
    //post processing the displayed data into 5 cols
    ApuplineinterfaceComponent.prototype.postProcessingDisplayedData = function (responseData) {
        var resDataArray = new Array(responseData.length);
        //sort by the obj's agent code
        var sortedRespData = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"])(responseData, [function (obj) { return obj.agentCode; }]);
        var currUniqAgentCode = '';
        var noOfCurrAgentRows = 0; //noOfCurrAgentRows === cumulative no of agents
        //the first record's index with uniq agent code. e.g. {agentCode:1},{agentCode:1},{agentCode:2} fstRecWithUniqAgentCode = 0, 2
        var fstRecWithUniqAgentCode = 0; //will change within the following for loop
        for (var i = 0; i < sortedRespData.length; i++) {
            var tmpRowObj = void 0;
            var prevCd = (i > 0) ? sortedRespData[i - 1].agentCode : null;
            var nextCd = (i < sortedRespData.length - 1) ? sortedRespData[i + 1].agentCode : null;
            var currCd = sortedRespData[i].agentCode;
            //either the prevCode doesnt equal to the currCode or prevCode doesnt exist
            if (i == 0) { //case 1 meet the new agent with uniq code:
                tmpRowObj = __assign({}, sortedRespData[i]);
                fstRecWithUniqAgentCode = i;
                currUniqAgentCode = currCd;
            }
            else if (i == sortedRespData.length - 1) {
                //last group of agent has more than one row
                if (currCd == currUniqAgentCode) {
                    tmpRowObj = {
                        agentCode: '',
                        agentName: '',
                        agentAssignmentDt: sortedRespData[i].agentAssignmentDt,
                        assignmentStatus: sortedRespData[i].assignmentStatus,
                        noOfLeadsAssigned: ''
                    };
                    noOfCurrAgentRows++;
                    resDataArray[fstRecWithUniqAgentCode].noOfLeadsAssigned = noOfCurrAgentRows;
                }
                else { //last group of agent has only one row, then here we need to upd both curr last row, and the prev group of agent
                    resDataArray[fstRecWithUniqAgentCode].noOfLeadsAssigned = noOfCurrAgentRows;
                    tmpRowObj = __assign({}, sortedRespData[i], { noOfLeadsAssigned: 1 });
                }
            } //YXY
            else if (currCd !== prevCd && currCd !== nextCd) {
                tmpRowObj = __assign({}, sortedRespData[i], { noOfLeadsAssigned: 1 });
                resDataArray[fstRecWithUniqAgentCode].noOfLeadsAssigned = noOfCurrAgentRows;
                noOfCurrAgentRows = 0;
                fstRecWithUniqAgentCode = i;
            } //XXY   ||   XXX
            else if ((currCd === prevCd && currCd !== nextCd) || (currCd === prevCd && currCd === nextCd)) {
                tmpRowObj = {
                    agentCode: '',
                    agentName: '',
                    agentAssignmentDt: sortedRespData[i].agentAssignmentDt,
                    assignmentStatus: sortedRespData[i].assignmentStatus,
                    noOfLeadsAssigned: ''
                };
            } //YXX
            else if (currCd !== prevCd && currCd === nextCd) {
                tmpRowObj = __assign({}, sortedRespData[i], { noOfLeadsAssigned: '' });
                resDataArray[fstRecWithUniqAgentCode].noOfLeadsAssigned = noOfCurrAgentRows;
                noOfCurrAgentRows = 0;
                fstRecWithUniqAgentCode = i;
                currUniqAgentCode = currCd;
            }
            else {
                console.error("Unhandled case !!! in ", i, "-th row");
            }
            noOfCurrAgentRows += 1;
            resDataArray[i] = tmpRowObj;
        }
        return resDataArray;
    };
    ApuplineinterfaceComponent.prototype.ngOnDestroy = function () {
        if (this.apuplineInterfaceSubscription) {
            this.apuplineInterfaceSubscription.unsubscribe();
        }
        if (this.translateOnLangChangeSubscription) {
            this.translateOnLangChangeSubscription.unsubscribe();
        }
    };
    ApuplineinterfaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apuplineinterface',
            template: __webpack_require__(/*! ./apuplineinterface.component.html */ "./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.html"),
            styles: [__webpack_require__(/*! ./apuplineinterface.component.scss */ "./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_leadresponse_service__WEBPACK_IMPORTED_MODULE_1__["LeadresponseService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], ApuplineinterfaceComponent);
    return ApuplineinterfaceComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound.component.ts":
/*!**************************************************!*\
  !*** ./src/app/components/notfound.component.ts ***!
  \**************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        //once clicked remove the active tab of parent tab
        $("#sidebar").children(".active").removeClass("active");
        //hide the sub tab once clicked the home page icon
        $(".hasChild ul.acc-menu").css("display", "none");
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<h2>Page not found!!</h2>'
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/pdd/pddleadextapproval/pddleadextapproval.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/pdd/pddleadextapproval/pddleadextapproval.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade \" id=\"btnMsgModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"btnMsgModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"btnMsgModalLabel\">{{popUpMsg}}</h4>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default table-btn btn-ok\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row div-clientDetails\">\n    <div class=\"col-md-12\">\n        <div class=\"panel\">\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"accordion-item col-lg-12 col-md-12\">\n                        <a><h4 class=\"h4-clientDetailsTitle\">Client Details</h4></a>\n                        <div id=\"my-policy-diary\" class=\"clearfix\">\n                            <div class=\"client-detail div-clientDetailDisplay\">\n                                <div class=\"col-lg-6 col-md-6 detail-box\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6 \">Agent Name</div>\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6 \">{{pddLeadExtApprovalInfo.agentName}}</div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\">Agent Code</div>\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\">{{pddLeadExtApprovalInfo.agentCode}}</div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6 \">Assignment Date</div>\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6 \">{{pddLeadExtApprovalInfo.assignmentDate | date:'MM/dd/yyyy'}}</div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\">Date of Submission</div>\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\">{{pddLeadExtApprovalInfo.dateOfSubmission | date:'MM/dd/yyyy'}}</div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\">First Contact Date</div>\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\">{{pddLeadExtApprovalInfo.firstContactDt | date:'MM/dd/yyyy'}}</div>\n                                    </div>\n                                    <div class=\"row div-leadExtReason\">\n                                        <div class=\" col-lg-12 col-md-12 col-xs-12\">\n                                            <div class=\"div-leadExtReasonName\">Lead Extension Reason</div>\n                                            <div class=\"col-md-12 div-leadExtReasonDisplay\" id=\"remarkDiv\">\n                                                {{pddLeadExtApprovalInfo.leadExtReason}}\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                    <form [formGroup]=\"clientDtlsForm\" class=\"form-clientDetailsForm\" (ngSubmit)=\"onSubmitClientDetailsForm()\">\n                                      <div class=\"row div-pddApproval\">\n                                          <div class=\"col-md-12 input-section\">\n                                              <div class=\"radio-box\">\n                                                  <label>PDD Approval</label>\n                                                  <div>\n                                                    <label class=\"radio-wrapper\">Approve\n                                                      <input type=\"radio\" value=\"3\" formControlName=\"pddApproval\">\n                                                      <span class=\"checkmark\"></span>\n                                                    </label>\n                                                    <label class=\"radio-wrapper\">Reject\n                                                      <input type=\"radio\" value=\"4\" formControlName=\"pddApproval\">\n                                                      <span class=\"checkmark\"></span>\n                                                    </label>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                      </div>\n\n                                      <div class=\"row\">\n                                          <div class=\" col-lg-12 col-md-12 col-xs-12\">\n                                              <div>Remarks</div>\n                                                  <textarea name=\"remarksField\" formControlName=\"remarks\" cols=\"60\"\n                                                            rows=\"10\" maxlength=\"200\"></textarea>\n\n                                          </div>\n                                      </div>\n                                      <div class=\"row div-submitCancelBtnSection\">\n                                          <div class=\"text-left div-btnWrapper\">\n                                              <input type=\"submit\" class=\"btn btn-primary table-btn\" value=\"Submit\">\n                                              <input type=\"button\" routerLink=\"/easLeadExtensionAppl\" class=\"btn btn-default table-btn\" value=\"Cancel\">\n                                          </div>\n                                      </div>\n                                    </form>\n                                </div>\n                                <div class=\"col-lg-6 col-md-6 detail-box\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\" >Customer Name </div>\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\" >{{pddLeadExtApprovalInfo.customerName}}</div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6 \" >Customer Phone No.</div>\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\" >{{pddLeadExtApprovalInfo.customerPhoneNo}}</div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\" >Customer email</div>\n                                        <div class=\"col-lg-6 col-md-6 col-xs-6\" >{{pddLeadExtApprovalInfo.customerEmail}}</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pdd/pddleadextapproval/pddleadextapproval.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/pdd/pddleadextapproval/pddleadextapproval.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#btnMsgModal .modal-header{border-bottom:0px}#btnMsgModal .modal-header .modal-title{text-align:center;padding-top:90px}.div-clientDetails .div-clientDetailDisplay .div-leadExtReason .div-leadExtReasonName{color:#333333;font-size:16px}.div-clientDetails .div-clientDetailDisplay .div-leadExtReason .div-leadExtReasonDisplay{margin:10px 0 0 0 !important;min-height:100px}.div-clientDetails .div-clientDetailDisplay .div-pddApproval{margin-top:30px}.div-clientDetails .div-clientDetailDisplay .div-submitCancelBtnSection .div-btnWrapper{margin-left:5px}.div-clientDetails .h4-clientDetailsTitle{color:#FE0000;border-bottom:1px solid #EBEBEB;padding:20px 0px;margin-left:20px}\n"

/***/ }),

/***/ "./src/app/components/pdd/pddleadextapproval/pddleadextapproval.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pdd/pddleadextapproval/pddleadextapproval.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PddleadextapprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PddleadextapprovalComponent", function() { return PddleadextapprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pdd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pdd.service */ "./src/app/services/pdd.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _models_pdd_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/pdd.model */ "./src/app/models/pdd.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PddleadextapprovalComponent = /** @class */ (function () {
    function PddleadextapprovalComponent(pddService, router) {
        this.pddService = pddService;
        this.router = router;
        //1 approve ,2 reject
        this.clientDtlsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pddApproval: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('3'),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)])
        });
        this.pddLeadExtApprovalInfo = new _models_pdd_model__WEBPACK_IMPORTED_MODULE_6__["PddLeadExtApprovalDtl"]();
    }
    PddleadextapprovalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var policyNo = this.pddService.currPolicyNo || "";
        if (policyNo === '') {
            this.router.navigate(['/']);
        }
        else {
            var queryParams = {
                policyNo: policyNo
            };
            this.pddService.getPddClientDetails(queryParams, 'clientDetails').subscribe(function (resp) {
                console.log('resp:', resp);
                _this.pddLeadExtApprovalInfo = resp.body;
                _this.clientDtlsForm.controls['remarks'].setValue(resp.body.remarks);
            }, function (error) {
                console.error('error: ', error);
            });
        }
    };
    PddleadextapprovalComponent.prototype.onSubmitClientDetailsForm = function () {
        var _this = this;
        if (this.clientDtlsForm.status === 'VALID') {
            var queryParams = {
                policyNo: this.pddService.currPolicyNo,
                pddApproval: this.clientDtlsForm.controls['pddApproval'].value,
                remarks: this.clientDtlsForm.controls['remarks'].value
            };
            console.log(">>> pddLeadExtApproval::postPddApproval queryParams:", queryParams);
            this.pddService.postPddApproval(queryParams, 'sendParams').subscribe(function (resp) {
                console.log("resp: ", resp);
                var code = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(resp, 'code[0]');
                var errMsg = (code && code !== _constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"].STATUS_CODE.SUCCESS_CODE) ? Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(resp, 'errMsg[0]') : _constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"].MSG.PRUCHAT_EMAIL_SUCCESS;
                if (code != _constants_constants__WEBPACK_IMPORTED_MODULE_5__["default"].STATUS_CODE.SUCCESS_CODE) {
                    _this.showPopUpMsg(errMsg);
                }
                else {
                    _this.router.navigate(['/easLeadExtensionAppl']);
                }
            }, function (error) {
                console.error("error: ", error);
            });
        }
        else {
            return null;
        }
    };
    //show err msg upon receiving err msg after posting req
    PddleadextapprovalComponent.prototype.showPopUpMsg = function (errMsg) {
        this.popUpMsg = errMsg;
        $("#btnMsgModal").modal('show');
    };
    PddleadextapprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pddleadextapproval',
            template: __webpack_require__(/*! ./pddleadextapproval.component.html */ "./src/app/components/pdd/pddleadextapproval/pddleadextapproval.component.html"),
            styles: [__webpack_require__(/*! ./pddleadextapproval.component.scss */ "./src/app/components/pdd/pddleadextapproval/pddleadextapproval.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pdd_service__WEBPACK_IMPORTED_MODULE_2__["PddService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PddleadextapprovalComponent);
    return PddleadextapprovalComponent;
}());



/***/ }),

/***/ "./src/app/components/pdd/pddlist/pddlist.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pdd/pddlist/pddlist.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper table-responsive div-pddListWrapper\">\n  <div class=\"div-pddListHeader\">\n    <h4 class=\"h4-tableHeader\">Application for Assigned Lead Extension</h4>\n    <h4 class=\"h4-noOfApplications\">Total No.of Application: {{noOfApplications}}</h4>\n  </div>\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover table-pddList\">\n    <thead>\n      <tr class=\"row1\">\n        <th class=\"noscroll\" *ngFor=\"let colName of displayedColumns\">\n          {{colName}}\n        </th>\n      </tr>\n    </thead>\n  </table>\n  <div class=\"div-goToPage-showPerPage\">\n    <div class=\"div-goToPage\">\n      <span class=\"span-goToPage\">Go to page</span>\n      <div class=\"div-goToPage_wrapper\">\n        <input type=\"text\" class=\"input-goToPage_left\" [(ngModel)]=\"currPage\" value=\"{{currPage}}\"/>\n        <input type=\"text\" class=\"input-goToPage_right\" value=\"/ {{noOfPage}}\" disabled/>\n        <input class=\"button-goToPage_go\" value=\"GO\" type=\"button\" (click)=\"changeCurrTablePage(currPage)\"/>\n      </div>\n    </div>\n    <ul class=\"ul-showPerPage\">\n      <span>Show</span>\n      <li><a [ngClass]=\"mapToLengthMenuNum[5]\" (click)=\"changeTablePerPage(5)\">5</a></li>\n      <li><a [ngClass]=\"mapToLengthMenuNum[10]\" (click)=\"changeTablePerPage(10)\">10</a></li>\n      <li><a [ngClass]=\"mapToLengthMenuNum[20]\" (click)=\"changeTablePerPage(20)\">20</a></li>\n      <span>per page</span>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pdd/pddlist/pddlist.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/pdd/pddlist/pddlist.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-pddListWrapper .div-pddListHeader{display:inline-flex;width:100%}.div-pddListWrapper .div-pddListHeader .h4-tableHeader{color:red}.div-pddListWrapper .div-pddListHeader .h4-noOfApplications{color:red;margin-left:auto}.div-pddListWrapper .table-pddList{width:100% !important;text-align:center}.div-pddListWrapper .div-goToPage-showPerPage{display:-webkit-box;position:relative}.div-pddListWrapper .div-goToPage-showPerPage .div-goToPage{display:flex;position:relative;left:38%}.div-pddListWrapper .div-goToPage-showPerPage .div-goToPage .span-goToPage{line-height:50px;color:gray}.div-pddListWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper{display:inline-block}.div-pddListWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_left{margin-left:10px;border-radius:10px 0px 0px 10px;border-right:0px;text-align:right;color:gray}.div-pddListWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_right{position:relative;left:-10px;color:gray;border-left:0px;border-radius:0px}.div-pddListWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper input{width:80px;background-color:transparent}.div-pddListWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .button-goToPage_go{position:relative;left:-12px;border-radius:0px 10px 10px 0px;background-color:#c8c8c8;color:black}.div-pddListWrapper .div-goToPage-showPerPage .ul-showPerPage{list-style:none !important;display:flex;position:absolute;top:-26px;right:0px;float:right}.div-pddListWrapper .div-goToPage-showPerPage .ul-showPerPage li{margin:0px 10px}.div-pddListWrapper .div-goToPage-showPerPage .ul-showPerPage .inactive-gray{color:gray}.div-pddListWrapper .div-goToPage-showPerPage .ul-showPerPage .active-red{color:red}\n"

/***/ }),

/***/ "./src/app/components/pdd/pddlist/pddlist.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pdd/pddlist/pddlist.component.ts ***!
  \*************************************************************/
/*! exports provided: PddlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PddlistComponent", function() { return PddlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _services_pdd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pdd.service */ "./src/app/services/pdd.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







var PddlistComponent = /** @class */ (function () {
    function PddlistComponent(pddService, renderer2, router) {
        this.pddService = pddService;
        this.renderer2 = renderer2;
        this.router = router;
        this.displayedColumns = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["default"]["PDDList"];
        this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["default"]["PDDListField"];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.noOfApplications = 0;
        this.currPage = 1;
        //map the page num to the jquery elem of page num
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "active-red",
            "20": "inactive-gray",
        };
        //for handling the datatables's link
        //use router.navigate instead of href in dom 'a', as href will refresh whole page
        this.onclickEventInit = false; //onchange would reset this back to false
    }
    PddlistComponent.prototype.ngOnChanges = function () {
        this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
    };
    PddlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var colArr = [], dataArr = [];
        this.displayedColumnsName.forEach(function (val) {
            colArr.push({
                data: val
            });
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            scrollX: true,
            scrollY: true,
            columnDefs: this.pddListColumnDef(),
            ajax: this.pddListAjax(),
            processing: true,
            serverSide: true,
            language: {
                info: "",
                paginate: {
                    first: '« first',
                    previous: '‹ prev',
                    next: 'next ›',
                    last: 'last »'
                },
                //display none length Menu and add a new custom menu
                // to change the hidden length menu
                lengthMenu: "",
            },
            searching: false,
            columns: colArr,
        };
        $('.table-pddList').on('page.dt', function (event, settings) {
            $('.input-goToPage_left').val((settings._iDisplayStart / settings.oInit.pageLength) + 1);
        });
        this.classToTrigger = [
            { type: 'redirect', className: "a-customerName", callback: function (queryParams) { _this.redirectToApproval(queryParams); } }
        ];
    };
    PddlistComponent.prototype.redirectToApproval = function (queryParams) {
        //[put some param into pdd service to retrieve the easLeadExtensionApproval's data not using query params in req header]
        this.pddService.currPolicyNo = queryParams.policyNo;
        this.router.navigate(['easLeadExtensionApproval']);
    };
    PddlistComponent.prototype.refreshTable = function () {
        var _this = this;
        var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(this.dTable, "dtInstance");
        if (dTableInstance) {
            dTableInstance.then(function (dtInstance) {
                //redraw table only need these 2 funcs
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
    };
    PddlistComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    PddlistComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        //fetch the datatable's settings
        //since angular-datatables is not supporting changing table page in option yet
        //make use of settings.oApi._fnPageChange to change the page
        //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
        this.dataTableSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])($.fn['dataTable'], 'settings[0]');
        //for handling the btn inside datatables
        if (!this.onclickEventInit) {
            this.onclickEventInit = true;
            this.bodyRendererListener = this.renderer2.listen("body", 'click', function (event) {
                _this.classToTrigger.forEach(function (elem, key) {
                    if ($(event.target).hasClass(elem.className)) {
                        if (elem.type === 'redirect') {
                            //read queryParams attr
                            //e.g. queryParams="abc:2,ddd:4" ...
                            var paramsToBePassed_1 = {};
                            var queryParamsStr = $(event.target).attr("queryParams");
                            if (queryParamsStr) {
                                var queryParamsArray = queryParamsStr.split(',');
                                queryParamsArray.forEach(function (elem, key) {
                                    var elemPair = elem.split(':');
                                    Object(lodash__WEBPACK_IMPORTED_MODULE_5__["set"])(paramsToBePassed_1, elemPair[0], elemPair[1]);
                                });
                            }
                            if (elem.callback) {
                                elem.callback(paramsToBePassed_1);
                            }
                        }
                    }
                });
            });
        }
    };
    PddlistComponent.prototype.ngOnDestroy = function () {
        if (this.bodyRendererListener) {
            this.bodyRendererListener();
        }
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dataTableAjaxSubscription) {
            this.dataTableAjaxSubscription.unsubscribe();
        }
    };
    PddlistComponent.prototype.changeTablePerPage = function (val) {
        var _this = this;
        //reset all the length menu 's class to gray color
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "inactive-gray",
            "20": "inactive-gray",
        };
        this.mapToLengthMenuNum[parseInt(val)] = "active-red";
        //reset the datatable after changing dtOptions to redraw the table
        this.dtOptions.pageLength = val; //change table's no of records
        this.dTable.dtInstance.then(function (dtInstance) {
            //redraw table only need these 2 funcs
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
    };
    PddlistComponent.prototype.changeCurrTablePage = function (page) {
        if (page !== "" && /^\d+$/.test(page)) {
            var pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true);
            this.currPage = page;
        }
    };
    PddlistComponent.prototype.pddListColumnDef = function () {
        return [{
                targets: "_all",
                orderable: true,
                createdCell: function (td, cellData, rowData, row, col) {
                    //funcs
                    var convertDate = function (date) {
                        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    };
                    if (!cellData && col != 1) {
                        $(td).html("<span>-</span>");
                    }
                    else {
                        switch (col) {
                            case 1:
                                $(td).html("<a class=\"a-customerName css-wordBreakAll\" queryParams=\"policyNo:" + rowData.policyNo + "\">" + (cellData ? cellData : 'N/A') + "</a>");
                                break;
                            case 0:
                            case 6:
                            case 7:
                                if (cellData) {
                                    var dateSubstr = new Date(cellData.substr(0, 10));
                                    $(td).html("<span>" + convertDate(dateSubstr) + "</span>");
                                }
                                else {
                                    $(td).html("<span> - </span>");
                                }
                                break;
                            case 8:
                                var mapStatusToText = {
                                    3: 'Approved',
                                    4: 'Rejected'
                                };
                                var mapStatusToColor = {
                                    3: "green",
                                    4: "red" //Rejected
                                };
                                var txtColorStyle = "style=\"color:" + ((cellData && ["3", "4"].indexOf(cellData) !== -1) ? mapStatusToColor[parseInt(cellData)] : "#4d4d4d") + ";\"";
                                var html = cellData && ["3", "4"].indexOf(cellData) !== -1 ? mapStatusToText[parseInt(cellData)] : '-';
                                $(td).html("<span " + txtColorStyle + ">" + html + "</span>");
                                break;
                            case 9: //gray color remarks
                                $(td).html("<span class=\"span-csremarks\">" + (cellData ? cellData : '') + "</span>");
                                break;
                            default:
                                $(td).html(((typeof cellData == "string" && cellData.length > 25) ? "<span class=\"css-wordBreakAll\">" : "<span>") +
                                    (cellData ? cellData : '-') + "</span>");
                                break;
                        }
                    }
                }
            }];
    };
    PddlistComponent.prototype.pddListAjax = function () {
        var _this = this;
        return function (params, callback, settings) {
            var unusedParams, draw, start, length, order, sortColumn, sortOption;
            (draw = params.draw, start = params.start, length = params.length, order = params.order, params, unusedParams = __rest(params, ["draw", "start", "length", "order"])); //do without columns attr inside params
            sortColumn = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["default"]["PDDListField"][Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(order[0], 'column')];
            sortOption = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(order[0], 'dir');
            var queryParams = {
                draw: draw, start: start, length: length, sortColumn: sortColumn, sortOption: sortOption
            };
            _this.dataTableAjaxSubscription = _this.pddService.getPddApplicationList(queryParams, 'dataTable').subscribe(function (resp) {
                _this.noOfPage = Math.ceil(resp.body.recordsTotal / _this.dtOptions.pageLength);
                _this.currPage = (resp.body.recordsFiltered >= 1) ? _this.currPage : 0;
                _this.noOfApplications = resp.body.recordsFiltered;
                //
                callback({
                    data: resp.body.data,
                    recordsTotal: resp.body.recordsTotal,
                    recordsFiltered: resp.body.recordsFiltered
                });
            });
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], PddlistComponent.prototype, "dTable", void 0);
    PddlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pddlist',
            template: __webpack_require__(/*! ./pddlist.component.html */ "./src/app/components/pdd/pddlist/pddlist.component.html"),
            styles: [__webpack_require__(/*! ./pddlist.component.scss */ "./src/app/components/pdd/pddlist/pddlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pdd_service__WEBPACK_IMPORTED_MODULE_2__["PddService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], PddlistComponent);
    return PddlistComponent;
}());



/***/ }),

/***/ "./src/app/components/pdd/pddsummary/pddsummary.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pdd/pddsummary/pddsummary.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade export-list div-exportListModal\" id=\"exportListModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <form [formGroup]=\"exportListForm\" class=\"form-exportListForm\" (ngSubmit)=\"exportRecordList()\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"exportListModalLabel\">Export List</h4>\n            </div>\n            <div class=\"modal-body clearfix\">\n                <div class=\"row\">\n                    <label class=\"radio-wrapper\">Select All\n                        <input formControlName=\"selectedOption\" value=\"all\" type=\"radio\" checked=\"checked\" (click)=\"triggerAndClearSubmissionDate('disable')\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                </div>\n                <div class=\"row div-splitLineWrapper\">\n                    <span class=\"float-left span-or\">OR</span>\n                    <div class=\"col-md-10 div-splitLine\">\n                        <hr class=\"hr-splitLine\" align=\"center\">\n                    </div>\n                </div>\n                <div class=\"row export-date div-exportDateWrapper\">\n                    <label style=\"width:250px\" class=\"radio-wrapper label-dateOfSubmissionFromTo\">\n                        <input formControlName=\"selectedOption\" value=\"range\" type=\"radio\" (click)=\"triggerAndClearSubmissionDate('enable')\">\n                        <span class=\"checkmark\"></span>\n                        Submission Date from\n                    </label>\n                    <label style=\"margin-left:55px\">To</label>\n                    <div style=\"display:inline-flex; margin-left:30px\" class=\"div-dateOfSubmissionWrapper\">\n                      <div style=\"display:inline-flex\" class=\"col-md-5\">\n                          <div style=\"display:inline-flex; margin-right:180px\" class=\"div-dateOfSubmissionFrom\">\n                              <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfSubmissionChange($event, 0)\"\n                              matInput [max]=\"maxDateFrom < currDate ? maxDateFrom : currDate\" [matDatepicker]=\"dateOfSubmissionFromPicker\" formControlName=\"dateOfSubmissionFrom\" name=\"dateOfSubmissionFromField\" placeholder=\"DD/MM/YYYY\">\n                              <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionFromPicker\">\n                                <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                              </mat-datepicker-toggle>\n                              <mat-datepicker #dateOfSubmissionFromPicker></mat-datepicker>\n                          </div>\n                      </div>\n                      <div class=\"col-md-5\">\n                          <div style=\"display:inline-flex\" class=\"div-dateOfSubmissionTo\">\n                            <input readonly class=\"input-dateOfSubmission\" (dateChange)=\"dateOfSubmissionChange($event, 1)\"\n                            matInput [min]=\"minDateTo\" [max]=\"currDate\" [matDatepicker]=\"dateOfSubmissionToPicker\"\n                            formControlName=\"dateOfSubmissionTo\" name=\"dateOfSubmissionToField\" placeholder=\"DD/MM/YYYY\">\n                            <mat-datepicker-toggle matSuffix [for]=\"dateOfSubmissionToPicker\">\n                              <mat-icon matDatepickerToggleIcon>apps</mat-icon>\n                            </mat-datepicker-toggle>\n                            <mat-datepicker #dateOfSubmissionToPicker></mat-datepicker>\n                          </div>\n                      </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\"\n                [disabled]=\"exportListForm.controls['selectedOption'].value != 'all' && !exportListForm.controls['dateOfSubmissionFrom'].value && !exportListForm.controls['dateOfSubmissionTo'].value\" \n                (click)=\"resetSubmissionFromTo()\" class=\"btn btn-primary table-btn\">Export</button>\n                <button type=\"button\" (click)=\"resetSubmissionFromTo()\" class=\"btn btn-default table-btn\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n        </div>\n      </form>\n    </div>\n</div>\n\n<div class=\"table-wrapper table-responsive div-pddSummaryWrapper\">\n  <div class=\"div-pddSummaryHeader\">\n    <h4 class=\"h4-tableHeader\">Assigned Leads</h4>\n    <h4 class=\"h4-noOfApplications\">Total No.of Application: {{noOfApplications}}</h4>\n    <button data-toggle=\"modal\" data-target=\"#exportListModal\" (click)=\"resetExportListForm()\" class=\"export-btn\"><i class=\"iconfont\">&#xe6e9;</i><span>Export</span></button>\n  </div>\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover table-pddSummary\">\n    <thead>\n      <tr class=\"row1\">\n        <th class=\"noscroll\" *ngFor=\"let colName of displayedColumns\">\n          {{colName}}\n        </th>\n      </tr>\n    </thead>\n  </table>\n  <div class=\"div-goToPage-showPerPage\">\n    <div class=\"div-goToPage\">\n      <span class=\"span-goToPage\">Go to page</span>\n      <div class=\"div-goToPage_wrapper\">\n        <input type=\"text\" class=\"input-goToPage_left\" [(ngModel)]=\"currPage\" value=\"{{currPage}}\"/>\n        <input type=\"text\" class=\"input-goToPage_right\" value=\"/ {{noOfPage}}\" disabled/>\n        <input class=\"button-goToPage_go\" value=\"GO\" type=\"button\" (click)=\"changeCurrTablePage(currPage)\"/>\n      </div>\n    </div>\n    <ul class=\"ul-showPerPage\">\n      <span>Show</span>\n      <li><a [ngClass]=\"mapToLengthMenuNum[5]\" (click)=\"changeTablePerPage(5)\">5</a></li>\n      <li><a [ngClass]=\"mapToLengthMenuNum[10]\" (click)=\"changeTablePerPage(10)\">10</a></li>\n      <li><a [ngClass]=\"mapToLengthMenuNum[20]\" (click)=\"changeTablePerPage(20)\">20</a></li>\n      <span>per page</span>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pdd/pddsummary/pddsummary.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/pdd/pddsummary/pddsummary.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-exportListModal .modal-dialog{width:690px}.div-exportListModal .modal-dialog .modal-header{color:#FE0000}.div-exportListModal .modal-dialog .modal-body .div-splitLineWrapper .span-or{color:#EBEBEB}.div-exportListModal .modal-dialog .modal-body .div-splitLineWrapper .div-splitLine{padding-top:8px}.div-exportListModal .modal-dialog .modal-body .div-splitLineWrapper .div-splitLine .hr-splitLine{color:#EBEBEB}.div-exportListModal .modal-dialog .modal-body .div-exportDateWrapper .label-dateOfSubmissionFromTo{width:20px;float:left}.div-exportListModal .modal-dialog .modal-body .div-exportDateWrapper .label-dateOfSubmissionFrom,.div-exportListModal .modal-dialog .modal-body .div-exportDateWrapper .label-dateOfSubmissionTo{display:block}.div-exportListModal .modal-dialog .modal-body .div-exportDateWrapper input{width:232px}.div-pddSummaryWrapper .div-pddSummaryHeader{display:inline-flex;width:100%}.div-pddSummaryWrapper .div-pddSummaryHeader .h4-tableHeader{color:red}.div-pddSummaryWrapper .div-pddSummaryHeader .h4-noOfApplications{color:red;margin:auto 0px auto auto}.div-pddSummaryWrapper .table-pddSummary{width:100% !important;text-align:center}.div-pddSummaryWrapper .table-pddSummary .sorting_asc,.div-pddSummaryWrapper .table-pddSummary .sorting_desc{background-image:none;cursor:unset}.div-pddSummaryWrapper .div-goToPage-showPerPage{display:-webkit-box;position:relative}.div-pddSummaryWrapper .div-goToPage-showPerPage .div-goToPage{display:flex;position:relative;left:38%}.div-pddSummaryWrapper .div-goToPage-showPerPage .div-goToPage .span-goToPage{line-height:50px;color:gray}.div-pddSummaryWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper{display:inline-block}.div-pddSummaryWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_left{margin-left:10px;border-radius:10px 0px 0px 10px;border-right:0px;text-align:right;color:gray}.div-pddSummaryWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .input-goToPage_right{position:relative;left:-10px;color:gray;border-left:0px;border-radius:0px}.div-pddSummaryWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper input{width:80px;background-color:transparent}.div-pddSummaryWrapper .div-goToPage-showPerPage .div-goToPage .div-goToPage_wrapper .button-goToPage_go{position:relative;left:-12px;border-radius:0px 10px 10px 0px;background-color:#c8c8c8;color:black}.div-pddSummaryWrapper .div-goToPage-showPerPage .ul-showPerPage{list-style:none !important;display:flex;position:absolute;top:-26px;right:0px;float:right}.div-pddSummaryWrapper .div-goToPage-showPerPage .ul-showPerPage li{margin:0px 10px}.div-pddSummaryWrapper .div-goToPage-showPerPage .ul-showPerPage .inactive-gray{color:gray}.div-pddSummaryWrapper .div-goToPage-showPerPage .ul-showPerPage .active-red{color:red}\n"

/***/ }),

/***/ "./src/app/components/pdd/pddsummary/pddsummary.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pdd/pddsummary/pddsummary.component.ts ***!
  \*******************************************************************/
/*! exports provided: PddsummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PddsummaryComponent", function() { return PddsummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _services_pdd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pdd.service */ "./src/app/services/pdd.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_convertformat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/convertformat */ "./src/app/utils/convertformat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};









var PddsummaryComponent = /** @class */ (function () {
    function PddsummaryComponent(pddService, renderer2, excelService) {
        this.pddService = pddService;
        this.renderer2 = renderer2;
        this.excelService = excelService;
        this.displayedColumns = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["default"]["PDDSummary"];
        this.displayedColumnsName = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["default"]["PDDSummaryField"];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.currPage = 1;
        this.currDate = new Date();
        this.noOfApplications = 1;
        this.exportListForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            selectedOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('all'),
            dateOfSubmissionFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            dateOfSubmissionTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        //map the page num to the jquery elem of page num
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "active-red",
            "20": "inactive-gray",
        };
        //for handling the datatables's link
        //use router.navigate instead of href in dom 'a', as href will refresh whole page
        this.onclickEventInit = false; //onchange would reset this back to false
    }
    PddsummaryComponent.prototype.ngOnChanges = function () {
        this.onclickEventInit = false; //no matter what whenever any changes happen, reset false first
    };
    PddsummaryComponent.prototype.ngOnInit = function () {
        //disable by default as select all is the default option of exportListForm
        this.exportListForm.controls['dateOfSubmissionFrom'].disable();
        this.exportListForm.controls['dateOfSubmissionTo'].disable();
        var colArr = [], dataArr = [];
        this.displayedColumnsName.forEach(function (val) {
            colArr.push({
                data: val
            });
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            scrollX: true,
            scrollY: true,
            columnDefs: this.pddSummaryColumnDef(),
            ajax: this.pddSummaryAjax(),
            processing: true,
            serverSide: true,
            language: {
                info: "",
                paginate: {
                    first: '« first',
                    previous: '‹ prev',
                    next: 'next ›',
                    last: 'last »'
                },
                //display none length Menu and add a new custom menu
                // to change the hidden length menu
                lengthMenu: "",
            },
            searching: false,
            columns: colArr,
        };
        $('.table-pddSummary').on('page.dt', function (event, settings) {
            console.log('Page change:', event, settings);
            $('.input-goToPage_left').val((settings._iDisplayStart / settings.oInit.pageLength) + 1);
        });
        this.classToTrigger = [];
    };
    PddsummaryComponent.prototype.resetExportListForm = function () {
        this.exportListForm.reset();
        this.exportListForm.controls['dateOfSubmissionFrom'].disable();
        this.exportListForm.controls['dateOfSubmissionTo'].disable();
        this.exportListForm.controls['selectedOption'].setValue('all');
    };
    PddsummaryComponent.prototype.exportRecordList = function () {
        var _this = this;
        //having data-dismiss attr in <button type="submit"> will prevent the exportListForm from submitting
        $("#exportListModal").modal('toggle'); //so have to dismiss the "#exportListModal" modal here
        var sentParams = {};
        if (this.exportListForm.controls['selectedOption'].value !== 'all') {
            Object.assign(sentParams, this.exportListForm.controls['dateOfSubmissionFrom'].value ? {
                dateOfSubmissionFrom: _utils_convertformat__WEBPACK_IMPORTED_MODULE_8__["default"].dateToDDMMYYYY(this.exportListForm.controls['dateOfSubmissionFrom'].value)
            } : {});
            Object.assign(sentParams, this.exportListForm.controls['dateOfSubmissionTo'].value ? {
                dateOfSubmissionTo: _utils_convertformat__WEBPACK_IMPORTED_MODULE_8__["default"].dateToDDMMYYYY(this.exportListForm.controls['dateOfSubmissionTo'].value)
            } : {});
        }
        this.pddService.getPddSummaryExportList(sentParams, 'getExportList').subscribe(function (resp) {
            console.log(resp);
            _this.excelService.jsonExportAsExcelFile(resp.body, 'PDDSummary');
        }, function (error) {
            console.error('>>> Error getting export list in pddSummary');
        });
    };
    PddsummaryComponent.prototype.triggerAndClearSubmissionDate = function (isEnableOrDisable) {
        if (isEnableOrDisable === 'disable') {
            this.exportListForm.controls['dateOfSubmissionFrom'].disable();
            this.exportListForm.controls['dateOfSubmissionTo'].disable();
            this.exportListForm.controls['dateOfSubmissionFrom'].reset();
            this.exportListForm.controls['dateOfSubmissionTo'].reset();
        }
        else {
            this.exportListForm.controls['dateOfSubmissionFrom'].enable();
            this.exportListForm.controls['dateOfSubmissionTo'].enable();
        }
    };
    PddsummaryComponent.prototype.refreshTable = function () {
        var _this = this;
        var dTableInstance = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(this.dTable, "dtInstance");
        if (dTableInstance) {
            dTableInstance.then(function (dtInstance) {
                //redraw table only need these 2 funcs
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        }
    };
    PddsummaryComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    PddsummaryComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        //fetch the datatable's settings
        //since angular-datatables is not supporting changing table page in option yet
        //make use of settings.oApi._fnPageChange to change the page
        //this.dataTableSettings.oApi(this.dataTableSettings, [page: string / int], true)
        this.dataTableSettings = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])($.fn['dataTable'], 'settings[0]');
        //for handling the btn inside datatables
        if (!this.onclickEventInit) {
            this.onclickEventInit = true;
            this.bodyRendererListener = this.renderer2.listen("body", 'click', function (event) {
                _this.classToTrigger.forEach(function (elem, key) {
                });
            });
        }
    };
    PddsummaryComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        var toBeDestroyArray = ['bodyRendererListener', 'dtTrigger', 'dataTableAjaxSubscription'];
        toBeDestroyArray.forEach(function (elem, key) {
            if (_this[elem] && elem == 'bodyRendererListener') {
                _this.bodyRendererListener();
            }
            else if (_this[elem] && elem != 'bodyRendererListener') {
                _this[elem].unsubscribe();
            }
        });
    };
    //to set the min, max date of from / to once submissionfrom / to is changed
    PddsummaryComponent.prototype.dateOfSubmissionChange = function (e, fromOrTo) {
        this[(fromOrTo == 0) ? "minDateTo" : "maxDateFrom"] = e.value;
    };
    PddsummaryComponent.prototype.resetSubmissionFromTo = function () {
        this.minDateTo = null;
        this.maxDateFrom = new Date();
    };
    PddsummaryComponent.prototype.changeTablePerPage = function (val) {
        var _this = this;
        //reset all the length menu 's class to gray color
        this.mapToLengthMenuNum = {
            "5": "inactive-gray",
            "10": "inactive-gray",
            "20": "inactive-gray",
        };
        this.mapToLengthMenuNum[parseInt(val)] = "active-red";
        //reset the datatable after changing dtOptions to redraw the table
        this.dtOptions.pageLength = val; //change table's no of records
        this.dTable.dtInstance.then(function (dtInstance) {
            //redraw table only need these 2 funcs
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
        this.currPage = 1;
        $(".input-goToPage_left").val(1);
    };
    PddsummaryComponent.prototype.changeCurrTablePage = function (page) {
        if (page !== "" && /^\d+$/.test(page)) {
            console.log('Change to page: ' + page);
            var pageChangeStatus = this.dataTableSettings.oApi._fnPageChange(this.dataTableSettings, page - 1, true);
            console.log((pageChangeStatus) ? 'Current page changed to ' + page : "Fail to change page, page exceed no of page");
            this.currPage = page;
        }
    };
    PddsummaryComponent.prototype.pddSummaryColumnDef = function () {
        return [{
                targets: "_all",
                orderable: false,
                createdCell: function (td, cellData, rowData, row, col) {
                    //funcs
                    var convertDate = function (date) {
                        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    };
                    if (!cellData) {
                        $(td).html("<span>-</span>");
                    }
                    else if (cellData) {
                        switch (col) {
                            case 3:
                            case 7:
                            case 8: //date
                                if (cellData) {
                                    var dateSubstr = new Date(cellData.substr(0, 10));
                                    $(td).html("<span>" + convertDate(dateSubstr) + "</span>");
                                }
                                else {
                                    $(td).html("<span> - </span>");
                                }
                                break;
                            case 9:
                                var mapStatusToText = {
                                    1: "To apply for extension",
                                    2: "Applied extension",
                                    3: "Opt-out from this program",
                                    4: "Re-assigned"
                                };
                                var htmlStr = cellData ? mapStatusToText[parseInt(cellData)] : '';
                                $(td).html("<span>" + htmlStr + "</span>");
                                break;
                            case 10: //color ext text
                                var mapExtToColor = {
                                    0: "unset",
                                    1: "lightskyblue",
                                    2: "green",
                                    3: "red" //Rejected
                                };
                                var mapExtToText = {
                                    0: "",
                                    1: "To be reviewed",
                                    2: "Approved",
                                    3: "Rejected"
                                };
                                var txtColorStyle = "style=\"color:" + mapExtToColor[parseInt(String(cellData - 1))] + ";\"";
                                var htmlStr1 = cellData ? mapExtToText[parseInt(String(cellData - 1))] : '';
                                $(td).html("<span " + txtColorStyle + ">" + htmlStr1 + "</span>");
                                break;
                            case 11:
                                $(td).html("<span class=\"span-csremarks\">" + (cellData ? cellData : '') + "</span>");
                                break;
                            default:
                                $(td).html(((typeof cellData == "string" && cellData.length > 25) ? "<span class=\"css-wordBreakAll\">" : "<span>") +
                                    (cellData ? cellData : '-') + "</span>");
                                break;
                        }
                    }
                }
            }];
    };
    PddsummaryComponent.prototype.pddSummaryAjax = function () {
        var _this = this;
        return function (params, callback, settings) {
            var unusedParams, draw, start, length;
            (draw = params.draw, start = params.start, length = params.length, params, unusedParams = __rest(params, ["draw", "start", "length"])); //do without columns attr inside params
            var queryParams = {
                draw: draw, start: start, length: length
            };
            _this.dataTableAjaxSubscription = _this.pddService.getPddSummary(queryParams, 'dataTable').subscribe(function (resp) {
                _this.noOfPage = Math.ceil(resp.body.recordsTotal / _this.dtOptions.pageLength);
                _this.currPage = (resp.body.recordsFiltered >= 1) ? _this.currPage : 0;
                _this.noOfApplications = resp.body.recordsFiltered;
                //
                callback({
                    data: resp.body.data,
                    recordsTotal: resp.body.recordsTotal,
                    recordsFiltered: resp.body.recordsFiltered
                });
            });
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], PddsummaryComponent.prototype, "dTable", void 0);
    PddsummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pddsummary',
            template: __webpack_require__(/*! ./pddsummary.component.html */ "./src/app/components/pdd/pddsummary/pddsummary.component.html"),
            styles: [__webpack_require__(/*! ./pddsummary.component.scss */ "./src/app/components/pdd/pddsummary/pddsummary.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pdd_service__WEBPACK_IMPORTED_MODULE_2__["PddService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], PddsummaryComponent);
    return PddsummaryComponent;
}());



/***/ }),

/***/ "./src/app/constants/constants.ts":
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    localOrVm: 'local',
    route: {
        //agent assignment
        AgentAssignGI: 'easAgentAssignGI',
        AgentAssignCS: 'easAgentAssignCS',
        AgentDetail: 'easAgentDetail',
        CampaignDetail: 'easCampaignDetail',
        ClientDetail: 'easClientDetail',
        ViewEmail: 'easViewEmail',
        //lead response
        AgentInterface: 'easAgentInterface',
        APInterface: 'easAPInterface',
        AOInterface: 'easAOInterface',
        //PDD
        LeadExtensionAppl: "easLeadExtensionAppl",
        LeadExtensionApproval: "easLeadExtensionApproval",
        LeadSummary: "easLeadSummary",
        //edm
        EDM: "easEDM"
    },
    CSSearchRecordColumnField: [
        'fullName', 'emailAddr', 'mobileNo', 'submissionDate',
        'prodClass', 'polNo', 'birthDate',
        'idCardNo', 'gender', 'giOptOut',
        'lifeOptOut', 'campaignCode',
        'agentInfo',
        'firstContactDate', 'contactCustomer',
        'assignmentStatus', 'agentAccountExpiryDate',
        'pruchatEmailSendDate',
        'smsEmailSendDate'
    ],
    GISearchRecordColumnField: [
        'prodClass', 'polNo', 'lifePolNo', 'applicantName',
        'idNo', 'giOptOut', 'lifeOptOut', 'currentAgentName',
        'currentAgentCode', 'currentAgentPhone', 'dateOfSubmission',
        'campaignCode', 'assignmentType',
        'preferredAgentName', 'preferredAgentPhone',
        'agentInfo',
        'agentSentDate', 'customerSentDate'
    ],
    DetailSearchRecordColumnName: ["Agent Code", "Agent Name", "Email Address", "Agent Phone",
        "Last Assignment Date", "Assign", "On Leave"],
    DetailSearchRecordColumnField: ["agentCode", "agentName", "email",
        "agentPhone", "lastAssignDate", "assign", "onLeave"],
    DetailSearchRecordOldPoolTypeColumnName: ["Agent Code", "Agent Name", "Email Address", "Agent Phone",
        "Last Assignment Date", "Assign"],
    DetailSearchRecordOldPoolTypeColumnField: ["agentCode", "agentName", "email",
        "agentPhone", "lastAssignDate", "assign"],
    AgentInterfaceColumnField: ["customerInfo", "phone", "email", "submissionDt", "prod",
        "agentAssignmentDt", "firstContactDt", "assignmentInfo", "applicationExt",
        "csRemarks", "upsellLifePolNo", "upsellLifeProd", "afyp"],
    APUplineInterfaceColumnField: ["agentCd", "agentName", "assignmentDt", "assignmentStatus", "noOfLeads"],
    AOInterfaceColumnField: ["agentCode", "customerInfo", "phone", "email", "submissionDt", "prod",
        "agentAssignmentDt", "firstContactDt", "assignmentInfo", "applicationExt",
        "csRemarks", "upsellLifePolNo", "upsellLifeProd", "afyp"],
    EDMListColumnField: ["template", "communicationCode", "campaignTitle",
        "lastEdit", "sentTime", "action"],
    EDMStep2Field: ["checkbox", "customerName", "gender", "email", "birthYear", "birthMonth",
        "campaignCd", "partnerCd", "partnerName", "assignmentType", "dateOfSubmission"],
    EDMHistoryCustomerField: ["customerName", "email", "status", "sentTime"],
    EDMHistoryCustomer: ["Customer Name", "Email Address", "Status", "Sent Time"],
    PDDList: ["Application Date", "Agent Name", "Agent Code", "Customer Name", "Customer Phone no.",
        "Customer email", "Assignment Date", "First Contact Date", "Approval Status", "Remarks"],
    PDDListField: ["submissionDt", "agentName", "agentCode", "customerName", "customerPhone",
        "customerEmail", "agentAssignmentDt", "firstContactDt", "approvalStatus", "remarks"],
    PDDSummary: ["Customer Name", "Customer Phone no.", "Customer email", "Submission date",
        "Product", "Agent Name", "Agent Code", "Date of Assignment", "First Contact Date",
        "Assignment Status", "Application of Extension", "CS Remarks", "Upsell Prulife Pol No",
        "Upsell Life Product", "APE (HK$)"],
    PDDSummaryField: ["customerName", "customerPhone", "customerEmail", "submissionDt",
        "prodClass", "agentName", "agentCode", "assignmentDt", "firstContactDt",
        "assignmentStatus", "applicationExt", "csRemarks", "upsellLifePolNo",
        "upsellLifeProd", "ape"],
    NEW_POOL_TYPE: 1,
    OLD_POOL_TYPE: 2,
    ADDITIONAL_POOL_TYPE: 3,
    STATUS_CODE: {
        SUCCESS_CODE: "00000",
        NO_EMAIL_CODE: "00001",
        NO_SMS_CODE: "00002",
        NO_SMS_EMAIL_CODE: "00003",
        NO_COMM_CODE: "00011",
        TEMP_MISS_CODE: "00012",
        REMARKS_EXCEED_MAX_LENGTH_CODE: "00013",
        NO_CUSTOMER_CHOSEN: "00014",
        POST_PDD_APPROVAL_FAIL_CODE: "00015",
        POST_CS_CLIENT_DTL_CODE: "00016"
    },
    MSG: {
        PRUCHAT_EMAIL_SUCCESS: "PruChat and email has been sent successfully",
        SMS_EMAIL_SUCCESS: "SMS and email has been sent successfully"
    }
});


/***/ }),

/***/ "./src/app/guards/menu.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/menu.guard.ts ***!
  \**************************************/
/*! exports provided: MenuGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGuard", function() { return MenuGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loginUser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loginUser.service */ "./src/app/services/loginUser.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuGuard = /** @class */ (function () {
    function MenuGuard(loginUserService) {
        this.loginUserService = loginUserService;
        this.allowedRoutes = []; // retrieved from loginUserService
        this.detailPages = ['easAgentDetail', 'easCampaignDetail', 'easViewEmail',
            'easEDMManagementForm', 'easEDMHistory',
            'easLeadExtensionApproval'];
    }
    MenuGuard.prototype.canActivate = function (next, state) {
        var allowedRoutes = this.loginUserService.allowedRoutes;
        var currUrl = state.url.substr(1);
        var matchAllowedRoutesFound = false, matchDetailPageFound = false;
        // *** _forEach would be broken when returning false within ***
        //check if currurl is one of the main menu pages
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(allowedRoutes, function (elem, key) {
            if (elem === currUrl) {
                matchAllowedRoutesFound = true;
                return false; //to break out of _forEach loop but wouldnt return this func yet
            }
        });
        //check if the currurl is one of the detail pages, if searching the curr url in main menu group fails
        if (!matchAllowedRoutesFound) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(this.detailPages, function (elem, key) {
                if (elem === currUrl) {
                    if (['easAgentDetail', 'easCampaignDetail', 'easViewEmail'].indexOf(elem) !== -1) { //if it belongs to agent assignment main group
                        //check if the user has 'easAgentAssignGI' or 'easAgentAssignCS' in his allowedRoutes
                        if (allowedRoutes.indexOf('easAgentAssignGI') !== -1 || allowedRoutes.indexOf('easAgentAssignCS') !== -1) {
                            matchDetailPageFound = true;
                            return false; //to break out of _forEach loop but wouldnt return this func yet
                        }
                    }
                    else if (['easEDMManagementForm', 'easEDMHistory'].indexOf(elem) !== -1) { //edm's detail page
                        if (allowedRoutes.indexOf('easEDM') !== -1) {
                            matchDetailPageFound = true;
                            return false; //to break out of _forEach loop but wouldnt return this func yet
                        }
                    }
                    else if (elem === 'easLeadExtensionApproval') { // pdd's detail page
                        if (allowedRoutes.indexOf('easLeadExtensionAppl') !== -1) {
                            matchDetailPageFound = true;
                            return false; //to break out of _forEach loop but wouldnt return this func yet
                        }
                    }
                }
            });
        }
        //for ease of debugging only
        if (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') {
            return true;
        } //should be removed once this proj is finished
        return matchAllowedRoutesFound || matchDetailPageFound;
    };
    MenuGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_loginUser_service__WEBPACK_IMPORTED_MODULE_1__["LoginUserService"]])
    ], MenuGuard);
    return MenuGuard;
}());



/***/ }),

/***/ "./src/app/models/pdd.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/pdd.model.ts ***!
  \*************************************/
/*! exports provided: PddLeadExtApprovalDtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PddLeadExtApprovalDtl", function() { return PddLeadExtApprovalDtl; });
var PddLeadExtApprovalDtl = /** @class */ (function () {
    function PddLeadExtApprovalDtl() {
    }
    return PddLeadExtApprovalDtl;
}());



/***/ }),

/***/ "./src/app/modules/material/customdatepicker/customdatepicker.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/material/customdatepicker/customdatepicker.module.ts ***!
  \******************************************************************************/
/*! exports provided: CustomDateAdapter, CustomdatepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateAdapter", function() { return CustomDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomdatepickerModule", function() { return CustomdatepickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MY_DATE_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var CustomDateAdapter = /** @class */ (function (_super) {
    __extends(CustomDateAdapter, _super);
    function CustomDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDateAdapter.prototype.format = function (date, displayFormat) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return day + "/" + month + "/" + year;
    };
    return CustomDateAdapter;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]));

var CustomdatepickerModule = /** @class */ (function () {
    function CustomdatepickerModule() {
    }
    CustomdatepickerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [],
            exports: [],
            providers: [
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: CustomDateAdapter },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_DATE_FORMATS }
            ]
        })
    ], CustomdatepickerModule);
    return CustomdatepickerModule;
}());



/***/ }),

/***/ "./src/app/pages/agentassignment/agentassignment.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/agentassignment/agentassignment.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\">\n  <div id='wrap'>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div id=\"page-heading\">\n          <ol class=\"breadcrumb\">\n            <li [ngClass]=\"currSubPage=='home' ? 'active' : ''\">\n              <a routerLink=\"/\">Home</a>\n            </li>\n            <li *ngIf=\"['easAgentAssignGI','easAgentAssignCS','easAgentDetail','easCampaignDetail','easClientDetail','easViewEmail'].indexOf(currSubPage) !== -1\"\n                [ngClass]=\"['easAgentAssignGI','easAgentAssignCS'].indexOf(currSubPage) !== -1 ? 'active' : ''\">\n              <a routerLink=\"/{{agentassignmentService.currServiceName}}\">Agent Assignment</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easAgentDetail'\" [ngClass]=\"currSubPage=='easAgentDetail' ? 'active' : ''\">\n              <a>Agent Details</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easCampaignDetail'\" [ngClass]=\"currSubPage=='easCampaignDetail' ? 'active' : ''\">\n              <a>Campaign Details</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easClientDetail'\" [ngClass]=\"currSubPage=='easClientDetail' ? 'active' : ''\">\n              <a>Client Details</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easViewEmail'\" [ngClass]=\"currSubPage=='easViewEmail' ? 'active' : ''\">\n              <a>View Email</a>\n            </li>\n          </ol>\n        </div>\n      </div>\n      <app-searchcriteria\n        *ngIf=\"['easAgentAssignGI','easAgentAssignCS','easAgentDetail'].indexOf(currSubPage) !== -1\"\n        [currSubPage]=\"currSubPage\"\n      >\n      </app-searchcriteria>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"panel\">\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 clearfix\">\n                  <app-searchrecord\n                    *ngIf=\"['easAgentAssignGI','easAgentAssignCS'].indexOf(currSubPage) !== -1\"\n                    [setPopUpMsg]=\"setPopUpMsg\"\n                    [popUpMsg]=\"popUpMsg\"\n                    [currSubPage]=\"currSubPage\"\n                    >\n                  </app-searchrecord>\n                  <app-detailssearchrecord\n                    *ngIf=\"currSubPage == 'easAgentDetail'\"\n                    [gobackRouteLink]=\"agentassignmentService.currServiceName\"\n                    >\n                  </app-detailssearchrecord>\n                  <app-clientcampaigndetails\n                    *ngIf=\"currSubPage == 'easCampaignDetail' || currSubPage == 'easClientDetail'\"\n                    [currSubPage]=\"currSubPage\"\n                    [gobackRouteLink]=\"agentassignmentService.currServiceName\"\n                    >\n                  </app-clientcampaigndetails>\n                  <app-viewemail\n                    *ngIf=\"currSubPage == 'easViewEmail'\"\n                    [gobackRouteLink]=\"agentassignmentService.currServiceName\"\n                    >\n                  </app-viewemail>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div> <!-- container -->\n  </div> <!--wrap -->\n</div> <!-- page-content -->\n"

/***/ }),

/***/ "./src/app/pages/agentassignment/agentassignment.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/agentassignment/agentassignment.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".onLeaveModalForm .modal-header .modal-title{color:#FE0000}.onLeaveModalForm .modal-body .label-fromField,.onLeaveModalForm .modal-body .label-toField{display:block}.onLeaveModalForm .modal-body .material-icons{color:red}#selectBtnModal .modal-title{text-align:center}#selectBtnModal .a-selectYesBtn{float:left}\n"

/***/ }),

/***/ "./src/app/pages/agentassignment/agentassignment.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/agentassignment/agentassignment.component.ts ***!
  \********************************************************************/
/*! exports provided: AgentassignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentassignmentComponent", function() { return AgentassignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_agentAssign_searchrecord_searchrecord_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/agentAssign/searchrecord/searchrecord.component */ "./src/app/components/agentAssign/searchrecord/searchrecord.component.ts");
/* harmony import */ var _components_agentAssign_detailssearchrecord_detailssearchrecord_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/agentAssign/detailssearchrecord/detailssearchrecord.component */ "./src/app/components/agentAssign/detailssearchrecord/detailssearchrecord.component.ts");
/* harmony import */ var _components_agentAssign_searchcriteria_searchcriteria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/agentAssign/searchcriteria/searchcriteria.component */ "./src/app/components/agentAssign/searchcriteria/searchcriteria.component.ts");
/* harmony import */ var _components_agentAssign_viewemail_viewemail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/agentAssign/viewemail/viewemail.component */ "./src/app/components/agentAssign/viewemail/viewemail.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/agentassignment.service */ "./src/app/services/agentassignment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//in this parent component do the checking of router url
//then pass the result to children components
//children components have `currSubPage` and ngOnChanges
//to be notified by any changes of url in parent component(this component)
var AgentassignmentComponent = /** @class */ (function () {
    function AgentassignmentComponent(router, agentassignmentService) {
        this.router = router;
        this.agentassignmentService = agentassignmentService;
        //updating currSubPage in order to update the child component when url addr get changed
        this.currUrl = "";
        //refers to the current page the visitor is visiting, maybe subpage
        this.currSubPage = '';
        this.currSubPageJustUpdated = false;
    }
    AgentassignmentComponent.prototype.ngOnInit = function () {
        this.setCurrUrlAndSubPage();
        console.log(this.router);
    };
    AgentassignmentComponent.prototype.ngAfterViewInit = function () {
        this.bindChildComponents(); //must be binded AfterViewInit cause the viewChild
    };
    AgentassignmentComponent.prototype.setPopUpMsg = function (setVal) {
        this.popUpMsg = setVal;
        console.log('setPopUpMsg', this.popUpMsg);
    };
    AgentassignmentComponent.prototype.setCurrUrlAndSubPage = function () {
        var routePathArray = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(this.router, 'rawUrlTree.root.children.primary.segments', null);
        this.currSubPage = (!routePathArray) ? this.currSubPage : routePathArray[routePathArray.length - 1].path;
    };
    AgentassignmentComponent.prototype.ngAfterContentChecked = function () {
        if (this.currUrl !== this.router.url) { //url changes
            this.currUrl = this.router.url;
            this.setCurrUrlAndSubPage();
            this.currSubPageJustUpdated = true;
        }
    };
    AgentassignmentComponent.prototype.ngAfterViewChecked = function () {
        if (this.currSubPageJustUpdated) { //url changes
            //rebind the child components
            this.bindChildComponents();
            this.currSubPageJustUpdated = false;
        }
    };
    AgentassignmentComponent.prototype.bindChildComponents = function () {
        switch (this.currSubPage) {
            case 'easAgentAssignGI':
            case 'easAgentAssignCS':
                Object(lodash__WEBPACK_IMPORTED_MODULE_6__["set"])(this, 'searchCriteriaComponent.searchRecordComponent', this.searchRecordComponent);
                Object(lodash__WEBPACK_IMPORTED_MODULE_6__["set"])(this, 'searchRecordComponent.searchCriteriaComponent', this.searchCriteriaComponent);
                break;
            case 'easAgentDetail':
                Object(lodash__WEBPACK_IMPORTED_MODULE_6__["set"])(this, 'searchCriteriaComponent.detailSearchRecordComponent', this.detailSearchRecordComponent);
                Object(lodash__WEBPACK_IMPORTED_MODULE_6__["set"])(this, 'detailSearchRecordComponent.searchCriteriaComponent', this.searchCriteriaComponent);
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_agentAssign_searchrecord_searchrecord_component__WEBPACK_IMPORTED_MODULE_2__["SearchrecordComponent"]),
        __metadata("design:type", Object)
    ], AgentassignmentComponent.prototype, "searchRecordComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_agentAssign_detailssearchrecord_detailssearchrecord_component__WEBPACK_IMPORTED_MODULE_3__["DetailssearchrecordComponent"]),
        __metadata("design:type", Object)
    ], AgentassignmentComponent.prototype, "detailSearchRecordComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_agentAssign_searchcriteria_searchcriteria_component__WEBPACK_IMPORTED_MODULE_4__["SearchcriteriaComponent"]),
        __metadata("design:type", Object)
    ], AgentassignmentComponent.prototype, "searchCriteriaComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_agentAssign_viewemail_viewemail_component__WEBPACK_IMPORTED_MODULE_5__["ViewemailComponent"]),
        __metadata("design:type", Object)
    ], AgentassignmentComponent.prototype, "viewemailComponent", void 0);
    AgentassignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agentassignment',
            template: __webpack_require__(/*! ./agentassignment.component.html */ "./src/app/pages/agentassignment/agentassignment.component.html"),
            styles: [__webpack_require__(/*! ./agentassignment.component.scss */ "./src/app/pages/agentassignment/agentassignment.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_agentassignment_service__WEBPACK_IMPORTED_MODULE_7__["AgentassignmentService"]])
    ], AgentassignmentComponent);
    return AgentassignmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/edm/edm.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/edm/edm.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\">\n  <div id='wrap'>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div id=\"page-heading\">\n          <ol class=\"breadcrumb\">\n            <li [ngClass]=\"currSubPage=='home' ? 'active' : ''\">\n              <a routerLink=\"/\">Home</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easEDM' || currSubPage=='easEDMManagementForm' || currSubPage=='easEDMHistory'\" [ngClass]=\"currSubPage=='easEDMList' ? 'active' : ''\">\n              <a routerLink=\"/easEDM\">eDM</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easEDMManagementForm'\" [ngClass]=\"currSubPage=='easEDMManagementForm' ? 'active' : ''\">\n              <a routerLink=\"/easEDMManagementForm\">Send eDM</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easEDMHistory'\" [ngClass]=\"currSubPage=='easEDMHistory' ? 'active' : ''\">\n              <a routerLink=\"/easEDMHistory\">Detail</a>\n            </li>\n          </ol>\n        </div>\n      </div>\n      <app-edmlist *ngIf=\"currSubPage=='easEDM'\"></app-edmlist>\n      <app-edmhistory *ngIf=\"currSubPage=='easEDMHistory'\"></app-edmhistory>\n      <app-edmmanagementform *ngIf=\"currSubPage=='easEDMManagementForm'\"></app-edmmanagementform>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/edm/edm.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/edm/edm.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edm/edm.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/edm/edm.component.ts ***!
  \********************************************/
/*! exports provided: EdmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdmComponent", function() { return EdmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EdmComponent = /** @class */ (function () {
    function EdmComponent(router) {
        this.router = router;
        //updating currSubPage in order to update the child component when url addr get changed
        this.currUrl = "";
        //refers to the current page the visitor is visiting, maybe subpage
        this.currSubPage = '';
        this.currSubPageJustUpdated = false;
    }
    EdmComponent.prototype.setCurrUrlAndSubPage = function () {
        var routePathArray = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this.router, 'rawUrlTree.root.children.primary.segments', null);
        this.currSubPage = (!routePathArray) ? this.currSubPage : routePathArray[routePathArray.length - 1].path;
    };
    EdmComponent.prototype.ngAfterContentChecked = function () {
        if (this.currUrl !== this.router.url) { //url changes
            this.currUrl = this.router.url;
            this.setCurrUrlAndSubPage();
            this.currSubPageJustUpdated = true;
        }
    };
    EdmComponent.prototype.ngOnInit = function () {
    };
    EdmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edm',
            template: __webpack_require__(/*! ./edm.component.html */ "./src/app/pages/edm/edm.component.html"),
            styles: [__webpack_require__(/*! ./edm.component.scss */ "./src/app/pages/edm/edm.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EdmComponent);
    return EdmComponent;
}());



/***/ }),

/***/ "./src/app/pages/leadresponse/leadresponse.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/leadresponse/leadresponse.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\">\n  <div id='wrap'>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div id=\"page-heading\">\n          <ol class=\"breadcrumb\">\n            <li [ngClass]=\"currSubPage=='home' ? 'active' : ''\">\n              <a routerLink=\"/\">{{'LEAD_RESP_BREAD_CRUMB.HOME' | translate}}</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easAgentInterface'\" [ngClass]=\"currSubPage=='easAgentInterface' ? 'active' : ''\">\n              <a>{{'LEAD_RESP_BREAD_CRUMB.AGENT_INTERFACE' | translate}}</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easAPInterface'\" [ngClass]=\"currSubPage=='easAPInterface' ? 'active' : ''\">\n              <a>{{'LEAD_RESP_BREAD_CRUMB.AP_UPLINE_INTERFACE' | translate}}</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easAOInterface'\" [ngClass]=\"currSubPage=='easAOInterface' ? 'active' : ''\">\n              <a>{{'LEAD_RESP_BREAD_CRUMB.AO_INTERFACE' | translate}}</a>\n            </li>\n          </ol>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"panel\">\n            <app-aosearchcriteria *ngIf=\"currSubPage=='easAOInterface'\"></app-aosearchcriteria>\n            <app-apsearchcriteria *ngIf=\"currSubPage=='easAPInterface'\"></app-apsearchcriteria>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 clearfix\">                  \n                  <app-agentinterface *ngIf=\"currSubPage=='easAgentInterface'\"></app-agentinterface>\n                  <app-aointerface *ngIf=\"currSubPage=='easAOInterface'\"></app-aointerface>\n                  <app-apuplineinterface *ngIf=\"currSubPage=='easAPInterface'\"></app-apuplineinterface>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/leadresponse/leadresponse.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/leadresponse/leadresponse.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/leadresponse/leadresponse.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/leadresponse/leadresponse.component.ts ***!
  \**************************************************************/
/*! exports provided: LeadresponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadresponseComponent", function() { return LeadresponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_leadresponse_aointerface_aointerface_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/leadresponse/aointerface/aointerface.component */ "./src/app/components/leadresponse/aointerface/aointerface.component.ts");
/* harmony import */ var _components_leadresponse_apuplineinterface_apuplineinterface_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/leadresponse/apuplineinterface/apuplineinterface.component */ "./src/app/components/leadresponse/apuplineinterface/apuplineinterface.component.ts");
/* harmony import */ var _components_leadresponse_aointerface_aosearchcriteria_aosearchcriteria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component */ "./src/app/components/leadresponse/aointerface/aosearchcriteria/aosearchcriteria.component.ts");
/* harmony import */ var _components_leadresponse_apuplineinterface_apsearchcriteria_apsearchcriteria_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component */ "./src/app/components/leadresponse/apuplineinterface/apsearchcriteria/apsearchcriteria.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeadresponseComponent = /** @class */ (function () {
    function LeadresponseComponent(router) {
        this.router = router;
        //updating currSubPage in order to update the child component when url addr get changed
        this.currUrl = "";
        //refers to the current page the visitor is visiting, maybe subpage
        this.currSubPage = '';
        this.currSubPageJustUpdated = false;
    }
    LeadresponseComponent.prototype.setCurrUrlAndSubPage = function () {
        var routePathArray = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this.router, 'rawUrlTree.root.children.primary.segments', null);
        this.currSubPage = (!routePathArray) ? this.currSubPage : routePathArray[routePathArray.length - 1].path;
    };
    LeadresponseComponent.prototype.ngAfterViewInit = function () {
        this.bindChildComponents(); //must be binded AfterViewInit cause the viewChild
    };
    LeadresponseComponent.prototype.ngAfterContentChecked = function () {
        if (this.currUrl !== this.router.url) { //url changes
            this.currUrl = this.router.url;
            this.setCurrUrlAndSubPage();
            this.currSubPageJustUpdated = true;
        }
    };
    LeadresponseComponent.prototype.ngAfterViewChecked = function () {
        if (this.currSubPageJustUpdated) { //url changes
            //rebind the child components
            this.bindChildComponents();
            this.currSubPageJustUpdated = false;
        }
    };
    LeadresponseComponent.prototype.bindChildComponents = function () {
        if (this.currSubPage === 'easAOInterface') {
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(this, 'aoSearchCriteriaComponent.aoInterfaceComponent', this.aoInterfaceComponent);
        }
        else if (this.currSubPage === 'easAPInterface') {
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(this, 'apSearchCriteriaComponent.apuplineinterfaceComponent', this.apuplineinterfaceComponent);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_leadresponse_aointerface_aointerface_component__WEBPACK_IMPORTED_MODULE_3__["AointerfaceComponent"]),
        __metadata("design:type", Object)
    ], LeadresponseComponent.prototype, "aoInterfaceComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_leadresponse_apuplineinterface_apuplineinterface_component__WEBPACK_IMPORTED_MODULE_4__["ApuplineinterfaceComponent"]),
        __metadata("design:type", Object)
    ], LeadresponseComponent.prototype, "apuplineinterfaceComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_leadresponse_aointerface_aosearchcriteria_aosearchcriteria_component__WEBPACK_IMPORTED_MODULE_5__["AosearchcriteriaComponent"]),
        __metadata("design:type", Object)
    ], LeadresponseComponent.prototype, "aoSearchCriteriaComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_leadresponse_apuplineinterface_apsearchcriteria_apsearchcriteria_component__WEBPACK_IMPORTED_MODULE_6__["ApsearchcriteriaComponent"]),
        __metadata("design:type", Object)
    ], LeadresponseComponent.prototype, "apSearchCriteriaComponent", void 0);
    LeadresponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leadresponse',
            template: __webpack_require__(/*! ./leadresponse.component.html */ "./src/app/pages/leadresponse/leadresponse.component.html"),
            styles: [__webpack_require__(/*! ./leadresponse.component.scss */ "./src/app/pages/leadresponse/leadresponse.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LeadresponseComponent);
    return LeadresponseComponent;
}());



/***/ }),

/***/ "./src/app/pages/pdd/pdd.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/pdd/pdd.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\">\n  <div id='wrap'>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div id=\"page-heading\">\n          <ol class=\"breadcrumb\">\n            <li [ngClass]=\"currSubPage=='home' ? 'active' : ''\">\n              <a routerLink=\"/\">Home</a>\n            </li>\n            <li *ngIf=\"['easLeadExtensionAppl', 'easLeadExtensionApproval', 'easLeadSummary'].indexOf(currSubPage) !== -1\"\n                [ngClass]=\"currSubPage === 'easLeadExtensionAppl' ? 'active' : ''\">\n              <a routerLink=\"/easLeadExtensionAppl\">PDD</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easLeadExtensionApproval'\" [ngClass]=\"currSubPage=='easLeadExtensionApproval' ? 'active' : ''\">\n              <a>Lead extension approval</a>\n            </li>\n            <li *ngIf=\"currSubPage=='easLeadSummary'\" [ngClass]=\"currSubPage=='easLeadSummary' ? 'active' : ''\">\n              <a>Summary</a>\n            </li>\n          </ol>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"panel\">\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 clearfix\">\n                  <app-pddlist *ngIf=\"currSubPage=='easLeadExtensionAppl'\"></app-pddlist>\n                  <app-pddleadextapproval *ngIf=\"currSubPage=='easLeadExtensionApproval'\"></app-pddleadextapproval>\n                  <app-pddsummary *ngIf=\"currSubPage=='easLeadSummary'\"></app-pddsummary>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pdd/pdd.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/pdd/pdd.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pdd/pdd.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/pdd/pdd.component.ts ***!
  \********************************************/
/*! exports provided: PddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PddComponent", function() { return PddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PddComponent = /** @class */ (function () {
    function PddComponent(router) {
        this.router = router;
        //updating currSubPage in order to update the child component when url addr get changed
        this.currUrl = "";
        //refers to the current page the visitor is visiting, maybe subpage
        this.currSubPage = '';
        this.currSubPageJustUpdated = false;
    }
    PddComponent.prototype.setCurrUrlAndSubPage = function () {
        var routePathArray = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this.router, 'rawUrlTree.root.children.primary.segments', null);
        this.currSubPage = (!routePathArray) ? this.currSubPage : routePathArray[routePathArray.length - 1].path;
    };
    PddComponent.prototype.ngAfterContentChecked = function () {
        if (this.currUrl !== this.router.url) { //url changes
            this.currUrl = this.router.url;
            this.setCurrUrlAndSubPage();
            this.currSubPageJustUpdated = true;
        }
    };
    PddComponent.prototype.ngOnInit = function () {
    };
    PddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdd',
            template: __webpack_require__(/*! ./pdd.component.html */ "./src/app/pages/pdd/pdd.component.html"),
            styles: [__webpack_require__(/*! ./pdd.component.scss */ "./src/app/pages/pdd/pdd.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PddComponent);
    return PddComponent;
}());



/***/ }),

/***/ "./src/app/services/agentassignment.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/agentassignment.service.ts ***!
  \*****************************************************/
/*! exports provided: AgentassignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentassignmentService", function() { return AgentassignmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgentassignmentService = /** @class */ (function () {
    function AgentassignmentService(http) {
        this.http = http;
        this.currServiceName = ""; //to determine current assignment service is GI/CS
        this.currGISearchCriteria = {
            fullName: '',
            policyNo: '',
            mobileNo: '',
            emailAddr: '',
            idCardNo: '',
            dateOfSubmissionFrom: new Date(new Date().setDate(new Date().getDate() - 3)),
            dateOfSubmissionTo: new Date(new Date().setDate(new Date().getDate() - 1)),
            assignmentOption: 'A'
        };
        this.currCSSearchCriteria = {
            fullName: '',
            mobileNo: '',
            emailAddr: '',
            idCardNo: '',
            dateOfSubmissionFrom: '',
            dateOfSubmissionTo: '',
            assignmentOption: 'A',
            contactCustomerOption: '',
            assignmentStatusOption: ''
        };
    }
    AgentassignmentService.prototype.setCurrCriteria = function (varName, criteriaObj) {
        this[varName] = criteriaObj;
    };
    //expected val = easAgentAssignGI | easAgentAssignGI
    //set currServiceName(name : string) {this._currServiceName = name;}
    //  get currServiceName() : string {return this._currServiceName;}
    //type : dataTable | searchCriteria | sendParams
    AgentassignmentService.prototype.getOrPostFunc = function (url, params, getOrPost, type) {
        var sentParams;
        switch (type) {
            case 'dataTable':
            case 'viewEmail':
            case 'getPoolType':
                sentParams = {
                    observe: "response",
                    params: params
                };
                break;
            case 'campaignDetails':
            case 'clientDetails':
                sentParams = {
                    observe: "response"
                };
                break;
            case 'sendParams':
                sentParams = params;
                break;
        }
        return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
    };
    //dataTable
    AgentassignmentService.prototype.getAgentAssignmentRecord = function (params, type, currSubPage) {
        if (currSubPage === 'easAgentAssignCS') {
            return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
                this.getOrPostFunc('http://localhost:4200/eas/assets/data/searchRecordCS.json', params, 'get', type) :
                this.getOrPostFunc("/eas/api/agent/getCustomerList", params, 'get', type);
        }
        else {
            return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
                this.getOrPostFunc('http://localhost:4200/eas/assets/data/searchRecord.json', params, 'get', type) :
                this.getOrPostFunc("/eas/api/agent/getPolicyList", params, 'get', type);
        }
    };
    //dataTable
    AgentassignmentService.prototype.getAgentDetailRecord = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/searchRecordDetails.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/agent/getAgentDetails", params, 'get', type);
    };
    //currAgentPoolType
    AgentassignmentService.prototype.getCurrAgentPoolType = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/agentPoolType.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/agent/getCurrAgentPoolType", params, 'get', type);
    };
    //campaignDetails
    AgentassignmentService.prototype.getCampaignDetail = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/campaignDetail.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/campaign/detail/" + params.campaignCode, params, 'get', type);
    };
    //clientDetails
    AgentassignmentService.prototype.getClientDetail = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/clientDetail.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/client/detail/" + params.clientCode, params, 'get', type);
    };
    //viewEmail
    AgentassignmentService.prototype.getViewEmail = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/email.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/agent/viewEmail/" + params.lastEmailId, params, 'get', type);
    };
    //sendParams
    AgentassignmentService.prototype.postResetLeaveRecord = function (params, type) {
        var dummy_resp_obj = {
            code: ['00000'],
            errMsg: ['']
        };
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ? rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/submitOnLeave', params, 'post', type);
    };
    //sendParams
    AgentassignmentService.prototype.postSaveLeaveRecord = function (params, type) {
        var dummy_resp_obj = {
            code: ['00000'],
            errMsg: ['']
        };
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ? rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/submitOnLeave', params, 'post', type);
    };
    //sendParams  00000 and
    AgentassignmentService.prototype.postSelectYesLeaveRecord = function (params, type) {
        var dummy_resp_obj = {
            code: ['00000'],
            errMsg: ['']
        };
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ? rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/assignAgent', params, 'post', type);
    };
    //sendParams
    AgentassignmentService.prototype.postResendPruchat = function (params, type) {
        var dummy_resp_obj = {
            code: ['00000'],
            errMsg: ['']
        };
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ? rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/resendToAgent', params, 'post', type);
    };
    //sendParams
    AgentassignmentService.prototype.postResendSMS = function (params, type) {
        var dummy_resp_obj = {
            code: ['00000'],
            errMsg: ['']
        };
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ? rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/agent/resendToCust', params, 'post', type);
    };
    //sendParams
    AgentassignmentService.prototype.postClientDetail = function (params, type) {
        return this.getOrPostFunc('/eas/api/agent/saveClientDetail', params, 'post', type);
    };
    AgentassignmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AgentassignmentService);
    return AgentassignmentService;
}());



/***/ }),

/***/ "./src/app/services/edm.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/edm.service.ts ***!
  \*****************************************/
/*! exports provided: EdmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdmService", function() { return EdmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EdmService = /** @class */ (function () {
    function EdmService(http) {
        this.http = http;
        this.currServiceName = ""; //to determine current assignment service is GI/CS
    }
    //expected val = easAgentAssignGI | easAgentAssignGI
    //set currServiceName(name : string) {this._currServiceName = name;}
    //get currServiceName() : string {return this._currServiceName;}
    //type : dataTable | searchCriteria | sendParams
    EdmService.prototype.getOrPostFunc = function (url, params, getOrPost, type) {
        var sentParams;
        switch (type) {
            case 'dataTable':
            case 'retrieve':
            case 'getHistory':
                sentParams = {
                    observe: "response",
                    params: params
                };
                break;
            case 'sendParams':
                sentParams = params;
                break;
            default:
                sentParams = params;
                break;
        }
        return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
    };
    //dataTable
    EdmService.prototype.getEdmList = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmList.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/edm/getEdmList", params, 'get', type);
    };
    EdmService.prototype.getHistoryCustomerlist = function (params, type) {
        var localParams = { edmId: this.currEdmId };
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmHistoryCustomerlist.json', localParams, 'get', type) :
            this.getOrPostFunc("/eas/api/edm/getEdmHistoryCustomerList", localParams, 'get', type);
    };
    EdmService.prototype.getManagementFormSearchRecord = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmManagementFormSearchRecord.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/edm/getEdmStep2List", params, 'get', type);
    };
    EdmService.prototype.getHistoryTemplates = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/edmManagementFormHistoryTemplates.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/edm/getEdmHistory", params, 'get', type);
    };
    EdmService.prototype.getAllPolNoList = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/polNoList.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/edm/getAllPolNoList", params, 'get', type);
    };
    EdmService.prototype.postSubmitOrSave = function (params, type) {
        var dummy_resp_obj = {
            code: ['00000'],
            errMsg: ['']
        };
        //return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/edm/saveEdmTemplate', params, 'post', type);
        return this.getOrPostFunc('/eas/api/edm/saveEdmTemplate', params, 'post', type);
    };
    EdmService.prototype.postEdmReceiver = function (params, type) {
        var dummy_resp_obj = {
            code: ['00001', '00002'],
            errMsg: ['Duplicated communication code found.', 'No Template option is selected']
        };
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ? rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/edm/saveEdmReceiver', params, 'post', type);
    };
    EdmService.prototype.postSendTestEmail = function (params, type) {
        var dummy_resp_obj = {
            code: ['00001', '00002'],
            errMsg: ['Duplicated communication code found.', 'No Template option is selected']
        };
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_3__["default"].localOrVm === 'local') ? rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/edm/sendTestEmail', params, 'post', type);
    };
    EdmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EdmService);
    return EdmService;
}());



/***/ }),

/***/ "./src/app/services/excel.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/excel.service.ts ***!
  \*******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.jsonExportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/services/layout.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/layout.service.ts ***!
  \********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutService = /** @class */ (function () {
    function LayoutService(http) {
        this.http = http;
    }
    //type: leftsidebar
    LayoutService.prototype.getOrPostFunc = function (url, params, getOrPost, type) {
        var sentParams;
        switch (type) {
            case 'menuApi':
                sentParams = {
                    observe: "response",
                    params: params
                };
                break;
        }
        return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
    };
    //menuApi
    LayoutService.prototype.getLeftSideBarMenu = function (params, type) {
        //http://localhost:4200/eas
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["default"].localOrVm === 'local') ?
            this.getOrPostFunc(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(window, 'location.href') + '/assets/data/menu.json', params, 'get', type) :
            this.getOrPostFunc('/eas/api/common/menu', params, 'get', type);
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/services/leadresponse.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/leadresponse.service.ts ***!
  \**************************************************/
/*! exports provided: LeadresponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadresponseService", function() { return LeadresponseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeadresponseService = /** @class */ (function () {
    function LeadresponseService(http) {
        this.http = http;
    }
    //type : dataTable | sendParams
    LeadresponseService.prototype.getOrPostFunc = function (url, params, getOrPost, type) {
        var sentParams;
        switch (type) {
            case 'dataTable':
            case 'apuplineRecord':
                sentParams = {
                    observe: "response",
                    params: params
                };
                break;
            case 'sendParams':
                sentParams = __assign({}, params);
                break;
        }
        return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
    };
    //dataTable
    LeadresponseService.prototype.getAgentInterfaceRecord = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/agentInterface.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/leadresp/getAgentInterfaceList", params, 'get', type);
    };
    //dataTable
    LeadresponseService.prototype.getaoInterfaceRecord = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/aoInterface.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/leadresp/getAoInterfaceList", params, 'get', type);
    };
    //dataTable
    LeadresponseService.prototype.getapUplineInterfaceRecord = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["default"].localOrVm === 'local') ?
            this.getOrPostFunc("http://localhost:4200/eas/assets/data/apuplineInterface.json", params, 'get', type) :
            this.getOrPostFunc("/eas/api/leadresp/getApUplineInterfaceList", params, 'get', type);
    };
    LeadresponseService.prototype.postCustomerDtlRecord = function (params, type) {
        return this.getOrPostFunc('/eas/api/leadresp/updCustomerDetails', params, 'post', type);
    };
    LeadresponseService.prototype.postLeadExtRecord = function (params, type) {
        return this.getOrPostFunc('/eas/api/leadresp/updLeadExtension', params, 'post', type);
    };
    LeadresponseService.prototype.postUpsellDtlRecord = function (params, type) {
        return this.getOrPostFunc('/eas/api/leadresp/updUpsellDetails', params, 'post', type);
    };
    LeadresponseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LeadresponseService);
    return LeadresponseService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/loaderinterceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/loaderinterceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: LoaderinterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderinterceptorService", function() { return LoaderinterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/timeout */ "./node_modules/rxjs-compat/_esm5/add/operator/timeout.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoaderinterceptorService = /** @class */ (function () {
    function LoaderinterceptorService(loaderService, router) {
        this.loaderService = loaderService;
        this.router = router;
    }
    LoaderinterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        this.showLoader();
        return next.handle(req).timeout(600000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.onEnd();
            }
        }, function (err) {
            // let status = _get(err, 'status');
            // 0 for unknown error
            // if(status == 401 || status == 302 || status == 0){
            //   window.location.href = 'saml/logout';
            // }
            _this.onEnd();
        }));
    };
    LoaderinterceptorService.prototype.onEnd = function () {
        this.hideLoader();
    };
    LoaderinterceptorService.prototype.showLoader = function () {
        this.loaderService.show();
    };
    LoaderinterceptorService.prototype.hideLoader = function () {
        this.loaderService.hide();
    };
    LoaderinterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoaderinterceptorService);
    return LoaderinterceptorService;
}());



/***/ }),

/***/ "./src/app/services/loginUser.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/loginUser.service.ts ***!
  \***********************************************/
/*! exports provided: LoginUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserService", function() { return LoginUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginUserService = /** @class */ (function () {
    function LoginUserService(http) {
        this.http = http;
        this.allowedRoutes = []; //retrieved from LayoutComponent
        this.usercodeSbj = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.usercodeObs$ = this.usercodeSbj.asObservable();
    }
    LoginUserService.prototype.setCurrentLoginUserInfo = function (_username, _usercode) {
        this.username = _username;
        this.usercode = _usercode; //store the usercode for future reference
        this.usercodeSbj.next(_usercode); //emit usercode to all subscriber
    };
    LoginUserService.prototype.setAllowedRoutes = function (_allowedRoutes) {
        this.allowedRoutes = _allowedRoutes;
    };
    LoginUserService.prototype.setIsLeadRespRole = function (_isLeadRespRole) {
        this.isLeadResponseRole = _isLeadRespRole;
    };
    LoginUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginUserService);
    return LoginUserService;
}());



/***/ }),

/***/ "./src/app/services/pdd.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/pdd.service.ts ***!
  \*****************************************/
/*! exports provided: PddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PddService", function() { return PddService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PddService = /** @class */ (function () {
    function PddService(http) {
        this.http = http;
        this.currPolicyNo = "";
    }
    //set currServiceName(name : string) {this._currServiceName = name;}
    //  get currServiceName() : string {return this._currServiceName;}
    //type : dataTable | searchCriteria | sendParams
    PddService.prototype.getOrPostFunc = function (url, params, getOrPost, type) {
        var sentParams;
        switch (type) {
            case 'dataTable':
            case 'getExportList':
            case 'clientDetails':
                sentParams = {
                    observe: "response",
                    params: params
                };
                break;
            case 'sendParams':
                sentParams = params;
                break;
        }
        return (getOrPost === 'get') ? this.http.get(url, sentParams) : this.http.post(url, sentParams);
    };
    //dataTable
    PddService.prototype.getPddApplicationList = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/pddApplicationList.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/pdd/getPddApplicationList", params, 'get', type);
    };
    //dataTable
    PddService.prototype.getPddSummary = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/pddSummary.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/pdd/getPddSummary", params, 'get', type);
    };
    //clientDetails
    PddService.prototype.getPddClientDetails = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/pddClientDtls.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/pdd/getPddClientDetails", params, 'get', type);
    };
    //getExportList
    PddService.prototype.getPddSummaryExportList = function (params, type) {
        return (_constants_constants__WEBPACK_IMPORTED_MODULE_2__["default"].localOrVm === 'local') ?
            this.getOrPostFunc('http://localhost:4200/eas/assets/data/pddSummaryList.json', params, 'get', type) :
            this.getOrPostFunc("/eas/api/pdd/getPddSummaryExportList", params, 'get', type);
    };
    //sendParams
    PddService.prototype.postPddApproval = function (params, type) {
        var dummy_resp_obj = {
            code: ['00015'],
            errMsg: ['No Remarks. remarks are required']
        };
        //return (constants.localOrVm === 'local') ? Observable.of(dummy_resp_obj) : this.getOrPostFunc('/eas/api/pdd/postPddApproval', params, 'post', type);
        return this.getOrPostFunc('/eas/api/pdd/postPddApproval', params, 'post', type);
    };
    PddService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PddService);
    return PddService;
}());



/***/ }),

/***/ "./src/app/utils/convertformat.ts":
/*!****************************************!*\
  !*** ./src/app/utils/convertformat.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    dateToYYYYMMDD: function (date, splitChar, defaultStr) {
        if (defaultStr === void 0) { defaultStr = '-'; }
        return (date.getTime()) ? (date.getFullYear() + splitChar + (date.getMonth() + 1) + splitChar + date.getDate()) : defaultStr;
    },
    dateToMMDD: function (date, splitChar, defaultStr) {
        if (defaultStr === void 0) { defaultStr = '-'; }
        return (date.getTime()) ? ((date.getMonth() + 1) + splitChar + date.getDate()) : defaultStr;
    },
    dateToDDMMYYYY: function (date) {
        var day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
        var month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
        var year = date.getFullYear();
        return day.toString() + month.toString() + year.toString();
    }
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: true
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jeffcheung/angular/prudangularproj/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map