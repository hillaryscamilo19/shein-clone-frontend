import { CarritoService } from './services/carrito.service';
import { Component, OnInit, Input } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import {IProducto} from './data/store';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  local: any;
  icom = true;
  session: any
  listProduct: IProducto [] = [];
  filter = '';

  @Input() producto!: ShopComponent; 
  Data: IProducto[] = []
  showFiller = false;
  Api: Array <any> = [];

  zapatos = this.Data.filter((zapato) => zapato.object === 'zapato');
  vestidos = this.Data.filter((vestido) => vestido.object === 'vestido');
  abrigos = this.Data.filter((abrigo) => abrigo.object === 'abrigo');
  pantalones = this.Data.filter((pantalon) => pantalon.object === 'pantalon');

  
  constructor(private productoservis: ServiciosaddService , private carritoservis : CarritoService) {}


  ngOnInit(): void {
    this.getProduct();
  }

  
  //backed
  getProduct(){
    this.productoservis.getProducto().subscribe(data =>{
      console.log(data);
      this.listProduct = data;
    }, error => {
      console.log(error);
    })
  }

  addCar(id: string){
    this.productoservis.getProductoByID(id).subscribe(data =>{
      console.log(data)
      return this.Api.push(data);
    }, error => {
      console.log(error);
    })
    sessionStorage.setItem('API',JSON.stringify(this.Api)); 
  }

  //añadir carrito
  AddCarrirto(){
    const pop = {
      userId: 'jdkgdj',
      product: '',
      PriceId: '',
      ImgProduct: '',
      Titleproduct: '',
    }
 
    
    this.carritoservis.addCarrito(pop)
}
}
