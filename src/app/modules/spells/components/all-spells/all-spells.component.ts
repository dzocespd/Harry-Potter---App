import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../../../shared/services/spells/spells.service';
import { iSpells } from '../../../shared/interfaces/spell-interface';
import { paginate } from '../../../shared/methods/paginate';

@Component({
  selector: 'app-all-spells',
  templateUrl: './all-spells.component.html',
  styleUrls: ['./all-spells.component.css']
})
export class AllSpellsComponent implements OnInit {

  page: number = 2;
  spellsReposnse: iSpells;
  paginateSpells: iSpells;

  private _paginate = paginate;

  constructor(
    private _spells: SpellsService
  ) { }

  ngOnInit() {
    this._loadSpells();
    setTimeout(() => {
      this.paginateSpells = this._paginate(this.spellsReposnse, 10, 1);
    }, 1000);
  }

  private _loadSpells() {
    this._spells.getSpells().subscribe((spells: iSpells) => {
      this.spellsReposnse = spells
    })
  }

  nextPage() {
    let items = 10;
    this.paginateSpells = this._paginate(this.spellsReposnse, items, this.page);
    this.page++;
    console.log(this.page);
  };

  prevPage() {
    let items = 10;
    this.paginateSpells = this._paginate(this.spellsReposnse, items, this.page - 2);
    this.page--;
    console.log(this.page);
  };
}
