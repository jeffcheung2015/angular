import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PddcampaigntableComponent } from './pddcampaigntable.component';

describe('PddcampaigntableComponent', () => {
  let component: PddcampaigntableComponent;
  let fixture: ComponentFixture<PddcampaigntableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PddcampaigntableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PddcampaigntableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
