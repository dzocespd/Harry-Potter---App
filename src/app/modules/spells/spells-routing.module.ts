import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSpellsComponent } from './components/all-spells/all-spells.component';


const routes: Routes = [
  {path: '', component: AllSpellsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellsRoutingModule { }
