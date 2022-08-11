import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {IProducto} from '../data/store'

@Injectable({
  providedIn: 'root',
})
export class ServiciosaddService {
  url = 'http://localhost:4000/api/productos';
  Count = new BehaviorSubject<number>(0);
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  public lista: Array<any> = [];
  public jso: Array<any> = [];
  constructor(private http: HttpClient) {
    this.getData;
  }

  //añadir al carrito
  getData(shop: any) {
    console.log(shop);
    this.lista.push(shop);
  }

  getjso(getjs: any) {
    this.jso.push(getjs);
    console.log(getjs);
  }

  getProducto(): Observable<any> {
    return this.http.get(this.url);
  }

  getProductoByID(id: string):Observable<IProducto> {
    return this.http.get<IProducto>(this.url + `/${id}`);
  }

  addItems(id: string) {
    this.http.get(this.url + `/${id}`);
  }
}
