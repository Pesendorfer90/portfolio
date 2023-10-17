import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow2',
  templateUrl: './arrow2.component.html',
  styleUrls: ['./arrow2.component.scss']
})
export class Arrow2Component {
  @Input() arrowTrigger2: boolean;
}
