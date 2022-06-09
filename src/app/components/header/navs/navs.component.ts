import { InicioComponent } from './../../../pages/login/inicio/inicio.component';
import { Component, OnInit } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import * as dataRaw from '../navs/Data/navs.json';
import { MatDialog } from '@angular/material/dialog';
<<<<<<< HEAD
import { GoogleservisService } from 'src/app/pages/login/services/googleservis.service';
=======
import { GoogleApiService } from 'src/app/pages/login/login/service/google-api.service';
>>>>>>> f81789942c0bcabb06d0c3b4d9299dfc5e612ebb

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent implements OnInit {
<<<<<<< HEAD
  userLogged = this.authService.getUserLogged();
=======
  userLogged = this.googleService.getUserLogged();
>>>>>>> f81789942c0bcabb06d0c3b4d9299dfc5e612ebb
  public rutas: Array<any> = [];
  public fondo!: string;
  public usuario!: string;
  ju: any;
  lista: any;
  showFiller = false;
  imagen = dataRaw;
  opened = false;
  MatDialog: any;

<<<<<<< HEAD
  constructor(public service: ServiciosaddService, private authService: GoogleservisService ) {}
=======

  constructor(public service: ServiciosaddService,private googleService:GoogleApiService) {}
>>>>>>> f81789942c0bcabb06d0c3b4d9299dfc5e612ebb
  

  ngOnInit(): void {
    this.fondo = '../../../assets/img/Shein.png';
    this.usuario = '../../../assets/img/usuario.png';
    this.service.disparador.subscribe((data) => {
      this.lista.push(data);
    });
    this.rutas = [];
  }

  click(name: string): void {
    if (name == 'icono') {
      this.showFiller = true;
    }
<<<<<<< HEAD
    console.log(this.showFiller);
  }

=======
  }
>>>>>>> f81789942c0bcabb06d0c3b4d9299dfc5e612ebb
}
