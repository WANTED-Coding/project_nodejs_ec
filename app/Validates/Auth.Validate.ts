import joi from '@hapi/joi';

const validate = {
	login: joi.object().keys({
		email: joi.string().email().required(),
		password: joi.string().min(6).max(24).required()
	}),
	register: joi.object().keys({
		//username, password, phone, fullName
		email: joi.string().email().required(),
		password: joi.string().min(6).max(24).required(),
		phone: joi.string().required(),
		fullName: joi.string().required()
	})
};
export default validate;
