import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { NavbarService } from './services/navbar.service';
import { AuthenticationService } from './services/authentication.service';
import { UserDtoService } from './services/userdto.service';
import { AuthGuardService } from './services/authGuard.service';
import { FormErrorsService } from './services/formErrors.service';


@NgModule({
  providers: [NavbarService, AuthenticationService, AuthGuardService, UserDtoService, FormErrorsService],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'account', component: AccountComponent, canActivate: [AuthGuardService] },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: '**', redirectTo: 'home' }
    ])
  ]
})
export class AppModuleShared {
}
