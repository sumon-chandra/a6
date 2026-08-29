import { Router } from "express";
import { UsersRoutes } from "../modules/users/users.route";

const mainRouter = Router();

const moduleRoutes = [
    { path: "/users", route: UsersRoutes }
];

moduleRoutes.forEach((route) => {
	mainRouter.use(route.path, route.route);
});

export default mainRouter;
