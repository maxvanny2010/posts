import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './app.component';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  add(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  fetch(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos9?_limit=2')
      .pipe(
        delay(500),
        catchError(error => {
          return throwError(error);
        }));
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  completed(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {complete: true});
  }
}