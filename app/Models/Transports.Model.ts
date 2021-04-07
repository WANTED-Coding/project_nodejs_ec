import { defaultModel } from './../common/constants';

export default {
	name:defaultModel.stringR,
	description:defaultModel.string,
	image:defaultModel.string,
	address:defaultModel.stringR,
	typeSupport:{...defaultModel.string,default:''},
	phone:defaultModel.stringR,
	status:{...defaultModel.string,default:''},
	FK_createUser:defaultModel.stringRef
};
