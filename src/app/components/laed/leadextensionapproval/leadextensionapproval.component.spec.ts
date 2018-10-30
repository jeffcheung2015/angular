import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadextensionapprovalComponent } from './leadextensionapproval.component';

describe('LeadextensionapprovalComponent', () => {
  let component: LeadextensionapprovalComponent;
  let fixture: ComponentFixture<LeadextensionapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadextensionapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadextensionapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
