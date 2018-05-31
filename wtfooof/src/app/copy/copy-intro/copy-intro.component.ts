import { Component, OnInit } from '@angular/core';
import { CopyComponent } from '../copy.component';

@Component({
  selector: 'copy-intro',
  templateUrl: './copy-intro.component.html',
  styleUrls: ['./copy-intro.component.scss']
})
export class CopyIntroComponent implements CopyComponent {

  constructor() { }

  ngOnInit() {
  }

}
