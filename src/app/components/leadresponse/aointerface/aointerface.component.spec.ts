import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AointerfaceComponent } from './aointerface.component';

describe('AointerfaceComponent', () => {
  let component: AointerfaceComponent;
  let fixture: ComponentFixture<AointerfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AointerfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AointerfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
