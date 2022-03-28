import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
    public imagen: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.imagen = [
      {
        img: 'https://i.pinimg.com/564x/82/52/1c/82521c81db171d9bf1e7eceeeb09f4b1.jpg',
        name: 'Casual Jaket',
        price: '$125',
      },
      {
        img: 'https://i.pinimg.com/564x/0d/23/3a/0d233a7a164441f5094c5496a4ca0655.jpg',
        name: 'Casual Jaket',
        price: '$550',
      },
      {
        img: 'https://i.pinimg.com/564x/43/65/16/436516b223765e07e01047ebe26edacd.jpg',
        name: 'Casual Jaket',
        price: '$350',
      },
    ]
  }

}
