import { type NextFunction, type Request, type RequestHandler, type Response } from "express";

export const asyncHandler = (fn: RequestHandler) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await fn(req, res, next);
		} catch (error) {
			next(error);
		}
	};
};