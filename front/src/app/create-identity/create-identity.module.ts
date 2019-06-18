import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateIdentityComponent} from "./create-identity.component";
import {CreateIdentityRoutingModule} from "./create-identity.routing.module";

@NgModule({
  declarations: [
    CreateIdentityComponent
  ],
  imports: [
    CommonModule,
    CreateIdentityRoutingModule
  ]
})
export class CreateIdentityModule { }
