import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PddindexComponent } from './pddindex.component';

describe('PddindexComponent', () => {
  let component: PddindexComponent;
  let fixture: ComponentFixture<PddindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PddindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PddindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
