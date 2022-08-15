import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducto } from '../data/store';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  // total: Subject<number> = new BehaviorSubject<number>(0);
  urls = 'http://localhost:4000/api/addcarrito';
  Count = new BehaviorSubject<number>(0);
  number = 0;
  cartProduts: any = JSON.parse(sessionStorage.getItem('API') || '[]');

  constructor(private http: HttpClient) {
    console.log(this.cartProduts);
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

  toggleItem(items: string): Observable<IProducto> {
    return this.http.get<IProducto>(this.urls + '/' + items);
  }
}
