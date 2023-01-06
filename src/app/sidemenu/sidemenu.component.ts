import {Component,ViewChild, OnInit} from '@angular/core';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'app-sidemenu',
  templateUrl: 'sidemenu.component.html',
  styleUrls: ['sidemenu.component.scss'],
})
export class SideMenuComponent {
  
  events: string[] = [];
  opened: boolean = true;
  showNavLabels: boolean = true;
selected: any;
selectedPage: any;
selectedItem: any;
}