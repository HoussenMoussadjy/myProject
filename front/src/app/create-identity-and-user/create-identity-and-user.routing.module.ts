import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateIdentityAndUserComponent} from "./create-identity-and-user.component";

const routes: Routes = [
  {
    path: '',
    component: CreateIdentityAndUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateIdentityAndUserRoutingModule { }
