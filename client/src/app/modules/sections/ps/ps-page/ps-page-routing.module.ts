import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PsPageComponent } from './ps-page.component';

import { LoginGuard } from '../../../../guards/login.guard';
import { PsGuard } from '../../../../guards/ps.guard';

const psPageRoutes: Routes = [
  {path: '', component: PsPageComponent, canActivate: [ LoginGuard, PsGuard ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(psPageRoutes)
  ],
  exports: [ RouterModule ]
})

export class PsPageRoutingModule {
}