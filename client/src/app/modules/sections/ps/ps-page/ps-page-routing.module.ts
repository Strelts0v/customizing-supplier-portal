import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PsPageComponent } from './ps-page.component';

import { PsGuard } from '../../../../guards/ps.guard';
import { AuthGuard } from '../../../../guards/auth.guard';

const psPageRoutes: Routes = [
  {path: '', component: PsPageComponent, canActivate: [ AuthGuard, PsGuard ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(psPageRoutes)
  ],
  exports: [ RouterModule ]
})

export class PsPageRoutingModule {
}