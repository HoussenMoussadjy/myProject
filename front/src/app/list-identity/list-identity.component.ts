import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {IdentityModel} from "../model/identity.model";

@Component({
  selector: 'app-list-identity',
  templateUrl: './list-identity.component.html',
  styleUrls: ['./list-identity.component.scss']
})
export class ListIdentityComponent implements OnInit {

  identity: IdentityModel[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.showIdentity()
  }

  showIdentity() {
    return this.httpClient.get<IdentityModel[]>('http://localhost:4000/identity')
      .pipe(
        tap(identity => this.identity = identity),
        tap(x => console.log(x))
      ).subscribe()
  }
}

