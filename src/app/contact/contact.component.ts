import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent {
  isHovered: boolean = false;
  nameFocus: boolean = false;
  emailFocus: boolean = false;
  messageFocus: boolean = false;

  meinFormular: FormGroup;
  name: FormControl;
  email: FormControl;
  message: FormControl;
  checkBox: FormControl;

  constructor() {
    this.name = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.message = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.checkBox = new FormControl('', Validators.required);

    this.meinFormular = new FormGroup({
      name: this.name,
      email: this.email,
      message: this.message,
      checkBox: this.checkBox
    });
    console.log(this.meinFormular.value);
  }

  logFormValue() {
    console.log(this.meinFormular.value);
  }

  onCheckboxChange() {
    if (!this.meinFormular.get('checkBox').value) {
      this.meinFormular.get('checkBox').setValue('');
      console.log(this.meinFormular.get('checkBox').value);
    }    
  }
}