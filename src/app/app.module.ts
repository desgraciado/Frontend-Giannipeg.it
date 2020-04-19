import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HttpRequestService } from './service/http-request.service';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateProductComponent } from './create-product/create-product.component';

import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressComponent } from './shared/progress/progress.component';
import { DataListComponent } from './data-list/data-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    CalendarComponent,
    CreateProductComponent,
    SignUpFormComponent,
    FileUploadComponent,
    ProgressComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    FileUploadModule,
    ProgressBarModule
  ],
  providers: [
    HttpRequestService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
