// import { imagen } from './../shop/data/store';
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
  public foto1!: string;
  public foto2!: string;
  public facebook!: string;
  public instagram!: string;
  public telegram!: string;
  public photor:  Array<any> = [];
  public index = 0;
  constructor() {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.foto = '../../../assets/img/Jaket.png';
    this.foto1 = '../../../assets/img/Jaket1.png';
    this.foto2 = '../../../assets/img/Jaket2.png';
=======
>>>>>>> c8bd44f33a8d2e8f236fbe68c07d437cef1ad136
    this.facebook = '../../../assets/img/facebook.png';
    this.instagram = '../../../assets/img/instagram.png';
    this.telegram = '../../../assets/img/telegram.png';


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
        img: '../../../assets/img/Jaket1.png',
        name: 'Casual Jaket',
        price: '$125',
        imagenes: '../../../assets/img/jaket1.png',
      },
      {
        img: '../../../assets/img/Jaket2.png',
        name: 'black jacket',
        price: '$550',
        imagenes: '../../../assets/img/Jaket02.png',
      },
      {
        img: '../../../assets/img/jaket3.png',
        name: ' pink jacket',
        price: '$350',
        imagenes: '../../../assets/img/jakeett03.png',
      },
    ];
    this.foto = this.imagen[this.index].img
  }


  scroll(){
    if (this.index < this.imagen.length){
      this.index += 1;
    }
    if (this.index == this.imagen.length){
      this.index = 0;
    }
    this.foto = this.imagen[this.index].img
  }

  ghg(){

  }
}
