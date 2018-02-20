import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {
}
