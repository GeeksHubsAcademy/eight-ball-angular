import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "ask", component: HomeComponent },
  { path: "ask/:query", component: HomeComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
