import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.join(process.cwd(), ".env"),
});

const envConfigs = {
	port: process.env.PORT,
	db_url: process.env.DATABASE_URL as string,
	app_url: process.env.APP_URL as string,
	node_env: process.env.NODE_ENV as string,
};

export default envConfigs;