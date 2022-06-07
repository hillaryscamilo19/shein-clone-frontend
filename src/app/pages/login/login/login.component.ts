import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut
} from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  public google!: string;
  public firebaseConfig = {
    apiKey: 'AIzaSyDwsIAh8_ah91FZhPdjHJWo29gM2K3YI0s',
    authDomain: 'api-399c3.firebaseapp.com',
    projectId: 'api-399c3',
    storageBucket: 'api-399c3.appspot.com',
    messagingSenderId: '932409603874',
    appId: '1:932409603874:web:169552d4bd103e4b8a177b',
  };
  public app = initializeApp(this.firebaseConfig);
  public auth = getAuth(this.app);
  public provider = new GoogleAuthProvider();
  startSection: any
  


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  googleToken() {
    // signInWithRedirect(this.auth, this.provider);
    // getRedirectResult(this.auth)
    //   .then((result: any) => {
    //     //this given you a google Access token. You can use it to Access Google APIs.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential!.accessToken;
    //     console.log(token)
    //     // The signed-in user info.
    //     const user = result.user;
    //     this.startSection.addEventListener('click',()=>{
    //       signInWithRedirect(this.auth, this.provider);
    //     })
    //   })
    //   .catch((error: any) => {
    //     //Handle Error here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     //The email of the user's account used.
    //     const email = error.email;
    //     //The AuthCredential Type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //   });
    signInWithPopup(this.auth, this.provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      // The signed-in user info.
      const user = result.user;

      alert(user.displayName);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(errorMessage);
    });

    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((_error: any) => {
      // An error happened.
    });
    
  }



}
