import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../service/authentication.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormArray, Validators, Form} from '@angular/forms';
//  import index from '@angular/cli/lib/cli';





@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {
  showHome = true;
  showBooks = false;
  showContact =  false;
  showAdminSettings = false;
  showBookList = false;
  showAddBook = false;
 /* eventEmitterServices: any;
  eventEmitterService: any;
  myAuthor = FormGroup;
  name = FormArray;
  showHome = true;
  showBooks = false;
  showContact =  false;
  showAdminSettings = false;
  showBookList = false;
  showAddBook = false;
  addAuthor(): FormGroup {
    return this.fb.group({
      AuthorName: ['', Validators.required]
    });
  }
  get authorArr() {
    // @ts-ignore
    return this.myAuthor.get('Author') as FormArray;
  }
  deleteButtonClickAuthor(index: number) {
  this.authorArr.removeAt(index);
  }

  addButtonClickAuthor(): void {
    this.authorArr.push(this.addAuthor());
  }

  addCoAuthor(): FormGroup {
    return this.fb.group({
      CoAuthorName: ['', Validators.required]
    });
  }
  get CoAuthorArr() {
    // @ts-ignore
    return this.myAuthor.get('CoAuthor') as FormArray;
  }
  deleteButtonClickCoAuthor(index: number) {
    this.CoAuthorArr.removeAt(index);
  }

  addButtonClickCoAuthor(): void {
    this.CoAuthorArr.push(this.addCoAuthor());
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}




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
    // if  (this.eventEmitterServices.subsVar === undefined) {
    //   this.eventEmitterServices.subsVar = this.eventEmitterService.invokeAdminSidenavComponentFunction.subscribe((name: string) => {
    //
    //   });
    // }
    const nameForm = this.fb.group({
    fullName: [],
     });


    // @ts-ignore
    this.myAuthor = this.fb.group({
      Author: this.fb.array([this.addAuthor()]),
      CoAuthor: this.fb.array([this.addCoAuthor()]),
      title: '',
      isbn: '',
      published: '',
      received: '',
      abstract: '',
      nameForm: this.fb.array([])
    });
  }
  get phoneForms() {
    // @ts-ignore
    return this.myAuthor.get('phones') as FormArray;
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
  */
 constructor(
  private authService: AuthenticationService,
  private router: Router,
  private fb: FormBuilder
) {}

ngOnInit() { }
toggleBooks() {
  this.showBooks = ! this.showBooks;
  if (this.showBooks === true) {
    this.showHome = false;
    this.showContact = false;
    this.showAdminSettings = false;
  }
}
  toggleAddBook() {
    this.showAddBook = ! this.showAddBook;
    if (this.showAddBook === true) {
      this.showBookList = false;
    }
  }
  toggleBookList() {
    this.showBookList = ! this.showBookList;
    if (this.showBookList === true) {
      this.showAddBook = false;
    }
  }
}
