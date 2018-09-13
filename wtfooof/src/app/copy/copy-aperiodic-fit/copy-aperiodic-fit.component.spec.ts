import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyAperiodicFitComponent } from './copy-aperiodic-fit.component';

describe('CopyAperiodicFitComponent', () => {
  let component: CopyAperiodicFitComponent;
  let fixture: ComponentFixture<CopyAperiodicFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyAperiodicFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyAperiodicFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
