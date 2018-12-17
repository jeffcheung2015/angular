import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfileinputComponent } from './customfileinput.component';

describe('CustomfileinputComponent', () => {
  let component: CustomfileinputComponent;
  let fixture: ComponentFixture<CustomfileinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomfileinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomfileinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
