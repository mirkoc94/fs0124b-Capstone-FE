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
  order: IOrder | undefined;

  constructor(private ordersSvc: OrdersService) {}

  ngOnInit() {
    this.ordersSvc.getAllOrders().subscribe(order => {
      this.orders = order
    });

    this.ordersSvc.orders$.subscribe(
      order => {
        this.orders = order;
      });

  }

}
