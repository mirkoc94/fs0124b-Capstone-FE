import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { Router } from '@angular/router';
import { IProduct } from '../../../Models/i-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  products: IProduct[] = []
  product!: IProduct

  constructor(private payment: PaymentService, private router: Router) {}

  subTotal: number = 0;
  shipping: number = 5;
  total: number = 0;
  quantity : number = 1

  calculate(): void {
    this.subTotal = 0;
    this.products.forEach(product => {
      product.partialTotal = product.price * this.quantity;
      this.subTotal += product.partialTotal;
    });
    this.total = this.subTotal + this.shipping;
  }

  ngOnInit() {
    this.calculate();
  }

  goToPayment() {
    this.payment.totalAmount = this.total;
    this.router.navigate(['payment']);
  }


}
