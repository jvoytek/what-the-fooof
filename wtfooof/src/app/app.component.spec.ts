import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ''
})
class MockHeaderComponent {}

@Component({
  selector: 'app-navigation',
  template: ''
})
class MockNavigationComponent {}

@Component({
  selector: 'app-footer',
  template: ''
})
class MockFooterComponent {}

@Component({
  selector: 'app-copy-intro',
  template: ''
})
class MockCopyIntroComponent {}

@Component({
  selector: 'app-copy-aperiodic-fit',
  template: ''
})
class MockCopyAperiodicFitComponent {}

@Component({
  selector: 'app-chart-aperiodic-fit',
  template: ''
})
class MockChartAperiodicFitComponent {}

@Component({
  selector: 'app-chart-intro',
  template: ''
})
class MockChartIntroComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockNavigationComponent,
        MockFooterComponent,
        MockCopyIntroComponent,
        MockChartAperiodicFitComponent,
        MockChartIntroComponent,
        MockCopyAperiodicFitComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render a .app-header tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-header')).toBeTruthy();
  }));
  it('should render a .app-navigation tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-navigation')).toBeTruthy();
  }));
  it('should render a .app-footer tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-footer')).toBeTruthy();
  }));
  it('should render a app-copy-intro tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-copy-intro')).toBeTruthy();
  }));
  it('should render a app-chart-aperiodic-fit tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-chart-aperiodic-fit')).toBeTruthy();
  }));
});
