import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../Models/i-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: IProduct[] = [];
  private cartSubject = new BehaviorSubject<IProduct[]>([]);

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: IProduct) {
    product.quantity = product.quantity ?? 1;
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }
}
