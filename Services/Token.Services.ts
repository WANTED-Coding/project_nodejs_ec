import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
// import { ISafeUser } from '../typings/index';s
import { ACCESS_TOKEN_SECRET } from '../common/constants';
import { IValidateRequest } from '../common/DefineRequest';
export default class Token {
	public static verify(
		req: IValidateRequest,
		res: Response,
		next: NextFunction
	): void {
		const header = req.headers.authorization;
		if (!header) {
			res.json({
				data: {
					tokenVerificationData: { access: false, message: 'No token provided' }
				}
			});
			return;
		}
		const token = header.split(' ')[1];
		console.log('tokenService token: ' + token);
		jwt.verify(token, ACCESS_TOKEN_SECRET!, (err:any, decodedFromToken:any) => {
			if (err) {
				res.json({
					data: {
						tokenVerificationData: {
							access: false,
							message: 'Failed to verify token'
						}
					}
				});
				return;
			} else {
				// console.log(decodedFromToken);
				// there's decodedFromToken.user that can only be reached with casting
				// that's why it is wrapped in <{user: object}>
				// const decoded = <{user: object}>decodedFromToken;
				// const decodedUser = <ISafeUser>decoded.user;
				// // res.json({tokenVerificationData: { access: true, user: decodedUser } });
				// req.verifiedUser = decodedUser;
				req.value = { body: { token: decodedFromToken } };
				// res.json({
				// 	data: {
				// 		tokenVerificationData: {
				// 			access: false,
				// 			l: decodedFromToken,
				// 			message: 'Failed to verify token'
				// 		}
				// 	}
				// });
				next();
			}
		});
	}
	public static createToken(data: any): any {
		return jwt.sign(
			{
				iss: 'Lam Hoang An',
				data: data,
				iat: new Date().getTime(),
				exp: new Date().setDate(new Date().getDate() + 1)
			},
			ACCESS_TOKEN_SECRET!
		);
	}
}
