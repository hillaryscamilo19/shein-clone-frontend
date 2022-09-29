import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';



Injectable({
  providedIn: 'root',
});

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  LoginIn(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private afauth: AngularFireAuth) {}

  // async register(email: string, passord: string) {
  //   try{
  //     return await this.afauth.signInWithEmailAndPassword(email,passord)
  //   }catch(err){
  //     console.log("error en el login", err);
  //     return null;
  //   }
  // }

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('error en login: ', err);
      return null;
    }
  }

  registrarUser(email: string, password: string) {
    return this.afauth.createUserWithEmailAndPassword(email, password);
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.afauth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (err) {
      console.log('error en login con google: ', err);
      return null;
    }
  }

  createDoc(data: any, path: any, id: any) {
    // // const collection = this.uth.collection(path);
    // return collection.doc(id).set(data);
  }

  getUserLogged() {
    return this.afauth.authState;
  }

  logout() {
    this.afauth.signOut();
  }
}
