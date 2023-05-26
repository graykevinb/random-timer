import { Component, ViewChild } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { TimerService } from '../timer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  Date = new Date();
  @ViewChild('min', {static: true}) minClock!: ClockComponent;
  @ViewChild('max', {static: true}) maxClock!: ClockComponent;

  constructor(private timerService: TimerService, private router: Router) { }

  async startTimer() {
    const minSeconds = this.minClock.totalSeconds;
    const maxSeconds = this.maxClock.totalSeconds;
    
    this.timerService.startTimer(minSeconds, maxSeconds);

    this.router.navigateByUrl('/patience');
  }
}
