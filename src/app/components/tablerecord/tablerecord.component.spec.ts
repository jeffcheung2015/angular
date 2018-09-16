import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerecordComponent } from './tablerecord.component';

describe('TablerecordComponent', () => {
  let component: TablerecordComponent;
  let fixture: ComponentFixture<TablerecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablerecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
