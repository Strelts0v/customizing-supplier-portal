import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';
import { EbsGuard } from './ebs.guard';
import { JdeGuard } from './jde.guard';
import { PsGuard } from './ps.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    EbsGuard,
    JdeGuard,
    PsGuard,
  ],
})
export class GuardsModule {
}
