import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {IdentityModel} from "../model/identity.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  identity: IdentityModel[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getIdentity()
  }

  getIdentity() {
    return this.httpClient.get<IdentityModel[]>('http://localhost:4000/identity')
      .pipe(
        tap(identity => this.identity = identity),
        tap(x => console.log(x))
      ).subscribe()
  }
  removeIdentity(identity: IdentityModel) {
    return this.httpClient.delete<IdentityModel[]>('http://localhost:4000/removeIdentity/' + identity.uid)
      .pipe()
      .subscribe()
  }
  }


