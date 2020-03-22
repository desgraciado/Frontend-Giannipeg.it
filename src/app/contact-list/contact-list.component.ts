import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpRequestService } from '../http-request.service';
import { environment } from '../../environments/environment';
import { Contact } from '../dto/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  title = 'GianniPeg';
  public data: Contact[] = [];
  public contactForm = new FormGroup({
    surname: new FormControl(''),
    givenname: new FormControl(''),
  });

  constructor(
    private api: HttpRequestService,
  ) {}

//baseUrl = 'https://smtp.maliweb.at/'; comes from environments
  ngOnInit() {
    this.api.getContacts()
      .subscribe(resp => {
          console.log(resp);
          this.data = resp;
        },
        err => {
          console.log(err);
        }
      );
  }

  onSubmit() {
    console.warn('Your data has been submitted',
      this.contactForm);
    //this.contactForm.reset();
    if (this.contactForm.value.givenname == "" ||
      this.contactForm.value.surname == ""
    ) return;

    const CONTACT: Contact = new Contact(
      this.contactForm.value.givenname,
      this.contactForm.value.surname
    );
    this.api.addContact( CONTACT )
      .subscribe();
  }
}
