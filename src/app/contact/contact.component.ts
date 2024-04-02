import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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





  contactData = {
    name: "",
    email: "",
    message: "",
    privatPolicy: false,
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
      
    }
  }







  // meinFormular: FormGroup;
  // name: FormControl;
  // email: FormControl;
  // message: FormControl;
  // checkBox: FormControl;

  // constructor() {
  //   this.name = new FormControl('', [Validators.required, Validators.minLength(5)]);
  //   this.email = new FormControl('', [Validators.required, Validators.email]);
  //   this.message = new FormControl('', [Validators.required, Validators.minLength(10)]);
  //   this.checkBox = new FormControl('', Validators.required);

  //   this.meinFormular = new FormGroup({
  //     name: this.name,
  //     email: this.email,
  //     message: this.message,
  //     checkBox: this.checkBox
  //   });
  //   console.log(this.meinFormular.value);
  // }

  // logFormValue() {
  //   console.log(this.meinFormular.value);
  // }

  logFormValue() {
    console.log(this.contactData);
  }

  onCheckboxChange() {
    if (this.contactData.privatPolicy) {
      // this.meinFormular.get('checkBox').setValue('');
      // console.log(this.meinFormular.get('checkBox').value);
    }    
  }

  // onCheckboxChange() {
  //   if (!this.meinFormular.get('checkBox').value) {
  //     this.meinFormular.get('checkBox').setValue('');
  //     console.log(this.meinFormular.get('checkBox').value);
  //   }    
  // }
}