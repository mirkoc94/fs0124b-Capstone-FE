import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder } from '../../Models/i-order';
import { OrdersService } from '../../services/orders.service';
import { IProduct } from '../../Models/i-product';
import { ProductsService } from '../../services/products.service';
import { IUser } from '../../Models/i-user';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {

  order!: IOrder;
  orders: IOrder[]=[];
  products : IProduct[] = [];
  user!: IUser;
  error: any;

  constructor(
    private ordersSvc: OrdersService,
    private productsSvc: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){

    //this.route.params.subscribe(params => {
    //  this.user.id = +params['id']; // Converti il parametro da stringa a numero
    //  this.loadUserOrders(this.user.id);
    //});

    this.route.params.subscribe((params: any) => {
      this.ordersSvc.orders$.subscribe(orders => {
        const foundOrder = orders.find(o => o.id == params.id)
        if(foundOrder) this.order = foundOrder
      })
    })

    //this.ordersSvc.getOrdersByUserId(this.user.id).subscribe(orders => this.orders = orders);

    this.productsSvc.getAllProducts().subscribe(products => this.products = products);
  }

  //loadUserOrders(userId: number): void {
  //  this.ordersSvc.getOrdersByUserId(userId)
  //    .subscribe({
  //      next: (orders) => {
  //        this.orders = orders;
  //      },
  //      error: (err) => {
  //        this.error = err;
  //        console.error('Error loading user orders:', err);
  //      }
  //    });
  //}
}
