import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateIdentityComponent} from "./update-identity.component";

const routes: Routes = [
  {
    path: '',
    component: UpdateIdentityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateIdentityRoutingModule { }
