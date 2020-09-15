import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersWrapperComponent } from './characters-wrapper.component';
import { AllCharactersComponent } from './components/all-characters/all-characters.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';


@NgModule({
  declarations: [CharactersWrapperComponent, AllCharactersComponent, SingleCharacterComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
