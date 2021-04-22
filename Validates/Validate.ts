import { IValidateRequest } from '../common/DefineRequest';
import { Response, NextFunction } from 'express';
export default class Validate {
	public static param(schema: any, id: string) {
		return (req: IValidateRequest, res: Response, next: NextFunction) => {
			const validatorResult = schema.validate({ param: req.params[id] });
			if (validatorResult.error)
				return res.status(400).json(validatorResult.error);
			else {
				if (!req.value) req.value = { param: req.params[id] };
				next();
			}
		};
	}
	public static body(schema: any) {
		return (req: IValidateRequest, res: Response, next: NextFunction) => {
			const validatorResult = schema.validate(req.body);
			if (validatorResult.error)
				return res.status(400).json(validatorResult.error.details);
			else {
				if (!req.value) req.value = { body: validatorResult.value };
				next();
			}
		};
	}
}
