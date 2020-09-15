import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesWrapperComponent } from './houses-wrapper.component';

describe('HousesWrapperComponent', () => {
  let component: HousesWrapperComponent;
  let fixture: ComponentFixture<HousesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
