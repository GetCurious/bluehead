import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Bootstrap3FrameworkModule, Bootstrap4FrameworkModule, MaterialDesignFrameworkModule} from 'angular6-json-schema-form';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignFrameworkModule,
    Bootstrap3FrameworkModule,
    Bootstrap4FrameworkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
