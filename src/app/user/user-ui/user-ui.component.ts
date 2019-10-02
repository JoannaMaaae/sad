import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.scss']
})
export class UserUIComponent implements OnInit {
  message: string;
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
  myKeyword = false;
  constructor(private data: DataService, private User: DataService, private router: Router) { }
  filtersResult(searchString: string) {
    return this.result.filter(res => res.origin.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
   }
   filtersTitle(searchString: string) {
    return this.result.filter(res1 => res1.destination.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
   }
   filtersAuthor(searchString: string) {
    return this.result.filter(res2 => res2.ship.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
   }

  onEnter(value: string) {
    this.value = value;
    this.message = this.value;
    this.filterResult = this.filtersResult(value);
  }
  onEnter1(value: string) {
    this.value = value;
    this.message = this.value;
    this.filterResult = this.filtersTitle(value);
  }
  onEnter2(value: string) {
    this.value = value;
    this.message = this.value;
    this.filterResult = this.filtersTitle(value);

  }
  clicked = function() {
    this.click = true;
  };
  newMessage() {
    this.data.changeMessage(this.value);
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message;
      this.filterResult = this.filtersResult(message);
      this.filterResult = this.filtersTitle(message);
      this.filterResult = this.filtersAuthor(message);
        });
    this.User.getMessage()
      .subscribe(data => this.result = data);
    this.User.getMessage()
      .subscribe(data => this.filterResult = data);
     }

     newClick() {
       this.KeywordIsDisabled = false;
       this.TitleIsDisabled = false;
       this.AuthorIsDisabled = false;
     }
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
   }
}
