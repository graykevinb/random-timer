import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-patience-screen',
  templateUrl: './patience-screen.component.html',
  styleUrls: ['./patience-screen.component.css']
})
export class PatienceScreenComponent {
  isDone = false;

  constructor(timerService: TimerService) {
    timerService.end.subscribe(() => this.isDone = true);
  }

}
