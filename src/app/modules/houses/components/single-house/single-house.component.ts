import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { iHouses } from '../../../shared/interfaces/houses-interface';
import { HpHousesService } from '../../../shared/services/houses/hp-houses.service';

@Component({
  selector: 'app-single-house',
  templateUrl: './single-house.component.html',
  styleUrls: ['./single-house.component.css']
})
export class SingleHouseComponent implements OnInit {

  houseRespose: iHouses;

  singleHouseID: string;

  constructor(
    private _houses: HpHousesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.getHouse(params.houseID)
    });

  }

  getHouse(houseID: string) {
    this._houses.getSingleHouse(houseID).subscribe((house: iHouses) => {
      this.houseRespose = house;
    })
  }
}
