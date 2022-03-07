import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css'],
})
export class RopaComponent implements OnInit {
  public img1!: string;
  public img2!: string;
  public img3!: string;
  public img4!: string;
  public img5!: string;
  public img6!: string;
  public img7!: string;
  public img8!: string;
  public img9!: string;
  public img10!: string;
  public img11!: string;
  public img12!: string;
  public img13!: string;
  public img14!: string;
  public img15!: string;
  public img16!: string;

  opened = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }

  ropaContainer() {
    this.img1 =
      'https://i.pinimg.com/564x/70/b7/54/70b7545f9b3eebe977418276fe00b3df.jpg';
  }
  constructor() {}

  ngOnInit(): void {
    this.img1 =
      'https://i.pinimg.com/564x/70/b7/54/70b7545f9b3eebe977418276fe00b3df.jpg';
    this.img2 =
      'https://i.pinimg.com/564x/f6/09/cb/f609cbd7e90f6a3a5560802940d04249.jpg';
    this.img3 =
      'https://i.pinimg.com/564x/45/bd/63/45bd63eacbf61d0a2a0ae6e43f4dce1e.jpg';
    this.img4 =
      'https://i.pinimg.com/564x/c7/51/6d/c7516d0edc593ae056254ae95c790deb.jpg';
    this.img5 =
      'https://i.pinimg.com/564x/3c/fd/92/3cfd92c206d836ddd3624e64b8629da1.jpg';
    this.img6 =
      'https://i.pinimg.com/564x/67/6c/ed/676ced7d79c651e6a921e1011696a10f.jpg';
    this.img7 =
      'https://i.pinimg.com/564x/89/93/28/89932858446eae54c5020bbdf162c18c.jpg';
    this.img8 =
      'https://i.pinimg.com/564x/bf/ba/a2/bfbaa2407fca189e95280220729511fe.jpg';
    this.img9 =
      'https://i.pinimg.com/564x/2e/f9/6e/2ef96ef30405c6a0908f6b16f1e505d4.jpg';
    this.img10 =
      'https://i.pinimg.com/736x/80/c9/36/80c936cfa9543418bb6644a594f09c92.jpg';
    this.img11 =
      'https://i.pinimg.com/564x/a9/e3/a8/a9e3a801c80361d73e31a75dad42ab17.jpg';
    this.img12 =
      'https://i.pinimg.com/564x/48/fe/d4/48fed412da9c83bbe1c3976dba056342.jpg';
    this.img13 =
      'https://i.pinimg.com/564x/f2/aa/58/f2aa5828ef1df7abfc978a61391b8c0d.jpg';
    this.img14 =
      'https://i.pinimg.com/564x/f0/30/4b/f0304b1c20953783961ebe701f3545b8.jpg';
    this.img15 =
      'https://i.pinimg.com/564x/59/ab/5b/59ab5b2d4b4886519a7d9f205738c6d8.jpg';
    this.img16 =
      'https://i.pinimg.com/564x/39/de/82/39de82e96582ced9431604adb1022bbd.jpg';
  }
}
