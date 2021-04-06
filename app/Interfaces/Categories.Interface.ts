import { Document } from 'mongoose';
export interface ICategories extends Document {
	name:string,
  image:string,
  status:string
}
