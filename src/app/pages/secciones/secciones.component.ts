import { Component, OnInit } from '@angular/core';
import { IProducto } from '../shop/data/store';
import { CarritoService } from '../shop/services/carrito.service';
import { ServiciosaddService } from '../shop/services/serviciosadd.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {
  filter = '';
  id: string = '';
  listProduct: IProducto[] = [];                                                                                                                          
  constructor(private productoservis: ServiciosaddService, private carritoservis: CarritoService, private router: ActivatedRoute ,    private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.getProduct();
      this.id = param['id'];

      console.log(this.id);
      console.log(this.listProduct);
      
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


  redirectTo(id: any) {
    this.route.navigate([`/secciones/${id}`]);
    
  }
}
