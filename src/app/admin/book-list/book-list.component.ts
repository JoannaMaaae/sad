import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

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

  deleteBook() {
    this.accountService.deleteAll().catch(err => console.log(err));
  }

}
