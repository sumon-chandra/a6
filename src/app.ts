import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mainRouter from "./routes";
import globalErrorHandler from "./middlewares/global-error-handler";
import { notFound } from "./middlewares/not-found";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		success: true,
		message: "Welcome to the server.",
	});
});

app.use("/api/v1/", mainRouter);
app.use(globalErrorHandler);
app.use(notFound);

export default app;