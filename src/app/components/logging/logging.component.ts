import { userI } from './../../pages/shop/data/registre';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'src/app/pages/login/login/service/google-api.service';
import { CarritoService } from 'src/app/pages/shop/services/carrito.service';
import { GoogleservisService } from 'src/app/pages/login/services/googleservis.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  public usuario!: string;
  count: number = 1;
  userLogged = this.authService.getUserLogged();
  userAuth: any;
  constructor(
    private googleService: GoogleApiService, 
    public carritoService: CarritoService, 
    private auth: AngularFireAuth,
    private authService:GoogleservisService,
  ) { }

  ngOnInit(): void {
    this.usuario = '../../../assets/img/usuario.png';

    // this.authService.loginIn((user) => {
    //   if (user) {
    //     this.userAuth = true
    //     return
    //   }

    //   this.userAuth = false
    // })
  }
  logout() {
    this.authService.logout();
  }

  public isLoggedIn(): boolean {
    return !!this.auth.currentUser;
  }
}
