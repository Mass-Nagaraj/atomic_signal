import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateUserSchema, loginInput } from "../../routes/v1/public/auth/schema";
import { prisma } from "../../utils.ts/prisma";
import { hashPassword, verifyPassword } from "../../utils.ts/hash";
import fastifyPlugin from "fastify-plugin";
import exp from "constants";

interface Params {
 id:string
}

export async function registerUserHandler(

    request:FastifyRequest<{
        Body:CreateUserSchema
    }>,
    reply:FastifyReply

) {
    
    try{
        const body=request.body;
        const {password,...rest} = body;
        const {hash,salt} = hashPassword(password);
    
        const user= await prisma.users.create({
            data:{...rest,salt,password:hash} as any
        })

        return reply.code(201).send(user);
         
        

    }catch (error) {

        return reply.status(500).send(error);
    }

}

export async function findUserByEmail(email:string) {
    return prisma.users.findUnique({
        where:{
            email
        }
    })
}

export async function loginHandler(
    fastify: FastifyInstance, 
    request:FastifyRequest<{
        Body:loginInput
    }>,
    reply:FastifyReply,

) {
    
    console.log(request.body);
    try{
        const body=request.body;

        const user=await findUserByEmail(body.email);
        
        if(!user) {
            return reply.code(401).send({
                message:"Invalid email "
            })
        }

        //verify Password 
        const correctPassword=verifyPassword({
            candidatePassword:body.password,
            salt:user.salt,
            hash:user.password
        })

        if(correctPassword) {
            const {password,salt,...rest} = user;
            console.log(user);
            // Generate Access Token
            const accessToken=fastify.jwt.sign({email:user.email}); 
            // console.log()
            // console.log(user);
            
            return reply.send({
                    accessToken:accessToken,
                    id: user.id,
                    email: user.email,
                    name: user.user_name, 
                })
        }else{
            return reply.code(401).send({
                message:"Invalid password...!"
            })
        }

    }catch(error){
        console.log(error);
        return reply.code(500).send(error)
    }

}



export async function getUserDetails(
    request: FastifyRequest<{ Params: Params }>,
    reply:FastifyReply
) {
    try{
       
        const {id} = request.params;
        const user=await prisma.users.findUnique({
            where:{
                id:id
            }
        })
        
        if(!user) {
            return reply.code(401).send({
                message:"Invalid email "
            })
        }

        reply.send(user);
}

catch(error) {
    reply.send(error);
}

}

export async function ForgotPasswordController(
    fastify: FastifyInstance, 
    request:FastifyRequest<{
        Body:{email:string}
    }>,
    reply:FastifyReply,
) {
    
}


