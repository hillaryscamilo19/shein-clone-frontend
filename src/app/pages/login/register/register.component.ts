import { Iuser } from '../login/model/registre';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleApiService } from '../login/service/google-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Datos: Iuser = {
    name: '',
    LastName: '',
    email: '',
    password: '',
    perfil: '',
  };

  userName: FormControl = new FormControl('', [Validators.minLength(3), Validators.maxLength(255), Validators.required]);
  lastName: FormControl = new FormControl('', [Validators.minLength(3), Validators.maxLength(255)]);
  email: FormControl = new FormControl('', Validators.email);
  password: FormControl = new FormControl('');
  ConfirmPassword: FormControl = new FormControl('');

  register: FormGroup = new FormGroup(
    {
      userName: this.userName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      ConfirmPassword: this.ConfirmPassword,
    }
  )

  constructor(private authService: GoogleApiService, private router: Router) {}

  ngOnInit(): void {
    console.log('init')
    this.userName.statusChanges.subscribe(val => {
      console.log(this.userName.value);
    })
    console.log(this.register.valid)
  }

  async registrar() {
    console.log('Registro', this.Datos);
    const res = await this.authService
      .registrarUser(this.Datos.email, this.Datos.password)
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
