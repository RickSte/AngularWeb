import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UserDto } from '../shared/userdto';

import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.nav.updateUser();

  }
  

}
