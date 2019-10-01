import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public angularFireAuth: AngularFireAuth,
    public router: Router
  ) {
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }


  async login(email: string, password: string) {
    return await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.angularFireAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
  async logout() {
    return await this.angularFireAuth.auth.signOut();
  }
  isUserLoggedIn() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
