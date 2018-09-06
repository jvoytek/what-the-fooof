import { Injectable } from '@angular/core';
import { Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

class ChartsGlobals {
  strokeWidth: number
  chartMargin: Object
}

export class GlobalConstantsService {
  // App

  // Charts
  charts:ChartsGlobals = {
    strokeWidth: 1.5,
    chartMargin: {top: 20, right: 20, bottom: 50, left: 70}
  };

  @Output()
  getChartsConstants(): ChartsGlobals {
    return this.charts
  }

}
