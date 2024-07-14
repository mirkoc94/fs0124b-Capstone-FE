import { Component } from '@angular/core';
import { IProduct } from '../../Models/i-product';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  onSubmit() {}

  products: IProduct[] = [];
  newProduct: IProduct = {
    id: 0,
    brand: '',
    name:'',
    price: 0,
    image: ''
  };

  constructor(
    private productsSvc: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.productsSvc.getAllProducts();
    this.productsSvc.products$.subscribe(product => {
      this.products = product;
    });
  }

  addProduct() {
    this.productsSvc.addProduct(this.newProduct).subscribe(
      newProduct => {
        this.products.push(newProduct);
      },
      error => {
        console.error('Error adding product:', error);
      }
    )
    if(this.newProduct) this.router.navigate(['/shop']);
  }


  isCollapsed: boolean = true;
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
