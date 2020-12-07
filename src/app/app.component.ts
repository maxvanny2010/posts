import {Component, OnInit} from '@angular/core';
import {TodosService} from './todos.service';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  error = '';
  loading = false;

  constructor(private service: TodosService) {
  }

  ngOnInit(): void {
    this.fetchTodo();
  }

  addTodo(): void {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo = {
      title: this.todoTitle,
      completed: false
    };
    this.service.add(newTodo).subscribe(todo => {
      this.todos.push(todo);
      this.todoTitle = '';
    });

  }

  fetchTodo(): void {
    this.loading = true;
    this.service.fetch().subscribe(todos => {
      this.todos = todos;
      this.loading = false;
    }, error => {
      this.error = error.message;
    });
  }

  removeTodo(id: number): void {
    this.service.remove(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  completeTodo(id: number): void {
    this.service.completed(id).subscribe(todo => {
      this.todos.find(t => t.id === todo.id).completed = true;
    });
  }
}
