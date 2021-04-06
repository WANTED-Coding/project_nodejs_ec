import { Document } from 'mongoose';
export interface IAddress extends Document {
	name:string,
  address:string,
  FK_createdUser:string,
  phone:string
}
