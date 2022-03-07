import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imagen!: string;
  public imagen2!:string;
  public imagen3!:string;
  public imagen4!:string;
  public imagen5!:string;
  public imagen6!:string;
  public imagen7!:string;
  public imagen8!:string;
  public imagen9!:string;
  public imagen10!:string;
  public imagen11!:string;
  constructor() { }

  ngOnInit(): void {
    this.imagen = 'https://i.pinimg.com/564x/60/c9/43/60c9432b9466c2a6912b26d0ce42c152.jpg'
    this.imagen2 = 'https://i.pinimg.com/564x/f2/42/85/f242856fba2eee98a39fc7e315d23631.jpg'
    this.imagen3 = 'https://i.pinimg.com/564x/7d/92/da/7d92dac157c7740d26ca43d887e88041.jpg'
    this.imagen4 = 'https://i.pinimg.com/564x/f9/42/5b/f9425b6a4b9b23b7d9e04786e40d0e9a.jpg'
    this.imagen5 = 'https://i.pinimg.com/564x/03/1c/42/031c42fdd56c9bef0fe9bc17eead8b6b.jpg'
    this.imagen6 = 'https://i.pinimg.com/236x/00/80/80/008080b34b6287ed59dde29742ca2c2e.jpg'
    this.imagen7 = 'https://i.pinimg.com/564x/6e/30/83/6e308339913291d0fee1590341a0a47d.jpg'
    this.imagen8 = 'https://i.pinimg.com/564x/87/ee/3c/87ee3c858bd024749ad7b7df74f1ee07.jpg'
    this.imagen9 = 'https://i.pinimg.com/564x/2c/85/5d/2c855db4434cfd058e2f3f338ee4e72d.jpg'
    this.imagen10 = 'https://i.pinimg.com/564x/be/26/c4/be26c4de8f7a816107ff19cccb549e18.jpg'
    this.imagen11 = 'https://i.pinimg.com/564x/a8/d4/df/a8d4dfdc9946f479ca6ddca34528fd17.jpg'
  }

}
