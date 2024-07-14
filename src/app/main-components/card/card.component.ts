import { IProduct } from './../../Models/i-product';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../Models/i-user';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() product!: IProduct
  user: IUser | undefined
  products: IProduct[] = [];


  constructor(private productsSvc: ProductsService, private cartSvc: CartService,private router: Router){}

  ngOnInit(): void {
    this.loadProducts();
  }

  deleteProduct(id: number): void {
    this.productsSvc.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

  loadProducts(): void {
    this.productsSvc.getAllProducts().subscribe((data: IProduct[]) => {
      this.products = data;
    });
  }

  addToCart(product: IProduct): void {
    this.cartSvc.addToCart(product);
  }

}
