
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { UserDtoService } from '../../services/userdto.service';
import { UserDto } from '../shared/userdto';
import { Router } from "@angular/router";


@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  newUser = new UserDto();

  constructor(private nav: NavbarService, private userdtoService: UserDtoService, private router: Router) { }

  ngOnInit() {
    this.nav.hide();
  }

  register() {
    this.userdtoService.Create(this.newUser).subscribe((userdto) => { this.router.navigate(["/login"]); }, error => {
      console.log(error);
    });
  }
}
