import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JdeLayoutRoutingModule } from './jde-layout-routing.module';

import { JdeLayoutComponent } from './jde-layout.component';

@NgModule({
  imports: [
    CommonModule,
    JdeLayoutRoutingModule
  ],
  declarations: [
    JdeLayoutComponent
  ]
})

export class EbsLayoutModule {
}