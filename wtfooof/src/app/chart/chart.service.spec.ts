import { TestBed, inject } from '@angular/core/testing';

import { ChartService } from './chart.service';

describe('ChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartService]
    });
  });

  it('should be created', inject([ChartService], (service: ChartService) => {
    expect(service).toBeTruthy();
  }));

  it('mapArraysAndRemoveOutOfRange should map the first array to prop: freq and second to prop: power',
      inject([ChartService],
      (service: ChartService) => {

    const freq = [1, 2, 3, 4],
      power = [4, 3, 2, 1],
      range = [0, 3],
      result = service.mapArraysAndRemoveOutOfRange(freq, power, range);

    expect(result[0].freq).toEqual(1);
    expect(result[0].power).toEqual(4);
    expect(result[1].freq).toEqual(2);
    expect(result[1].power).toEqual(3);

  }));

  it('mapArraysAndRemoveOutOfRange should remove pairs that are out of range', inject([ChartService], (service: ChartService) => {

    const freq = [1, 4, 2, 3],
      power = [4, 3, 2, 1],
      range = [1, 4],
      result = service.mapArraysAndRemoveOutOfRange(freq, power, range);

    expect(result[0].freq).toEqual(2);
    expect(result[0].power).toEqual(2);
    expect(result[1].freq).toEqual(3);
    expect(result[1].power).toEqual(1);
    expect(result[2]).toBeUndefined();

  }));

  it('getLinearScale should return a function that maps values to a range', inject([ChartService], (service: ChartService) => {

    const scale = service.getLinearScale([0, 100], [0, 10]);

    expect(scale(20)).toEqual(2);
    expect(scale(-30)).toEqual(-3);
    expect(scale(150)).toEqual(15);

  }));

});
