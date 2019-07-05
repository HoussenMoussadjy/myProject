import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateIdentityComponent} from "./update-identity.component";
import {UpdateIdentityRoutingModule} from "./update-identity.routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UpdateIdentityComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UpdateIdentityRoutingModule
  ]
})
export class UpdateIdentityModule { }
