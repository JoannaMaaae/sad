import { Component, OnInit, Input } from '@angular/core';
import { Compendium } from '../data';
import { AccountService } from '../account.service';
// import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  thesis: Compendium = new Compendium();
  submitted = false;
  public click = true;
  exitForm() {
    this.click = false;
  }
/*
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
  */

  constructor( private accountService: AccountService) { }

  ngOnInit() {
  }
  newBook(): void {
    this.submitted = false;
    this.thesis = new Compendium();
  }

  save() {
    this.accountService.createBook(this.thesis);
    this.thesis = new Compendium();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


}
