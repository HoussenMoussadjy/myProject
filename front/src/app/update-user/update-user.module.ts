import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateUserComponent} from "./update-user.component";
import {UpdateUserRoutingModule} from "./update-user.routing.module";

@NgModule({
  declarations: [
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UpdateUserRoutingModule
  ]
})
export class UpdateUserModule { }
