import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsLayoutRoutingModule } from './ps-layout-routing.module';

import { PsLayoutComponent } from './ps-layout.component';

@NgModule({
  imports: [
    CommonModule,
    PsLayoutRoutingModule
  ],
  declarations: [
    PsLayoutComponent
  ]
})

export class PsLayoutModule {
}