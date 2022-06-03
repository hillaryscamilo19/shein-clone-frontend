import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  hide = true;
  public google!: string
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.google = '../../../assets/img/google.png';
  }
  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponent);
  }
}
