import {  Response, NextFunction } from 'express';
import Controller, { Methods } from './Controller';
import TokenServices from '../Services/Token.Services';
import { AuthPath } from '../common/RoutePath';
import AuthService from '../Services/Auth.Services';
import Validate from '../Validates/Validate';
import schemaAuth from '../Validates/Auth.Validate';
import { IValidateRequest } from '../common/DefineRequest';
export default class AuthController extends Controller {
	path = '/Auth';
	routes = [
		{
			path: `/${AuthPath.LOGIN}`,
			method: Methods.POST,
			handler: this.handleLogin,
			localMiddleware: [Validate.body(schemaAuth.login)]
		},
		{
			path: `/${AuthPath.REGISTER}`,
			method: Methods.POST,
			handler: this.handleRegister,
			localMiddleware: [Validate.body(schemaAuth.register)]
		},
		{
			path: `/${AuthPath.FORGOT_PASSWORD}`,
			method: Methods.PUT,
			handler: this.handleForgotPassword,
			localMiddleware: [TokenServices.verify]
		},
		{
			path: `/${AuthPath.CHANGE_PASSWORD}`,
			method: Methods.PUT,
			handler: this.handleChangePassword,
			localMiddleware: [TokenServices.verify]
		},
		{
			path: `/${AuthPath.VERIFY}`,
			method: Methods.GET,
			handler: this.handleVerifyAccount,
			localMiddleware: [TokenServices.verify]
		}
	];
	constructor() {
		super();
	}

	async handleLogin(
		req: IValidateRequest | any,
		res: Response,
		next: NextFunction
	): Promise<void> {
		//Handle
		try {
			const { email, password }: any = req.value.body;
			const authService: AuthService = new AuthService();
			const result = await authService.loginServices(email, password);
			console.log(result);
			if (result.success) {
				super.sendSuccess(
					res,
					{ token: TokenServices.createToken(result.data!._id) },
					result.message
				);
			} else {
				super.sendError(res, result.message);
			}
		} catch {
			super.sendError(res);
		}
	}
	async handleRegister(
		req: IValidateRequest | any,
		res: Response,
		next: NextFunction
	): Promise<void> {
		//Handle
		try {
			const { email, password, phone, fullName }: any = req.value.body;
			const authService: AuthService = new AuthService();
			const result = await authService.register(email,password,phone,fullName);
			if (result.success) {
				super.sendSuccess(res, result.data!, result.message);
			} else {
				super.sendError(res, result.message);
			}
		} catch {
			super.sendError(res);
		}
	}
	async handleForgotPassword(
		req: IValidateRequest,
		res: Response,
		next: NextFunction
	): Promise<void> {
		//Handle
		super.sendSuccess(res, {}, 'handleForgotPassword');
	}
	async handleChangePassword(
		req: IValidateRequest | any,
		res: Response,
		next: NextFunction
	): Promise<void> {
		//Handle
		try {
			const { email, password, newPassword }: any = req.value.body;
			const authService: AuthService = new AuthService(req.value.param);
			const result = await authService.changePassword(newPassword);
			if (result.success) {
				super.sendSuccess(res, result.data!, result.message);
			} else {
				super.sendError(res, result.message);
			}
		} catch {
			super.sendError(res);
		}
	}
	async handleVerifyAccount(
		req: IValidateRequest,
		res: Response,
		next: NextFunction
	): Promise<void> {
		//Handle
		super.sendSuccess(res, {}, 'handleVerifyAccount');
	}
}
