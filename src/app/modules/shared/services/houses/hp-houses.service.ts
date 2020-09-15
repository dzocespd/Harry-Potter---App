import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { hpDefaultAPI } from '../../interfaces/default-api';

@Injectable({
  providedIn: 'root'
})
export class HpHousesService {

  constructor(
    private _http: HttpClient
  ) { }


  private _url = hpDefaultAPI.hpAPI;
  private _key = hpDefaultAPI.KEY;

  getHouses() {
    return this._http.get(`${this._url}houses/?key=${this._key}`)
  }

  getSingleHouse(houseID: string) {
    return this._http.get(`${this._url}houses/${houseID}?key=${this._key}`)
  }
}
