import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from './auth-layout.component';

const authLayoutRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: '../../sections/common/login/login.module#LoginModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authLayoutRoutes)
  ],
  exports: [RouterModule]
})

export class AuthLayoutRoutingModule {
}
