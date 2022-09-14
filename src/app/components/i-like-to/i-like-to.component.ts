import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/pages/shop/services/carrito.service';

@Component({
  selector: 'app-i-like-to',
  templateUrl: './i-like-to.component.html',
  styleUrls: ['./i-like-to.component.css']
})
export class ILikeToComponent implements OnInit {
  count: number = 1
  showFiller = false;
  constructor(public carritoService: CarritoService) { }

  ngOnInit(): void {
  }

}
