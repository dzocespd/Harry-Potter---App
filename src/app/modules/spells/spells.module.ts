import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellsRoutingModule } from './spells-routing.module';
import { SpellsWrapperComponent } from './spells-wrapper.component';
import { AllSpellsComponent } from './components/all-spells/all-spells.component';


@NgModule({
  declarations: [SpellsWrapperComponent, AllSpellsComponent],
  imports: [
    CommonModule,
    SpellsRoutingModule
  ]
})
export class SpellsModule { }
