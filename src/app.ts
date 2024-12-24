import { join } from "path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import Fastify, {
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";
import { routes } from "./routes/v1";
import { userSchemas } from "./routes/v1/public/auth/schema";
import authRoute from "./routes/v1/public/auth";
import { JWT as FastifyJWT, JWT } from "@fastify/jwt";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";
// Global API response data
export const server = Fastify();

server.register(jwt, {
  secret: "ASbTB_XeicE*YHK!b-H8",
});

declare global {
  var status_codes: any;
}

global.status_codes = {
  success: { status: 200, api_status: "API-OK" },
  success_no_data: { status: 200, api_status: "API-OK-NO-CONTENT" },
  bad_request: { status: 400, api_status: "API-BAD-REQUEST" },
  un_authorised: { status: 401, api_status: "API-UN-AUTHORISED-ACCESS" },
  forbidden: { status: 403, api_status: "API-FORBIDDEN" },
  not_found: { status: 404, api_status: "API-NOT-FOUND" },
  error: { status: 500, api_status: "API-ERROR" },
};

export interface AppOptions
  extends FastifyServerOptions,
    Partial<AutoloadPluginOptions> {}
// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
 
  // fastify.register(jwt,{
  //   secret: 'your-secret-key',
  // })


  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  // void  fastify.register(cors, {
  //       origin: true,
  //       methods: ['GET', 'POST', 'DELETE', 'PATCH',"OPTIONS"],
  //       credentials: true,
  //       allowedHeaders: ['Content-Type', 'Authorization'] ,
  //       preflightContinue:true,
  //       preflight:true
  //     });

  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these

  // void fastify.register(AutoLoad, {

  //   dir: join(__dirname, 'routes'),
  //   options: opts
  // })
  void fastify.register(routes);
  // void fastify.register(swaggerPlugin)

  console.log("server is Listeing on Port http://localhost:3000");
  console.log("Swagger is Available on Port http://localhost:3000/docs");
};

export default app;
export { app, options };
