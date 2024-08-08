import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { updateVisibility, detectTouchDevice } from '../../functions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements AfterViewInit {
  items = [
    {
      image: './assets/img/portfolio-img/epl.png',
      name: 'Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      gitLink: 'https://github.com/Pesendorfer90/el_pollo_loco',
      projectLink: 'http://gerald-pesendorfer.at/el_pollo_loco/index.html'
    },
    {
      image: './assets/img/portfolio-img/join.PNG',
      name: 'Join',
      techStack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      gitLink: 'https://github.com/Pesendorfer90/join',
      projectLink: 'http://gerald-pesendorfer.at/join/login.html'
    },
    {
      image: './assets/img/portfolio-img/pokedex.PNG',
      name: 'Pokédex',
      techStack: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      gitLink: 'https://github.com/Pesendorfer90/Pokedex',
      projectLink: 'http://gerald-pesendorfer.at/Pokedex/index.html'
    },
    {
      image: './assets/img/portfolio-img/under-construction.jpg',
      name: '',
      techStack: '',
      description: '',
      gitLink: '',
      projectLink: ''
    },
    {
      image: './assets/img/portfolio-img/under-construction.jpg',
      name: '',
      techStack: '',
      description: '',
      gitLink: '',
      projectLink: ''
    }
  ];

  isTouchDevice: boolean = false;

  visibilityMap: { [key: string]: boolean } = {};


  @HostListener('touchstart', ['$event'])
  onTouchStart() {
    console.log(this.isTouchDevice);
    this.isTouchDevice = detectTouchDevice();
  }

  @ViewChild('arrowTrigger2') arrowTrigger!: ElementRef;
  @Output() visible2 = new EventEmitter<boolean>();
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])

  ngAfterViewInit() {
    updateVisibility(this.arrowTrigger, this.visible2);
  }

  onWindowChange() {
    updateVisibility(this.arrowTrigger, this.visible2);
  }

  onVisibilityChanged(event: { id: string, isIntersecting: boolean }) {
    this.visibilityMap[event.id] = event.isIntersecting;
    console.log(`Element ${event.id} is intersecting: ${event.isIntersecting}`);
  }
}