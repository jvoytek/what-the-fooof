import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('attr.class') class = 'mdl-layout__header';

  constructor() { }

  ngOnInit() {
  }

}
