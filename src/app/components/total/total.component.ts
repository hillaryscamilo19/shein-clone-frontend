import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from 'src/app/pages/shop/data/store';
import { CarritoService } from 'src/app/pages/shop/services/carrito.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent implements OnInit {
  @Input() mensaje: string = '';
  
  item: IProducto = {
    _id: '',
    quantity: 0,
    fechaCreacion: new Date(),
    img: '',
    object: '',
    price: 0,
    title: '',
    classification: '',
    completed: false,
  }
  constructor(public carritoService: CarritoService) {}

  ngOnInit(): void {
  }

  
}


