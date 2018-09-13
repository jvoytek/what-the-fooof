import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: '.app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @HostBinding('attr.class') class = 'mdl-layout__drawer';

  constructor() { }

  ngOnInit() {
  }

}
