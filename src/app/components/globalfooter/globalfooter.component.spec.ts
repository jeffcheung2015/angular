import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalfooterComponent } from './globalfooter.component';

describe('GlobalfooterComponent', () => {
  let component: GlobalfooterComponent;
  let fixture: ComponentFixture<GlobalfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
