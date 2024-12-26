import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { getDestinations } from '../../../../controllers/designations';



export const DestinationsRoutes: FastifyPluginAsync = async (
    fastify: FastifyInstance,
    options
  ): Promise<any> => {

    fastify.get(
            "/getDestinations",
            { preHandler: [fastify.authenticate] },
            getDestinations
    );

}

