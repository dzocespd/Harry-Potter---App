import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { hpDefaultAPI } from '../../interfaces/default-api';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor(
    private _http: HttpClient
  ) { }

  private _url = hpDefaultAPI.hpAPI;
  private _key = hpDefaultAPI.KEY;

  getSpells(){
    return this._http.get(`${this._url}spells/?key=${this._key}`)
  }
}
