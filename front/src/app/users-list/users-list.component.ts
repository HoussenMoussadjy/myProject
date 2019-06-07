import {Component, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/user.model";
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  /*  users: UserModel[];
    users$: Observable<UserModel[]>;

    constructor(private http: HttpClient) {
    }*/

  ngOnInit() {
    this.initForm();
  }

  initForm() {  this.userForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    children: '',
    age: ''
  });

  }

}


    /*  {
        this.users$ = this.http.get<UserModel[]>('http://localhost:4000/users');
        this.users$
          .pipe(
            tap(x => console.log(x)),
            tap((users: UserModel[]) => this.users = users)).subscribe();

            this.http.post<UserModel[]>('http://localhost:4000/addUsers', {
              firstname: 'toto',
              lastname: 'tata',
              children: true,
              age: 19,
            })
              .subscribe();

            return this.http.put<UserModel[]>('http://localhost:4000/changeAllUsers/7Q9HaTDW1oQryqnjTCAD', {"lastname": 'ronald'})
              .pipe()
              .subscribe();

            // Delete method
            return this.http.delete<UserModel[]>('http://localhost:4000/removeUsers/u6TMCDNV5MeXvHeFQorb').pipe().subscribe();
             }
    */



