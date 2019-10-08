import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../account.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.scss']
})
export class AdminUIComponent implements OnInit {
  book: any;
  constructor(private accountService: AccountService) { }

  ngOnInit() {

  }

}
