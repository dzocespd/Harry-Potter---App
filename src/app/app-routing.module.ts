import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { SortingHatComponent } from './components/sorting-hat/sorting-hat.component';


const routes: Routes = [
  {path: '', component: MainWrapperComponent},
  {path: 'sortinghat', component: SortingHatComponent},
  {path: 'houses', loadChildren: () => import('./modules/houses/houses.module').then(houses => houses.HousesModule)},
  {path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then(chars => chars.CharactersModule)},
  {path: 'spells', loadChildren: () => import('./modules/spells/spells.module').then(spells => spells.SpellsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
