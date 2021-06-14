import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockHomeComponent } from '@menus/stock/stock-home/stock-home.component';
import { StockCreateComponent } from '@menus/stock/stock-create/stock-create.component';
import { StockEditComponent } from '@menus/stock/stock-edit/stock-edit.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'stock', pathMatch: 'full' },
  { path: 'stock', component: StockHomeComponent },
  { path: 'stock/create', component: StockCreateComponent },
  { path: 'stock/edit/:id', component: StockEditComponent },
  { path: '**', redirectTo: 'stock'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
