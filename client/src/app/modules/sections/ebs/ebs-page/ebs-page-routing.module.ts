import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EbsPageComponent } from './ebs-page.component';

import { EbsGuard } from '../../../../guards/ebs.guard';
import { AuthGuard } from '../../../../guards/auth.guard';

const ebsPageRoutes: Routes = [
  {path: '', component: EbsPageComponent, canActivate: [ AuthGuard, EbsGuard ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(ebsPageRoutes)
  ],
  exports: [ RouterModule ]
})

export class EbsPageRoutingModule {
}