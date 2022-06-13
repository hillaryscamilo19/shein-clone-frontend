import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


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
  ) {}

  ngOnInit(): void {
    this.google = '../../../assets/img/google.png';
  }
  openDialog() {
  }
}
