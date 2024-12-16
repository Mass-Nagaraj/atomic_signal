import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import fp from "fastify-plugin";
import { VerifyAuth } from "../middleware/authenticate";

declare module 'fastify' {
    interface FastifyInstance {
      authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }
}

const authenticatePlugin: FastifyPluginAsync = async (fastify) => {
  fastify.decorate("authenticate", 
    async (request: FastifyRequest, reply: FastifyReply) => {
    
        await VerifyAuth(request, reply);

  });
};


export default fp(authenticatePlugin);


