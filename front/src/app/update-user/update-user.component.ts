import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../model/user.model";
import {AngularFirestore} from "@angular/fire/firestore";


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) {
  }

  ngOnInit() {
  //this.UpdateUser()
  }

 /* UpdateUser() {
  return this.afs.collection<UserModel>("users").doc(uid).set(this.userForm.value)
    .pipe()
    .subscribe()
  }
*/
}






