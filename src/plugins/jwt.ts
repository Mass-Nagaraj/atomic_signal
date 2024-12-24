import fp from "fastify-plugin";
import fastifyJWT from "@fastify/jwt";

export default fp(async (fastify) => {
  fastify.register(fastifyJWT, {
    secret: "ASbTB_XeicE*YHK!b-H8",
    sign: {
      expiresIn: "2d",
    },
  });
});
