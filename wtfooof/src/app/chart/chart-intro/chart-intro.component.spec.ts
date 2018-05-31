import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIntroComponent } from './chart-intro.component';

describe('ChartIntroComponent', () => {
  let component: ChartIntroComponent;
  let fixture: ComponentFixture<ChartIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
