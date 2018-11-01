import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadextensionapplComponent } from './leadextensionappl.component';

describe('LeadextensionapplComponent', () => {
  let component: LeadextensionapplComponent;
  let fixture: ComponentFixture<LeadextensionapplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadextensionapplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadextensionapplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
