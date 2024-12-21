import fastify, { FastifyReply, FastifyRequest } from "fastify";
import {  CreateUserSchema, loginInput } from "../../routes/v1/public/auth/schema";
import { prisma } from "../../utils.ts/prisma";
import { hashPassword, verifyPassword } from "../../utils.ts/hash";
import { server } from "../../app";
import { add_team_memberSchema } from "../../routes/v1/private/teams/schema";
import { createfeedBackReq_Schema } from "../../routes/v1/private/feedbacks/schema";



interface Profile_RequestSchema{
    team_member_id:string
}

interface Show_My_team_members{
    team_lead_id:string,
   
}

export async function addTeam_member(

    request:FastifyRequest<{
        Body:add_team_memberSchema
    }>,
    reply:FastifyReply

) {
    
    try{
        const body=request.body;

        const team_member_id=await prisma.users.findUnique({
            where:{
                email:body.email
            },
            select: {
                id: true, 
            },
       } )

        if(!team_member_id){
            return "Invalid member..!"
        }
    
        const add_member= await prisma.team_members.create({
            data: {
                ...body,
                team_member_id: team_member_id.id as any
            },
        })

        return reply.code(201).send(add_member);

    }catch (error) {
     
        return reply.status(500).send(error);
    }

}

export async function show_profile(
    request:FastifyRequest<{
         Params: Profile_RequestSchema 
    }>,
    reply:FastifyReply
) {
    try{

        const {team_member_id }=request.params;
        
        const user_profile = await prisma.team_members.findUnique({
            where: {
                id: team_member_id,
            },
            select: {
                id: true,
                email: true,
                join_date: true,
                department: {            // Correct relation name
                    select: {
                        id: true,
                        name: true,
                    },
                },
                designation: {            // Correct relation name
                    select: {
                        id: true,
                        name: true,
                    },
                },
                role:{
                    select:{
                        id:true,
                        name:true
                    },
                },
                team_lead:{
                select:{
                    id:true,
                    user_name:true
                }
               }

            },
        });
        
        return user_profile;

    }catch(error) {
        return reply.code(200).send(error)
    }
}

export async function update_team_member_profile(
    request:FastifyRequest<{
         Params: Profile_RequestSchema,
         Body:add_team_memberSchema 
    }>,
    reply:FastifyReply
) {
    try{

        const {team_member_id }=request.params;
        const {name,email,join_date,department_id,designation_id,role_id,report_to,is_active}=request.body;
        
        const updated_user_profile = await prisma.team_members.update({
            where: {
                id: team_member_id,
            },
            data: { name,email,join_date,department_id,designation_id,role_id,report_to,is_active },
         
        });
        
        return reply.code(200).send(updated_user_profile);

    }catch(error) {
        return reply.code(200).send(error)
    }
}

export async function show_my_team_members(
    
    request:FastifyRequest<{
        Params:Show_My_team_members
    }>,
    reply:FastifyReply
    
) {
    try{
        
        
        const {team_lead_id}=request.params;
        
        const team_members = await prisma.team_members.findMany({
            where: {
                report_to: team_lead_id ,
            },
            select: {
                team_mate:{
                    select:{
                        id:true,
                        user_name:true
                    }
                },
                designation: {            // Correct relation name
                    select: {
                        id: true,
                        name: true,
                    },
                },
                department: {            // Correct relation name
                    select: {
                        id: true,
                        name: true,
                    },
                },
                team_lead:{
                    select:{
                        id:true,
                    user_name:true
                }
                },
                role:{
                    select:{
                        id:true,
                        name:true
                    },
                },
                email: true,
                join_date: true,
                is_active:true
            
            },
            
        });
        
        return team_members;
        
    }catch(error) {
        return reply.code(200).send(error)
    }
}


