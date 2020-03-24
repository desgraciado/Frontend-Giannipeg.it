import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// import { ImageData } from './ImageModel';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})


export class CreateProductComponent implements OnInit {
  title = 'ImageUploaderFrontEnd';
  url = '/image/upload';
  uploadedFiles: any[] = [];


  constructor(private httpClient: HttpClient) { }
  ngOnInit() {}

  myUploader(event):void{
    console.log('My File upload',event);
    if(event.files.length == 0){
      console.log('No file selected.');
      return;
    }
    var fileToUpload = event.files[0];
    let input = new FormData();
    input.append("myFile", fileToUpload);

    this.httpClient
    .post(environment.baseUrl + this.url, input)
    .subscribe(res => {
      console.log(res);
    });
  }

  // upload completed event
  onCUpload(event): void {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onBeforeSend(event): void {
    //event.xhr.setRequestHeader('Authorization', 'Bearer ' + abp.auth.getToken());
  }
}
