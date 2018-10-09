import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadresponseComponent } from './leadresponse.component';

describe('LeadresponseComponent', () => {
  let component: LeadresponseComponent;
  let fixture: ComponentFixture<LeadresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
