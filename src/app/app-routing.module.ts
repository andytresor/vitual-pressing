import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, title: 'Create your account' },
  { path: 'login', component: LoginComponent, title: 'Login account' },
  { path: 'my-account', component: MyAccountComponent, title: 'My account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
