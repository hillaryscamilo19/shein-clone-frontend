import { Injectable, Output, EventEmitter } from '@angular/core';
import { Store } from '../model/item';
import { ShopComponent } from '../shop.component';

@Injectable({
  providedIn: 'root',
})
export class ServiciosaddService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  public lista: Array<any> = [];
  public jso: Array<any> = [];
  private pedido!: Store;
  constructor() {
    this.getData;
  }
  getData(shop: any) {
    console.log(shop);
    this.lista.push(shop);
  }
  getjso(getjs: any) {
    this.jso.push(getjs);
    console.log(getjs);
  }

//   addCarrito(producto:ShopComponent) {

//   }

//   removerProducto(producto:ShopComponent) {

//   }

//   realizarPedido(){

//   }

//   clearCarrito(){

//   }
}
