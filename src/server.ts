require('express-async-errors');
import { default as express, Request, Response, NextFunction } from "express";
import cors from "cors";
import util from "util";
import moment from "moment";
import bodyParser from "body-parser";
import jsend from 'jsend';
import errorHandler from "errorhandler";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '@modules/swagger.json';
import Routes from "@routes/index";
import logger from "@modules/util/logger";
import { ResponseFormat, errorResponse, successResponse } from '@modules/util/response';

/**
 * @desc Start Express server.
 * @class Server
 */
class ExpressServer {

	private readonly app_start: number =  moment().unix();

	constructor(private app: express.Application) {
		const APPLICATION = this;

		APPLICATION.app = app;
		
		APPLICATION.config();
		
		APPLICATION.starter();
		
		APPLICATION.routes();
		
		APPLICATION.all();

		APPLICATION.handleError();
	};

	private config = (): void => {
		const { app: APPLICATION } = this;

		// USE MIDDLEWARES
		APPLICATION.use(cors());
		APPLICATION.use(jsend.middleware);
		APPLICATION.use(bodyParser.json());
		APPLICATION.use(bodyParser.urlencoded({ extended: true }));

		// SET APPLICATION PORT
		APPLICATION.set("port", parseInt(process.env.PORT!, 10));

		// ERROR HANDLER
		APPLICATION.use(errorHandler());

		// SWAGGER API DOCS CONFIG
		APPLICATION.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	};

	private routes = () => {
		const { app: APPLICATION } = this;

		APPLICATION.use('/api/v1', Routes._router);
	}

	private starter = () => {
		const { app: APPLICATION } = this;
		const details = { operationStatus: 'Operation Successful!', app_start: this.app_start };
		APPLICATION.get('/api/v1/', async (_, res: Response): Promise<ResponseFormat | any> =>{
			const result = successResponse('Success!', 200, 'Project is up and running', details)
			return res.status(200).json(result);
		});
	}

	private all = () => {
		const { app: APPLICATION } = this;

		APPLICATION.use('/*', async (req: Request, res: Response): Promise<ResponseFormat | any> => {
			const result = errorResponse('Route', 404, `${req.originalUrl}`, `${req.method}`, 'Route not found', { operationStatus: 'Operation Terminated'});
			return res.status(404).json(result);
		});
	}

	private handleError = () => {
		const { app: APPLICATION } = this;
		return APPLICATION.use(async (err: any, _: Request, res: Response, _2: NextFunction): Promise<ResponseFormat | any> => {
			const data = errorResponse('', 500, '', '', `${err.message}`, { operationStatus: 'Operation Terminated'});
			logger.error(util.inspect(err, true, 5));
			if (!res.headersSent) return res.status(500).json(data);
		});
	};

	public initialize = (): void => {
		const { app: APPLICATION } = this;

		const message = "  App is running at http://localhost:%d in %s mode";
		  
		  APPLICATION.listen(APPLICATION.get('port'), () => {
		 
		  console.info(message, APPLICATION.get("port"), APPLICATION.get("env"));
		 
		  console.info("  **Press CTRL + C to stop**");
		});
	};
}

export default new ExpressServer(express());