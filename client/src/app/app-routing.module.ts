import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { States } from './constant/states.constant';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: States.AUTH,
    loadChildren: './modules/layouts/configuration-auth-layout/configuration-auth-layout.module#ConfigurationAuthLayoutModule'
  },
  {
    path: '',
    loadChildren: './modules/layouts/configuration-main-layout/configuration-main-layout.module#ConfigurationMainLayoutModule',
    canLoad: [ AuthGuard ]
  },
  {
    path: '',
    redirectTo: States.LOGIN,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
