import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  @Input() hours: number = 0;
  @Input() minutes: number = 0;
  @Input() seconds: number = 0;

  totalSeconds: number = 0;

  dispHours: string = '00';
  dispMinutes: string = '00';
  dispSeconds: string = '00';

  ngOnInit() {
    this.updateClock();
  }

  ngOnChanges() {
    this.updateClock();
  }

  updateClock() {
    this.hours = Math.max(0, this.hours);
    this.minutes = Math.max(0, this.minutes);
    this.seconds = Math.max(0, this.seconds);
    
    this.dispHours = this.hours.toString().padStart(2, '0');
    this.dispMinutes = this.minutes.toString().padStart(2, '0');
    this.dispSeconds = this.seconds.toString().padStart(2, '0');
    this.totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
  }

  addHour() {
    this.hours++;
    this.updateClock();
  }

  addMinute() {
    this.minutes++;
    this.updateClock();
  }

  addSecond() {
    this.seconds++;
    this.updateClock();
  }

  subHour() {
    this.hours--;
    this.updateClock();
  }

  subMinute() {
    this.minutes--;
    this.updateClock();
  }

  subSecond() {
    this.seconds--;
    this.updateClock();
  }


}
