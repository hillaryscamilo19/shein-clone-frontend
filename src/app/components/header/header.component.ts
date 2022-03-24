import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ServiciosaddService } from 'src/app/serviciosadd.service';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public rutas: Array<any> = [];
  public lista: Array<any> = [];
  ju:any;
  constructor(private service: ServiciosaddService) {}

  @ViewChild(ShopComponent) child;

  ngOnInit(): void {
    this.service.disparador.subscribe((data) => {
      console.log('recibiendo data........', data);
      this.lista.push(data);
    });
    interface AfterViewInit{
      
    }
    ngAfterViewInit(): void {
      // this.ju = child.datoEJ
    }
    this.rutas = [
      {
        name: 'HOME',
        ruta: '/home',
      },
      {
        name: 'ABOUT US',
        ruta: '/about',
      },
      {
        name: 'SHOP',
        ruta: '/shop',
      },
      {
        name: 'CONTACT',
        ruta: '/contact',
      },
    ];
  }
}
