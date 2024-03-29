import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { IProducto } from '../data/store';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  // total: Subject<number> = new BehaviorSubject<number>(0);
  urls = 'http://localhost:4000/api/productos';
  Count = 0;
  number = 0;
  total = 0;
  cartProduts: any = JSON.parse(sessionStorage.getItem('API') || '[]');
  @Output() toggleItem: EventEmitter<IProducto> = new EventEmitter();
  @Input() mensaje: string = ''
  constructor(private http: HttpClient) {
    console.log(this.cartProduts);
  }

  setCount(num: number) {
    this.Count = num;
  }

  increaseCount(num?: number) {
    num = num ?? 1;
    this.Count += num;
  }

  decreaseCount(num?: number) {
    num = num ?? 1;
    this.Count -= num;
  }

  getCarrito() {
    return this.http.get(this.urls);
  }

  deleteCarrito(id: string): Observable<any> {
    return this.http.delete(this.urls + `/${id}`);
  }

  addCarrito(urls: string, body: any): Observable<any> {
    return this.http.post(urls, body);
  }

  toggleIte(items: string): Observable<IProducto> {
    return this.http.get<IProducto>(this.urls + '/' + items);
  }

  setTotal(num:number){
    this.total = num
  }

}
