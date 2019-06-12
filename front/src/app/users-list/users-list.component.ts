import {Component, OnInit} from '@angular/core';
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/user.model";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    users: UserModel[];
    userForm: FormGroup;

  constructor(private http: HttpClient, fb: FormBuilder) {}

  ngOnInit() void {
    this.showUser().subscribe();
    this.initForm();
}

    showUser() {
      return this.http.get<UserModel[]>('http://localhost:4000/users')
        .pipe(
          tap(users => this.users = users),
        );
    }

    initForm() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required],
      lastName: [''],
      children: [''],
      age: ['']
    })
  }
    }

/*
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

    /*  userForm = this.fb.group({

      })
*/


