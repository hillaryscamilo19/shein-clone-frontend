import { Component } from '@angular/core';
import { GoogleApiService, UserInfo } from './pages/login/inicio/service/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tienda';

  userInfo?: UserInfo

  constructor(private readonly googleApi: GoogleApiService){
    googleApi.userProfilesubject.subscribe( info =>{
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean{
    return this.googleApi.isLoggedIn()
  }

  logout(){
    this.googleApi.signOut()
  }
}
