import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';

import { AuthLayoutComponent } from './auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    AuthLayoutRoutingModule,
  ],
  declarations: [
    AuthLayoutComponent
  ]
})

export class AuthLayoutModule {
}
