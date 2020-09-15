import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersWrapperComponent } from './characters-wrapper.component';
import { AllCharactersComponent } from './components/all-characters/all-characters.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersWrapperComponent,
    children: [
      {path: '', component: AllCharactersComponent},
      {path: ':charID', component: SingleCharacterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
