import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input()data:any;
  public rutas: Array<any> = [];
  public imagen: Array<any> = [];


  constructor() {}

  ngOnInit(): void {
    this.rutas = [
      {
        name: 'HOME',
        ruta: '/',
      },
      {
        name: 'ABOUT US',
        ruta: '/about',
      },
      {
        name: 'SHOP',
        ruta: '/shop',
      },
      {
        name: 'CONTACT',
        ruta: '/contact',
      },
    ];
    this.imagen = [
      {
        img: ''
      },
      {
        img1: 'https://i.pinimg.com/564x/44/c7/07/44c70742913b5294de8886284030cc33.jpg',
        name: 'Casual Jaket',
        price:'$125'
      },
      {
        img2: 'https://i.pinimg.com/564x/77/22/8d/77228dfedae1acb82fdf881b644b3151.jpg',
        name: 'hi',
      },
      {
        img: 'https://i.pinimg.com/564x/f1/fe/d3/f1fed3273a32de7ad69220274872d077.jpg',
        name: 'hole',
      },
    ];
  }
  clicked(): void {}
}
