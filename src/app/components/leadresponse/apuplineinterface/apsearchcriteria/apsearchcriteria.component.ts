import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-apsearchcriteria',
  templateUrl: './apsearchcriteria.component.html',
  styleUrls: ['./apsearchcriteria.component.scss']
})
export class ApsearchcriteriaComponent implements OnInit  {
  apuplineinterfaceComponent;

  apsearchForm = new FormGroup({
    agentCode : new FormControl('', [Validators.pattern('[0-9a-zA-Z]+')])
  });

  constructor() {}
  ngOnInit() {}

  onSubmitSearchCriteria(){
    if(this.apsearchForm.status !== 'VALID'){
      console.error('>>> Invalid searchCriteria inputs');
      return null;
    }

    let agentCode = this.apsearchForm.value.agentCode;

    let searchCriteriaArr = [agentCode];
    this.apuplineinterfaceComponent.refreshAndReloadSearchRecordTable(searchCriteriaArr);
  }
}
