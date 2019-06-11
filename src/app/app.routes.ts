import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},


];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {enableTracing: false});
