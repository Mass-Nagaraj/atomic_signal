import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../utils.ts/prisma";

export async function getDestinations(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const designations = await prisma.designation_master.findMany();

    return designations;
  } catch (error) {
    return reply.code(200).send(error);
  }
}
