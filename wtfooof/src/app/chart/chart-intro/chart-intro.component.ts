import { Component, OnInit } from '@angular/core';
import { ChartComponent } from '../chart.component';

@Component({
  selector: 'chart-intro',
  templateUrl: './chart-intro.component.html',
  styleUrls: ['./chart-intro.component.scss']
})
export class ChartIntroComponent implements ChartComponent {

  constructor() { }

  ngOnInit() {
  }

}
