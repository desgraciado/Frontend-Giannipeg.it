import {Component, OnInit} from '@angular/core';
import { environment } from '../../environments/environment';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators, AbstractControl } from '@angular/forms';
import { HttpRequestService } from '../service/http-request.service';



// import { ImageData } from './ImageModel';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})


export class CreateProductComponent implements OnInit {
  heading = 'ImageUploaderFrontEnd';
  //url = '/image/multipleUpload';
  uploadedFiles: any[] = [];
  title = new FormControl('');


  constructor(private api: HttpRequestService) { }
  ngOnInit() {}

  myUploader(event):void{
    const formData: FormData = new FormData();
    for (let i of event.files) {
      console.log(i); // "4", "5", "6"
      formData.append('file', i);
    }
    formData.append( 'title', this.title.value);
    console.log('My File upload',event);
    console.log("Title: ",this.title.value);

    if(event.files.length == 0){
      console.log('No file selected.');
      return;
    }
    this.api.addImages(formData).subscribe(res => {
      console.log("Images uploaded! : ",res);
    });
  }

  // upload completed event
  onCUpload(event): void {
    for (const file of event.files) {
      //this.uploadedFiles.push(file);
    }
  }

  onBeforeSend(event): void {
    //event.xhr.setRequestHeader('Authorization', 'Bearer ' + abp.auth.getToken());
  }
}
