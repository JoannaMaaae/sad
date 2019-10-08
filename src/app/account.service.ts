import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Customer } from './data';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private dbPath = '/author';

  customersRef: AngularFireList<Customer> = null;

  constructor(private db: AngularFireDatabase) {
    this.customersRef = db.list(this.dbPath);
  }

  createCustomer(customer: Customer): void {
    this.customersRef.push(customer);
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.update(key, value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.remove(key);
  }

  getCustomersList(): AngularFireList<Customer> {
    return this.customersRef;
  }

  deleteAll(): Promise<void> {
    return this.customersRef.remove();
  }
}
