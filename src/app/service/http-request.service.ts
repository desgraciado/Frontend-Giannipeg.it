import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Contact } from '../dto/contact';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  baseUrl = environment.baseUrl;
  imageModelUrl = '/image';
  baseImageUrl = '/baseimage';

  constructor(private http: HttpClient) { }

  addContact (contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl + '/persons', contact, httpOptions);
  }

  getContacts () {
    return this.http.get<Contact[]>(this.baseUrl + '/persons');
  }

  addImages (data:FormData): Observable<any> {
    return this.http.post<any>(environment.baseUrl + this.baseImageUrl + '/upload', data);
  }

  getImages () {
    return this.http.get<any[]>(this.baseUrl + this.baseImageUrl + '/getimages');
  }
}
