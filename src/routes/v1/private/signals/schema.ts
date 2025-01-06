import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const addSignal = z.object({
  name: z.string(),
  is_active: z.boolean(),
  created_at:z.string(),
  created_by:z.string(),
  updated_at:z.string(),
  updated_by:z.string()

});

const AddSignal_ResponseSchema = z.object({
  name: z.string(),
  is_active: z.boolean(),
  
  
});

const UpdateSignalSchema = z.object({
  name: z.string().optional(),
  is_active: z.boolean().optional(),
  updated_at:z.string(),
  updated_by:z.string()
});

export type addSignal = z.infer<typeof addSignal>;
export type UpdateSignalSchema = z.infer<typeof UpdateSignalSchema>;

export const { schemas: signalSchema, $ref } = buildJsonSchemas(
  {
    addSignal,
    AddSignal_ResponseSchema,
    UpdateSignalSchema,
  },
  {
    $id: "Signalschema",
  },
);
