
import { Component, OnInit } from '@angular/core';
import { UserDto } from '../shared/userdto';

import { UserDtoService } from '../../services/userdto.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html'
 
})
export class AccountComponent implements OnInit {
  currentUser: UserDto;

  constructor(private nav: NavbarService, private userdtoService: UserDtoService) { }

  ngOnInit() {
    this.nav.show();
    this.nav.updateUser();
    this.currentUser = this.userdtoService.currentUser
  }

  change() {
    this.userdtoService.Update(this.currentUser).subscribe((userdto) => { }, error => {
      console.log(error);
    });

  }
}
