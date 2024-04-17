import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow3',
  templateUrl: './arrow3.component.html',
  styleUrls: ['./arrow3.component.scss']
})
export class Arrow3Component {
  @Input() arrowTrigger3: boolean;
}