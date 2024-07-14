import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder } from '../../Models/i-order';
import { OrdersService } from '../../services/orders.service';
import { IProduct } from '../../Models/i-product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {

  order: IOrder | undefined;
  products : IProduct[] = []

  constructor(
    private ordersSvc: OrdersService,
    private productsSvc: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    //const orderId = +this.route.snapshot.paramMap.get('id')!;
    //this.ordersSvc.getOrderById(orderId).subscribe(order => this.order = order);
    this.route.params.subscribe((params: any) => {
      this.ordersSvc.orders$.subscribe(orders => {
        const foundOrder = orders.find(p => p.id == params.id)
        if(foundOrder) this.order = foundOrder
      })
    })

    this.productsSvc.getAllProducts().subscribe(products => this.products = products);
  }
}
