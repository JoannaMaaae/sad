import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-accnt',
  templateUrl: './admin-accnt.component.html',
  styleUrls: ['./admin-accnt.component.scss']
})
export class AdminAccntComponent implements OnInit {

  constructor() { }

  showBooks = false;

  ngOnInit() {
  }

  toggleBooks() {
    this.showBooks = ! this.showBooks;
  }

}
