import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from './service/google-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogged = this.googleService.getUserLogged();
  hide = true;
  usuario ={
    email: '',
    password: ''
  }
  ngOnInit(): void {}

  // public auth = getAuth(this.app);
  // public provider = new GoogleAuthProvider();
  startSection: any;

  constructor(private googleService:GoogleApiService, private router: Router) {
    
  }

  googleToken() {
    // const { email, password } = this.usuario;
    // this.googleService.login(email, password).then(user => {
    //   console.log("Bienvenido ", user);
    //   if(!user) {
    //     alert("Datos incorrectos, si no tenes cuenta registrate!");
    //     return;
    //   };
    //   console.log("se registro:",user )
    //   this.router.navigate(['/panelDeControl'])
    // }).catch(err=>{
    //   console.log(err)
    // })

    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.googleService.loginWithGoogle(email,password).then(res =>{
      this.googleService.logout();
      console.log("se registro",res)
    })
  }

  sign(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.googleService.login(email,password).then(res =>{
      console.log("se registro",res)
    })
    
  }


  logout() {
    this.googleService.logout();
  }
}


