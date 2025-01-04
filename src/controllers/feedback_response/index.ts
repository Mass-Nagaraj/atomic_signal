import { FastifyReply, FastifyRequest } from "fastify";
import { create_feedbackResponse_Req_schema } from "../../routes/v1/private/feedback_response/schema";
import { prisma } from "../../utils.ts/prisma";

export async function add_feedback_response(
  request: FastifyRequest<{
    Body: create_feedbackResponse_Req_schema;
  }>,
  reply: FastifyReply,
) {
  try {
    const body = request.body;

    const add_feedback_reply = await prisma.feedback_response.create({
      data: {
        ...body,
      },
    });
    return reply.code(201).send(add_feedback_reply);
  } catch (error) {
    return reply.status(500).send(error);
  }
}
