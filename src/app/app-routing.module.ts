import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/LoginComponent/login.component';
import { SignUpComponent } from './components/SignUpComponent/signup.component';

const routes: Routes = [
  { path: '' , pathMatch: 'full', component: AppComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
