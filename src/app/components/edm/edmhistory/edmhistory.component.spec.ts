import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdmhistoryComponent } from './edmhistory.component';

describe('EdmhistoryComponent', () => {
  let component: EdmhistoryComponent;
  let fixture: ComponentFixture<EdmhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdmhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdmhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
