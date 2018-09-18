import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentassignmentComponent } from './agentassignment.component';

describe('AgentassignmentComponent', () => {
  let component: AgentassignmentComponent;
  let fixture: ComponentFixture<AgentassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
