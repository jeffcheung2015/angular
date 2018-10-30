import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdmmanagementformComponent } from './edmmanagementform.component';

describe('EdmmanagementformComponent', () => {
  let component: EdmmanagementformComponent;
  let fixture: ComponentFixture<EdmmanagementformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdmmanagementformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdmmanagementformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
