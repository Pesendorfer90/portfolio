import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  items = [
    {
      image: './assets/img/portfolio-img/epl.png',
      text: 'Text 1'
    },
    {
      image: './assets/img/portfolio-img/join.PNG',
      text: 'Text 2'
    },
    {
      image: './assets/img/portfolio-img/pokedex.PNG',
      text: 'Text 3'
    },
    {
      image: './assets/img/portfolio-img/under-construction.jpg',
      text: 'Text 4'
    },
    {
      image: './assets/img/portfolio-img/under-construction.jpg',
      text: 'Text 5'
    }
  ];
}
