import { Component, OnInit } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import { GoogleApiService } from 'src/app/pages/login/login/service/google-api.service';
import { MatDialog } from '@angular/material/dialog';
import { CartPageComponent } from 'src/app/pages/cart-page/cart-page.component';


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


  constructor(public service: ServiciosaddService,private googleService:GoogleApiService, public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(CartPageComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  ngOnInit(): void {
    this.fondo = '../../../assets/img/logo.png';
    this.usuario = '../../../assets/img/usuario.png';
    this.carrito = '../../../assets/img/carrito.png';
  }
}
