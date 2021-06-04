import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatToolbarModule,
  MatIconModule
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