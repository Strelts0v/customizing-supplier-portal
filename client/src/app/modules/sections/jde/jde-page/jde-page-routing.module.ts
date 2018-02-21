import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JdePageComponent } from './jde-page.component';

import { LoginGuard } from '../../../../guards/login.guard';
import { JdeGuard } from '../../../../guards/jde.guard';

const jdePageRoutes: Routes = [
  {path: '', component: JdePageComponent, canActivate: [ LoginGuard, JdeGuard ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(jdePageRoutes)
  ],
  exports: [ RouterModule ]
})

export class JdePageRoutingModule {
}