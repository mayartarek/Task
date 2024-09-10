import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';

export const UserRoutes: Routes = [
  {
    path: '',
    component: MainComponentComponent,
  },
];
