
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { UserDto } from '../shared/userdto';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  newUser = new UserDto();

  constructor(private nav: NavbarService,private router: Router) { }

  ngOnInit() {
    this.nav.hide();
  }

  login()
  { }
}
