import { Document } from 'mongoose';
export interface IProductInfo extends Document {
  FK_product:string,
  name:string,
  description:string,
  price:string,
  total:number,
  image:string
}