import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailssearchrecordComponent } from './detailssearchrecord.component';

describe('DetailssearchrecordComponent', () => {
  let component: DetailssearchrecordComponent;
  let fixture: ComponentFixture<DetailssearchrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailssearchrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailssearchrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
