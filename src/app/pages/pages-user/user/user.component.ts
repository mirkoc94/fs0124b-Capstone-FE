import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from '../../../Models/i-order';
import { IUser } from '../../../Models/i-user';
import { OrdersService } from '../../../services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  user!: IUser
  orders : IOrder[] = []

  constructor(
    private usersSvc: UsersService,
    private ordersSvc:OrdersService,
    private route:ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.route.params.subscribe((params: any) => {
      this.usersSvc.users$.subscribe(users => {
        const foundUser = users.find(p => p.id == params.id)
        if(foundUser) this.user = foundUser
      })
    })

    this.ordersSvc.getAllOrders().subscribe(orders => this.orders = orders);
  }

}
