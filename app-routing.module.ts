import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';

//import { GuardGuard } from './guard.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{ 
  path: "", component:LoginComponent
 },

{
  path: 'home', component:HomeComponent,canActivate:[AuthGuard]
},

{
  path: 'login', component:LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
