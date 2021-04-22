import { defaultModel } from './../common/constants';

export default {
	product:defaultModel.stringR,
  userId:{...defaultModel.stringR,match:/^[a-fA-F0-9]{24}$/},
  status:{...defaultModel.string,default:''},
  quantity:defaultModel.number
};
