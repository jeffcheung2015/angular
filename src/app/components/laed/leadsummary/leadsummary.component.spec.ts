import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsummaryComponent } from './leadsummary.component';

describe('LeadsummaryComponent', () => {
  let component: LeadsummaryComponent;
  let fixture: ComponentFixture<LeadsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
