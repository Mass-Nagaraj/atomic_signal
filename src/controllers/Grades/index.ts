import fastify, { FastifyReply, FastifyRequest } from "fastify";
import {
  addSignal,
  UpdateSignalSchema,
} from "../../routes/v1/private/signals/schema";
import { prisma } from "../../utils.ts/prisma";
import { UpdateGrade } from "../../routes/v1/private/Grading/schema";

interface GradeId {
  grade_id: string;
}

export async function edit_grading(
  request: FastifyRequest<{
    Params: GradeId;
    Body: UpdateGrade;
  }>,
  reply: FastifyReply
) {
  try {
    const { name } = request.body;
    const { grade_id } = request.params; // This should be {} closed bracktes .Params varcables
    const updated_grade = await prisma.grading_master.update({
      //
      //
      where: {
        id: grade_id,
      },
      data: { name },
    });

    return reply.code(200).send(updated_grade);
  } catch (error) {
    return reply.code(200).send(error);
  }
}
