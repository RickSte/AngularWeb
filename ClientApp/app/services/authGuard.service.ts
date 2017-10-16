
import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";

import { UserDtoService } from './userdto.service'

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private userdtoService: UserDtoService) { }


  canActivate() {
    if (this.userdtoService.currentUser) {
      return true;
    }
    this.router.navigate(["/login"])
    return false;
  }
}
