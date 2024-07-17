import { IOrder } from "./i-order";

export interface IUser {
  id : number,
  firstName : string,
  lastName : string,
  username : string,
  //address : string,
  //cap : number,
  email : string,
  password : string,
  orderList : IOrder[],
  roles?: "USER" | "ADMIN"
}
