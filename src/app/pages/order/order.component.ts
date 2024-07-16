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

  order: IOrder | undefined;
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

    this.route.params.subscribe(params => {
      this.user.id = +params['id']; // Converti il parametro da stringa a numero
      this.loadUserOrders(this.user.id);
    });

    this.productsSvc.getAllProducts().subscribe(products => this.products = products);
  }

  loadUserOrders(userId: number): void {
    this.ordersSvc.getOrdersByUserId(userId)
      .subscribe({
        next: (orders) => {
          this.orders = orders;
        },
        error: (err) => {
          this.error = err;
          console.error('Error loading user orders:', err);
        }
      });
  }
}
