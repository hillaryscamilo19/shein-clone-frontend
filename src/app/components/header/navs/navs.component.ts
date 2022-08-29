import { CarritoService } from './../../../pages/shop/services/carrito.service';
import { Component,OnInit} from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent implements OnInit {
  public fondo!: string;
  constructor(
    public service: ServiciosaddService,
    public carritoService: CarritoService
  ) {
  }

  ngOnInit(): void {
    this.fondo = '../../../assets/img/logo.png';;
  }

}
