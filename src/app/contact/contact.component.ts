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

  // onCheckboxChange() {
  //   this.checkBox = this.checkBox.value ? this.checkBox.value : null;
  // }
}



  // messageData = new ContactForm('ABC', 'DEF', 'GHI');

  // submitted = false;

  // onSubmit() { this.submitted = true; }

  // setValue() {
  //   this.contact.name = '';
  // }


//  zum testen 
//   const myContact = new ContactForm
//   ('SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');

// console.log('My CONTACT is called ' + myContact.name);




// Letzter ChatGPT eintrag BEACHTEN dort steht die LÖSUNG
// }
