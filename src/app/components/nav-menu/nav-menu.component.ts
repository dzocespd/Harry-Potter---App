import { Component, OnInit } from '@angular/core';
import { NavMenu } from '../../interfaces/nav-menu.interface';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navMenu:Array<NavMenu> = [
    {title: 'Home', url: '/' },
    {title: 'Houses', url: 'houses' },
    {title: 'Characters', url: 'characters' },
    {title: 'Spells', url: 'spells' },
    {title: 'Sorting Hat', url: 'sortinghat' },
  ];
}
