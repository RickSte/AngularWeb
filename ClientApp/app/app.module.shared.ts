import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';

import { NavbarService } from './services/navbar.service';
import { AuthenticationService } from './services/authentication.service';
import { UserDtoService } from './services/userdto.service';
import { AuthGuardService } from './services/authGuard.service';
import { FormErrorsService } from './services/formErrors.service';
import { TodoDtoService } from './services/tododto.service';


@NgModule({
  providers: [
    NavbarService,
    AuthenticationService,
    AuthGuardService,
    UserDtoService,
    FormErrorsService,
    TodoDtoService],

  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    TodoComponent
  ],

  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'account', component: AccountComponent, canActivate: [AuthGuardService] },
      { path: 'todo', component: TodoComponent, canActivate: [AuthGuardService] },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: '**', redirectTo: 'home' }
    ])
  ]
})
export class AppModuleShared {
}
