import { defaultModel } from './../common/constants';

export default {
	name:defaultModel.stringR,
  address:defaultModel.stringR,
  FK_createdUser:{...defaultModel.stringR,match:/^[a-fA-F0-9]{24}$/},
  phone:{...defaultModel.stringR,match:/^0\d{9}$/}
};
