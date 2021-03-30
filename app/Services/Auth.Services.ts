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
	constructor(
		public readonly email: string,
		public readonly password: string,
		public readonly _id?: string,
		public readonly phone?: string,
		public readonly fullName?: string,
		public readonly typeLogin?: string
	) {}
	public loginServices = async (): Promise<AuthReturnData> => {
		try {
			console.log(this.email);
			const resDbUser: IUser | null = await User.findOne({
				email: this.email
			});
			if (resDbUser) {
				console.log('password: ' + this.password);
				const isPasswordEqual = await bcrypt.compare(
					this.password,
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
	public register = async (): Promise<AuthReturnData> => {
		try {
			const userFromDb = await User.findOne({
				where: { email: this.email }
			});
			if (!userFromDb) {
				const hashedPassword = await bcrypt.hash(this.password, 10);
				const createdUser = new User({
					email: this.email,
					password: hashedPassword,
					phone: this.phone,
					fullName: this.fullName,
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
			const user = await User.findOne({
				email: this.email,
				password: this.password
			});
			if (!user) {
				return { message: 'User  not already exists', success: false };
			} else {
				if (await bcrypt.compare(this.password, user.password)) {
					const hashedPassword = await bcrypt.hash(newPass, 10);
					user.password = hashedPassword;
					await user.save();
					return {
						message: 'Successfully changed password',
						data: user,
						success: true
					};
				}
				return {
					message: 'password incorrect',
					success: false
				};
			}
		} catch (e) {
			console.log(e);
			return { message: 'An error occured', success: false };
		}
	};
}
