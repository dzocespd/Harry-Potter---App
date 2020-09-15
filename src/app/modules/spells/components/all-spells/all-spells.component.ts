import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../../../shared/services/spells/spells.service';
import { iSpells } from '../../../shared/interfaces/spell-interface';

@Component({
  selector: 'app-all-spells',
  templateUrl: './all-spells.component.html',
  styleUrls: ['./all-spells.component.css']
})
export class AllSpellsComponent implements OnInit {

  spellsReposnse: iSpells;

  constructor(
    private _spells: SpellsService
  ) { }

  ngOnInit() {
    this._loadSpells()
  }

  private _loadSpells() {
    this._spells.getSpells().subscribe((spells: iSpells) => {
      this.spellsReposnse = spells
    })
  }
}
