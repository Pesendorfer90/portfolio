import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, inject, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { updateVisibility } from '../../functions';
import { scrollToElement } from '../../functions';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements AfterViewInit {
  isHovered: boolean = false;
  nameFocus: boolean = false;
  emailFocus: boolean = false;
  messageFocus: boolean = false;
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privatPolicy: false,
  }

  linkAnimationStates: { [key: string]: { enter: boolean, leave: boolean } } = {};


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

  mailTest = true;

  post = {
    endPoint: 'https://gerald-pesendorfer.at/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) { 
      ngForm.resetForm();
    }
  }






  onMouseEnter() {
    console.log('1');
    this.linkAnimationStates['arrowUp'] = { enter: true, leave: false };
  }

  onMouseOut() {
    console.log('2');
    this.linkAnimationStates['arrowUp'] = { enter: false, leave: true };
  }

  scrollToArea(link: string) {
    scrollToElement(link);
  }
}