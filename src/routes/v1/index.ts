import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fs from "fs";
import path from "path";
import { pathToFileURL } from 'url';
import { EXTERNAL_FOLDER, PRIVATE_FOLDER, PUBLIC_FOLDER } from "../../utils.ts/constants";
import { $ref, userSchemas } from "./public/auth/schema";
import authRoute from "./public/auth";
import { registerUserHandler } from "../../controllers/auth";
import swaggerPlugin from '../../plugins/swagger'
import "@fastify/jwt";
import { JWT } from "@fastify/jwt";
import { server } from "../../app";
import forget_password from "./public/forget_password";
import { TeamsRoutes } from "./private/teams";
import { teamsSchema } from "./private/teams/schema";
import { feedbackSchema } from "./private/feedbacks/schema";
import { feedBackRoutes } from "./private/feedbacks";
import { feedBack_RepliesRoutes } from "./private/feedback_response";
import { feedback_Response_Schema } from "./private/feedback_response/schema";



export const routes= async ( fastify: FastifyInstance, done:any )=>{


    for(const schema of [...userSchemas,...teamsSchema,...feedbackSchema,...feedback_Response_Schema]) {
        fastify.addSchema(schema)
    }

    fastify.register(authRoute,{prefix:"/public/api/users"})
    fastify.register(forget_password,{prefix:"/public/api/users"})

    fastify.register(TeamsRoutes,{prefix:"/private/api/users"})
    fastify.register(feedBackRoutes,{prefix:"/private/api/users"})
    fastify.register(feedBack_RepliesRoutes,{prefix:"/private/api/users"})

    // fastify.register(swaggerPlugin)
    
}



