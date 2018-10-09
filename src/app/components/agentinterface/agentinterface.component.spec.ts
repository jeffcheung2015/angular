import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentinterfaceComponent } from './agentinterface.component';

describe('AgentinterfaceComponent', () => {
  let component: AgentinterfaceComponent;
  let fixture: ComponentFixture<AgentinterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentinterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
