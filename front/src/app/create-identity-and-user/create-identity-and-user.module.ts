import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateIdentityAndUserComponent} from "./create-identity-and-user.component";
import {CreateIdentityAndUserRoutingModule} from "./create-identity-and-user.routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CreateIdentityAndUserComponent
  ],
  imports: [
    CommonModule,
    CreateIdentityAndUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateIdentityAndUserModule { }
