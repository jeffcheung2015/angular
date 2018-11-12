import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUserService } from '../services/loginUser.service';
import { forEach as _forEach } from 'lodash';
import constants from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class MenuGuard implements CanActivate {
  allowedRoutes : Array<String> = []; // retrieved from loginUserService

  constructor(private loginUserService : LoginUserService){
  }

  detailPages = ['easAgentDetail', 'easCampaignDetail', 'easViewEmail',
  'easEDMManagementForm', 'easEDMHistory',
  'easLeadExtensionApproval'];

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let allowedRoutes = this.loginUserService.allowedRoutes;
    let currUrl = state.url.substr(1);
    let matchAllowedRoutesFound = false, matchDetailPageFound = false;

    // *** _forEach would be broken when returning false within ***
    //check if currurl is one of the main menu pages
    _forEach(allowedRoutes, (elem, key)=>{
      if(elem === currUrl){
        matchAllowedRoutesFound = true;
        return false;//to break out of _forEach loop but wouldnt return this func yet
      }
    });

    //check if the currurl is one of the detail pages, if searching the curr url in main menu group fails
    if(!matchAllowedRoutesFound){
      _forEach(this.detailPages, (elem, key)=>{
        if(elem === currUrl){
          if(['easAgentDetail', 'easCampaignDetail', 'easViewEmail'].indexOf(elem) !== -1){ //if it belongs to agent assignment main group
            //check if the user has 'easAgentAssignGI' or 'easAgentAssignCS' in his allowedRoutes
            if(allowedRoutes.indexOf('easAgentAssignGI')!== -1 || allowedRoutes.indexOf('easAgentAssignCS') !== -1){
              matchDetailPageFound = true;
              return false;//to break out of _forEach loop but wouldnt return this func yet
            }
          }else if(['easEDMManagementForm', 'easEDMHistory'].indexOf(elem) !== -1){ //edm's detail page
            if(allowedRoutes.indexOf('easEDM') !== -1){
              matchDetailPageFound = true;
              return false;//to break out of _forEach loop but wouldnt return this func yet
            }
          }else if(elem === 'easLeadExtensionApproval'){// pdd's detail page
            if(allowedRoutes.indexOf('easLeadExtensionAppl') !== -1){
              matchDetailPageFound = true;
              return false;//to break out of _forEach loop but wouldnt return this func yet
            }
          }
        }
      });
    }
    //for ease of debugging only
    if(constants.localOrVm === 'local') { return true; } //should be removed once this proj is finished
    return matchAllowedRoutesFound || matchDetailPageFound;
  }
}
