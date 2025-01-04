import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { createfeedBackReq_Schema } from "../../routes/v1/private/feedbacks/schema";
import { prisma } from "../../utils.ts/prisma";

interface Feedback_from_id {
  from_id: string;
}

interface Feedback_To_id {
  to_id: string;
}

export async function add_feedback(
  request: FastifyRequest<{
    Body: createfeedBackReq_Schema;
  }>,
  reply: FastifyReply,
) {
  try {
    const body = request.body;

    const addfeedback = await prisma.feedbacks.create({
      data: body,
    });

    return reply.code(201).send(addfeedback);
  } catch (error) {
    return reply.status(500).send(error);
  }
}

export async function get_perfomances(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const all_performance = await prisma.performance_master.findMany();

    return all_performance;
  } catch (error) {
    return reply.code(200).send(error);
  }
}

export async function get_signals(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const all_signals = await prisma.signals_master.findMany();

    return all_signals;
  } catch (error) {
    return reply.code(200).send(error);
  }
}

export async function getRoles(request: FastifyRequest, reply: FastifyReply) {
  try {
    const Roles = await prisma.role_master.findMany();

    return Roles;
  } catch (error) {
    return reply.code(200).send(error);
  }
}

export async function getFeedback_from_id(
  request: FastifyRequest<{
    Querystring: Feedback_from_id;
  }>,
  reply: FastifyReply,
) {
  try {
    const { from_id } = request.query;

    const Feedbacks = await prisma.feedbacks.findMany({
      where: {
        from_id: from_id,
      },
      select: {
        to: {
          select: {
            id: true,
            user_name: true,
          },
        },
        signal: {
          select: {
            name: true,
          },
        },
        performance: {
          select: {
            name: true,
          },
        },
        feeback: true,
        comments: true,
      },
    });

    return Feedbacks;
  } catch (error) {
    return reply.code(200).send(error);
  }
}

export async function get_feedback_to_id(
  request: FastifyRequest<{
    Querystring: Feedback_To_id;
  }>,
  reply: FastifyReply,
) {
  try {
    const { to_id } = request.query;

    const Feedbacks = await prisma.feedbacks.findMany({
      where: {
        to_id: to_id,
      },
      select: {
        from: {
          select: {
            id: true,
            user_name: true,
          },
        },
        signal: {
          select: {
            name: true,
          },
        },
        performance: {
          select: {
            name: true,
          },
        },
        feeback: true,
        comments: true,
      },
    });

    return Feedbacks;
  } catch (error) {
    return reply.code(200).send(error);
  }
}
