import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public google!: string;
  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {}

  openDialog() {
  }

}
