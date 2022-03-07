import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concts',
  templateUrl: './concts.component.html',
  styleUrls: ['./concts.component.css']
})
export class ConctsComponent implements OnInit {
  public imagen!: string;

  constructor() { }

  ngOnInit(): void {
    this.imagen = 'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg';
  }

}
