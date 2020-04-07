import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;

  constructor(private afAuth: AngularFireAuth) {}

  login() {
    this.afAuth.signInWithPopup(new auth.GithubAuthProvider());
  }

  logout() {}
}
