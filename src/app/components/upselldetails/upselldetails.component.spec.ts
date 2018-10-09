import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpselldetailsComponent } from './upselldetails.component';

describe('UpselldetailsComponent', () => {
  let component: UpselldetailsComponent;
  let fixture: ComponentFixture<UpselldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpselldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpselldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
