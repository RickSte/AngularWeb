
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserDto } from '../shared/userdto';
import { Router } from "@angular/router";

import { UserDtoService } from '../../services/userdto.service';
import { NavbarService } from '../../services/navbar.service';
import { FormErrorsService } from '../../services/formErrors.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  newUser = new UserDto();

  constructor(private nav: NavbarService, private userdtoService: UserDtoService, private router: Router, private formBuilder: FormBuilder, private formError: FormErrorsService) { }

  ngOnInit() {
    this.nav.hide();
    this.buildForm();
  }

  register() {
    this.newUser = this.registrationForm.value;
    this.userdtoService.Create(this.newUser).subscribe((userdto) => { this.router.navigate(["/login"]); }, error => {
      console.log(error);
    });
  }

   onValueChanged() {
    if (!this.registrationForm) { return; }
    const form = this.registrationForm;

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

 buildForm() {
    this.registrationForm = this.formBuilder.group({
      email: ["", [Validators.email]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]]

    });
    this.registrationForm.valueChanges.subscribe(data => this.onValueChanged());
    this.onValueChanged();
   }


}
