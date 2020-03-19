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

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {}

    title = 'ImageUploaderFrontEnd';
    url = '/check/upload';
    public selectedFile;
    public event1;
    imgURL: any;
    receivedImageData: any;
    base64Data: any;
    convertedImage: any;

    public  onFileChanged(event) {
      console.log(event);
      this.selectedFile = event.target.files[0];

      // Below part is used to display the selected image
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event2) => {
        this.imgURL = reader.result;
    };

   }


   // This part is for uploading
   onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


    this.httpClient.post(environment.baseUrl + this.url, uploadData)
    .subscribe(
                 res => {
                        console.log("Received ImageData: ",res);
                         this.receivedImageData = res;
                         this.base64Data = this.receivedImageData.pic;
                         this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
                 err => console.log('Error Occured during saving: ',err)
              );


   }
  }
