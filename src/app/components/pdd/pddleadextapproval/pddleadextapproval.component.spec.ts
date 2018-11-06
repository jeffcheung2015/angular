import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PddleadextapprovalComponent } from './pddleadextapproval.component';

describe('PddleadextapprovalComponent', () => {
  let component: PddleadextapprovalComponent;
  let fixture: ComponentFixture<PddleadextapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PddleadextapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PddleadextapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
