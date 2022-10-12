import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GoogleservisService } from '../services/googleservis.service';
import { GoogleApiService } from './service/google-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  };
  hide = true;
  hasError!: boolean;
  public google!: string;
  // public firebaseConfig = {
  //   apiKey: 'AIzaSyDwsIAh8_ah91FZhPdjHJWo29gM2K3YI0s',
  //   authDomain: 'api-399c3.firebaseapp.com',
  //   projectId: 'api-399c3',
  //   storageBucket: 'api-399c3.appspot.com',
  //   messagingSenderId: '932409603874',
  //   appId: '1:932409603874:web:169552d4bd103e4b8a177b',
  // };
  startSection: any;

  constructor(private authService:GoogleservisService, private router: Router) {}

  ngOnInit(): void {}

  googleToken() {
    const { email, password } = this.usuario;
    console.log(this.usuario);
    this.authService.loginWithGoogle(email, password).then((res) => {
      console.log('se registro:', res);
      this.router.navigate(['/home']);
    });
  }

  login(form: any):void  {
    this.authService.loginIn(form.value).subscribe(res =>{
      this.router.navigateByUrl('/home')
    })
    console.log('Credeciales');
  }
}
