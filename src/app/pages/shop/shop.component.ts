import { Component, OnInit, Input } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
// import * as dataRaw from '../shop/data/store.json';
import { imagen } from './data/store';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  filter = '';
  @Input() data: any;
  @Input() producto!: ShopComponent; 
  imagen = imagen;
  showFiller = false;
  ima = this.imagen;

  zapatos = this.imagen.filter((zapato) => zapato.objec === 'zapato');
  vestidos = this.imagen.filter((vestido) => vestido.objec === 'vestido');
  abrigos = this.imagen.filter((abrigo) => abrigo.objec === 'abrigo');
  pantalones = this.imagen.filter((pantalon) => pantalon.objec === 'pantalon');
  constructor() {}

  ngOnInit(): void {}
}