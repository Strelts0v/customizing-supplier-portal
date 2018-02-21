import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbsPageRoutingModule } from './ebs-page-routing.module';
import { EbsPageComponent } from './ebs-page.component';

@NgModule({
  imports: [
    CommonModule,
    EbsPageRoutingModule
  ],
  declarations: [
    EbsPageComponent
  ],
  exports: [
    EbsPageComponent
  ]
})

export class EbsPageModule {    
}