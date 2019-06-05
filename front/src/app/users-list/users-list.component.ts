import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/user.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: UserModel[];
  users$: Observable<UserModel[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const getUser = this.users$ = this.http.get<UserModel[]>('http://localhost:4000/users');
    this.users$
      .pipe(
        tap(x => console.log(x)),
        tap((users: UserModel[]) => this.users = users)).subscribe();
  }}
/*
    const postUser = this.users$ = this.http.post<UserModel[]>('http://localhost:4000/addUsers'), {'/addUsers': addUsers};
    this.users$
      .pipe(
        tap(x => console.log(x)),
        tap((users: UserModel[]) => this.users = users)).subscribe();
    this.users$.addUser(postUser)
      .subscribe(user => this.users.push(user));

    const putUser = this.users$ = this.http.post<UserModel[]>('http://localhost:4000/changeUsers'), {'/changeUsers': changeUsers};
    this.users$
      .pipe(
        tap(x => console.log(x)),
        tap((users: UserModel[]) => this.users = users)).subscribe();
    this.users$.changeUser(postUser)
      .subscribe(user => this.users.push(user));

    const deleteUser = this.users$ = this.http.post<UserModel[]>('http://localhost:4000/removeUsers'), {'/removeUsers': removeUsers};
    this.users$
      .pipe(
        tap(x => console.log(x)),
        tap((users: UserModel[]) => this.users = users)).subscribe();
    this.users$.removeUser(postUser)
      .subscribe(user => this.users.push(user));

    /!*this.http.post<addUsers>(newUser)
      .subscribe(user => this.users.push(user));/!*
}}
*/
