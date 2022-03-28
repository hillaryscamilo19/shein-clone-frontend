import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {
  public rutas: Array<any> = [];
  ju:any;
  // constructor(public service: ServiciosaddService) {}

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

