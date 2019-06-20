import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListIdentityComponent} from "./list-identity.component";

const routes: Routes = [
  {
    path: '',
    component: ListIdentityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListIdentityRoutingModule { }
