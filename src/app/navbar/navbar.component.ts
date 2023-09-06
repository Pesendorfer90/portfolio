import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public menu: boolean = false;
  public burgerIndex: number = 1;
  public buttonDisabled: boolean = false;

  navMenu() {
    console.log(this.buttonDisabled);
    this.buttonDisabled = true;
    console.log(this.buttonDisabled);
    this.menu = !this.menu;
    this.animateBurger();
    setTimeout(() => {
      this.buttonDisabled = false;
      console.log(this.buttonDisabled);
    }, 10.5)
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
      this.burgerIndex < 5 ? this.burgerIndex++ : (clearInterval(interval));
    }, 56);
  }

  closeBurger() {
    const interval = setInterval(() => {
      this.burgerIndex > 1 ? this.burgerIndex-- : (clearInterval(interval));
    }, 56);
  }
}
