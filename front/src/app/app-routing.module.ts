import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-identity-and-user',
    loadChildren: './create-identity-and-user/create-identity-and-user.module#CreateIdentityAndUserModule'
  },
{
    path: 'list-identity',
    loadChildren: './list-identity/list-identity.module#ListIdentityModule'
  },
  {
    path: 'list-user',
    loadChildren: './list-user/list-user.module#ListUserModule'
  },
  {
    path: 'update-user',
    loadChildren: './update-user/update-user.module#UpdateUserModule'
  },
  {
    path: 'update-identity',
    loadChildren: './update-identity/update-identity.module#UpdateIdentityModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
