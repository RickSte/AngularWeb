import { Http, RequestOptions, Request, RequestMethod } from "@angular/http";
import { Injectable } from '@angular/core';
import { UserDto } from './../components/shared/userdto'
import "rxjs";
import { Observable } from "rxjs/Observable";


@Injectable()
export class UserDtoService {

  options = new RequestOptions({
    method: RequestMethod.Post
  });


  userdtos: Array<UserDto>[];

  constructor(private _http: Http) { }

  Create(userdto: UserDto): Observable<UserDto> {
    console.log(userdto)
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
