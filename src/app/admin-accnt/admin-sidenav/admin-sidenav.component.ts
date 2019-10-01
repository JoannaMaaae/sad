import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../service/authentication.service';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {
  eventEmitterServices: any;
  eventEmitterService: any;

  constructor(private authService: AuthenticationService, private router: Router ) { /*private fb: FormBuilder*/

   }
  //  productForm: FormGroup;

  showHome = true;
  showBooks = false;
  showContact =  false;
  showAdminSettings = false;

  showBookList = false;
  showAddBook = false;

  // SignOut Firebase Session and Clean LocalStorage
  logoutUser() {
    this.authService.logout()
      .then(res => {
        console.log(res);
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      }, err => {
      });
  }

  ngOnInit() {
    if  (this.eventEmitterServices.subsVar === undefined) {
      this.eventEmitterServices.subsVar = this.eventEmitterService.invokeAdminSidenavComponentFunction.subscribe((name: string) => {

      });
    }
  }

  toggleBooks() {
    this.showBooks = ! this.showBooks;
    if (this.showBooks === true) {
      this.showHome = false;
      this.showContact = false;
      this.showAdminSettings = false;
    }
  }

  toggleAdminSettings() {
    this.showAdminSettings = ! this.showAdminSettings;
    if (this.showAdminSettings === true) {
      this.showHome = false;
      this.showContact = false;
      this.showBooks = false;
    }
  }

  toggleContact() {
    this.showContact = ! this.showContact;
    if (this.showContact === true) {
      this.showHome = false;
      this.showBooks = false;
      this.showAdminSettings = false;
    }
  }

  toggleHome() {
    this.showHome = ! this.showHome;
    if (this.showHome === true) {
      this.showBooks = false;
      this.showContact = false;
      this.showAdminSettings = false;
    }
  }

  toggleBookList() {
    this.showBookList = ! this.showBookList;
    if (this.showBookList === true) {
      this.showAddBook = false;
    }
  }

  toggleAddBook() {
    this.showAddBook = ! this.showAddBook;
    if (this.showAddBook === true) {
      this.showBookList = false;
    }
  }

}
