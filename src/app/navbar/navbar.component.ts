import { Component, HostListener, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { scrollToElement } from '../functions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements AfterViewInit {
  menu: boolean = false;
  burgerIndex: number = 1;
  isAnimating: boolean = false;
  linkAnimationStates: { [key: string]: { enter: boolean, leave: boolean, down: boolean } } = {};
  linkId: string[] = ['aboutMeLink', 'mySkillsLink', 'portfolioLink'];
  linkTextId: string[] = ['aboutMeLinkText', 'mySkillsLinkText', 'portfolioLinkText'];

  containerSize: number[] = [170, 580, 96];
  @ViewChild('nav') nav!: ElementRef;


  constructor(private renderer: Renderer2) {
    (window as any).myComponentInstance = this;
  }

  ngAfterViewInit() {
    this.setBoarderContainerHeight();
  }



  // Die funktion starte auch beim laden der seite !!!!!!!!!!!!!!!!!!!!! 
  // ansonsten funktioniert es halbwegs irgendwie kommt die berechnung nicht nach
  // eventuell wieder über innerheight berechnen weil das berechnen zu lange dauert und die seite dann grüßer wird.
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerHeight < 902) {
    this.setBoarderContainerHeight();
    } if (window.innerHeight > 902) {
      this.setBaseValue();
    }
  }

  private setBoarderContainerHeight() {
    let divHeight = this.nav.nativeElement.offsetHeight;
    let startHeight = 902 - (92 + 300);
    let percentageValue = divHeight / startHeight;
    let resultHeight = this.containerSize[0] * percentageValue;
    let resultWidth = this.containerSize[1] * percentageValue;
    let resultFont = this.containerSize[2] * percentageValue;

    console.log('berechnete size');

    this.linkId.forEach(linkId => {
      let linkContainer = document.getElementById(linkId);
      if (linkContainer) {
        this.renderer.setStyle(linkContainer, 'height', `${resultHeight}px`);
        this.renderer.setStyle(linkContainer, 'width', `${resultWidth}px`);
      }
    });


    this.linkTextId.forEach(linkTextId => {
      let linkTextContainer = document.getElementById(linkTextId);
      if (linkTextContainer) {
        this.renderer.setStyle(linkTextContainer, 'font-size', `${resultFont}px`);
      }
    });
  }

  setBaseValue() {
    console.log('Standart size');
    
    this.linkId.forEach(linkId => {
      let linkContainer = document.getElementById(linkId);
      if (linkContainer) {
        this.renderer.setStyle(linkContainer, 'height', `${this.containerSize[0]}px`);
        this.renderer.setStyle(linkContainer, 'width', `${this.containerSize[1]}px`);
      }
    });


    this.linkTextId.forEach(linkTextId => {
      let linkTextContainer = document.getElementById(linkTextId);
      if (linkTextContainer) {
        this.renderer.setStyle(linkTextContainer, 'font-size', `${this.containerSize[2]}px`);
      }
    });
  }



scrollToArea(link: string) {
  this.navMenu();
  scrollToElement(link);
}

navMenu() {
  if (!this.isAnimating) {
    this.setVariables();
    this.animateBurger();
    this.changeScroll();
  }
}

animateBurger() {
  if (this.burgerIndex == 1) {
    this.openBurger();
  } else {
    this.closeBurger();
  }
}

changeScroll() {
  if (this.menu) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
}

setVariables() {
  this.linkId.forEach(linkId => this.onMouseOut(linkId));
  this.isAnimating = true;
  this.menu = !this.menu;
}

openBurger() {
  const interval = setInterval(() => {
    this.burgerIndex < 5 ? this.burgerIndex++ : (clearInterval(interval), this.isAnimating = false);
  }, 56);
}

closeBurger() {
  const interval = setInterval(() => {
    this.burgerIndex > 1 ? this.burgerIndex-- : (clearInterval(interval), this.isAnimating = false);
  }, 56);
}

onMouseEnter(linkId: string) {
  this.linkAnimationStates[linkId] = { enter: true, leave: false, down: false };
}

onMouseOut(linkId: string) {
  this.linkAnimationStates[linkId] = { enter: false, leave: true, down: false };
}

onMouseDown(linkId: string) {
  this.linkAnimationStates[linkId] = { enter: false, leave: false, down: true };
}
}
