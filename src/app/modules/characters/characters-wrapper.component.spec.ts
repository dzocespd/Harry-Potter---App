import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersWrapperComponent } from './characters-wrapper.component';

describe('CharactersWrapperComponent', () => {
  let component: CharactersWrapperComponent;
  let fixture: ComponentFixture<CharactersWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
