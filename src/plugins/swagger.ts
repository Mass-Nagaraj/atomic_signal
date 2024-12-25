import fp from "fastify-plugin";
import swagger, { SwaggerOptions } from "@fastify/swagger";
import { FastifyPluginCallback } from "fastify";
import { fastifySwaggerUi } from "@fastify/swagger-ui";

const swaggerPlugin: FastifyPluginCallback<SwaggerOptions> = async (
  fastify: any,
  options
) => {
  // if (process.env.NODE_ENV !== "production") {
    fastify.register(swagger, {
      swagger: {
        info: {
          title: "ATOMIC SIGNALS ",
          description: "Swagger API documentation",
          version: "1.0.0",
        },
        host: 'https://atomic-signal-7jqv.onrender.com/', // Replace with your deployed server's hostname
        schemes: ['https'], // Use 'http' if SSL is not enabled    
      },
      exposeRoute: true,
    });
    fastify.register(fastifySwaggerUi, {
      routePrefix: "/docs",
      uiConfig: {
        docExpansion: "full",
        deepLinking: false,
      },
      uiHooks: {
        onRequest: function (request: any, reply: any, next: any) {
          next();
        },
        preHandler: function (request: any, reply: any, next: () => void) {
          next();
        },
      },
      staticCSP: true,
      transformStaticCSP: (header: any) => header,
      transformSpecification: (
        swaggerObject: any,
        request: any,
        reply: any
      ) => {
        return swaggerObject;
      },
      transformSpecificationClone: true,
    });
  // }
};

export default fp(swaggerPlugin);


