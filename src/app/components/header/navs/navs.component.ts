import { InicioComponent } from './../../../pages/login/inicio/inicio.component';
import { Component, OnInit } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import * as dataRaw from '../navs/Data/navs.json';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent implements OnInit {
  public rutas: Array<any> = [];
  public fondo!: string;
  public usuario!: string;
  ju: any;
  lista: any;
  showFiller = false;
  imagen = dataRaw;
  opened = false;
  MatDialog: any;

  constructor(public service: ServiciosaddService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fondo = '../../../assets/img/Shein.png';
    this.usuario = '../../../assets/img/usuario.png';
    this.service.disparador.subscribe((data) => {
      this.lista.push(data);
    });
    this.rutas = [];
  }

<<<<<<< HEAD
  click(name: string): void {
    if (name == 'icono') {
      this.showFiller = true;
    }
    console.log(this.showFiller);
=======
      },
      // {
      //   name: '',
      //   ruta:'shopping',
      //   icon: 'local_grocery_store',
      // }
    ];
>>>>>>> 66d5cbdd14d35384c5b0f3296366da09da9bf124
  }

  openDialog() {
    const dialogRef = this.dialog.open(InicioComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
