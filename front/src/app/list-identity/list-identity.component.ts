import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";
import {IdentityModel} from "../model/identity.model";

@Component({
  selector: 'app-list-identity',
  templateUrl: './list-identity.component.html',
  styleUrls: ['./list-identity.component.scss']
})
export class ListIdentityComponent implements OnInit {
  identity: IdentityModel[];

  constructor(private httpClient: HttpClient,
              private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.getIdentity()
  }

  getIdentity() {
    return this.afs.collection<IdentityModel>("identity").valueChanges()
      .pipe(
        tap(x => console.log(x)),
        tap(identity => this.identity = identity)
      ).subscribe()
  }

  removeIdentity(uid: string) {
    return this.afs.collection<IdentityModel>("identity").doc(uid).delete()
  }

}
