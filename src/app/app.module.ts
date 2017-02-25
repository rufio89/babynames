import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import {NamesService} from "./names.service";

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [NamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
