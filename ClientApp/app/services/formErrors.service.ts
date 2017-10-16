
import { Injectable } from '@angular/core';
import { FormGroup} from "@angular/forms";

@Injectable()
export class FormErrorsService {

 public formErrors = {
   email: "",
   firstName: "",
   lastName: "",
   password: "",
   name: "",
   duedate: ""
 }

 public validationMessages = {
   email: { 'required': "Email is required", 'email': "Email is invalid" },
   firstName: { 'required': "First name is required" },
   lastName: { 'required': "Last name is required" },
   password: { 'required': "Password is required", 'minlength': "Password must be at least 6 charachters long" },
   name: { 'required': 'Name is Required' },
   duedate: {'required':'DueDate is Required'}
 }

}
