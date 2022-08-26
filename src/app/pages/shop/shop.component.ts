import { CarritoService } from './services/carrito.service';
import { Component, OnInit, Input } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import { IProducto } from './data/store';
import { HttpClient } from '@angular/common/http';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  urls = 'http://localhost:4000/api/addcarrito';
  local: any;
  session: any;
  listProduct: IProducto[] = [];
  filter = '';
  tag = '';
  data: any;
  Count = this.carritoservis.Count

  @Input() producto!: ShopComponent;
  Data: IProducto[] = [];
  showFiller = false;
  Api: Array<any> = [];

  zapatos = this.Data.filter((zapato) => zapato.object === 'zapato');
  vestidos = this.Data.filter((vestido) => vestido.object === 'vestido');
  abrigos = this.Data.filter((abrigo) => abrigo.object === 'abrigo');
  pantalones = this.Data.filter((pantalon) => pantalon.object === 'pantalon');

  constructor(
    private productoservis: ServiciosaddService,
    private carritoservis: CarritoService,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tag = '../../../assets/img/tag.png';
    this.getProduct();
  }

  //backed
  getProduct() {
    this.productoservis.getProducto().subscribe(
      (data) => {
        console.log(data);
        this.listProduct = data;
      },
      (error) => {
        console.log(error);
      }
    );
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
  openDialog(id: string) {
    const dialogRef = this.dialog.open( CartPageComponent );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}


