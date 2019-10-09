import { Component, OnInit , Input} from '@angular/core';
import { AccountService } from '../../account.service';
import { Compendium } from '../../data';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input() thesis: Compendium;
  showHome = true;
  showBooks = false;
  showContact =  false;
  showAdminSettings = false;
  showBookList = true;
  showAddBook = false;
  theses: any;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  this.getBooksList();
  }
  getBooksList() {
    this.accountService.getBooksList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(thesis => {
      this.theses = thesis;
    });
  }

  deleteBooks() {
    this.accountService.deleteAll().catch(err => console.log(err));
  }

  updateActive(isActive: boolean) {
    this.accountService
      .updateBook(this.thesis.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteBook() {
    this.accountService
      .deleteBook(this.thesis.key)
      .catch(err => console.log(err));
  }

  toggleBookList() {
    this.showBookList = ! this.showBookList;
    if (this.showBookList === true) {
      this.showAddBook = false;
    }
  }

}
