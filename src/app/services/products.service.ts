import { Injectable } from '@angular/core';
import { IProduct } from '../Models/i-product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:IProduct[] = []

  private productSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productSubject.asObservable();

  constructor(private http: HttpClient) {

    this.getAllProducts().subscribe(
      products => {
        this.productSubject.next(products);
      }
    );
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.productsUrl}/${id}`)
    .pipe(
      catchError(error => {
        console.error('Error fetching product:', error);
        throw error;
      })
    );
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.productsUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching products:', error);
          throw error;
        })
      );
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(environment.productsUrl, product)
      .pipe(
        tap(newProduct => {
          const currentProducts = this.productSubject.getValue();
          this.productSubject.next([...currentProducts, newProduct]);
        }),
        catchError(error => {
          console.error('Error adding product:', error);
          throw error;
        })
      );
  }

  editProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${environment.productsUrl}/${product.id}`, product)
      .pipe(
        tap(editedProduct => {
          const currentProducts = this.productSubject.getValue();
          const index = currentProducts.findIndex(p => p.id === product.id);
          if (index !== -1) {
            currentProducts[index] = editedProduct;
          }
          this.productSubject.next([...currentProducts]);
        }),
        catchError(error => {
          console.error('Error editing product:', error);
          throw error;
        })
      );
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.productsUrl}/${id}`)
      .pipe(
        tap(() => {
          const currentProducts = this.productSubject.getValue();
          const updatedProducts = currentProducts.filter(p => p.id !== id);
          this.productSubject.next(updatedProducts);
        }),
        catchError(error => {
          console.error('Error deleting product:', error);
          throw error;
        })
      );
  }
}
