import fastify, { FastifyReply, FastifyRequest } from "fastify";
import {
  addSignal,
  UpdateSignalSchema,
} from "../../routes/v1/private/signals/schema";
import { prisma } from "../../utils.ts/prisma";

interface Signals_ID {
  signal_id: string;
}

export async function addSignal(
  request: FastifyRequest<{
    Body: addSignal;
  }>,
  reply: FastifyReply,
) {
  try {
    const { name, is_active,created_at,created_by,updated_at,updated_by } = request.body;

    const add_member = await prisma.signals_master.create({
      data: {
        name,
        is_active,
        created_at,
        created_by,
        updated_at,
        updated_by
      },
    });

    return reply.code(201).send(add_member);
  } catch (error) {
    return reply.status(500).send(error);
  }
}

export async function update_signal(
  request: FastifyRequest<{
    Querystring: Signals_ID;
    Body: UpdateSignalSchema;
  }>,
  reply: FastifyReply,
) {
  try {
    const { name, is_active,updated_at,updated_by } = request.body;
    const { signal_id } = request.query; // This should be {} closed bracktes .Params varcables
    const updated_signal = await prisma.signals_master.update({
      where: {
        id: signal_id,
      },
      data: { name, is_active,updated_at,updated_by },
    });

    return reply.code(200).send(updated_signal);
  } catch (error) {
    return reply.code(200).send(error);
  }
}
