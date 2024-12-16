import { FastifyReply, FastifyRequest } from "fastify";

export const VerifyAuth =async (request:FastifyRequest,response:FastifyReply)=> {
    try{
        await request.jwtVerify()
    }catch(error) {
        console.log(error);
        return response.code(500).send(error)

    }
}


