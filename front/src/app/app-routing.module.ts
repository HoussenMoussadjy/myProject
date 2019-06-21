import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-identity',
    loadChildren: './create-identity/create-identity.module#CreateIdentityModule'
  },
{
    path: 'list-identity',
    loadChildren: './list-identity/list-identity.module#ListIdentityModule'
  },
  {
    path: 'change-identity',
    loadChildren: './change-identity/change-identity.module#ChangeIdentityModule'
  },
  {
    path: 'delete-identity',
    loadChildren: './delete-identity/delete-identity.module#DeleteIdentityModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
