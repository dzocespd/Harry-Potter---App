import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesWrapperComponent } from './houses-wrapper.component';
import { AllHousesComponent } from './components/all-houses/all-houses.component';
import { SingleHouseComponent } from './components/single-house/single-house.component';


@NgModule({
  declarations: [HousesWrapperComponent, AllHousesComponent, SingleHouseComponent],
  imports: [
    CommonModule,
    HousesRoutingModule
  ]
})
export class HousesModule { }
