import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }
  

}
