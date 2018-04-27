import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'view', component: ViewComponent}
 
  ];
  
  @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
    
  })
  export class AppRoutingModule { }