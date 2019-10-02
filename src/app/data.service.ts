import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable} from 'rxjs';
import { ISample } from './sample';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  private messageSource = new BehaviorSubject <string> ('');
  currentMessage = this.messageSource.asObservable();
  // pwedeng url ng db yung ipalit sa url
  private url = '/assets/sample.json';

  getMessage(): Observable<ISample[]> {
    return this.http.get<ISample[]>(this.url);
  }
  constructor( private http: HttpClient ) { }
  changeMessage( message: string) {
    this.messageSource.next(message);
  }
  ngOnInit() {
  }
}
