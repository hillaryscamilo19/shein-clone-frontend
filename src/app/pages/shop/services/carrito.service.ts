import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  url = 'http://localhost:4000/api/productos';

  constructor(private http: HttpClient) { }

  getCarrito(){
    return this.http.get(this.url);
  }

  deleteCarrito(id:string){
    return this.http.delete(this.url+`/${id}`)
  }

  addCarrito(car:any){
    return this.http.post(this.url, car)
  }

}
