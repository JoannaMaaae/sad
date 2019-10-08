import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Compendium } from './data';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private dbPath = '/author';

  bookRef: AngularFireList<Compendium > = null;

  constructor(private db: AngularFireDatabase) {
    this.bookRef = db.list(this.dbPath);
  }

  createBook(thesis: Compendium ): void {
    this.bookRef.push(thesis);
  }

  updateBook(key: string, value: any): Promise<void> {
    return this.bookRef.update(key, value);
  }

  deleteBook(key: string): Promise<void> {
    return this.bookRef.remove(key);
  }

  getBooksList(): AngularFireList<Compendium > {
    return this.bookRef;
  }

  deleteAll(): Promise<void> {
    return this.bookRef.remove();
  }
}
