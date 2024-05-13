import { Component } from '@angular/core';
import { scrollToElement } from '../functions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  linkAnimationStates: { [key: string]: { enter: boolean, leave: boolean } } = {};

  onMouseEnter(linkId: string) {
    this.linkAnimationStates[linkId] = { enter: true, leave: false };
  }

  onMouseOut(linkId: string) {
    this.linkAnimationStates[linkId] = { enter: false, leave: true };
  }


  scrollToArea(link: string) {
    scrollToElement(link);
  }
}
