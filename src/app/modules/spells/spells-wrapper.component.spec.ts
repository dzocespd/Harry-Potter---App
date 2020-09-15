import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsWrapperComponent } from './spells-wrapper.component';

describe('SpellsWrapperComponent', () => {
  let component: SpellsWrapperComponent;
  let fixture: ComponentFixture<SpellsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
