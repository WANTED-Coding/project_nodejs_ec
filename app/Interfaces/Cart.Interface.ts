import { Document } from 'mongoose';
export interface ICart extends Document {
	product:string,
  userId:string,
  status:string,
  quantity:number
}
