import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import { CarritoService } from './../../pages/shop/services/carrito.service';
import { IProducto } from 'src/app/pages/shop/data/store';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  items: any = JSON.parse(sessionStorage.getItem('API') || '[]');
  @Input() item: IProducto= {
    _id: '',
    quantity: 0,
    fechaCreacion: new Date(),
    img: '',
    object: '',
    price: 0,
    title: '',
    classification: ''
  }
  @Input() quantity: number = 0;
  checkbo: boolean = false;

  constructor(
    public carritoService: CarritoService,
    private service:ServiciosaddService,
  ) { }

  ngOnInit(): void {

    
  }

  removerartic(id: string) {
    this.carritoService.deleteCarrito(id).subscribe((data) => {});
  }

  toggleItem(items: string) {
    this.checkbo = !this.checkbo;
    console.log('togled', this.checkbo);
     this.service.getProductoByID(items).subscribe(
      (data)=>{
        this.carritoService.total = 1540
        console.log(this.carritoService.total);
        
      }
     )
  }

  RemovercAr(item: string) {
    this.carritoService.Count = this.carritoService.Count -1;
  }

  AddcAr() {
    this.getTotal
    this.quantity += 1;
    this.carritoService.total += this.item.price;
    console.log(this.item);
  }

  getTotal() {
    this.carritoService.total = this.items.filter((items: any) => !items.completed);
  }
}
