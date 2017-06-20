import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { GetConfListService } from './services/get-conf-list/get-conf-list.service';
import { ConfListComponent } from './content/conf-list/conf-list.component';
import { ConfCreateComponent } from './content/conf-create/conf-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfListComponent,
    ConfCreateComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    MdDatepickerModule, 
    MdNativeDateModule
  ],
  providers: [
    GetConfListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
