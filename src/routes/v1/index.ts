import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import {
  EXTERNAL_FOLDER,
  PRIVATE_FOLDER,
  PUBLIC_FOLDER,
} from "../../utils.ts/constants";
import { $ref, userSchemas } from "./public/auth/schema";
import authRoute from "./public/auth";
import { registerUserHandler } from "../../controllers/auth";
import swaggerPlugin from "../../plugins/swagger";
import "@fastify/jwt";
import { JWT } from "@fastify/jwt";
import { server } from "../../app";
import forget_password from "./public/forget_password";
import { TeamsRoutes } from "./private/teams";
import { teamsSchema } from "./private/teams/schema";
import { feedbackSchema } from "./private/feedbacks/schema";
import { feedBackRoutes } from "./private/feedbacks";
import { feedBack_RepliesRoutes } from "./private/feedback_response";
import { feedback_Response_Schema } from "./private/feedback_response/schema";
import { signalSchema } from "./private/signals/schema";
import { SignalsRoutes } from "./private/signals";
import { DeptSchema } from "./private/department_master/schema";
import { DeptRoutes } from "./private/department_master";
import { GradingRoutes } from "./private/Grading";
import { GradeSchema } from "./private/Grading/schema";

export const routes = async (fastify: FastifyInstance, done: any) => {
  for (const schema of [
    ...userSchemas,
    ...teamsSchema,
    ...feedbackSchema,
    ...feedback_Response_Schema,
    ...signalSchema,
    ...DeptSchema,
    ...GradeSchema,
  ]) {
    fastify.addSchema(schema);
  }
  fastify.register(authRoute, { prefix: "/public/api/users" });
  fastify.register(forget_password, { prefix: "/public/api/users" });

  fastify.register(TeamsRoutes, { prefix: "/private/api/users" });
  fastify.register(SignalsRoutes, { prefix: "/private/api/signals" });
  fastify.register(DeptRoutes, { prefix: "/private/api/dept" });

  fastify.register(GradingRoutes, { prefix: "/private/api/grades" });

  fastify.register(feedBackRoutes, { prefix: "/private/api/users" });
  fastify.register(feedBack_RepliesRoutes, { prefix: "/private/api/users" });

  // fastify.register(swaggerPlugin)
};
