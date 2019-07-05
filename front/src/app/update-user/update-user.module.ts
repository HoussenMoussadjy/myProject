import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateUserComponent} from "./update-user.component";
import {UpdateUserRoutingModule} from "./update-user.routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UpdateUserRoutingModule
  ]
})
export class UpdateUserModule { }
