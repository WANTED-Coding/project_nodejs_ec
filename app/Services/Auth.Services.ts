import { Request, Response, NextFunction } from 'express';
import { IUser, ETypeLogin } from '../Interfaces/User.Interface';
import { User } from '../Models/index';
import bcrypt from 'bcrypt';

interface AuthReturnData {
	message: string;
	success: boolean;
	data?: IUser;
}
export default class AuthService {
	constructor(public readonly _id?: string) {}
	public loginServices = async (
		email: string,
		password: string
	): Promise<AuthReturnData> => {
		try {
			console.log(email);
			const resDbUser: IUser | null = await User.findOne({
				email: email
			});
			if (resDbUser) {
				console.log('password: ' + password);
				const isPasswordEqual = await bcrypt.compare(
					password,
					resDbUser.password
				);
				console.log('password from db: ' + resDbUser.password);
				if (isPasswordEqual) {
					return {
						message: 'Successfully logged in',
						success: true,
						data: resDbUser
					};
				} else {
					return { message: 'Invalid password', success: false };
				}
			} else {
				return { message: 'No such user', success: false };
			}
		} catch (e) {
			console.log(e);
			return { message: 'An error occured', success: false };
		}
	};
	public register = async (
		email: string,
		password: string,
		phone: string,
		fullName: string
	): Promise<AuthReturnData> => {
		try {
			const userFromDb = await User.findOne({
				where: { email: email }
			});
			if (!userFromDb) {
				const hashedPassword = await bcrypt.hash(password, 10);
				const createdUser = new User({
					email: email,
					password: hashedPassword,
					phone: phone,
					fullName: fullName,
					typeLogin: ETypeLogin.EMAIL
				});
				await createdUser.save();
				return {
					message: 'Successfully registered',
					success: true,
					data: createdUser
				};
			} else {
				return { message: 'User already exists', success: false };
			}
		} catch (e) {
			console.log(e);
			return { message: 'An error occured', success: false };
		}
	};
	public changePassword = async (newPass: string): Promise<AuthReturnData> => {
		try {
			const user = await User.findById(this._id);
			if (!user) {
				return { message: 'User  not already exists', success: false };
			} else {
				const hashedPassword = await bcrypt.hash(newPass, 10);
				user.password = hashedPassword;
				await user.save();
				return {
					message: 'Successfully changed password',
					data: user,
					success: true
				};
			}
		} catch (e) {
			console.log(e);
			return { message: 'An error occured', success: false };
		}
	};
}
