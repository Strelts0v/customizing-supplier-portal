import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { States } from './constant/states.constant';
import { AuthGuard } from './guards/auth.guard';
import { EbsGuard } from './guards/ebs.guard';
import { JdeGuard } from './guards/jde.guard';
import { PsGuard } from './guards/ps.guard';

const routes: Routes = [
  {
    path: States.AUTH,
    loadChildren: './modules/layouts/auth-layout/auth-layout.module#AuthLayoutModule',
  },
  {
    path: States.EBS,
    loadChildren: './modules/layouts/ebs-layout/ebs-layout.module#EbsLayoutModule',
    canLoad: [ AuthGuard, EbsGuard ]
  },
  {
    path: States.JDE,
    loadChildren: './modules/layouts/jde-layout/jde-layout.module#JdeLayoutModule',
    canLoad: [ AuthGuard, JdeGuard ]
  },
  {
    path: States.PS,
    loadChildren: './modules/layouts/ps-layout/ps-layout.module#PsLayoutModule',
    canLoad: [ AuthGuard, PsGuard ]
  },
  // {
  //   path: '',
  //   redirectTo: States.EBS,
  // }
  // {
  //   path: '',
  //   redirectTo: States.LOGIN,
  //   pathMatch: 'full'
  // }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
