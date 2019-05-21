import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Bootstrap3FrameworkModule, Bootstrap4FrameworkModule, MaterialDesignFrameworkModule} from 'angular6-json-schema-form';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignFrameworkModule,
    Bootstrap3FrameworkModule,
    Bootstrap4FrameworkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
