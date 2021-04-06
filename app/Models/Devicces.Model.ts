import { defaultModel } from './../common/constants';

export default {
	FK_createUser:{...defaultModel.stringR,match:/^[a-fA-F0-9]{24}$/},
  fcmToken:defaultModel.stringR,
  deviceUUid:{...defaultModel.stringR,match:/^[a-fA-F0-9]{24}$/},
  deviceModel:defaultModel.stringR,
  appVersion:defaultModel.stringR,
  status:{...defaultModel.string,default:''}
};
