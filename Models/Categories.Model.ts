import { defaultModel } from './../common/constants';

export default {
	name:defaultModel.stringR,
  image:defaultModel.string,
  status:{...defaultModel.string,default:''}
};
