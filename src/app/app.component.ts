import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appState = 'on';

  constructor() {
  }

  handleChange(): void {
    console.log(this.appState);
  }
}
