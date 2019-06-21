import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChangeIdentityComponent} from "./change-identity.component";

const routes: Routes = [
  {
    path: '',
    component: ChangeIdentityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeIdentityRoutingModule { }
