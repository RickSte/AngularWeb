import { Component } from '@angular/core';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent {

  constructor(public nav: NavbarService) { }

}
