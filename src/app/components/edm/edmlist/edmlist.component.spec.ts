import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdmlistComponent } from './edmlist.component';

describe('EdmlistComponent', () => {
  let component: EdmlistComponent;
  let fixture: ComponentFixture<EdmlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdmlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
