import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { JWt } from './../login/model/Jwt';
import { Iuser } from './../login/model/registre';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleservisService {
  urls = 'http://localhost:4000/api/auth';
  subject = new BehaviorSubject(false);
  private token!: string;
  constructor(private afauth: AngularFireAuth, private http: HttpClient) {}

  register(user: Iuser): Observable<JWt> {
    return this.http.post<JWt>(`${this.urls}/register`, user).pipe(
      tap((res: JWt) => {
        if (res) {
          // gurdar token
          // this.saveToken(res.DataUser.accessToken, res.DataUser.expiresIn)
        }
      })
    );
  }

  loginIn(user: Iuser): Observable<JWt> {
    return this.http.post<JWt>(`${this.urls}/login`, user).pipe(
      tap((res: JWt) => {
        if (res) {
          this.saveToken(res.DataUser.accessToken, res.DataUser.expiresIn)
        }
      })
    );
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      console.log('usuario registrado');

      return await this.afauth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (err) {
      console.log('error en el login', err);
      return null;
    }
  }

  logout() {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_iN');
  }

  private saveToken(token: string, ExpiresIn: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', ExpiresIn);
    this.token = token;
  }

  getUserLogged() {
    return this.afauth.authState;
  }
  // getUserLogged() {
  //   return this.afauth.authState;
  // }
  // private getToken(): string {
  //   if (!this.token) {
  //     this.token= sessionStorage.setItem('api',JSON.stringify([]));
  //   }
  //   return this.token;
  // }
}
