import { Document } from 'mongoose';
export interface ITransport extends Document {
  name:string,
	description:string,
	image:string,
	address:string,
	typeSupport:string,
	phone:string,
	status:string,
	FK_createUser:string
}