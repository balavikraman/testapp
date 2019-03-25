import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.start();
  }
  buttonNumber=[];
  options=[
    { opt: "Option A" },
    { opt: "Option B" },
    { opt: "Option C" },
    { opt: "Option D" },

  ]
    start(){
      for(var i=1;i<=15;i++){
        this.buttonNumber.push(i)
      }
      console.log(this.buttonNumber);
      
    }
}
