import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  url = 'http://blog.miniasp.com/';
  src = '/assets/images/logo.png';

  constructor() {
    /*    setTimeout(() => {
         this.title = "The Will Will Web";
       }, 2000); */
  };
  changeTitle() {
    this.title = "The Will Will Web";
  };

}
