import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-identity-and-user',
    loadChildren: './create-identity/create-identity.module#CreateIdentityModule'
  },
{
    path: 'list-identity',
    loadChildren: './list-identity/list-identity.module#ListIdentityModule'
  },
  {
    path: 'list-user',
    loadChildren: './list-user/list-user.module#ListUserModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
