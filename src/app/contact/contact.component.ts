import { Component } from '@angular/core';
import { ContactForm } from '../contact-form';

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

  messageData = new ContactForm('ABC', 'DEF', 'GHI');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // setValue() {
  //   this.contact.name = '';
  // }


//  zum testen 
//   const myContact = new ContactForm
//   ('SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');

// console.log('My CONTACT is called ' + myContact.name);




// Letzter ChatGPT eintrag BEACHTEN dort steht die LÖSUNG
}
