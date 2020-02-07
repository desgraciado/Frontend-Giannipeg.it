import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from '../http-request.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  title = 'GianniPeg';
  url = 'https://smtp.maliweb.at/personen';

  public data: any;

  constructor(private api: HttpRequestService) {
  }

  ngOnInit() {
    this.api
      .getPersonen(this.url)
      .subscribe(
        data => {
          console.log(data);
          this.data = data;
        },
        err => {
          console.log(err);
        }
      );
  }

}
