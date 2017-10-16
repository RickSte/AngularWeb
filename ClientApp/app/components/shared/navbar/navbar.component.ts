import { Component, OnInit } from '@angular/core';
import { UserDto } from '../userdto';

import { NavbarService } from '../../../services/navbar.service';
import { UserDtoService } from '../../../services/userdto.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent implements OnInit {

  currentUser: UserDto;

  constructor(private nav: NavbarService, private userdtoService: UserDtoService, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {

    this.nav.newSubject.subscribe(()=> {this.currentUser = this.userdtoService.currentUser });
  }

  logout() {
    this.authenticationService.logout(this.currentUser).subscribe((userdto) => { this.currentUser = userdto });
  }
}
