import { Component, OnInit, Input } from '@angular/core';
import { ServiciosaddService } from 'src/app/pages/shop/services/serviciosadd.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  @Input() data: any;
  image: any = [
    {
      title: 'soft green coat',
      price: '$585',
      img: 'https://i.pinimg.com/564x/51/c8/7d/51c87d38c557cbb4fbab0274bcc25d36.jpg',
    },
    {
      title: 'green',
      price: '$250',
      img: 'https://i.pinimg.com/564x/09/3a/f4/093af4550abca3ab79da02aaeab1edbe.jpg',
    },
    {
      title: 'kfna',
      price: '$850',
      img: 'https://i.pinimg.com/736x/54/df/ee/54dfeea8e2bcdd98dade3dce2dacedd1.jpg',
    },
    {
      title: 'kajf',
      price: '$150',
      img: 'https://i.pinimg.com/564x/32/39/45/323945c382dfbd309614e9389fa958f1.jpg',
    },
    {
      title: 'kafjkaf',
      price: '$500',
      img: 'https://i.pinimg.com/564x/5f/1c/08/5f1c086b7d1fba900b50ac6e4a4e10ff.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$900',
      img: 'https://i.pinimg.com/564x/95/13/01/9513015cb8eb440b5558ad12a6270013.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$158',
      img: 'https://i.pinimg.com/564x/08/26/93/082693fcffdc44e1421faa40c1373e1f.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$23',
      img: 'https://i.pinimg.com/564x/e7/a8/e8/e7a8e8b65147fa0196bed6496a19d89f.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$125',
      img: 'https://i.pinimg.com/564x/2d/11/84/2d118465f2bf97cbfc44e3d9054b9fd7.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$854',
      img: 'https://i.pinimg.com/564x/0b/e6/72/0be672994ba780774dfcad1492952532.jpg',
    },
  ];
  constructor(private service: ServiciosaddService) {}

  ngOnInit(): void {}
  click(shop: any): void {
    this.service.getData(shop);
  }
}
