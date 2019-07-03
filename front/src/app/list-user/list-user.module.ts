import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListUserComponent} from "./list-user.component";
import {ListUserRoutingModule} from "./list-user.routing.module";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";


@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    ListUserRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class ListUserModule { }
