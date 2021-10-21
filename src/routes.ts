import {Router} from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageContoller } from "./controllers/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router =Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageContoller().handle);

export {router}