import { Component, OnInit } from '@angular/core';
import { iCharacters } from '../../../shared/interfaces/chars-interface';
import { CharactersService } from '../../../shared/services/characters/characters.service';
import { paginate } from '../../../shared/methods/paginate';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  page: number = 2;
  charResponse: iCharacters;
  paginateChars: iCharacters;

  private _paginate = paginate;

  constructor(
    private _characters: CharactersService
  ) { }

  ngOnInit() {
    this._loadChars();
    setTimeout(() => {
      this.paginateChars = this._paginate(this.charResponse, 20, 1);
    }, 1000);
  }

  private _loadChars() {
    this._characters.getChars().subscribe((char: iCharacters) => {
      this.charResponse = char
    })
  };


  nextPage() {
    let items = 20;
    this.paginateChars = this._paginate(this.charResponse, items, this.page);
    this.page++;
    console.log(this.page);
  };

  prevPage() {
    let items = 20;
    this.paginateChars = this._paginate(this.charResponse, items, this.page - 2);
    this.page--;
    console.log(this.page);
  };
}
