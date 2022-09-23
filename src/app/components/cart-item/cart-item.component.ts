import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import { CarritoService } from './../../pages/shop/services/carrito.service';
import { IProducto } from 'src/app/pages/shop/data/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  items: any = JSON.parse(sessionStorage.getItem('API') || '[]');
  completed = false;
  @Input() item: IProducto = {
    _id: '',
    quantity: 0,
    fechaCreacion: new Date(),
    img: '',
    object: '',
    price: 0,
    title: '',
    classification: '',
    completed: false,
  };

  @Input() quantity: number = 0;
  checkbo: boolean = false;

  constructor(
    public carritoService: CarritoService,
    private service: ServiciosaddService
  ) {}

  ngOnInit(): void {}

  removerartic(id: string) {
    this.carritoService.deleteCarrito(id).subscribe((data) => {});
  }

  toggleIte(items: string) {
    this.checkbo = !this.checkbo;
    console.log('togled', this.checkbo);
    this.service.getProductoByID(items).subscribe((data) => {
      this.carritoService.total;
      console.log(this.carritoService.total);
    });
  }

  RemovercAr(item: string) {
    this.quantity -= 1;
    this.carritoService.cartProduts = this.carritoService.cartProduts.map(
      (p: any) => {
        if ((p._id = this.item._id)) {
          p.quantity = this.quantity;
          return p;
        }
        return p;
      }
    );
    this.carritoService.total -= this.item.price;
    console.log(this.item);
  }

  AddcAr() {
    this.quantity += 1;
    this.carritoService.cartProduts = this.carritoService.cartProduts.map(
      (p: any) => {
        if ((p._id = this.item._id)) {
          p.quantity = this.quantity;
          return p;
        }
        return p;
      }
    );
    this.carritoService.total += this.item.price;
    console.log(this.item);
  }

  //esta funcion se ejecuta cuando click al ckeckd y se actualiza el precio.
  onToggle(item: IProducto) {
    this.completed = !this.completed;
    if (this.completed) {
      console.log('aumentar');
      this.carritoService.total += item.price * item.quantity;
      return;
    } else {
      this.carritoService.total -= item.price * item.quantity;
      console.log(item.quantity);
    }
    console.log('Descrementar');
    console.log('DATA ENVIADA', this.carritoService.total);
  }
}
