import { Document } from 'mongoose';
export interface IProduct extends Document {
  status:string,
  groupProductId:string,
  FK_merchant:string,
  FK_currentInfo:string
}