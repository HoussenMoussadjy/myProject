import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//import {UserModel} from "../model/user.model";
import {AngularFirestore} from "@angular/fire/firestore";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserModel} from "../model/user.model";


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  user: UserModel;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  // this.UpdateUser()
  }

/*

  UpdateUser() {
  return this.afs.collection<UserModel>("users").doc(uid).set(this.userForm.value)
    .pipe()
    .subscribe()
  }
*/

  initForm() {

    this.userForm = this.fb.group({
      age: [],
      children: [],
      name: [],
    })
  }

}





