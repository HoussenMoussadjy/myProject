import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateIdentityComponent} from "./create-identity.component";

const routes: Routes = [
  {
    path: '',
    component: CreateIdentityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateIdentityRoutingModule { }
