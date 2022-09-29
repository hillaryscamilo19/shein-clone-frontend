import { userI } from './../../shop/data/registre';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleApiService } from '../login/service/google-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Datos: userI = {
    Name: '',
    apellido: '',
    correo: '',
    password: '',
    uid: '',
    perfil: 'visitante',
  };

  constructor(private authService: GoogleApiService, private router: Router) {}

  ngOnInit(): void {}

  async registrar() {
    console.log('Registro', this.Datos);
    const res = await this.authService
      .registrarUser(this.Datos.correo, this.Datos.password)
      .catch((error) => {
        console.log('error de registro');
      });
    if (res) {
      console.log('Existo al crear el usuario');
      const path = 'Usuario';
      const id = res.user?.uid;
    }
  }
}
