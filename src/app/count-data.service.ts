import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Counter} from "./counter";


@Injectable({
  providedIn: 'root'
})
export class CountDataService {
 
  url:string = "http://localhost:3000/counters";
  

  getCounters(): Observable<Counter[]>{
    return this.http.get<Counter[]>(this.url);
  }

  getCounter(id: number):Observable<Counter> {
    return this.http.get<Counter>(this.url +"/" + id);
  }

  addCounter(_counter : Counter): Observable<Counter> {
    return this.http.post<Counter>(this.url, _counter);
  }

  deleteCounter(id:number) : Observable<Counter> {
    return this.http.delete<Counter>(this.url + "/" + id);
  }
  editCounter(counter: Counter): Observable<Counter>{
    return this.http.put<Counter>(this.url + "/" + counter.id, counter);
  }
  constructor(private http: HttpClient) {  }
}
