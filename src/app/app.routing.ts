import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
   { path: 'login', component: LoginComponent },
  { path : 'home', loadChildren : 'app/home/home.module#HomeModule'}
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);