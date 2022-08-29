import { CarritoService } from './../../../pages/shop/services/carrito.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import { MatDialog } from '@angular/material/dialog';
import { IProducto } from 'src/app/pages/shop/data/store';
@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent implements OnInit {
  fecha: Date = new Date();
  total: number = 0;
  checkbo: boolean = true;
  price = 1;
  @Output() ToggleItem: EventEmitter<IProducto> = new EventEmitter();
  @Input() totalPri: IProducto = new IProducto(
    '',
    '',
    '',
    0,
    this.fecha,
    '',
    0
  );

  public rutas: Array<any> = [];
  public fondo!: string;
  opened = false;
  discaunt:boolean = false;
  disabledInput: boolean = false;
  Addcarrito: any;
  add: any;
  items: any = JSON.parse(sessionStorage.getItem('API') || '[]');
  count: number = 1;
  carritoCounts: number | undefined;
  isTouched: boolean = false;
  constructor(
    public service: ServiciosaddService,
    public dialog: MatDialog,
    public carritoService: CarritoService
  ) {
  }

  ngOnInit(): void {
    this.fondo = '../../../assets/img/logo.png';;
    this.add = sessionStorage.getItem('API');
    this.Addcarrito = JSON.parse(this.add);
    this.ToggleItem

  }

}
