import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ConfListComponent } from './content/conf-list/conf-list.component';
import { GetConfListService } from './services/get-conf-list/get-conf-list.service'

@NgModule({
  declarations: [
    AppComponent,
    ConfListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    GetConfListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
