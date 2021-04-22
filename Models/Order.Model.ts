import { defaultModel } from './../common/constants';

export default {
	FK_createUser:defaultModel.stringRef,
  FK_cart:defaultModel.stringRef,
  FK_address:defaultModel.stringRef,
  status:{...defaultModel.string,default:''},
  checkIn:defaultModel.array,
  phone:defaultModel.stringPhone
  
};
