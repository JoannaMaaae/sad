import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable()

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  mySearch = false;
  myStart = true;
  message: string;
  value = '';
  click = false;

  Search() {
    this.mySearch = true;
    this.myStart = false;
  }

  onEnter(value: string) {
    this.value = value;
    this.message = this.value;
    }
    clicked = function() {
      this.click = !this.click;
    };
  constructor( private data: DataService ) { }
  newMessage() {
    this.data.changeMessage(this.value);
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.value = message;
     });
  }

}
