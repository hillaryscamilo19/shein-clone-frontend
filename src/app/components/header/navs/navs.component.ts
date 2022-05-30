import { Component, OnInit } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';
import * as dataRaw from '../navs/Data/navs.json';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent implements OnInit {
  public rutas: Array<any> = [];
  ju: any;
  lista: any;
  showFiller = false;
  imagen= dataRaw;
  opened = false;

 
  constructor(public service: ServiciosaddService) {}

  // @ViewChild(ShopComponent) child;

  ngOnInit(): void {
    this.service.disparador.subscribe((data) => {
      // console.log('recibiendo data........', data);
      this.lista.push(data);
    });
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
      {
        name: '',

      },
      {
        name: '',
        ruta:'shopping',
        icon: 'local_grocery_store',
      }
    ];
  }

  image = [
    {
      title: 'soft green coat',
      price: '$585',
      img: 'https://i.pinimg.com/564x/51/c8/7d/51c87d38c557cbb4fbab0274bcc25d36.jpg',
      objec: 'abrigo',
    },
    {
      title: 'Ripped pants',
      price: '$250',
      img: 'https://i.pinimg.com/564x/09/3a/f4/093af4550abca3ab79da02aaeab1edbe.jpg',
      objec: 'pantalon',
    },
    {
      title: 'Ripped bell bottoms',
      price: '$158',
      img: 'https://i.pinimg.com/564x/76/90/5d/76905df47d7db406728238ab5e1f3faf.jpg',
      objec: 'pantalon',
    },
    {
      title: 'Gray sports pants',
      price: '$158',
      img: 'https://i.pinimg.com/564x/b7/3b/19/b73b1969c08712e63ef9f701ae0645d8.jpg',
      objec: 'pantalon',
    },
    {
      title: 'Simple Pants',
      price: '$158',
      img: 'https://i.pinimg.com/564x/71/af/eb/71afeb30c225514c41f66d1ae521f4de.jpg',
      objec: 'pantalon',
    },
    {
      title: 'Pink pants',
      price: '$158',
      img: 'https://i.pinimg.com/564x/08/26/93/082693fcffdc44e1421faa40c1373e1f.jpg',
      objec: 'pantalon',
    },
    {
      title: 'Classic black conversefna',
      price: '$850',
      img: 'https://i.pinimg.com/564x/98/fd/87/98fd870ebddcf2dd2d9b8e334a26cd32.jpg',
      objec: 'zapato',
    },
    {
      title: 'Kajfwhite elegant dress',
      price: '$150',
      img: 'https://i.pinimg.com/564x/32/39/45/323945c382dfbd309614e9389fa958f1.jpg',
      objec: 'vestido',
    },
    {
      title: 'Youthful purple dress',
      price: '$500',
      img: 'https://i.pinimg.com/564x/74/c1/ea/74c1ea676e25802dfce6b60b5cb31085.jpg',
      objec: 'vestido',
    },
    {
      title: 'Floral pink dress',
      price: '$500',
      img: 'https://i.pinimg.com/564x/cb/6a/6a/cb6a6ab682f80c1a457b962c57b4f07d.jpg',
      objec: 'vestido',
    },
    {
      title: 'Light pink dress',
      price: '$500',
      img: 'https://i.pinimg.com/564x/29/25/c2/2925c25352ac25ea9f1c8bfbdfb65ae7.jpg',
      objec: 'vestido',
    },
    {
      title: 'Teal Classic Dress',
      price: '$500',
      img: 'https://i.pinimg.com/564x/cb/81/a7/cb81a717d613bd8a7f47cd5f31df8383.jpg',
      objec: 'vestido',
    },
    {
      title: 'Classic black pants',
      price: '$900',
      img: 'https://i.pinimg.com/564x/95/13/01/9513015cb8eb440b5558ad12a6270013.jpg',
      objec: 'pantalon',
    },
    {
      title: 'Mixed soft coat',
      price: '$23',
      img: 'https://i.pinimg.com/564x/e7/a8/e8/e7a8e8b65147fa0196bed6496a19d89f.jpg',
      objec: 'abrigo',
    },
    {
      title: 'Purple coat',
      price: '$23',
      img: 'https://i.pinimg.com/564x/fe/44/e1/fe44e15f596f6e74faa1c1936b70da5d.jpg',
      objec: 'abrigo',
    },
    {
      title: 'Soft white coat',
      price: '$23',
      img: 'https://i.pinimg.com/564x/37/24/e0/3724e05fe7d5a667faef19eb7b121e3d.jpg',
      objec: 'abrigo',
    },
    {
      title: 'Red coat with white',
      price: '$23',
      img: 'https://i.pinimg.com/564x/c9/78/51/c978511342913c9bfd16e62dcc4158a6.jpg',
      objec: 'abrigo',
    },
    {
      title: 'Wine red wool coat',
      price: '$23',
      img: 'https://i.pinimg.com/564x/ec/f6/12/ecf612e1843ec5bcb42e19bd6a219067.jpg',
      objec: 'abrigo',
    },
    {
      title: 'Nike white',
      price: '$125',
      img: 'https://i.pinimg.com/564x/5b/dd/f2/5bddf232b20b003224cf2f7cdfd915a4.jpg',
      objec: 'zapato',
    },
    {
      title: 'White Nikes with purple flowers',
      price: '$854',
      img: 'https://i.pinimg.com/564x/e7/16/d6/e716d678a62dcccfb613660bd57ae35a.jpg',
      objec: 'zapato',
    },
    {
      title: 'White Nikes with red flowers',
      price: '$854',
      img: 'https://i.pinimg.com/564x/ab/5c/85/ab5c85623059ce56044d23a4570a0b84.jpg',
      objec: 'zapato',
    },
    {
      title: 'Black converse with flowers',
      price: '$854',
      img: 'https://i.pinimg.com/564x/c5/9f/32/c59f32620080623d32ef7e6ec8e3a8e2.jpg',
      objec: 'zapato',
    },
  ];

  click(name: string): void{
    if (name == "icono"){
      this.showFiller=true;
    }
    console.log(this.showFiller)
  }
}
