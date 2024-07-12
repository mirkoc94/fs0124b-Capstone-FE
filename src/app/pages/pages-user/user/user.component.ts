import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from '../../../Models/i-order';
import { IUser } from '../../../Models/i-user';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  @Input() user!:IUser

  orders : IOrder[] = []

  constructor(private ordersSvc:OrdersService){}

  ngOnInit(): void {
    this.ordersSvc.getAllOrders().subscribe(orders => this.orders = orders);
  }

}
