import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcampaigndetailsComponent } from './clientcampaigndetails.component';

describe('ClientcampaigndetailsComponent', () => {
  let component: ClientcampaigndetailsComponent;
  let fixture: ComponentFixture<ClientcampaigndetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcampaigndetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcampaigndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
