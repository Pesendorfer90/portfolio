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
      name: 'Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    },
    {
      image: './assets/img/portfolio-img/join.PNG',
      name: 'Join',
      techStack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. '
    },
    {
      image: './assets/img/portfolio-img/pokedex.PNG',
      name: 'Pokédex',
      techStack: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.'
    },
    {
      image: './assets/img/portfolio-img/under-construction.jpg',
      name: '',
      techStack: '',
      description: ''
    },
    {
      image: './assets/img/portfolio-img/under-construction.jpg',
      name: '',
      techStack: '',
      description: ''
    }
  ];
}
