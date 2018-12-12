import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApsearchcriteriaComponent } from './apsearchcriteria.component';

describe('ApsearchcriteriaComponent', () => {
  let component: ApsearchcriteriaComponent;
  let fixture: ComponentFixture<ApsearchcriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApsearchcriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApsearchcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
