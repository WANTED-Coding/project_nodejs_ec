import { defaultModel } from '../common/constants';

export default {
	email: defaultModel.stringUnique,
	fullName: defaultModel.string,
	phone: { ...defaultModel.stringUnique },
	password: defaultModel.string,
	isVerify: defaultModel.booleanFalse,
	typeLogin: { ...defaultModel.string, required: true },
	role: { ...defaultModel.string, default: 'USER' },
	cartId: defaultModel.string
};
