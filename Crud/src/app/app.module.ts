import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { StudentService } from './student.service'; 
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material';
import { MatRadioModule,  } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule, StudentService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
