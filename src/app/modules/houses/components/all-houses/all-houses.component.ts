import { Component, OnInit} from '@angular/core';


import { iHouses } from '../../../shared/interfaces/houses-interface';
import { HpHousesService } from '../../../shared/services/houses/hp-houses.service';

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent implements OnInit {


  housesResponse: iHouses;
 

  constructor(
    private _houses: HpHousesService
  ) { }

  ngOnInit() {
    this._loadHouses();
  }

  private _loadHouses() {
    this._houses.getHouses().subscribe((houses: iHouses) => {
      this.housesResponse = houses;
    })
  } 
}
