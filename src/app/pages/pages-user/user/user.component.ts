import { IUser } from './../../../Models/i-user';
import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from '../../../Models/i-order';
import { OrdersService } from '../../../services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  user!: IUser;
  userId!: number;
  orders : IOrder[] = [];

  constructor(
    private usersSvc: UsersService,
    private ordersSvc:OrdersService,
    private route:ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe((params: any) => {
      this.usersSvc.users$.subscribe(users => {
        const foundUser = users.find(p => p.id == params.id)
        if(foundUser) this.user = foundUser
      })
    })

    this.route.params.subscribe(params => {
      this.userId = +params['userId'];
      if (!isNaN(this.userId)) {
        this.getOrders();
      } else {
        console.error("Invalid user ID");
      }
    });

    //this.ordersSvc.getOrdersByUserId(this.user).subscribe(orders => this.orders = orders);
  }

  getOrders(): void {
    this.ordersSvc.getOrdersByUserId(this.userId).subscribe(orders => {
      this.orders = orders;
    },
    error => {
      console.error("Error fetching orders:", error);
    });
  }

  getOrder(orderId: number): void {
    this.ordersSvc.getOrderByUserId(this.userId, orderId).subscribe(order => {
      console.log(order);
    },
    error => {
      console.error("Error fetching order:", error);
    });
  }

}
