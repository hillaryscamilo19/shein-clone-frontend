import { CarritoService } from './pages/shop/services/carrito.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Shein-clone';
  constructor(
    private carritoService: CarritoService 
  ){
  }

  ngOnInit(): void {
    this.setCount();
  }

  setCount() {
   let total = 0;
  //  console.log(this.carritoService.cartProduts.length);
    for(let i = 0; i < this.carritoService.cartProduts.length; i++) {
      total = total + 1;
      
    }
    this.carritoService.Count = total;
  }

}
