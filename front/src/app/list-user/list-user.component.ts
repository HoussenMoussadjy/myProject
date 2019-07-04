import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from "@angular/fire/firestore";
import {UserModel} from "../model/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  user: UserModel[];

  constructor(private httpClient: HttpClient,
              private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    return this.afs.collection<UserModel>("users").valueChanges()
      .pipe(
        tap(x => console.log(x)),
        tap(user => this.user = user)
      ).subscribe()
  }

  removeUser(uid: string) {
    return this.afs.collection<UserModel>("users").doc(uid).delete()




  }
}






