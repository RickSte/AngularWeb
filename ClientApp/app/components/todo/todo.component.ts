import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDto } from '../shared/userdto';
import { TodoDto } from '../shared/tododto';
import { Priority } from '../shared/priority';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { NavbarService } from '../../services/navbar.service';
import { TodoDtoService } from '../../services/tododto.service';
import { FormErrorsService } from '../../services/formErrors.service';


@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  tododto: TodoDto;
  priority: Priority[];
  constructor(private nav: NavbarService, private formBuilder: FormBuilder, private formError: FormErrorsService, private tododtoService: TodoDtoService) { }


  ngOnInit() {
    this.nav.show();
    this.nav.updateUser();
    this.buildform();
  }

  buildform() {
    this.todoForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      priority: [""],
      duedate: ["", [Validators.required]]
    });
    this.todoForm.valueChanges.subscribe(data => this.onValueChanged());
    this.onValueChanged();

  }

  create()
  {
    this.tododto = this.todoForm.value;
    console.log(this.tododto)
    this.tododtoService.createTodo(this.tododto).subscribe((todoDto) => { this.todoForm.reset() });
  }

  onValueChanged() {
    if (!this.todoForm) { return; }
    const form = this.todoForm;

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

}
