import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HttpRequestService } from './http-request.service';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateProductComponent } from './create-product/create-product.component';

import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    CalendarComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    FileUploadModule
  ],
  providers: [
    HttpRequestService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
