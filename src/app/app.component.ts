import { Component, HostListener } from '@angular/core';
import { detectTouchDevice } from 'src/app/functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}