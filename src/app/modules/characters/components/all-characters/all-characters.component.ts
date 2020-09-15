import { Component, OnInit } from '@angular/core';

import { iCharacters } from '../../../shared/interfaces/chars-interface';
import { CharactersService } from '../../../shared/services/characters/characters.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  charResponse: iCharacters;

  constructor(
    private _characters: CharactersService
  ) { }

  ngOnInit() {
    this._loadChars();
  }


  private _loadChars() {
    this._characters.getChars().subscribe((char: iCharacters) => {
      this.charResponse = char
    })
  }
}
