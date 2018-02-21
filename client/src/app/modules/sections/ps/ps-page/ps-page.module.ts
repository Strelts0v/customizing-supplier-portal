import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsPageRoutingModule } from './ps-page-routing.module';
import { PsPageComponent } from './ps-page.component';

@NgModule({
  imports: [
    CommonModule,
    PsPageRoutingModule
  ],
  declarations: [
    PsPageComponent
  ],
  exports: [
    PsPageComponent
  ]
})

export class JdePageModule {    
}