import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fs from "fs";
import path from "path";
import { pathToFileURL } from 'url';
import { EXTERNAL_FOLDER, PRIVATE_FOLDER, PUBLIC_FOLDER } from "../../utils.ts/constants";
import { $ref, userSchemas } from "./public/auth/schema";
import authRoute from "./public/auth";
import { registerUserHandler } from "../../controllers/auth";
import swaggerPlugin from '../../plugins/swagger'

// const routesLoader = (fastify: FastifyInstance, sourceDir: string) => {
//     fs.readdirSync(sourceDir, { withFileTypes: true })
//       .filter((dirent: any) => dirent.isDirectory())
//       .map((item: any) => item.name)
//       .forEach(async (item: string) => {
//         let route: any = await import(`${sourceDir}/${item}`);
//         fastify.register(route.default, { prefix: `/api/v1/${item}` });
//       })
//   }

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
    
//     //Routes of Public API
    // routesLoader(fastify, path.join("src/routes/v1", "public"));
    
//     //Routes of Private API
//     // routesLoader(fastify, path.join(__dirname, PRIVATE_FOLDER));
    
//     // //Routes of External API
//     // routesLoader(fastify, path.join(__dirname, EXTERNAL_FOLDER));

//    fastify.get("/hi",{ preHandler:[fastify.authenticate]}, (req: any, reply: any) => {
//         reply.code(200).send({ message: "Server is up and running....🚀🚀" });
//     });

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



