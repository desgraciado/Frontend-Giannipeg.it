import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../service/http-request.service';
import { Image } from '../dto/image';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  public data: Image[] = [];

  constructor(private api: HttpRequestService) { }

  ngOnInit(): void {
    this.api.getImages()
      .subscribe(resp => {
          console.log(resp);
          this.data = resp;
        },
        err => {
          console.log(err);
        }
      );
  }

}
