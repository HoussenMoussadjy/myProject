import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IdentityModel} from "../model/identity.model";
import {UserModel} from "../model/user.model";


@Component({
  selector: 'app-create-identity',
  templateUrl: './create-identity.component.html',
  styleUrls: ['./create-identity.component.scss']
})
export class CreateIdentityComponent implements OnInit {

  identityForm: FormGroup;
  userForm : FormGroup;

  constructor(private httpClient: HttpClient,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.initUserForm();
  }

  postIdentity(identity: IdentityModel) {
    this.httpClient.post<IdentityModel[]>('http://localhost:4000/identity', identity)
      .pipe()
      .subscribe();
  }

  postUser(user: UserModel) {
    this.httpClient.post<UserModel[]>('http://localhost:4000/addUsers', user)
      .pipe()
      .subscribe();
  }

  submitForm() {
    this.postIdentity(this.identityForm.value);
  }

  submitUserForm() {
    this.postUser(this.userForm.value);
  }

  initForm() {
    this.identityForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      children: ['', [Validators.required]],
      age: [0, [Validators.required]],
    })
  }

  initUserForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      children: ['', [Validators.required]],
      age: [0, [Validators.required]],
    })
  }
}



