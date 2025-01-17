import { FastifyInstance, FastifyPluginAsync } from "fastify";
import {
  addTeam_member,
  show_my_team_members,
  show_profile,
  update_team_member_profile,
} from "../../../../controllers/teams";
import { $ref, add_team_memberSchema } from "./schema";

interface Profile_RequestSchema {
  team_member_id: string;
}

interface Show_My_team_members {
  team_lead_id: string;
}

export const TeamsRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  options,
): Promise<any> => {
  fastify.get("/teamhi", async function () {
    return { teamhi: "hello team..!" };
  });

  fastify.post(
    "/add_team_member",
    {
      schema: {
        preHandler: [fastify.authenticate],
        body: $ref("add_team_memberSchema"),
        response: {
          200: $ref("add_team_memberResponseSchema"),
        },
      },
    },
    addTeam_member,
  );

  fastify.get<{ Querystring: Profile_RequestSchema }>(
    "/show_profile",
    show_profile,
  );
  fastify.put<{
    Querystring: Profile_RequestSchema;
    Body: add_team_memberSchema;
  }>(
    "/update_team_member_profile",
    { preHandler: [fastify.authenticate] },
    update_team_member_profile,
  );
  fastify.get<{ Querystring: Show_My_team_members }>(
    "/show_my_team_members",
    { preHandler: [fastify.authenticate] },
    show_my_team_members,
  );
};
