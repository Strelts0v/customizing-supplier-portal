import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EbsPageComponent } from './ebs-page.component';

import { LoginGuard } from '../../../../guards/login.guard';
import { EbsGuard } from '../../../../guards/ebs.guard';

const ebsPageRoutes: Routes = [
  {path: '', component: EbsPageComponent, canActivate: [ LoginGuard, EbsGuard ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(ebsPageRoutes)
  ],
  exports: [ RouterModule ]
})

export class EbsPageRoutingModule {
}