import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import {  getUserDetails, loginHandler, registerUserHandler } from '../../../../controllers/auth';
import { $ref } from './schema';
import { show_my_team_members, show_profile } from '../../../../controllers/teams';

interface email{
    email :string
}
const authRoute: FastifyPluginAsync = async (
    fastify: FastifyInstance,
    options
  ): Promise<any> => {

    fastify.post("/sign_up",{
        schema:{
            body:$ref("createUserSchema"),
            response:{
                201:$ref("CreateUserResponse")
            }
        }
    }, registerUserHandler)


    fastify.post("/login", {
        schema:{
            body:$ref("loginSchema"),
            response:{
                200:$ref("loginResponseSchema")
            }
        }
    }, async (request: any, reply) => {
        
        await loginHandler(fastify,request,reply);         
    });
    

      fastify.get<{ Params: email }>(
        "/getUserDetails",
        getUserDetails
      );


};

export default authRoute;


