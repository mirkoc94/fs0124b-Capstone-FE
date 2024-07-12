import { Component, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { UsersService } from '../../services/users.service';
import { IOrder } from '../../Models/i-order';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.scss'
})
export class ListOrdersComponent {

  @Input() order!:IOrder
//
  //connectedArray: any[] = [];
//
  //constructor(private usersSvc:UsersService, private ordersSvc:OrdersService) {
  //  this.connectArrays()
  //}
//
  //connectArrays() {
//
  //  this.connectedArray = this.ordersSvc.orders.map(order => {
  //    const correspondingItem = this.usersSvc.users.find(user => user.id === order.idUser);
  //    return { ...order, ...correspondingItem };
  //  });
  //  console.log(this.connectedArray);
//
  //}
//
  //ngOnInit() {
  //  this.connectArrays()
  //}

}
