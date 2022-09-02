import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../shop/data/store';
import { CarritoService } from '../shop/services/carrito.service';
import { ServiciosaddService } from '../shop/services/serviciosadd.service';

@Component({
  selector: 'app-women-page',
  templateUrl: './women-page.component.html',
  styleUrls: ['./women-page.component.css']
})
export class WomenPageComponent implements OnInit {
  urls = 'http://localhost:4000/api/addcarrito';
  listProdu: IProducto[] = [];
  @Input()filter = '';

  constructor(private productoservis: ServiciosaddService,private carritoservis: CarritoService) { }

  ngOnInit(): void {
    console.log(this.listProdu);
    
  }

  addCar(id: string) {
    this.productoservis.getProductoByID(id).subscribe(
      (data) => {
        this.carritoservis.addCarrito(this.urls, data).subscribe((data) => {
          console.log(data);
        });
        this.carritoservis.cartProduts.push(data);
        sessionStorage.setItem(
          'API',
          JSON.stringify([...this.carritoservis.cartProduts])
        );
        console.log(id);
        this.carritoservis.increaseCount();
      },
      
      (error) => {
        console.log(error);
      }
    );
  }

}
