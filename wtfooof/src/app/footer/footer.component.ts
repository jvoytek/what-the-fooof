import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: '.app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @HostBinding('attr.class') class = 'mdl-mega-footer';

  constructor() { }

  ngOnInit() {
  }

}
