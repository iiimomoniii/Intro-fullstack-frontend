import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule
];

@NgModule({
  imports: [
    materialModules,
  ],
  exports: [
    materialModules,
  ]
})
export class AppMaterialModule { }