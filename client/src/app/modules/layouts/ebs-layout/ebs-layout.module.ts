import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbsLayoutRoutingModule } from './ebs-layout-routing.module';

import { EbsLayoutComponent } from './ebs-layout.component';

@NgModule({
  imports: [
    CommonModule,
    EbsLayoutRoutingModule
  ],
  declarations: [
    EbsLayoutComponent
  ]
})

export class EbsLayoutModule {
}
