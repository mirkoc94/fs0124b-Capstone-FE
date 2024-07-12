import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { OrderModule } from '../../order/order.module';
import { ListOrdersComponent } from '../../../main-components/list-orders/list-orders.component';


@NgModule({
  declarations: [
    UserComponent,
    ListOrdersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    OrderModule
  ]
})
export class UserModule { }
