import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { WidthdrawComponent } from './widthdraw/widthdraw.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AsideNavbarComponent } from './aside-navbar/aside-navbar.component';
import { CommandsComponent } from './commands/commands.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegexDirective } from './Directives/regex.directive';
import { SignInComponent } from './sign-in/sign-in.component';
import { DressesComponent } from './dresses/dresses.component';
import { DropDressesComponent } from './drop-dresses/drop-dresses.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    WidthdrawComponent,
    NavBarComponent,
    AdminDashboardComponent,
    AsideNavbarComponent,
    CommandsComponent,
    SignUpComponent,
    RegexDirective,
    SignInComponent,
    DressesComponent,
    DropDressesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
