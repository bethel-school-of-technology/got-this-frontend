import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule}from '@angular/common/http';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterAddComponent } from './counter-add/counter-add.component';
import { NavComponent } from './nav/nav.component';
import { CounterEditComponent } from './counter-edit/counter-edit.component';
import { CalendarComponent } from './calendar/calendar.component';

import {CountDataService} from './count-data.service';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterAddComponent,
    NavComponent,
    CounterEditComponent,
    CalendarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CountDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
