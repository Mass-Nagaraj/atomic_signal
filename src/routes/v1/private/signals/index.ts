import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { $ref, UpdateSignalSchema } from "./schema";
import { addSignal, update_signal } from "../../../../controllers/signals";

interface Signal_ID {
  signal_id: string;
}

export const SignalsRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  options,
): Promise<any> => {
  // fastify.get("/hi",async function () {
  //     return { teamhi: "hello team..!" }
  // })

  fastify.post(
    "/addSignal",
    {
      schema: {
        // preHandler:[fastify.authenticate],
        body: $ref("addSignal"),
        response: {
          200: $ref("AddSignal_ResponseSchema"),
        },
      },
    },
    addSignal,
  );

  fastify.put<{ Querystring: Signal_ID; Body: UpdateSignalSchema }>(
    "/update_signal",
    update_signal,
  );
};
