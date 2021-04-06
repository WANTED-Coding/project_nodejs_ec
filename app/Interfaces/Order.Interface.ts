import { Document } from 'mongoose';
export interface IOrder extends Document {
  FK_createUser:string,
  FK_cart:string,
  FK_address:string,
  status:string,
  checkIn:Array<string>,
  phone:string
}