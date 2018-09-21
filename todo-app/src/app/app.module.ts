import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SimpleNgModelComp} from "./app.afc";

@NgModule({
  declarations: [
    AppComponent, SimpleNgModelComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, SimpleNgModelComp]
})
export class AppModule { }
