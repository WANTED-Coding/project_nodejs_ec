import { defaultModel } from './../common/constants';

export default {
	status:{...defaultModel.string,default:''},
  groupProductId:defaultModel.stringRef,
  FK_merchant:defaultModel.stringRef,
  FK_currentInfo:defaultModel.stringRef
};
