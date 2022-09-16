import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'src/app/pages/login/login/service/google-api.service';
import { CarritoService } from 'src/app/pages/shop/services/carrito.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  public usuario!: string;
  count: number = 1;
  userLogged = this.googleService.getUserLogged();
  userAuth: any;
  constructor(
    private googleService: GoogleApiService, 
    public carritoService: CarritoService, 
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.usuario = '../../../assets/img/usuario.png';

    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userAuth = true
        return
      }

      this.userAuth = false
    })
  }
  logout() {
    this.googleService.logout();
  }

  public isLoggedIn(): boolean {
    return !!this.auth.currentUser;
  }
}
