import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const create_feedbackResponse_Req_schema = z.object({
  feedback_id: z.string().uuid(),
  response: z.string(),
  is_active: z.boolean(),
});

const create_feedbackResponse_Res = z.object({
  feedback_id: z.string().uuid(),
  response: z.string(),
});

export type create_feedbackResponse_Req_schema = z.infer<
  typeof create_feedbackResponse_Req_schema
>;

export const { schemas: feedback_Response_Schema, $ref } = buildJsonSchemas(
  {
    create_feedbackResponse_Req_schema,
    create_feedbackResponse_Res,
  },
  {
    $id: "feedback_ResponseSchema",
  },
);
