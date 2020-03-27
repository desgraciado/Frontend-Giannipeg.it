import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators, AbstractControl } from '@angular/forms';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType
} from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signup = new FormGroup({
    email: new FormControl(null, Validators.required),
    image: new FormControl(null, [Validators.required, this.requiredFileType('jpeg')])
  });
  url = '/image/upload';
  progress = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    console.log("Submit: ",this.signup.value);
    this.httpClient.post(environment.baseUrl + this.url, this.toFormData(this.signup.value), {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {

      if ( event.type === HttpEventType.UploadProgress ) {
        this.progress = Math.round((100 * event.loaded) / event.total);
      }

      if ( event.type === HttpEventType.Response ) {
        console.log("RETURN Header: ",event.body);
        this.signup.reset();
      }
    });
  }

  toFormData<T>( formValue: T ) {
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }

  requiredFileType( type: string ) {
    return function (control: FormControl) {
      const file = control.value;
      if ( file ) {
        const extension = file.name.split('.')[1].toLowerCase();
        if ( type.toLowerCase() !== extension.toLowerCase() ) {
          return {
            requiredFileType: true
          };
        }
        return null;
      }
      return null;
    };
  }
}
