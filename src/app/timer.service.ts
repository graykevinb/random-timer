import { Injectable, resolveForwardRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  end: Subject<void> = new Subject<void>();

  constructor() { }

  async startTimer(minSeconds: number, maxSeconds: number) {
    const seconds = Math.random()*maxSeconds + minSeconds;
    setTimeout(() => {
      this.end.next();
    }, seconds*1000);
  }
}
