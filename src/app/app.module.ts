import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ClockComponent } from './clock/clock.component';
import { AppRoutingModule } from './app-routing.module';
import { PatienceScreenComponent } from './patience-screen/patience-screen.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { KevinComponent } from './kevin/kevin.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ClockComponent,
    PatienceScreenComponent,
    FooterComponent,
    AboutPageComponent,
    KevinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
