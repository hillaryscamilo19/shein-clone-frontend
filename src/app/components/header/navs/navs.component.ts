import { CarritoService } from './../../../pages/shop/services/carrito.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import { GoogleApiService } from 'src/app/pages/login/login/service/google-api.service';
import { MatDialog } from '@angular/material/dialog';
import { IProducto } from 'src/app/pages/shop/data/store';
@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent implements OnInit {
  userLogged = this.googleService.getUserLogged();
  fecha: Date = new Date();
  total: number = 0;
  price = 0
  @Input() totalPri: IProducto = new IProducto(
    '',
    '',
    '',
    0,
    this.fecha,
    '',
    0,
    false
  );

  public rutas: Array<any> = [];
  public fondo!: string;
  public usuario!: string;
  public carrito!: string;
  opened = false;
  showFiller = false;
  MatDialog: any;
  Addcarrito: any;
  add: any;
  items: any = JSON.parse(sessionStorage.getItem('API') || '[]');
  count: number = 0;
  carritoCounts: number | undefined;
  isTouched:boolean = false;
  constructor(
    public service: ServiciosaddService,
    private googleService: GoogleApiService,
    public dialog: MatDialog,
    public carritoService: CarritoService
  ) {
    console.log(this.userLogged);
  }

  ngOnInit(): void {
    this.fondo = '../../../assets/img/logo.png';
    this.usuario = '../../../assets/img/usuario.png';
    this.carrito = '../../../assets/img/carrito.png';
    this.add = sessionStorage.getItem('API');
    this.Addcarrito = JSON.parse(this.add);
    this.service.Count.subscribe((res) => {
      this.count = res;
    });
  }

  AddcAr(id:string) {
    this.isTouched=true
    if(this.isTouched){
      this.count = this.count + 1;
      this.isTouched = false
    }
    this.total += this.price * this.count;
    this.service.Count.next(this.count);
  }

  RemovercAr() {
    this.count = this.count - 1;
    this.service.Count.next(this.count);
  }

  DisplayProduc(sidenav: any) {
    sidenav.toggle();
    this.Addcarrito = JSON.parse(this.add);
  }

  removerartic(id: any) {
    this.carritoService.deleteCarrito(id).subscribe((data) => {});
    console.log(id);
  }

  logout() {
    this.googleService.logout();
  }

  //La funcion actualiza el precio cada vez que le hacemos click en check
  toggleItem(item: string) {
    this.getTotal();
    this.service.getProductoByID(item).subscribe((data)=>{
      this.price = data.price
    });
    console.log(item);
  }

  getTotal() {
    this.total = this.items
      .filter((items: any) => !items.completed)
      // multiplicacion de cada elemento.
      // .map((items: any) => console.log(items.quantity * items.price));

    // .reduce((acc:any, items:any) => (acc += items), 0);
  }

  // onToggle(totalPrice: IProducto) {
  //   totalPrice.completed = !totalPrice.completed;
  //   this.toggleItem.emit(totalPrice);
  //   console.log(this.totalPrice);

  // }

  //añadir carrito
  // AddCarrirto(pop: string) {
  //   const popo = {
  //     userId: '',
  //     product: '',
  //     PriceId: '',
  //     ImgProduct: '',
  //     Titleproduct: '',
  //   };

  //   // this.carritoService.addCarrito(pop);
  // }
}
