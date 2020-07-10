import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  constructor() { }
  countDown;
  counter = 1000;
  tick = 1000;
  public pauseTimer = false;
  public Questions;
  public Options;
  public activeQueryNumber;
  public questionStartNumber = 0;
  public markedForReviewList = [];


  buttonNumber = [];
  quesList = [
    {
      qNo: 1,
      Ques: 'First Question ?',
      options: [
        'Option 1 A',
        'Option 1 B',
        'Option 1 C',
        'Option 1 D',

      ]
    },
    {
      qNo: 2,
      Ques: 'Second Question ?',
      options: [
        'Option 2 A',
        'Option 2 B',
        'Option 2 C',
        'Option 2 D',

      ]
    },
    {
      qNo: 3,
      Ques: 'Third Question ?',
      options: [
         'Options 3 A',
         'Options 3 B',
         'Options 3 C',
         'Options 3 D',
        ]
    },
    {
      qNo: 4,
      Ques: 'fourth Question ?',
      options: [
         'Options 3 A',
         'Options 3 B',
         'Options 3 C',
         'Options 3 D',
        ]
    },
    {
      qNo: 5,
      Ques: 'fith Question ?',
      options: [
         'Options 3 A',
         'Options 3 B',
         'Options 3 C',
         'Options 3 D',
        ]
    }
  ];
  ngOnInit() {
    this.Questions = this.quesList[0];
    this.Options = this.quesList[0].options;
    this.activeQueryNumber = 1;


    this.countDown = Observable.timer(0, this.tick).take(this.counter).map(() => --this.counter);
  }

    prev() {
      --this.questionStartNumber;
      this.Questions = this.quesList[this.questionStartNumber];
      this.Options = this.quesList[this.questionStartNumber].options;
      this.activeQueryNumber = this.questionStartNumber + 1;
    }
    next() {
      ++this.questionStartNumber;
      this.Questions = this.quesList[this.questionStartNumber];
      this.Options = this.quesList[this.questionStartNumber].options;
      this.activeQueryNumber = this.questionStartNumber + 1;
    }
    navigateViaNumber(index: number) {
      this.Questions = this.quesList[index];
      this.Options = this.quesList[index].options;
      this.questionStartNumber = index;
      this.activeQueryNumber = index + 1;
    }

    markedForReview(index: number) {
      this.markedForReviewList.push(this.quesList[index]);
      this.next();
    }

    pauseTime() {
      // this.countDown = Observable.timer(0, this.tick).take(this.counter).map(() => --this.counter);
    }
}

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }

}
