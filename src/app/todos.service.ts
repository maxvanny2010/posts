import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
    const headers = new HttpHeaders({
      Token: Math.random().toString(),
    });
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {headers});
  }

  fetch(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'anything');
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2', {
      //  params: new HttpParams().set('_limit', '3')
      params
    })
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
