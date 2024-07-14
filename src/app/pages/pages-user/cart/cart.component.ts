import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { Router } from '@angular/router';
import { IProduct } from '../../../Models/i-product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  products: IProduct[] = []
  cartProducts: IProduct[] = []
  cartProduct!: IProduct

  subTotal: number = 0;
  shipping: number = 5;
  total: number = 0;

  constructor(private payment: PaymentService, private cartSvc: CartService,private router: Router) {}

  ngOnInit() {
    this.cartSvc.getCart().subscribe((products: IProduct[]) => {
      this.cartProducts = products;
      this.cartProducts.forEach(product => {
        product.quantity = product.quantity ?? 1; // Inizializza la quantità se non esiste
      });

    this.calculate();
  });
}

  calculate(): void {
    this.subTotal = 0;
    this.cartProducts.forEach(product => {
      const quantity = product.quantity ?? 1;
      product.partialTotal = product.price * quantity;
      this.subTotal += product.partialTotal;
    });
    this.total = this.subTotal + this.shipping;
  }

  goToPayment() {
    this.payment.totalAmount = this.total;
    this.router.navigate(['/payment']);
  }

}
