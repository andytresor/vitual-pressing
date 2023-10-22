import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { WidthdrawComponent } from './widthdraw/widthdraw.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CommandsComponent } from './commands/commands.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DressesComponent } from './dresses/dresses.component';
import { DropDressesComponent } from './drop-dresses/drop-dresses.component';




const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: TableComponent, title: 'Home' },
  {path: 'widthdraw', component: WidthdrawComponent, title: 'Withdraw'},
  {path: 'admin', component: AdminDashboardComponent, title: 'Admin-Dashboard'},
  {path: 'commands', component: CommandsComponent, title: 'Commands'},
  {path: 'sign-up', component: SignUpComponent, title: 'Sign-up'},
  {path: 'sign-in', component: SignInComponent, title: 'Sign-in'},
  {path: 'dresses', component: DressesComponent, title: 'View-Dresses'},
  {path: 'drop-dresses', component: DropDressesComponent, title: 'Drop-Dresses'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
