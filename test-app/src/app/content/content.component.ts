import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public Questions;
  public Options;
  public i=0;
  ngOnInit() {
    this.start();
    this.Questions = this.quesList[0];
    this.Options = this.quesList[0].options;
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
