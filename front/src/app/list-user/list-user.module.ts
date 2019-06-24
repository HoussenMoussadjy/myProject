import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListUserComponent} from "./list-user.component";
import {ListUserRoutingModule} from "./list-user.routing.module";

@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    ListUserRoutingModule
  ]
})
export class ListUserModule { }
