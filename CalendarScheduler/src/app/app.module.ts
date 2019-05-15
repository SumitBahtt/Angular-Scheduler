import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemolistComponent } from './demolist/demolist.component';

@NgModule({
  declarations: [
    AppComponent,
    DemolistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
