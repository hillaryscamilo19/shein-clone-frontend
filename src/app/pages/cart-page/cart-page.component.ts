import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  Addcarrito:any;
  add: any;
  constructor() { }

  ngOnInit(): void {
    this.add = sessionStorage.getItem('API')
    this.Addcarrito = JSON.parse(this.add)
    console.log(this.Addcarrito)
  }
}
