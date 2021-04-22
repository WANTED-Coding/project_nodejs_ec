import { Document } from 'mongoose';
export interface IMerchant extends Document {
  name:string,
   description:string,
   image:string,
   address:string,
   FK_category:string,
   phone:string,
   status:string
}