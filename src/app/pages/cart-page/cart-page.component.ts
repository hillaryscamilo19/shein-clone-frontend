import { Component, OnInit } from '@angular/core';
import { IProducto } from '../shop/data/store';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  Addcarrito: any;
  add: any;
  listProduct: IProducto[] = [];
  filter = '';
  constructor() {
  }

  ngOnInit(): void {
    this.add = sessionStorage.getItem('API');
    this.Addcarrito = JSON.parse(this.add);
    console.log(this.Addcarrito);
  }
}
