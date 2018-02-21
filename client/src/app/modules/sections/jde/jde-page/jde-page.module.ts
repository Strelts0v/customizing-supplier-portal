import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JdePageRoutingModule } from './jde-page-routing.module';
import { JdePageComponent } from './jde-page.component';

@NgModule({
  imports: [
    CommonModule,
    JdePageRoutingModule
  ],
  declarations: [
    JdePageComponent
  ],
  exports: [
    JdePageComponent
  ]
})

export class JdePageModule {    
}