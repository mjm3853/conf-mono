import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { GetConfListService } from './services/get-conf-list/get-conf-list.service';
import { CreateConfService } from './services/create-conf/create-conf.service';
import { ConfListComponent } from './content/conf-list/conf-list.component';
import { ConfCreateComponent } from './content/conf-create/conf-create.component';

const appRoutes: Routes = [
  { path: 'list',    component: ConfListComponent },
  { path: 'create',  component: ConfCreateComponent },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: '**', component: ConfListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConfListComponent,
    ConfCreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    MdDatepickerModule, 
    MdNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GetConfListService,
    CreateConfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
