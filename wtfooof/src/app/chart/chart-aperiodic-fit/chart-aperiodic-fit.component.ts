import { Component } from '@angular/core';
import { ChartComponent } from '../chart.component';
import * as d3 from 'd3';
import { json } from 'd3-fetch';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chart-aperiodic-fit',
  templateUrl: './chart-aperiodic-fit.component.html',
  styleUrls: ['./chart-aperiodic-fit.component.css']
})
export class ChartAperiodicFitComponent extends ChartComponent implements AfterViewInit {
  svgId = 'chart-aperiodic-fit';
  freq_range: Array<number> = [2, 40];

  ngAfterViewInit() {

    this.chartService.getDataFromJsonFiles(
      [
        '/assets/data/freqs.json',
        '/assets/data/power.json',
        '/assets/data/initial-bg-fit.json'
      ],
      this.analyze.bind(this)
    );

  }

  private analyze(value: Array<Array<number>>) {
    this.plot(value[0], value[1], value[2]);
  }


  private plotOriginalSpectrum(
    originalSpectrum: Array<Array<number>>,
    lineFunction: d3.ValueFn<d3.BaseType, number[][], string | number | boolean>) {
    this.g.append('path')
     .datum(originalSpectrum)
     .attr('fill', 'none')
     .attr('stroke', 'black')
     .attr('stroke-linejoin', 'round')
     .attr('stroke-linecap', 'round')
     .attr('stroke-width', this.strokeWidth)
     .attr('d', lineFunction);
  }

  private plotInitialBackgroundFit (
    initialBackgroundFit: Array<Array<number>>,
    lineFunction: d3.ValueFn<d3.BaseType, number[][], string | number | boolean>) {
    return  this.g.append('path')
            .datum(initialBackgroundFit)
            .attr('fill', 'none')
            .attr('stroke', 'red')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('stroke-width', this.strokeWidth)
            .attr('d', lineFunction);
  }

  private animateInitialBackgroundFit(fit) {
    // Variable to Hold Total Length
    const totalLength = fit.node().getTotalLength();

    // Set Properties of Dash Array and Dash Offset and initiate Transition
    fit
      .attr('stroke-dasharray', totalLength + ' ' + totalLength)
      .attr('stroke-dashoffset', totalLength)
      .transition() // Call Transition Method
      .duration(4000) // Set Duration timing (ms)
      .ease(d3.easeLinear) // Set Easing option
      .attr('stroke-dashoffset', 0); // Set final value of dash-offset for transition
  }

  private plot(freqsArray: Array<number>, powerArray: Array<number>, initialBackgroundFitFreqsArray: Array<number>) {

    const originalSpectrumData = this.chartService
                                  .mapArraysAndRemoveOutOfRange(freqsArray, powerArray, this.freq_range),
      initialBackgroundFitData = this.chartService
                                  .mapArraysAndRemoveOutOfRange(freqsArray, initialBackgroundFitFreqsArray, this.freq_range),

      y_scale = this.chartService.getLinearScale(d3.extent(powerArray), [this.chartHeight, 0]),
      x_scale = this.chartService.getLinearScale(this.freq_range, [0, this.chartWidth]),

      lineFunction = d3.line()
        .x(function(d) { return x_scale(d['freq']); })
        .y(function(d) { return y_scale(d['power']); });

    this.drawAxes(x_scale, y_scale, 'Frequency', 'Power');

    this.plotOriginalSpectrum(originalSpectrumData, lineFunction);

    const fitLineSelection = this.plotInitialBackgroundFit(initialBackgroundFitData, lineFunction);
    this.animateInitialBackgroundFit(fitLineSelection);

  }



}
