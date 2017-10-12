
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }
}
