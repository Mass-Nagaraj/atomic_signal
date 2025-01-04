import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { $ref } from "./schema";
import { add_feedback_response } from "../../../../controllers/feedback_response";

export const feedBack_RepliesRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  options,
): Promise<any> => {
  fastify.post(
    "/add_feedback_response",
    {
      schema: {
        body: $ref("create_feedbackResponse_Req_schema"),
        response: {
          200: $ref("create_feedbackResponse_Res"),
        },
      },
    },
    add_feedback_response,
  );
};
