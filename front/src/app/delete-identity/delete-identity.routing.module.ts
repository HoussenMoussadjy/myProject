import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeleteIdentityComponent} from "./delete-identity.component";


const routes: Routes = [
  {
    path: '',
    component: DeleteIdentityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteIdentityRoutingModule { }
