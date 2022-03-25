import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ServiciosaddService } from 'src/app/serviciosadd.service';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public rutas: Array<any> = [];
  ju:any;
  constructor(public service: ServiciosaddService) {}

  // @ViewChild(ShopComponent) child;

  ngOnInit(): void {
    // ngAfterViewInit(): void {
    //   // this.ju = child.datoEJ
    // }
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
