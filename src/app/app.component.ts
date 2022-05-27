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
  keywords = '';

  constructor() { };

  changeTitle($event: PointerEvent) {
    if ($event.altKey) {
      this.title = "The Will Will Web";
    }
    console.log($event);
  };

  changeKeyReset() {
    this.keywords = '';
  }

}
