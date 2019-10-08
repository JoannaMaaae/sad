import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, Form} from '@angular/forms';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  myAuthor = FormGroup;
  name = FormArray;
  public click = false;
  editForm() {
    this.click = !this.click;
  }

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

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }

}
