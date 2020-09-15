import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { iCharacters, iChar } from '../../../shared/interfaces/chars-interface';
import { CharactersService } from '../../../shared/services/characters/characters.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  charResponse:iCharacters;
  charArr:Array<iChar> = [];

  constructor(
    private _singleChar: CharactersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getchar(params.charID)
    })
  }


  getchar(charID:string){
    this._singleChar.getSingleChar(charID).subscribe((char: iChar) => {
      this.charArr.push(char)
    })
  }
}
