import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllHousesComponent } from './components/all-houses/all-houses.component';
import { SingleHouseComponent } from './components/single-house/single-house.component';
import { HousesWrapperComponent } from './houses-wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: HousesWrapperComponent,
    children: [
      {path: '', component:AllHousesComponent},
      {path: ':houseID', component:SingleHouseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
