import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateIdentityComponent} from "./create-identity.component";
import {CreateIdentityRoutingModule} from "./create-identity.routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CreateIdentityComponent
  ],
  imports: [
    CommonModule,
    CreateIdentityRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateIdentityModule { }
