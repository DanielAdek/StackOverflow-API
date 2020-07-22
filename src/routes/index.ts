import { Router } from "express";
import StackRoute from '@modules/routes/StackRoutes';

class Routes {
	public readonly _router: Router;

	constructor() {
		this._router = Router();
		this.applicationRoutes();
	}

	public applicationRoutes = () => {
		this._router.use('/stack', StackRoute._router);
	}
};

const routes = new Routes();
export default routes;