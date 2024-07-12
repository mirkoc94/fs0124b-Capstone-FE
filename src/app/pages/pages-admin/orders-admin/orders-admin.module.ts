import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersAdminRoutingModule } from './orders-admin-routing.module';
import { OrdersAdminComponent } from './orders-admin.component';


@NgModule({
  declarations: [
    OrdersAdminComponent
  ],
  imports: [
    CommonModule,
    OrdersAdminRoutingModule
  ]
})
export class OrdersAdminModule { }
