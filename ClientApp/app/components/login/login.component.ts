
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
