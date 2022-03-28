import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiciosaddService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  public lista: Array<any> = [];
  constructor() {
    this.getData;
  }

  getData(shop: any) {
    console.log(shop);
    this.lista.push(shop);
  }
}
