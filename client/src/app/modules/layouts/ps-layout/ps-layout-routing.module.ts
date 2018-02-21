import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { States } from '../../../constant/states.constant';

import { PsLayoutComponent } from './ps-layout.component';

const psLayoutRoutes: Routes = [
  {
    path: '',
    component: PsLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '../../sections/ps/ps-page/ps-page.module#PsPageModule',
      },
      {
        path: States.PAGE,
        loadChildren: '../../sections/ps/ps-page/ps-page.module#PsPageModule',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(psLayoutRoutes)
  ],
  exports: [RouterModule]
})

export class PsLayoutRoutingModule {
}