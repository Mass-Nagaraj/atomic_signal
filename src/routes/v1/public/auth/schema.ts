import { z } from "zod";
import { buildJsonSchemas } from 'fastify-zod';


enum Role {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    EMPLOYEE = "EMPLOYEE"
  }

  const createUserSchema = z.object({
    email: z.string({
            required_error: "Email is required..! ",
            invalid_type_error: "Email must be a string..!"
        }).email(),
    user_name: z.string(),
    password: z.string({
        required_error: "Password is required..! ",
        invalid_type_error: "Password must be a string..!",
    }),
    img_url: z.string().optional(),
    designation: z.enum([Role.ADMIN, Role.MANAGER, Role.EMPLOYEE]),
    workspace_name: z.string(),
    feedback_type_id: z.number(),
    is_active: z.boolean(),

});


const CreateUserResponse = z.object({
    id: z.string(),
    user_name: z.string(),
    email: z
    .string({
        required_error: "Email is required..!",
        invalid_type_error: "Email must be a string..!"
    }).email(),
    
});

const loginSchema = z.object({
   
    email: z
        .string({
            required_error: "Email is required..!",
            invalid_type_error: "Email must be a string..!"
        }).email(),
    password: z.string(),
});

// Validate payload

const loginResponseSchema = z.object({
    
    accessToken: z.string(),
    id:z.string(),
    email:z.string(),
    name:z.string()
});



export type CreateUserSchema = z.infer<typeof createUserSchema>;
export type loginInput = z.infer<typeof loginSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
    CreateUserResponse,
    createUserSchema ,
    loginSchema,
    loginResponseSchema,
}
,{
    $id: 'usersSchema'      
}
)


