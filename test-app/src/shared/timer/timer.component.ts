import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable, interval, defer, BehaviorSubject } from 'rxjs';
import { mapTo, reduce, take, tap, filter, map, share, withLatestFrom } from 'rxjs/operators'


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }
  counter = 1000;
  tick = 1000;
  public timer;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    const subject = new BehaviorSubject<boolean>(false);
    this.timer = {paused: subject, timerObject: this.getPausableTimer(this.counter, subject)};
  }

  getPausableTimer(timeout: number, pause: BehaviorSubject<boolean>): { stepTimer: Observable<any>, completeTimer: Observable<any> } {
    const pausableTimer$ = defer(() => {
      return interval(this.tick).pipe(
        withLatestFrom(pause),
        filter(([v, paused]) => !paused),
        take(timeout),
        map(() => --this.counter)
      );
    }).pipe(share());
    return { stepTimer: pausableTimer$, completeTimer: pausableTimer$.pipe(reduce((x, y) => y)) };
  }
}

