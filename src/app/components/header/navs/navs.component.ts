import { Component, OnInit } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent implements OnInit {
  public rutas: Array<any> = [];
  ju: any;
  lista: any;
  constructor(public service: ServiciosaddService) {}

  // @ViewChild(ShopComponent) child;

  ngOnInit(): void {
    this.service.disparador.subscribe((data) => {
      console.log('recibiendo data........', data);
      this.lista.push(data);
    });
    this.rutas = [
      {
        name: 'HOME',
        ruta: '/home',
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
  }
}
