import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class NamesService {

  constructor(public http: Http) { }

  search(fileType){
    let apiUrl: string = "http://localhost:3000/api/" + fileType;
    return this.http.get(apiUrl)
      .map(response => response["_body"].split("\n"));
  }

}
