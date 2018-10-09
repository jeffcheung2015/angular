import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadextensionapplicationComponent } from './leadextensionapplication.component';

describe('LeadextensionapplicationComponent', () => {
  let component: LeadextensionapplicationComponent;
  let fixture: ComponentFixture<LeadextensionapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadextensionapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadextensionapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
