import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const addDept = z.object({
  name: z.string(),
  is_active: z.boolean(),
});

const UpdateDeptSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  is_active: z.boolean().optional(),
});

const Added_deptResponse = z.object({
  name: z.string().optional(),
  is_active: z.boolean().optional(),
});

export type addDept = z.infer<typeof addDept>;
export type Added_deptResponse = z.infer<typeof Added_deptResponse>;
export type UpdateDeptSchema = z.infer<typeof UpdateDeptSchema>;

export const { schemas: DeptSchema, $ref } = buildJsonSchemas(
  {
    addDept,
    UpdateDeptSchema,
    Added_deptResponse,
  },
  {
    $id: "DeptSchema",
  },
);
