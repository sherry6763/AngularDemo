import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keywords = '';
  pi: number = 3.14159265359;
  a: number = 0.259;
  b: number = 1.3495;

  constructor() { };

  changeKeyReset() {
    this.keywords = '';
  }

}
