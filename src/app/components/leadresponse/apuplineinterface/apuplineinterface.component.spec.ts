import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuplineinterfaceComponent } from './apuplineinterface.component';

describe('ApuplineinterfaceComponent', () => {
  let component: ApuplineinterfaceComponent;
  let fixture: ComponentFixture<ApuplineinterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApuplineinterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApuplineinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
