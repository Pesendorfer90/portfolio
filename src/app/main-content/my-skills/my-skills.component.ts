import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { updateVisibility } from '../../functions';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements AfterViewInit {
  @ViewChild('arrowTrigger') arrowTrigger!: ElementRef;
  @Output() visible = new EventEmitter<boolean>();
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])

  ngAfterViewInit() {
    updateVisibility(this.arrowTrigger, this.visible);
  }

  onWindowChange() {
    updateVisibility(this.arrowTrigger, this.visible);
  }
}