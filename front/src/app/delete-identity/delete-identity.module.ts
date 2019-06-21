import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeleteIdentityComponent} from "./delete-identity.component";
import {DeleteIdentityRoutingModule} from "./delete-identity.routing.module";

@NgModule({
  declarations: [DeleteIdentityComponent],
  imports: [
    CommonModule,
    DeleteIdentityRoutingModule
  ]
})
export class DeleteIdentityModule { }
