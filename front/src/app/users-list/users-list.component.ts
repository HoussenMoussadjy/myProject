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
  isLoading = false;

  constructor(private http: HttpClient,
              private fb: FormBuilder) {
  }

  get name() {
    return this.userForm.get('firstName')
  }

  ngOnInit() {
    this.showUser().subscribe();
    this.initForm();
  }

  showUser() {
    return this.http.get<UserModel[]>('http://localhost:4000/users')
      .pipe(
        tap(users => this.users = users),
      );
  }

  postUser() {
    this.isLoading = true;
    this.http.post<UserModel[]>('http://localhost:4000/addUsers', this.userForm.value)
    .pipe(
     tap(x => console.log(x)),
     tap(() => this.isLoading = false),
    )
  .subscribe();
  }

  submitForm() {
    console.log(this.postUser());
  }

  initForm() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      lastName: ['', [Validators.required]],
      children: ['', [Validators.required]],
      age: ['', [Validators.required]],
    })
  }
}

/*
          return this.http.put<UserModel[]>('http://localhost:4000/changeAllUsers/7Q9HaTDW1oQryqnjTCAD', {"lastname": 'ronald'})
            .pipe()
            .subscribe();

          return this.http.delete<UserModel[]>('http://localhost:4000/removeUsers/u6TMCDNV5MeXvHeFQorb').pipe().subscribe();
           }
  */
