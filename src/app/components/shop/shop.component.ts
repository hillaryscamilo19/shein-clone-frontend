import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  public imagen: Array<any> = [];
  constructor() {}

  ngOnInit(): void {
    this.imagen = [
      {
        img: 'https://i.pinimg.com/564x/ab/65/9c/ab659c6a7a5dcbff84af72dd25580580.jpg',
      },
      {
        img: 'https://i.pinimg.com/564x/51/c8/7d/51c87d38c557cbb4fbab0274bcc25d36.jpg',
      },
      {
        img: 'https://i.pinimg.com/564x/08/46/a7/0846a731fe0f671ed77622e2399fc5bf.jpg',
      },
      {
        img: 'https://i.pinimg.com/564x/ac/e0/95/ace095fc69b202e44b6d2c318fb510df.jpg',
      },
      {
        img: 'https://i.pinimg.com/564x/13/d3/14/13d314e4d32f66d7232aa6dbd0395310.jpg',
      },
      {
        img: 'https://i.pinimg.com/564x/dd/21/d0/dd21d0e6e0b322841488d42f350bb8f7.jpg',
      },
    ];
  }
  clickd(): void {
    
  }
}
