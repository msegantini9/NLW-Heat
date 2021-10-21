import {Router} from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageContoller } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLAst3MessagesController";
import { ProfileUSerController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router =Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageContoller().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureAuthenticated, new ProfileUSerController().handle)

export {router}