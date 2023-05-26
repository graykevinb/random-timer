import { Component, ViewChild } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  Date = new Date();
  @ViewChild('min', {static: true}) minClock!: ClockComponent;
  @ViewChild('max', {static: true}) maxClock!: ClockComponent;

  startTimer() {
    const minSeconds = this.minClock.totalSeconds;
    const maxSeconds = this.maxClock.totalSeconds;

    const seconds = Math.random()*maxSeconds + minSeconds;
    setTimeout(() => {
      alert('Time is up!');
    }, seconds*1000);
  }
}
