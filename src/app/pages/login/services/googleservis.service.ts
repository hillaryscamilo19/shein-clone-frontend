import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
/* import { Firestore, collectionData, collection } from '@angular/fire/firestore'; */

@Injectable({
  providedIn: 'root',
})
export class GoogleservisService {
  urls = 'http://localhost:4000//api/auth';
  constructor(private afauth: AngularFireAuth) {}

  async register(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('error en el registro', err);
      return null;
    }
  }

  async loginIn(email: string, password: string) {
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

  // createDoc(data: any, path: string, id: string){
  //   // const collectio = this.auth.collection(path);
  //   // return collection.doc(id)
  // }

  // getUserLogged() {
  //   return this.afauth.authState;
  // }

  logout() {
    this.afauth.signOut();
  }
}
