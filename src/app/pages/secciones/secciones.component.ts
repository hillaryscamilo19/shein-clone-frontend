import { Component, OnInit } from '@angular/core';
import { IProducto } from '../shop/data/store';
import { CarritoService } from '../shop/services/carrito.service';
import { ServiciosaddService } from '../shop/services/serviciosadd.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {
  filter = '';
  id = '';
  listProduct: IProducto[] = [];                                                                                                                          
  constructor(private productoservis: ServiciosaddService, private carritoservis: CarritoService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
    this.router.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

    //backed
  getProduct() {
    this.productoservis.getProducto().subscribe(
      (data) => {
        this.listProduct = data;
        console.log(this.listProduct)
        this.listProduct = this.listProduct.filter((item) => item.classification === this.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
