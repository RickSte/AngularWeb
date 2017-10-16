import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { UserDto } from './../components/shared/userdto';
import "rxjs";
import { Observable } from "rxjs/Observable";


@Injectable()
export class UserDtoService {
  public currentUser: UserDto;


  constructor(private _http: Http) { }

  saveUser(userdto: UserDto) {
    this.currentUser = userdto;
  }

  Create(userdto: UserDto): Observable<UserDto> {

    return (this._http.post("api/user", userdto).map(response => response.json).catch((error: any) => {
      return Observable.throw(new Error(error.status));

    }))
  }

  Update(userdto: UserDto): Observable<UserDto> {

    return (this._http.put("api/user", userdto).map(response => response.json).catch((error: any) => {
      return Observable.throw(new Error(error.status));

    }))
  }
}
