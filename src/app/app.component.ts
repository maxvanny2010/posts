import {Component} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Первый компонент', text: 'Текст первого компонента'},
    {title: 'Второй компонент', text: 'Текст второго компонента'},
    {title: 'Третий компонент', text: 'Текст третьего компонента'}
  ];
  search = '';
  field = 'title';

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 3000);
  });
  date: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
}
