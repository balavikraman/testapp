import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  countDown;
  counter = 7200;
  tick = 1000;


  constructor() { }
  public Questions;
  public Options;
  public i=0;
  ngOnInit() {
    this.start();
    this.Questions = this.quesList[0];
    this.Options = this.quesList[0].options;

    this.countDown = Observable.timer(0, this.tick)
    .take(this.counter)
    .map(() => --this.counter)
  }
  

  buttonNumber=[];
  quesList= [
    {
      Ques:"First Question ?",
      options:[
        "Option 1 A",
        "Option 1 B",
        "Option 1 C",
        "Option 1 D",
        
      ]
    },
    {
      Ques: "Second Question ?",
      options: [
        "Option 2 A",
        "Option 2 B",
        "Option 2 C",
        "Option 2 D",

      ]
    },
    {
      Ques:"Third Question ?",
      options:[
         "Options 3 A",
         "Options 3 B",
         "Options 3 C",
         "Options 3 D",
        ]
    },
    {
      Ques:"fourth Question ?",
      options:[
         "Options 3 A",
         "Options 3 B",
         "Options 3 C",
         "Options 3 D",
        ]
    },
    {
      Ques:"fith Question ?",
      options:[
         "Options 3 A",
         "Options 3 B",
         "Options 3 C",
         "Options 3 D",
        ]
    }
  ]
    start() {
      for(var i=1;i<=15;i++){
        this.buttonNumber.push(i)
      }
      console.log(this.buttonNumber);
      
    }
    prev() {
      --this.i;
      this.Questions = this.quesList[this.i];
      this.Options = this.quesList[this.i].options;
    }
    next() {
      ++this.i;
      this.Questions = this.quesList[this.i];
      this.Options = this.quesList[this.i].options;
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