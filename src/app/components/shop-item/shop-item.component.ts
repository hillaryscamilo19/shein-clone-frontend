import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProducto } from 'src/app/pages/shop/data/store';
import { CarritoService } from 'src/app/pages/shop/services/carrito.service';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import { CartPageComponent } from './../../pages/cart-page/cart-page.component';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  urls = 'http://localhost:4000/api/addcarrito';
  @Input()listProduct: IProducto[] = [];
  @Input()filter = '';
  showFiller = false;
  constructor( public dialog: MatDialog,private productoservis: ServiciosaddService,private carritoservis: CarritoService) { }

  ngOnInit(): void {
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open( CartPageComponent );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

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
