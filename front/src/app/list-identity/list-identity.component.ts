import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {UserModel} from "../model/user.model";

@Component({
  selector: 'app-list-identity',
  templateUrl: './list-identity.component.html',
  styleUrls: ['./list-identity.component.scss']
})
export class ListIdentityComponent implements OnInit {

  user: UserModel[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    return this.httpClient.get<UserModel[]>('http://localhost:4000/users')
      .pipe(
        tap(user => this.user = user),
        tap(x => console.log(x))
      ).subscribe()
  }

  removeUser(user: UserModel) {
    return this.httpClient.delete<UserModel[]>('http://localhost:4000/removeUsers/' + user.uid)
      .pipe()
      .subscribe()
}
}
