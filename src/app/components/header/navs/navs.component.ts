import { CartPageComponent } from './../../../pages/cart-page/cart-page.component';
import { Component, OnInit } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import { GoogleApiService } from 'src/app/pages/login/login/service/google-api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent implements OnInit {
  userLogged = this.googleService.getUserLogged();
  public rutas: Array<any> = [];
  public fondo!: string;
  public usuario!: string;
  public carrito!: string;
  opened = false;
  MatDialog: any;
  showHover!: boolean;
  Addcarrito: any;
  add: any;

  constructor(
    public service: ServiciosaddService,
    private googleService: GoogleApiService,
    public dialog: MatDialog
  ) {
    this.showHover = false;
  }
  openDialog() {
    const dialogRef = this.dialog.open(CartPageComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  // howHover(show: boolean) {
  //   this.showHover = show;
  // }

  ngOnInit(): void {
    this.fondo = '../../../assets/img/logo.png';
    this.usuario = '../../../assets/img/usuario.png';
    this.carrito = '../../../assets/img/carrito.png';
    //add car
    this.add = sessionStorage.getItem('API');
    this.Addcarrito = JSON.parse(this.add);
    console.log(this.Addcarrito);
  }
}
