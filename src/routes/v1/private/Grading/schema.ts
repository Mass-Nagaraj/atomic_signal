import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const UpdateGrade = z.object({
  id: z.string(),
  name: z.string().optional(),
  is_active: z.boolean().optional(),
});

export type UpdateGrade = z.infer<typeof UpdateGrade>;

export const { schemas: GradeSchema, $ref } = buildJsonSchemas(
  {
    UpdateGrade,
  },
  {
    $id: "Gradeschema",
  },
);
