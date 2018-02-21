import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { States } from '../../../constant/states.constant';

import { EbsLayoutComponent } from './ebs-layout.component';

const ebsLayoutRoutes: Routes = [
  {
    path: '',
    component: EbsLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '../../sections/ebs/ebs-page/ebs-page.module#EbsPageModule',
      },
      {
        path: States.PAGE,
        loadChildren: '../../sections/ebs/ebs-page/ebs-page.module#EbsPageModule',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ebsLayoutRoutes)
  ],
  exports: [RouterModule]
})

export class EbsLayoutRoutingModule {
}
