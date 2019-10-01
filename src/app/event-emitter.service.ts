import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeAdminSidenavComponentFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onAdminSidenavComponentButtonClick() {
    this.invokeAdminSidenavComponentFunction.emit();
  }
}
