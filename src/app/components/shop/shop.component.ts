import { Component, OnInit,Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ServiciosaddService } from 'src/app/serviciosadd.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  // public image: Array<any> = [];
  datoEJ: any;
  @Input() data:any;
  image: any = [
    {
      title: 'soft green coat',
      price: '$5850',
      img: 'https://i.pinimg.com/564x/51/c8/7d/51c87d38c557cbb4fbab0274bcc25d36.jpg',
    },
    {
      title: 'green',
      price: '$50',
      img: 'https://i.pinimg.com/564x/57/13/63/571363a39a444febba93a0d2bafe7f84.jpg',
    },
    {
      title: 'kfna',
      price: '$850',
      img: 'https://i.pinimg.com/736x/54/df/ee/54dfeea8e2bcdd98dade3dce2dacedd1.jpg',
    },
    {
      title: 'kajf',
      price: '$150',
      img: 'https://i.pinimg.com/564x/8f/11/f1/8f11f16a51eab3385e6a247d4abf4a39.jpg',
    },
    {
      title: 'kafjkaf',
      price: '$500',
      img: 'https://i.pinimg.com/564x/ac/cc/db/acccdb39e1f5b2fd051ada85f2690ce1.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$5200',
      img: 'https://i.pinimg.com/564x/47/2f/d7/472fd700eb1b18d717209da6cf2e560d.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$5200',
      img: 'https://i.pinimg.com/564x/eb/39/20/eb39207089a20581e8142ed4597ab936.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$5200',
      img: 'https://i.pinimg.com/564x/e7/a8/e8/e7a8e8b65147fa0196bed6496a19d89f.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$5200',
      img: 'https://i.pinimg.com/564x/2d/11/84/2d118465f2bf97cbfc44e3d9054b9fd7.jpg',
    },
    {
      title: 'Akojfoa',
      price: '$5200',
      img: 'https://i.pinimg.com/564x/0b/e6/72/0be672994ba780774dfcad1492952532.jpg',
    },
  ];
  constructor(private service: ServiciosaddService) {

  }

  ngOnInit(): void {}
  click(): void {
    // this.service.disparador.emit({
    //   this.datoEJ = this.image;
    // })
    this.datoEJ = this.image
    console.log(this.service)
  }
}
