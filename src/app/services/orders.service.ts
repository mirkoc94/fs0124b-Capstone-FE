import { Injectable } from '@angular/core';
import { IOrder } from '../Models/i-order';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IUser } from '../Models/i-user';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders:IOrder[] = [];
  order!:IOrder;
  user!: IUser;

  private orderSubject = new BehaviorSubject<IOrder[]>([]);
  orders$ = this.orderSubject.asObservable();

  constructor(private http: HttpClient) {

    this.getAllOrders().subscribe(
      orders => {
        this.orderSubject.next(orders);
      }
    );
  }

  createOrder(order: IOrder): Observable<IOrder> {
    order.id = this.orders.length + 1;
    this.orders.push(order);
    return this.http.get<IOrder>(`${environment.ordersUrl}`);
  }

  getOrderById(id: number): Observable<IOrder> {
    return this.http.get<IOrder>(`${environment.ordersUrl}/${id}`)
    .pipe(
      catchError(error => {
        console.error('Error fetching order:', error);
        throw error;
      })
    );
  }

  getOrdersByUserId(userId: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${environment.usersUrl}/${userId}/orders`);
  }

  getOrderByUserId(userId: number, orderId: number): Observable<IOrder> {
    return this.http.get<IOrder>(`${environment.usersUrl}/${userId}/orders/${orderId}`);
  }

  getAllOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(environment.ordersUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching orders:', error);
          throw error;
        })
      );
  }
}
