import { Component } from '@angular/core';
import { scrollToElement } from '../../functions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  scrollToArea(element: string) {
    scrollToElement(element);
  }
}
