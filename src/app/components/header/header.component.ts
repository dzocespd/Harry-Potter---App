import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

import { NavMenu } from '../../interfaces/nav-menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(NavMenuComponent, { static: false }) nvc: NavMenuComponent

  navMenu: Array<NavMenu> = [];

  constructor(private _cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.navMenu = this.nvc.navMenu
    this._cdRef.detectChanges();
  }
}
