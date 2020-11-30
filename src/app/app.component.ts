import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Dynamic title';
  // number = 42;
  // arr = [1, 2, 3];
  // obj = {a: 1, b: {c: 2}};
  // img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png';
  value = '';
  key = '';
  enter = '';

  constructor() {
    /* setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg
      /240px-Angular_full_color_logo.svg.png';
    }, 3000); */
  }

  onInput($event: any): any {
    console.log('Event', $event);
    this.value = $event.target.value;
  }

  onClick(): any {
    console.log('Click');
  }

  onKeyBoardUp($event: KeyboardEvent): any {
    console.log('Up', $event);
    this.key = ($event.target as HTMLInputElement).value;
  }

  onKeyBoardEnter($event: any): any {
    console.log('Enter', $event);
    this.enter = ($event.target as HTMLInputElement).value;
  }

  onBlur(str: string): any {
    this.value = str;

  }
}
