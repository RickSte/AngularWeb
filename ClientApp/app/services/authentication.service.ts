import { Http, RequestOptions, Request, RequestMethod } from "@angular/http";
import { Injectable } from '@angular/core';
import { UserDto } from './../components/shared/userdto';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs";

import { UserDtoService } from "./userdto.service"

@Injectable()
export class AuthenticationService {

  constructor(private _http: Http, private userdtoService: UserDtoService, private router: Router) { }

  login(userdto: UserDto): Observable<UserDto> {
    return (this._http.post("api/authentication", userdto)
      .map((response) => {
        let user: UserDto = response.json();
        if (user) {
          this.userdtoService.saveUser(user);
          this.router.navigate(["/home"]);
        }
      })
      .catch((error: any) => {
        return Observable.throw(new Error(error.status));
      }))

  }

  logout(userdto: UserDto): Observable<UserDto> {
    return (this._http.put("api/authentication", userdto).map((response) => {
      let res = response.json();
      if (res === null) {
        this.userdtoService.saveUser(res);
        this.router.navigate(["/login"]);
      }
    })
      .catch((error: any) => {
        return Observable.throw(new Error(error.status));
      }))

  }
}