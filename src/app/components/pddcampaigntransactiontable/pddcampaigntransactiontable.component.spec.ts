import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PddcampaigntransactiontableComponent } from './pddcampaigntransactiontable.component';

describe('PddcampaigntransactiontableComponent', () => {
  let component: PddcampaigntransactiontableComponent;
  let fixture: ComponentFixture<PddcampaigntransactiontableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PddcampaigntransactiontableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PddcampaigntransactiontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
