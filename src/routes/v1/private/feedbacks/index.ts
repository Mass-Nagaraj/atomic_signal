import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { $ref } from './schema';
import { add_feedback, get_feedback_to_id, get_perfomances, get_signals, getFeedback_from_id, getRoles } from '../../../../controllers/feedbacks';


interface Feedback_from_id{
    from_id:string,
}
   

interface Feedback_To_id{
    to_id:string,
}
   

export const feedBackRoutes: FastifyPluginAsync = async (
    fastify: FastifyInstance,
    options
  ): Promise<any> => {
      
      
    fastify.get("/get_perfomances",{ preHandler:[fastify.authenticate]}, get_perfomances)

    fastify.get("/get_signals",{ preHandler:[fastify.authenticate]}, get_signals)

    fastify.get("/getRoles",{ preHandler:[fastify.authenticate]}, getRoles)

    fastify.post("/add_feedback",{
        schema:{
            preHandler:[fastify.authenticate],
            body:$ref("createfeedBackReq_Schema"),
            response:{
                200:$ref("createfeedBackResponse_Schema")
            }
        }
    }, add_feedback)

    fastify.get<{ Params: Feedback_from_id }>("/getFeedback_from_id/:from_id",{ preHandler:[fastify.authenticate]}, getFeedback_from_id)

    fastify.get<{ Params: Feedback_To_id }>("/get_feedback_to_id/:to_id",{ preHandler:[fastify.authenticate]}, get_feedback_to_id)

}

