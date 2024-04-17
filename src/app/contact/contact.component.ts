import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { updateVisibility } from './../functions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements AfterViewInit {
  isHovered: boolean = false;
  nameFocus: boolean = false;
  emailFocus: boolean = false;
  messageFocus: boolean = false;


  contactData = {
    name: "",
    email: "",
    message: "",
    privatPolicy: false,
  }


  @ViewChild('arrowTrigger3') arrowTrigger!: ElementRef;
  @Output() visible3 = new EventEmitter<boolean>();
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])

  ngAfterViewInit() {
    updateVisibility(this.arrowTrigger, this.visible3);
  }


  onWindowChange() {
    updateVisibility(this.arrowTrigger, this.visible3);
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {  
    }
  }
}