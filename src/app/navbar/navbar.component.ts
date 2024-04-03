import { Component } from '@angular/core';
import { scrollToElement } from '../functions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public menu: boolean = false;
  public burgerIndex: number = 1;
  public isAnimating: boolean = false;

  scrollToArea(link: string) {
    this.navMenu();
    scrollToElement(link);
  }

  navMenu() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.menu = !this.menu;
      this.animateBurger();
    }
  }

  animateBurger() {
    if (this.burgerIndex == 1) {
      this.openBurger();
    } else {
      this.closeBurger();
    }
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
}
