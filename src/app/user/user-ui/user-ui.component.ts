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
  constructor(private data: DataService, private User: DataService, private router: Router) { }
  filtersResult(searchString: string) {
    return this.result.filter(res => res.origin.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
   }

  onEnter(value: string) {
    this.value = value;
    this.message = this.value;
    this.filterResult = this.filtersResult(value);
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
        });
    this.User.getMessage()
      .subscribe(data => this.result = data);
    this.User.getMessage()
      .subscribe(data => this.filterResult = data);
     }

}
