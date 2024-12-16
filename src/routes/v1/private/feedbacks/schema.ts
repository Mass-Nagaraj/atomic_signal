import { z } from "zod";
import { buildJsonSchemas } from 'fastify-zod';


const createfeedBackReq_Schema = z.object({
    from_id:z.string().uuid(),
    to_id:z.string().uuid(), 
    siganl_id:z.string().uuid(), 
    perfomance_id:z.string().uuid(), 
    feeback: z.string({
        required_error: "feeback is required..! ",
        invalid_type_error: "feeback must be a string..!"
    }),
    comments: z.string(),
    reveal_my_identify: z.boolean(),
    is_active: z.boolean(),
});

const createfeedBackResponse_Schema = z.object({

    feeback:z.string(),
    comments:z.string(),
    reveal_my_identify:z.boolean(),
 
 });

export type createfeedBackReq_Schema = z.infer<typeof createfeedBackReq_Schema>;

export const { schemas: feedbackSchema, $ref } = buildJsonSchemas({
    createfeedBackReq_Schema,
    createfeedBackResponse_Schema,
}
,{
    $id: 'feedbackSchema'      
}
)
