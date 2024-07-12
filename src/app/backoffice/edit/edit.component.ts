import { Component } from '@angular/core';
import { IProduct } from '../../Models/i-product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  product!: IProduct

  constructor(
    private productsSvc: ProductsService,
    private route:ActivatedRoute,
    private router: Router
  ){}

    ngOnInit(){
      this.route.params.subscribe((params: any) => {
        this.productsSvc.products$.subscribe(products => {
          const foundPlayer = products.find(p => p.id == params.id)
          if(foundPlayer) this.product = foundPlayer
        })
      })
    }

    editProduct(){
      this.productsSvc.editProduct(this.product).subscribe()
      if(this.product) this.router.navigate(['/products'])
    }

    isCollapsed: boolean = true;
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
