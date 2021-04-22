import { ITransport } from './../Interfaces/Transport.interface';
import { Request, Response, NextFunction } from 'express';
import { Transport, User } from '../Models/index';
import bcrypt from 'bcrypt';

interface ReturnData {
	message: string;
	success: boolean;
	data?: {};
}
export default class TransportServices {
	constructor(
    public readonly _id?:string
	) {}

  public createTransport = async (data:any): Promise<ReturnData> => {
   try{
      const newTransport= new Transport(data)
      await newTransport.save()
      return {
        message: 'Successfully created transport',
        success: true,
        data: newTransport
      };
    }
    catch(e){
      console.log(e);
			return { message: 'An error occured', success: false };
    }
  }
  public updateTransport = async (newData:any): Promise<ReturnData> => {
    try{
      const transport = await Transport.findById(this._id!);
      console.log(`LHA:  ===> file: Transport.Services.ts ===> line 33 ===> transport`, transport)
      if(transport)
      {
        transport.update(newData)
        await transport.save()
        return {
					message: 'Successful updated transport',
					success: true,
					data: transport
				};
      }
      else {
        return { message: 'transport  already does not exists', success: false };
      }
   }
    catch(e){
      console.log(e);
			return { message: 'An error occured', success: false };
    }
  }
  public deleteTransport = async (status:string="IS_ACTIVE"): Promise<ReturnData> => {
    try{
      const transport = await Transport.findById(this._id!);
      console.log(`LHA:  ===> file: Transport.Services.ts ===> line 33 ===> transport`, transport)
      if(transport)
      {
        transport.update({status})
        await transport.save()
        return {
					message: 'Successful updated transport',
					success: true,
					data: transport
				};
      }
      else {
        return { message: 'transport  already does not exists', success: false };
      }
    }
    catch(e){
      console.log(e);
			return { message: 'An error occured', success: false };
    }
  }
  public readTransport = async (): Promise<ReturnData> => {
    try{
      const transport = await Transport.findById(this._id!);
      if(transport)
      {
        return {
					message: 'Successful data retrieval',
					success: true,
					data: transport
				};
      }
      else {
        return { message: 'transport  already does not exists', success: false };
      }
    }
    catch(e){
      console.log(e);
			return { message: 'An error occured', success: false };
    }
  }
}
