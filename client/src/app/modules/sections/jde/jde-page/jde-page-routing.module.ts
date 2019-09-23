import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JdePageComponent } from './jde-page.component';

import { JdeGuard } from '../../../../guards/jde.guard';
import { AuthGuard } from '../../../../guards/auth.guard';

const jdePageRoutes: Routes = [
  {path: '', component: JdePageComponent, canActivate: [ AuthGuard, JdeGuard ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(jdePageRoutes)
  ],
  exports: [ RouterModule ]
})

export class JdePageRoutingModule {
}