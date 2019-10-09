import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.scss']
})
export class UserUIComponent implements OnInit {
  message: string;
  message1: string;
  message2: string;
  value = '';
  click = false;
  public result = [];
  filterResult = [];
  // tslint:disable-next-line: variable-name
  private _searchTerm: string;
  KeywordIsDisabled = false;
  TitleIsDisabled = false;
  AuthorIsDisabled = false;
  myTitle = false;
  myAuthor = false;
  myKeyword = true;
  theses: any;
  constructor( private router: Router, private accountService: AccountService) { }
  filtersAbstract(searchString: string) {
    return this.result.filter(res => res.Abstract.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
   }
   filtersTitle(searchString: string) {
    return this.result.filter(res1 => res1.Title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
   }
   filtersAuthor(searchString: string) {
    return this.result.filter(res2 => res2.Author.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
   }

  onEnter(value: string) {
    this.value = value;
    this.theses = this.value;
    this.theses = this.filtersAbstract(value);
  }
  onEnter1(value: string) {
    this.value = value;
    this.theses = this.value;
    this.theses = this.filtersAuthor(value);
  }
  onEnter2(value: string) {
    this.value = value;
    this.theses = this.value;
    this.theses = this.filtersTitle(value);

  }
  clicked = function() {
    this.click = true;
  };

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
        this.filterResult = thesis;
      });
    }

     newClick() {
       this.KeywordIsDisabled = false;
       this.TitleIsDisabled = false;
       this.AuthorIsDisabled = false;
     }
     /*
   KeywordClick() {
     this.KeywordIsDisabled = false;
     this.TitleIsDisabled = true;
     this.AuthorIsDisabled = true;
     this.myKeyword = true;
     this.myTitle = false;
     this.myAuthor = false;
   }
   TitleClick() {
     this.KeywordIsDisabled = true;
     this.TitleIsDisabled = false;
     this.AuthorIsDisabled = true;
     this.myKeyword = false;
     this.myTitle = true;
     this.myAuthor = false;
   }
   AuthorClick() {
     this.KeywordIsDisabled = true;
     this.TitleIsDisabled = true;
     this.AuthorIsDisabled = false;
     this.myKeyword = false;
     this.myTitle = false;
     this.myAuthor = true;
   } */
}
