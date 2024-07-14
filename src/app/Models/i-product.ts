export interface IProduct {
  id : number,
  brand : string,
  name : string,
  price : number,
  image: string,
  quantity?: number,
  partialTotal?: number
}
