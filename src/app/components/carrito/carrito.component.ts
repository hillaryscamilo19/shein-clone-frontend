import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/pages/shop/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  count: number = 1;
  showFiller = false;
  Addcarrito: any;
  add: any;
  public carrito!: string;
  

  constructor(public carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carrito = '../../../assets/img/carrito.png';
    this.Addcarrito = (this.add);
  }

  DisplayProduc(sidenav: any) {
    sidenav.toggle();
  }
}
