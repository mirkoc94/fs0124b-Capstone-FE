import { IProduct } from './i-product';

export interface IOrder {
  id : number,
  idUser : number,
  productList : Partial<IProduct>[],
  total : number
  purchaseDate : Date,
  shippingDate : Date,
  expectedDeliveryDate : Date
}
