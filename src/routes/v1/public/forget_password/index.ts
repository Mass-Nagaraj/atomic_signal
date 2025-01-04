import { FastifyPluginAsync } from "fastify";
import { ForgotPasswordController } from "../../../../controllers/auth";

const forget_password: FastifyPluginAsync = async (
  fastify,
  options,
): Promise<any> => {
  // fastify.get("/forget",async (request:any,reply)=>{
  //     try{
  //         await ForgotPasswordController(fastify,request,reply);
  //     }catch(error){
  //         reply.status(500).send({ error: "An error occurred" });
  //     }
  // })
};

export default forget_password;
