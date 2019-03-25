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

    start(){
      for(var i=1;i<=15;i++){
        this.buttonNumber.push(i)
      }
      console.log(this.buttonNumber);
      
    }
}
