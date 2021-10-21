import prismaClient from "../prisma"
import { CreateMessageSerice } from "./CreateMessageService";

class GetLast3MessagesService{
  async execute(){
    const messages = await prismaClient.message.findMany({
      take:3,
      orderBy:{
        created_at:"desc"
      },
      include:{
        user:true,
      },
    });

    return messages;
  }
}

export {GetLast3MessagesService}