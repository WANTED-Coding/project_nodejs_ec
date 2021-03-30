import { Response, NextFunction, Router, RequestHandler } from 'express';
import { IValidateRequest } from '../common/DefineRequest';
export enum Methods {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

interface IRoute {
	path: string;
	method: Methods;
	handler: (
		req: IValidateRequest,
		res: Response,
		next: NextFunction
	) => void | Promise<void>;
	localMiddleware: ((
		req: IValidateRequest,
		res: Response,
		next: NextFunction
	) => void)[];
}

export default abstract class Controller {
	public router: Router = Router();
	public abstract path: string;
	protected abstract readonly routes: Array<IRoute> = [];

	public setRoutes = (): Router => {
		for (const route of this.routes) {
			for (const mw of route.localMiddleware) {
				this.router.use(route.path, mw);
			}
			switch (route.method) {
				case 'GET':
					this.router.get(route.path, route.handler);
					break;
				case 'POST':
					this.router.post(route.path, route.handler);
					break;
				case 'PUT':
					this.router.put(route.path, route.handler);
					break;
				case 'DELETE':
					this.router.delete(route.path, route.handler);
					break;
				default:
					console.log('not a valid method', route.method);
					break;
			}
		}

		return this.router;
	};
	protected sendSuccess(
		res: Response,
		data: object,
		message?: string
	): Response {
		return res.status(200).json({
			message: message || 'success',
			data: data
		});
	}

	protected sendError(res: Response, message?: string): Response {
		return res.status(500).json({
			message: message || 'internal server error'
		});
	}
}
