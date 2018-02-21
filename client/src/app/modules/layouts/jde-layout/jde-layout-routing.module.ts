import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { States } from '../../../constant/states.constant';

import { JdeLayoutComponent } from './jde-layout.component';

const jdeLayoutRoutes: Routes = [
  {
    path: '',
    component: JdeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '../../sections/jde/jde-page/jde-page.module#JdePageModule',
      },
      {
        path: States.PAGE,
        loadChildren: '../../sections/jde/jde-page/jde-page.module#JdePageModule',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(jdeLayoutRoutes)
  ],
  exports: [RouterModule]
})

export class JdeLayoutRoutingModule {
}