import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersAdminComponent } from './orders-admin.component';

const routes: Routes = [{ path: '', component: OrdersAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersAdminRoutingModule { }
