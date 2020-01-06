import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';     // Add your component here
import { CalendarComponent } from './calendar/calendar.component';  // Add your component here

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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
