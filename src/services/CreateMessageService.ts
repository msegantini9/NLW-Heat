import { io } from "../app";
import prismaClient from "../prisma";

class CreateMessageSerice{
  async execute(text:string, user_id:string){
    const message = await prismaClient.message.create({
      data:{
        text, 
        user_id
      },
      include:{
        user:true,
      },
    });

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      createdAt: message.created_at,
      user:{
        name:message.user.name,
        avatarUrl: message.user.avatar_url
      }
    }

    io.emit("new_message", infoWS)

    return message;
  }
}

export {CreateMessageSerice}