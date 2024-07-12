import { Component } from '@angular/core';
import { IOrder } from '../../../Models/i-order';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrl: './orders-admin.component.scss'
})
export class OrdersAdminComponent {

  orders: IOrder[] = [];

  constructor(private ordersSvc: OrdersService) {}

  ngOnInit(): void {
    this.ordersSvc.getAllOrders().subscribe(orders => this.orders = orders);
  }

}
