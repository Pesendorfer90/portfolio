import { Component, OnInit } from '@angular/core';
import { scrollToElement } from '../functions';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  menu: boolean = false;
  burgerIndex: number = 1;
  isAnimating: boolean = false;
  linkAnimationStates: { [key: string]: { enter: boolean, leave: boolean, down: boolean } } = {};
  linkId: string[] = ['aboutMeLink', 'mySkillsLink', 'portfolioLink'];
  containerSize: number[] = [170, 580, 96];

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          scrollToElement(tree.fragment);
        }
      }
    });
  }

  scrollToArea(link: string) {
    if (["aboutMe", "mySkills", "portfolio", "contactSection"].includes(link)) {
      this.navMenu();
    }
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
}
