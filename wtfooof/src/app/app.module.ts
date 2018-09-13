import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CopyComponent } from './copy/copy.component';
import { CopyIntroComponent } from './copy/copy-intro/copy-intro.component';
import { ChartComponent } from './chart/chart.component';
import { ChartIntroComponent } from './chart/chart-intro/chart-intro.component';
import { ChartAperiodicFitComponent } from './chart/chart-aperiodic-fit/chart-aperiodic-fit.component';
import { GlobalConstantsService } from './global-constants.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CopyComponent,
    CopyIntroComponent,
    ChartComponent,
    ChartIntroComponent,
    ChartAperiodicFitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ GlobalConstantsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
