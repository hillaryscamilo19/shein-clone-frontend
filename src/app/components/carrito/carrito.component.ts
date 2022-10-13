import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/pages/shop/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  count: number = 1
  showFiller = false;
  Addcarrito: any;
  add: any;
  Show: boolean = false;
  emptyCart: string = '../../../assets/img/empty_cart.png';
  carrito: string = '../../../assets/img/carrito.png';
  

  constructor(public carritoService: CarritoService) { }

  ngOnInit(): void {
    this.Addcarrito = (this.add);
    console.log(this.carritoService.cartProduts.length);
    
  }

  DisplayProduc(sidenav: any) {
    sidenav.toggle();
  }
}
