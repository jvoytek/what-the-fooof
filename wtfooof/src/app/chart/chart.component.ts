import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { GlobalConstantsService } from '../global-constants.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AxisScale, AxisDomain } from 'd3';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterContentInit {

  strokeWidth;
  chartMargin;
  chartHeight;
  chartWidth;
  fontSize;

  svgId = 'generic-chart';

  constructor(private constants: GlobalConstantsService, public chartService: ChartService, private el: ElementRef) { }

  // TODO Not sure if this is the "right" way to specify the type of this var (but ok for now)
  g: d3.Selection<d3.BaseType, object, d3.BaseType, object>;
  svg: d3.Selection<d3.BaseType, object, d3.BaseType, object>;

  ngOnInit() {
    this.getChartConstants();
  }

  ngAfterContentInit() {
    this.selectSvg();
    this.getChartWidthAndHeight();
    this.setChartMargins();
  }

  public drawAxes(x_scale: AxisScale<AxisDomain>, y_scale: AxisScale<AxisDomain>, x_label: string, y_label: string) {
    this.drawXAxis(x_scale);
    this.drawYAxis(y_scale);
    this.drawXLabel(x_label);
    this.drawYLabel(y_label);
    this.drawGridLines(x_scale, y_scale);
  }

  private getChartConstants() {
    const chartConstants = this.constants.getChartsConstants();
    this.strokeWidth = chartConstants.strokeWidth;
    this.chartMargin = chartConstants.chartMargin;
    this.fontSize = chartConstants.fontSize;
  }

  private selectSvg() {
    this.svg = d3.select('svg#' + this.svgId);
    console.log(this.svg);
  }

  private getChartWidthAndHeight() {
    const chartDiv = this.el.nativeElement.querySelector('.fooof-chart'),
      chartWidth = chartDiv.offsetWidth,
      chartHeight = chartDiv.offsetHeight;
    this.chartWidth = + chartWidth - this.chartMargin.left - this.chartMargin.right;
    this.chartHeight = + chartHeight - this.chartMargin.top - this.chartMargin.bottom;
  }

  private setChartMargins() {
    this.g = this.svg.append('g').attr('transform', 'translate(' + this.chartMargin.left + ',' + this.chartMargin.top + ')');
  }


  private drawXAxis(x_scale: AxisScale<AxisDomain>) {
    this.g.append('g')
       .attr('transform', 'translate(0,' + this.chartHeight + ')')
       .call(d3.axisBottom(x_scale));
  }

  private drawYAxis(y_scale: AxisScale<AxisDomain>) {
    this.g.append('g')
       .call(d3.axisLeft(y_scale));
  }

  private drawXLabel(x_label: string) {
    this.g.append('text')
       .attr('fill', '#000')
       .attr('transform', 'translate(' + (this.chartWidth / 2) + ' ,' + (this.chartHeight + this.chartMargin.bottom - this.fontSize) + ')')
       .attr('text-anchor', 'middle')
       .style('font-size', this.fontSize + 'px')
       .text(x_label);
  }

  private drawYLabel(y_label: string) {
    this.g.append('text')
       .attr('fill', '#000')
       .attr('transform', 'rotate(-90)')
       .attr('y', 0 - this.chartMargin.left + this.fontSize * 2)
       .attr('x', 0 - (this.chartHeight / 2))
       .attr('text-anchor', 'middle')
       .style('font-size', this.fontSize + 'px')
       .text(y_label);
  }

  private drawGridLines(x_scale: AxisScale<AxisDomain>, y_scale: AxisScale<AxisDomain>) {
    this.g.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + this.chartHeight + ")")
        .call(this.makeXGridlines(x_scale)
            .tickSize(-this.chartHeight)
            .tickFormat(' ')
        )

    this.g.append("g")
        .attr("class", "grid")
        .call(this.makeYGridlines(y_scale)
            .tickSize(-this.chartWidth)
            .tickFormat(' ')
        )
  }

  private makeXGridlines(x_scale: AxisScale<AxisDomain>) {
      return d3.axisBottom(x_scale)
          .ticks(8)
  }

  private makeYGridlines(y_scale: AxisScale<AxisDomain>) {
      return d3.axisLeft(y_scale)
          .ticks(10)
  }

}
