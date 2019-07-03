import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateIdentityComponent} from "./update-identity.component";
import {UpdateIdentityRoutingModule} from "./update-identity.routing.module";

@NgModule({
  declarations: [
    UpdateIdentityComponent
  ],
  imports: [
    CommonModule,
    UpdateIdentityRoutingModule
  ]
})
export class UpdateIdentityModule { }
