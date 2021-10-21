import {Request, Response} from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateMessageSerice } from "../services/CreateMessageService";

class CreateMessageContoller {
  async handle(request:Request, response:Response) {
    const {message} = request.body;
    const {user_id} = request;

    const service = new CreateMessageSerice();

    const result = await service.execute(message, user_id);

    return response.json(result);
  }
}

export {CreateMessageContoller}