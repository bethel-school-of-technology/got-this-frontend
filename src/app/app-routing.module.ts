import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterAddComponent } from './counter-add/counter-add.component';
import { CounterEditComponent } from './counter-edit/counter-edit.component';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  {path: "calendar", component: CalendarComponent},
  { path: "list", component: CounterListComponent },
  { path: "add", component: CounterAddComponent },
  { path: "about", component: AboutComponent },
  { path: "edit/:id", component: CounterEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
