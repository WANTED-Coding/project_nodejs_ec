import { Document } from 'mongoose';
export interface IDevice extends Document {
	FK_createUser:string,
  fcmToken:string,
  deviceUUid:string,
  deviceModel:string,
  appVersion:string,
  status:string
}
