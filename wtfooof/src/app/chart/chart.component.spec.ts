import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { GlobalConstantsService } from '../global-constants.service';
import { ElementRef } from '@angular/core';
import * as d3 from 'd3';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let gText: d3.Selection<d3.BaseType, object, d3.BaseType, object>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
      providers: [
        GlobalConstantsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const x_scale = d3.scaleLinear().range([0, 100]),
      y_scale = d3.scaleLinear().range([100, 0]);
    component.drawAxes(x_scale, y_scale, 'Nothing', 'Nobody');
    gText = component.svg.selectAll('text');
  });

  it('drawAxes should draw the X label', () => {
    expect(gText.filter(function() {
      return d3.select(this).text() === 'Nothing';
    }).size()).toBe(1);
  });

  it('drawAxes should draw the Y label', () => {
    expect(gText.filter(function() {
      return d3.select(this).text() === 'Nobody';
    }).size()).toBe(1);
  });

  it('drawAxes should not draw random text', () => {
    expect(gText.filter(function() {
      return d3.select(this).text() === 'Nonsense';
    }).size()).toBe(0);
  });

  it('drawAxes should draw the x and y axis', () => {
    expect(component.svg.selectAll('path.domain').size()).toBe(2);
  });

});
