import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockHomeComponent } from '@menus/stock/stock-home/stock-home.component';
import { StockCreateComponent } from '@menus/stock/stock-create/stock-create.component';
import { StockEditComponent } from '@menus/stock/stock-edit/stock-edit.component';
import { ShopComponent } from '@menus/shop/shop/shop.component';

const routes: Routes = [

  { path: '', redirectTo: 'stock', pathMatch: 'full' },
  { path: 'stock', children:
    [
      { path: '', component: StockHomeComponent },
      { path: 'create', component: StockCreateComponent },
      { path: 'edit/:id', component: StockEditComponent },
    ]
  },
  { path: 'shop', component: ShopComponent},
  { path: '**', redirectTo: 'stock'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
