import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';     // Add your component here
import { CalendarComponent } from './calendar/calendar.component';
import { CreateProductComponent } from './create-product/create-product.component';  // Add your component here
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';  // Add your component here


//This is my case
const routes: Routes = [
    { path:  '', redirectTo:  'contacts', pathMatch:  'full' },
    {
        path: 'contacts',
        component: ContactListComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'create-product',
        component: CreateProductComponent
    },
    {
        path: 'sign-up-form',
        component: SignUpFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
