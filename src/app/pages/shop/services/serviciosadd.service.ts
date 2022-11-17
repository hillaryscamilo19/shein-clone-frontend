import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {IProducto} from '../data/store'
import { CarritoService } from './carrito.service';

@Injectable({
  providedIn: 'root',
})
export class ServiciosaddService {
  url = 'http://localhost:4000/api/productos';
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  public lista: Array<any> = [];
  public jso: Array<any> = [];
  constructor(private http: HttpClient,  public carritoService: CarritoService) {
    this.getData;
  }

  //añadir al carrito
  getData(shop: any) {
    console.log(shop);
    this.lista.push(shop);
  }


  deleteCarrito(id: string): Observable<any> {
    return this.http.delete(this.url + `/${id}`);
  }

  getjso(getjs: any) {
    this.jso.push(getjs);
    console.log(getjs);
  }

  getProducto(): Observable<any> {
    return this.http.get(this.url);
  }

  getProductoByID(id: string):Observable<IProducto> {
    console.log(id);
    return this.http.get<IProducto>(this.url + `/${id}`);
  }

  addItems(id: string) {
    this.http.get(this.url + `/${id}`);
  }

}
