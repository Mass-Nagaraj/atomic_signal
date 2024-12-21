
import { z } from "zod";
import { buildJsonSchemas } from 'fastify-zod';


const addSignal = z.object({
    name: z.string(),
    is_active:z.boolean(),
    
});

const AddSignal_ResponseSchema= z.object({
    
    name:z.string(),
    is_active:z.boolean(),

})

const UpdateSignalSchema= z.object({
    
    name:z.string().optional(),
    is_active:z.boolean().optional(),

})

export type addSignal = z.infer<typeof addSignal>;
export type UpdateSignalSchema = z.infer<typeof UpdateSignalSchema>;

export const { schemas: signalSchema, $ref } = buildJsonSchemas({
    addSignal,
    AddSignal_ResponseSchema,
    UpdateSignalSchema
}
,{
    $id: 'Signalschema'      
}
)