import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { hpDefaultAPI } from '../../interfaces/default-api';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private _http: HttpClient
  ) { }


  private _url = hpDefaultAPI.hpAPI;
  private _key = hpDefaultAPI.KEY;

  getChars() {
    return this._http.get(`${this._url}characters/?key=${this._key}`)
  }

  getSingleChar(charID: string) {
    return this._http.get(`${this._url}characters/${charID}?key=${this._key}`)
  }
}
