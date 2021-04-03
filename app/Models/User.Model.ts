import { defaultModel } from './../common/constants';

export default {
	email: defaultModel.stringUnique,
	fullName: defaultModel.string,
	phone: { ...defaultModel.stringUnique },
	password: defaultModel.string,
	isVerify: defaultModel.booleanFalse,
	typeLogin: { ...defaultModel.string, required: true },
	role: { ...defaultModel.string, default: 'USER' },
	FK_cart: defaultModel.string,
  otp:defaultModel.string,
  FK_address:defaultModel.string,
  image:defaultModel.string,
  FK_merchant:defaultModel.string
};
