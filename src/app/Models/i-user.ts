import { IOrder } from "./i-order";

export interface IUser {
  id : number,
  firstname : string,
  lastname : string,
  username : string,
  address : string,
  cap : number,
  email : string,
  password : string,
  orderList : IOrder[],
  role?: 'USER' | 'ADMIN' //admin?:boolean
}
