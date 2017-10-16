import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { TodoDto } from './../components/shared/tododto';
import "rxjs";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TodoDtoService {

  constructor(private _http: Http) { }



  createTodo(tododto: TodoDto): Observable<TodoDto>
  {
    return (this._http.post("api/todo", tododto)
      .map(response => response.json)
      .catch((error: any) => {
      return Observable.throw(new Error(error.status));
    }))
  }

  //deleteTodo(tododto: TodoDto)
  //{
  //  return (this._http.delete("api/todo", tododto)
  //    .map(response => response.json)
  //    .catch((error: any) => {
  //      return Observable.throw(new Error(error.status));
  //    }))
  //}
  //updateTodo(tododto: TodoDto): Observable<TodoDto>
  //{
  //  return (this._http.put("api/todo", tododto)
  //    .map(response => response.json)
  //    .catch((error: any) => {
  //    return Observable.throw(new Error(error.status));
  //  }))
  //}

  getAllTodos(): Observable<TodoDto[]>
  {
    return (this._http.get("api/todo").map(response => response.json).catch((error: any) => {
      return Observable.throw(new Error(error.status));

    }))
  }
  getTodo(tododto: TodoDto): Observable<TodoDto>
  {
    return (this._http.get("api/todo/"+tododto.Id.toString())
      .map(response => response.json)
      .catch((error: any) => {
      return Observable.throw(new Error(error.status));
    }))
  }

}
