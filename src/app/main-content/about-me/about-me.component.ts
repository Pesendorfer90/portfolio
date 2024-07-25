import { Component } from '@angular/core';
import { scrollToElement } from '../../functions';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  scrollToArea(element: string) {
    scrollToElement(element);
  }
}
