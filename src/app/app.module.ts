import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '@services/index';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ShopComponent } from '@menus/shop/shop/shop.component';

import { AppMaterialModule } from '@app/app-material/app-material.module';

import { HeaderComponent } from '@layouts/header/header.component';
import { SidenavComponent } from '@layouts/sidenav/sidenav.component';
import { StockHomeComponent } from '@menus/stock/stock-home/stock-home.component';
import { StockCreateComponent } from '@menus/stock/stock-create/stock-create.component';
import { StockEditComponent } from '@menus/stock/stock-edit/stock-edit.component';
import { ProgressComponent } from '@share/progress/progress.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    StockHomeComponent,
    StockCreateComponent,
    StockEditComponent,
    ProgressComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
