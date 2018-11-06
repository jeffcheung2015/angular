import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PddlistComponent } from './pddlist.component';

describe('PddlistComponent', () => {
  let component: PddlistComponent;
  let fixture: ComponentFixture<PddlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PddlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PddlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
