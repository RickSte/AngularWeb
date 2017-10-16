
import { Component, OnInit } from '@angular/core';
import { UserDto } from '../shared/userdto';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { FormErrorsService } from '../../services/formErrors.service';
import { NavbarService } from '../../services/navbar.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginUser = new UserDto();

  constructor(private nav: NavbarService, private router: Router, private formBuilder: FormBuilder, private formError: FormErrorsService, private authservice: AuthenticationService) { }

  ngOnInit() {
    this.nav.hide();
    this.buildForm();
  }

  login() {
    this.loginUser = this.loginForm.value;
    this.authservice.login(this.loginUser).subscribe((userdto) => userdto, error => {
      console.log(error);
    });
  }
  onValueChanged() {
    if (!this.loginForm) { return; }
    const form = this.loginForm;

    for (const field in this.formError.formErrors) {

      this.formError.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && control.invalid) {
        const messages = this.formError.validationMessages[field];

        for (const key in control.errors!) {
          this.formError.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged());
    this.onValueChanged();
  }
}
