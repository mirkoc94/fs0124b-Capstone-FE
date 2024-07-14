import { Component } from '@angular/core';
import { IProduct } from '../../../Models/i-product';
import { ProductsService } from '../../../services/products.service';
import { AuthService } from '../../../auth/auth.service';
import { IUser } from '../../../Models/i-user';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  products : IProduct[] = []
  user: IUser | undefined;

  constructor(
    private productsSvc:ProductsService,
    private authSvc:AuthService){}

  ngOnInit() {
    this.productsSvc.getAllProducts().subscribe(product => {
      this.products = product;
    });

    this.productsSvc.products$.subscribe(
      product => {
        this.products = product;
      });

    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    })
  }

  loadProducts(): void {
    this.productsSvc.getAllProducts().subscribe((data: IProduct[]) => {
      this.products = data;
    });
  }

}
