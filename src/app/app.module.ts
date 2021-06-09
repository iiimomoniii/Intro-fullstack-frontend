import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

import { AppMaterialModule } from '@app/app-material/app-material.module';

import { HeaderComponent } from '@app/components/layouts/header/header.component';
import { SidenavComponent } from './components/layouts/sidenav/sidenav.component';
import { StockHomeComponent } from './components/menus/stock/stock-home/stock-home.component';
import { StockCreateComponent } from './components/menus/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/menus/stock/stock-edit/stock-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    StockHomeComponent,
    StockCreateComponent,
    StockEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
