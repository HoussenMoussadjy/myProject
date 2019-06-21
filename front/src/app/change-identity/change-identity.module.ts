import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeIdentityComponent} from "./change-identity.component";
import {ChangeIdentityRoutingModule} from "./change-identity.routing.module";

@NgModule({
  declarations: [ChangeIdentityComponent],
  imports: [
    CommonModule,
    ChangeIdentityRoutingModule
  ]
})
export class ChangeIdentityModule { }
