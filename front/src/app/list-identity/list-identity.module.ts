import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListIdentityComponent} from "./list-identity.component";
import {ListIdentityRoutingModule} from "./list-identity.routing.module";

@NgModule({
  declarations: [
    ListIdentityComponent
  ],
  imports: [
    CommonModule,
    ListIdentityRoutingModule
  ]
})
export class ListIdentityModule { }
