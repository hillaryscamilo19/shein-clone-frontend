import { CarritoService } from './services/carrito.service';
import { Component, OnInit, Input } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import { IProducto } from './data/store';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  local: any;
  icom = true;
  session: any;
  listProduct: IProducto[] = [];
  filter = '';
  tag = '';

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
    private carritoservis: CarritoService
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
        this.carritoservis.cartProduts.push(data);
        sessionStorage.setItem(
          'API',
          JSON.stringify([...this.carritoservis.cartProduts])
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //añadir carrito
  AddCarrirto() {
    const pop = {
      userId: 'jdkgdj',
      product: '',
      PriceId: '',
      ImgProduct: '',
      Titleproduct: '',
    };

    this.carritoservis.addCarrito(pop);
  }
}
