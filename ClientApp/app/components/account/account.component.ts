
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html'
 
})
export class AccountComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }
}
