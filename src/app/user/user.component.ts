import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  mySearch = false;
  myStart = true;

  Search() {
    this.mySearch = true;
    this.myStart = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
