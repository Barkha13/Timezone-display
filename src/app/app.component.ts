import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  current_time = new Date();
  clicked = null;

  displayTime(timezone){
  this.current_time = new Date();
  if (timezone == 'EST'){
    this.current_time.setHours(this.current_time.getHours() +3);
    this.clicked = 'EST';
  }
  if (timezone == 'PST'){
    // this.current_time.setHours(this.current_time.getHours());
    this.clicked = 'PST';
  }
  if (timezone == 'MST'){
    this.current_time.setHours(this.current_time.getHours() +1);
    this.clicked = 'MST';
  }
  if (timezone == 'CST'){
    this.current_time.setHours(this.current_time.getHours() +2);
    this.clicked = 'CST';
  }
  if (timezone == 'clear') {
    this.current_time.setHours(this.current_time.getHours());
    this.clicked = null;
  }
  
}
}
