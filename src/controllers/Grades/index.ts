import fastify, { FastifyReply, FastifyRequest } from "fastify";
import {
  addSignal,
  UpdateSignalSchema,
} from "../../routes/v1/private/signals/schema";
import { prisma } from "../../utils.ts/prisma";
import { UpdateGrade } from "../../routes/v1/private/Grading/schema";

export async function EditGrade(
  request: FastifyRequest<{
    Body: UpdateGrade;
  }>,
  reply: FastifyReply
) {
  try {
    const { id, name, is_active } = request.body;
    const updated_grade = await prisma.grading_master.update({
      where: {
        id: id,
      },
      data: { name: name, is_active: is_active },
    });

    return reply.code(200).send(updated_grade);
  } catch (error) {
    return reply.code(200).send(error);
  }
}
