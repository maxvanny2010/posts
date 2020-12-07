import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Todo} from './app.component';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

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
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?', {
      //  params: new HttpParams().set('_limit', '3')
      params,
      observe: 'response'
    })
      .pipe(
        map(response => {
          return response.body;
        }),
        delay(500),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  remove(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    }).pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
       //   console.log('Sent', event);
        }
        if (event.type === HttpEventType.Response) {
       //   console.log('Response', event);
        }
      })
    );
  }

  completed(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        complete: true
      }, {
        responseType: 'json'
      });
  }
}
