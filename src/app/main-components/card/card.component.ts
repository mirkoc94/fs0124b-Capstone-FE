import { IProduct } from './../../Models/i-product';
import { Component, Input } from '@angular/core';
import { IUser } from '../../Models/i-user';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() product!: IProduct
  user: IUser | undefined
  cart: IProduct[] = [];


  constructor(private productsSvc: ProductsService){}

  deleteProduct(id:number) {
    this.productsSvc.deleteProduct(id).subscribe();
  }

  addToCart(product: IProduct): void {
    this.cart.push(product);
  }

}
