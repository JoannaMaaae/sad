import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-accnt',
  templateUrl: './admin-accnt.component.html',
  styleUrls: ['./admin-accnt.component.scss']
})
export class AdminAccntComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  showBooks = false;

  ngOnInit() {
  }

  toggleBooks() {
    this.showBooks = ! this.showBooks;
  }

}
