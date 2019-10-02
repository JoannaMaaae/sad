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
  message1: string;
  message2: string;
  value = '';
  click = false;
  KeywordIsDisabled = false;
  TitleIsDisabled = false;
  AuthorIsDisabled = false;

  newClick() {
    this.KeywordIsDisabled = false;
    this.TitleIsDisabled = false;
    this.AuthorIsDisabled = false;
  }
KeywordClick() {
  this.KeywordIsDisabled = false;
  this.TitleIsDisabled = true;
  this.AuthorIsDisabled = true;
}
TitleClick() {
  this.KeywordIsDisabled = true;
  this.TitleIsDisabled = false;
  this.AuthorIsDisabled = true;
}
AuthorClick() {
  this.KeywordIsDisabled = true;
  this.TitleIsDisabled = true;
  this.AuthorIsDisabled = false;
}
  Search() {
    this.mySearch = true;
    this.myStart = false;
  }

  onEnter(value: string) {
    this.value = value;
    this.message = this.value;
    }
    onEnter1(value: string) {
      this.value = value;
      this.message1 = this.value;
      }
      onEnter2(value: string) {
        this.value = value;
        this.message2 = this.value;
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
