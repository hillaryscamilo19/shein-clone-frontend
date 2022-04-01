import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  public titulo: Array<any> = [];
  constructor() {}

  ngOnInit(): void {
    this.titulo = [
      {
        name: 'HISTORIA',
        title:
          'Store , emerged in 1994, at Restauración Street No.77 in the city of Santiago de los Caballeros, as an initiative of a group of enterprising and visionary women, the sisters Angelita Rodríguez Ochoa, Verónica Rodríguez Ochoa and Faviola Rodríguez Ochoa.The objective was to create a company dedicated to beautifying and warming family spaces in the province, with the sale of flowers and decorative pieces, supporting art and culture, with the distribution of works of art by various painters from the region.Over the years, ¨Store¨ has become a tradition in service, quality and innovation, with an incursion into the precious wood furniture factory, which was introduced at the time of becoming directed by Mr. Gilberto Blanco and his wife Angelita Rodríguez Ochoa de Blanco.',
      },
      {
        name: 'MISIÓN',
        title:
          'We are a company dedicated to the sale of clothing, focused on providing optimal customer service, quality in our products, being innovative and avant-garde',
      },
      {
        name: 'VISIÓN',
        title:
          'We are a company dedicated to the sale of clothing, focused on providing optimal customer service, quality in our products, being innovative and avant-garde',
      },
      {
        name: 'VALORES',
        title:
          'To be the leading and innovative company in the sale and manufacture of Clothing, standing out with excellence in customer service, the quality of our product and teamwork.',
      },
    ];
  }
}
