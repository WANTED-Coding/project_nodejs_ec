import { Request } from 'express';

interface IValidateRequest extends Request {
	value?: {
		body?: object;
		param?: string;
	};
}
