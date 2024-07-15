import { IProduct } from './i-product';
import { IUser } from './i-user';

export interface IOrder {
  id : number,
  user : IUser,
  productList : Partial<IProduct>[],
  total : number
  purchaseDate : Date,
  shippingDate : Date,
  expectedDeliveryDate : Date
}
