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

    return message;
  }
}

export {CreateMessageSerice}