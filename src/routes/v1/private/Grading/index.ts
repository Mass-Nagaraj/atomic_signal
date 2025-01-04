import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { EditGrade } from "../../../../controllers/Grades";
import { UpdateGrade } from "./schema";

export const GradingRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  options,
): Promise<any> => {
  // This Param variable names and controll function variable name should be same

  fastify.post<{ Body: UpdateGrade }>("/update_grades", EditGrade);
};
