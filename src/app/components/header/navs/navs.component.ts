import { InicioComponent } from './../../../pages/login/inicio/inicio.component';
import { Component, OnInit } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import * as dataRaw from '../navs/Data/navs.json';
import { GoogleApiService } from 'src/app/pages/login/login/service/google-api.service';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent implements OnInit {
  userLogged = this.googleService.getUserLogged();
  public rutas: Array<any> = [];
  public fondo!: string;
  public usuario!: string;
  ju: any;
  lista: any;
  showFiller = false;
  imagen = dataRaw;
  opened = false;
  MatDialog: any;


  constructor(public service: ServiciosaddService,private googleService:GoogleApiService) {}
  

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
  }
}
