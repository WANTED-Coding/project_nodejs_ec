import { Document } from 'mongoose';
export interface ICoupon extends Document {
	FK_merchant:string,
  name:string,
  image:string,
  totalCode:number,
  discountByAmount:boolean,
  discountByPercent:boolean,
  discountAmount:string,
  discountPercent:string,
  status:string,
  expiredDate:string
}
