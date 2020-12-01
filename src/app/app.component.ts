import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Первый компонент', text: 'Текст первого компонента', id: 1},
    {title: 'Второй компонент', text: 'Текст второго компонента', id: 2},
    {title: 'Третий компонент', text: 'Текст третьего компонента', id: 3}
  ];

  addPost(post: Post): void {
    this.posts.unshift(post);
  }

  removePost(id: number): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.posts[0].title = 'CHANGED!');
    }, 3000);
  }
}
