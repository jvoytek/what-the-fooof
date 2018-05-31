import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {'class':'mdl-mega-footer'}
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
