import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IdentityModel} from "../model/identity.model";
import {UserModel} from "../model/user.model";
import {AngularFirestore} from "@angular/fire/firestore";


@Component({
  selector: 'app-create-identity-and-user',
  templateUrl: './create-identity-and-user.component.html',
  styleUrls: ['./create-identity-and-user.component.scss']
})
export class CreateIdentityAndUserComponent implements OnInit {

  identityForm: FormGroup;
  userForm : FormGroup;

  constructor(private httpClient: HttpClient,
              private fb: FormBuilder,
              private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.initForm();
    this.initUserForm();
  }

  //Node method
  /* postIdentity(identity: IdentityModel) {
    this.httpClient.post<IdentityModel[]>('http://localhost:4000/identity', identity)
      .pipe()
      .subscribe();
  }*/

  postIdentity(data) {
    return this.afs.collection<IdentityModel>("identity").add(data)
  }

  //Node method
  /*  postUser(user: UserModel) {
    this.httpClient.post<UserModel[]>('http://localhost:4000/addUsers', user)
      .pipe()
      .subscribe();
  }*/

  postUser(data) {
    return this.afs.collection<UserModel>("users").add(data)
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
