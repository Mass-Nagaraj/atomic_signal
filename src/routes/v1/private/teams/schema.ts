import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const add_team_memberSchema = z.object({
  name: z.string(),
  email: z
    .string({
      required_error: "Email is required..! ",
      invalid_type_error: "Email must be a string..!",
    })
    .email(),
  join_date: z.string(),
  department_id: z.string().uuid(),
  designation_id: z.string().uuid(),
  role_id: z.string().uuid(),
  report_to: z.string().uuid(),
  is_active: z.boolean(),
});

const add_team_memberResponseSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  join_date: z.string(),
  department_id: z.string().uuid(),
  designation_id: z.string().uuid(),
  role_id: z.string().uuid(),
  report_to: z.string().uuid(),
  is_active: z.boolean(),
  created_by: z.string().uuid().optional(),
  updated_by: z.string().uuid().optional(),
  deleted_by: z.string().uuid().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional(),
});

export type add_team_memberSchema = z.infer<typeof add_team_memberSchema>;

export const { schemas: teamsSchema, $ref } = buildJsonSchemas(
  {
    add_team_memberSchema,
    add_team_memberResponseSchema,
  },
  {
    $id: "teamsSchema",
  },
);
