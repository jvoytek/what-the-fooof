import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  getDataFromJsonFiles(files:Array<string>, callback:Function) {

    const jsonFiles = files.map(function(file) {
      return d3.json(file);
    });

    Promise.all(jsonFiles)
      .then(function(value) {
        callback(value);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  mapArraysAndRemoveOutOfRange(array: Array<number>, otherArray: Array<number>, range:Array<number>) {

    function mapWithOtherArray(f, index) {
      return {'freq': f, 'power': otherArray[index]};
    }

    function removeOutOfRange (acc, d) {
      if (d.freq > range[0] && d.freq < range[1]) {
        acc.push(d);
      }
      return acc;
    }

    return array.map(mapWithOtherArray).reduce(removeOutOfRange, []);
  }


  public getLinearScale(domain:Array<number>, range:Array<number>): d3.AxisScale<d3.AxisDomain> {
    return d3.scaleLinear().domain(domain).range(range);
  }

}
