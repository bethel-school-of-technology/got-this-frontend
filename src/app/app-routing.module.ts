import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterAddComponent } from './counter-add/counter-add.component';
import { CounterEditComponent } from './counter-edit/counter-edit.component';
import { CalendarComponent } from './calendar/calendar.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: "", redirectTo: "About", pathMatch:"full"},
  
    {path:"list", component: CounterListComponent},
     {path:"add", component:CounterAddComponent},
  {path: "calendar", component: CalendarComponent},
  {path: "about", component: AboutComponent},
    {path: "edit/:id", component: CounterEditComponent},
   
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
