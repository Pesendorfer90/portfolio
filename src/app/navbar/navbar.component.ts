import { Component } from '@angular/core';
import { scrollToElement } from '../functions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menu: boolean = false;
  burgerIndex: number = 1;
  isAnimating: boolean = false;
  linkId: string[]  = ['aboutMeLink', 'mySkillsLink', 'portfolioLink'];
  linkAnimationStates: { [key: string]: { enter: boolean, leave: boolean, down: boolean } } = {};

  constructor() {
    (window as any).myComponentInstance = this;
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
