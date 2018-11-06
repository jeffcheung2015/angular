import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PddsummaryComponent } from './pddsummary.component';

describe('PddsummaryComponent', () => {
  let component: PddsummaryComponent;
  let fixture: ComponentFixture<PddsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PddsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PddsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
