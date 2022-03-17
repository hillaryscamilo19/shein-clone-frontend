import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() data: any;
  public rutas: Array<any> = [];
  public imagen: Array<any> = [];
  public foto!: string;

  constructor() {}

  ngOnInit(): void {
    this.foto = 'https://i.pinimg.com/564x/60/b0/4b/60b04ba3ce0e20789f22f26358f8417c.jpg'


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
        img: 'https://i.pinimg.com/564x/82/52/1c/82521c81db171d9bf1e7eceeeb09f4b1.jpg',
        name: 'Casual Jaket',
        price: '$125',
      },
      {
        img: 'https://i.pinimg.com/564x/0d/23/3a/0d233a7a164441f5094c5496a4ca0655.jpg',
        name: 'Casual Jaket',
        price: '$550',
      },
      {
        img: 'https://i.pinimg.com/564x/43/65/16/436516b223765e07e01047ebe26edacd.jpg',
        name: 'Casual Jaket',
        price: '$350',
      },
    ];
  }
  clicked(): void {}
}
