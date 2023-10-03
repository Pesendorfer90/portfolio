import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements AfterViewInit {
  @ViewChild('arrowTrigger') arrowTrigger!: ElementRef;
  @Output() visible = new EventEmitter<boolean>();


  ngAfterViewInit() {
    this.updateVisibility();
  }


  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])


  onWindowChange() {
    this.updateVisibility();
  }


  updateVisibility() {
    this.visible.emit(this.isElementVisible());
  }
  

  isElementVisible(): boolean {
    const element = this.arrowTrigger.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    const isVisible =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= windowWidth;
  
    return isVisible;
  }
}