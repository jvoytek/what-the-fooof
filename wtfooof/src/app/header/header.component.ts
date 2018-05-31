import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {'class':'mdl-layout__header'}
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
