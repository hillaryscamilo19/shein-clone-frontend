import { Iuser } from '../login/model/registre';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleApiService } from '../login/service/google-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleservisService } from '../services/googleservis.service';

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

  name: FormControl = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(255),
    Validators.required,
  ]);
  lastName: FormControl = new FormControl('', [
    Validators.minLength(3),
    Validators.maxLength(255),
  ]);
  email: FormControl = new FormControl('', Validators.email);
  password: FormControl = new FormControl('');
  ConfirmPassword: FormControl = new FormControl('');

  register: FormGroup = new FormGroup({
    userName: this.name,
    lastName: this.lastName,
    email: this.email,
    password: this.password,
    ConfirmPassword: this.ConfirmPassword,
  });

  constructor(
    private authService: GoogleApiService,
    private router: Router,
    private auth: GoogleservisService
  ) {}

  ngOnInit(): void {
    console.log('init');
    // this.name.statusChanges.subscribe(val => {
    //   console.log(this.name.value);
    // })
    console.log(this.register.valid);
  }

  registrar(form: any): void {
    console.log('Registro', this.Datos);
    this.auth.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('/login');
    });
  }
}
