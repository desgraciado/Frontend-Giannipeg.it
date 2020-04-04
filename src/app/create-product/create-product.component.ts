import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators, AbstractControl } from '@angular/forms';



// import { ImageData } from './ImageModel';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    'Authorization': 'jwt-token'
  })
};

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})


export class CreateProductComponent implements OnInit {
  heading = 'ImageUploaderFrontEnd';
  url = '/image/upload';
  uploadedFiles: any[] = [];
  title = new FormControl('');


  constructor(private httpClient: HttpClient) { }
  ngOnInit() {}

  myUploader(event):void{
    console.log('My Email upload',this.title.value);
    console.log('My File upload',event);
    console.log("Variable name: ",this.title.value);
    if(event.files.length == 0){
      console.log('No file selected.');
      return;
    }
    for (let j = 0; j < event.files.length; j++) {
      let data = new FormData();
      let fileItem = event.files[j];
      console.log(fileItem.name);
      data.append('image', fileItem);
      data.append( 'email', this.title.value);
      this.httpClient
      .post(environment.baseUrl + this.url, data)
      .subscribe(res => {
        console.log(res);
      });
    }
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
