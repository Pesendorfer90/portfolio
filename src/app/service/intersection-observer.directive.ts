import { Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnDestroy {
  @Input() identifier: string;
  @Output() visibilityChanged: EventEmitter<{ id: string, isIntersecting: boolean }> = new EventEmitter<{ id: string, isIntersecting: boolean }>();
  private observer: IntersectionObserver;

  constructor(private element: ElementRef) {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.visibilityChanged.emit({
          id: this.identifier,
          isIntersecting: entry.isIntersecting
        });
      });
    });

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}