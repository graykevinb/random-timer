import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatienceScreenComponent } from './patience-screen/patience-screen.component';
import { TimerComponent } from './timer/timer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { KevinComponent } from './kevin/kevin.component';

const routes: Routes = [
  { path: '', component: TimerComponent },
  { path: 'patience', component: PatienceScreenComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'aboutme', component: KevinComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
