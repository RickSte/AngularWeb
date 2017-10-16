import { Http, RequestOptions, Request, RequestMethod } from "@angular/http";
import { Injectable } from '@angular/core';
import { UserDto } from './../components/shared/userdto'
import "rxjs";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationService {

  constructor(private _http: Http) { }

  login(userdto: UserDto): Observable<UserDto> {
    return (this._http.post("api/authentication", userdto).map(response => response.json).catch((error: any) => {
      return Observable.throw(new Error(error.status));
    }))
  }

  logout() {


  }

}
