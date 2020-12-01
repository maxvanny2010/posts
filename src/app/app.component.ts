import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Первый компонент', text: 'Текст первого компонента', id: 1},
    {title: 'Второй компонент', text: 'Текст второго компонента', id: 2},
    {title: 'Третий компонент', text: 'Текст третьего компонента', id: 3}
  ];

}
