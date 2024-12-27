// departments_masterimport fastify, { FastifyReply, FastifyRequest } from "fastify";
import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../utils.ts/prisma";
import { addDept, UpdateDeptSchema } from "../../routes/v1/private/department_master/schema";
   

export async function add_Deptartment(

    request:FastifyRequest<{
        Body:addDept,
    }>,
    reply:FastifyReply

) {
    
    try{
        const {name,is_active} =request.body;

        const add_member= await prisma.departments_master.create({
            data: {
               name,is_active
            },
        })

        return reply.code(201).send(add_member);
                

    }catch (error) {
     
        return reply.status(500).send(error);
    }

}

export async function getDepts(
    
    request:FastifyRequest,
    reply:FastifyReply
    
) {
    try{
                 
        const departments = await prisma.departments_master.findMany();
        
        return departments;
        
    }catch(error) {
        return reply.code(200).send(error)
    }
}

export async function update_dept(
    request:FastifyRequest<{
         Body:UpdateDeptSchema 
    }>,
    reply:FastifyReply
) {
    try{

        const {id,name,is_active}=request.body;
        const updated_dept = await prisma.departments_master.update({
            where: {
                id: id,
            },
            data: { name,is_active},
         
        });
        
        return reply.code(200).send(updated_dept);

    }catch(error) {
        return reply.code(200).send(error)
    }
}