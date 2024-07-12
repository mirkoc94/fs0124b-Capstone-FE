import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder } from '../../Models/i-order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {

  order: IOrder | undefined;

  constructor(
    private route: ActivatedRoute,
    private ordersSvc: OrdersService
  ) {}

  ngOnInit(): void {
    const orderId = +this.route.snapshot.paramMap.get('id')!;
    this.ordersSvc.getOrderById(orderId).subscribe(order => this.order = order);
  }
}
