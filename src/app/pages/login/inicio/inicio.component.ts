import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OAuthService } from 'angular-oauth2-oidc';
import { GoogleApiService } from './service/google-api.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  hide = true;
  public google!: string;
  constructor(
    public dialog: MatDialog,
    private readonly oAuthService: OAuthService,
    private sevices: GoogleApiService
  ) {}

  ngOnInit(): void {
    this.google = '../../../assets/img/google.png';
  }
  openDialog() {
   this.sevices
  }
}
