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

  constructor( private googleService: GoogleApiService, public carritoService: CarritoService) { }

  ngOnInit(): void {
    this.usuario = '../../../assets/img/usuario.png';
  }
  logout() {
    this.googleService.logout();
  }

}
