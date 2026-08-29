import { Router } from "express";
import { UsersController } from "./users.controller";

const router = Router();

router.get("/", UsersController.getAllUsers);

export const UsersRoutes = router;