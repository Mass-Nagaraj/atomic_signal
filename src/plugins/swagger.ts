import fp from "fastify-plugin";
import swagger, { SwaggerOptions } from "@fastify/swagger";
import { FastifyPluginCallback } from "fastify";
import { fastifySwaggerUi } from "@fastify/swagger-ui";

// export const swaggerPlugin: FastifyPluginCallback<SwaggerOptions> = async (
//   fastify: any,
//   options
// ) => {
//   if (process.env.NODE_ENV !== "production") {
    
//     fastify.register(swagger, {});
    
//     fastify.register(fastifySwaggerUi), {
//         routePrefix: '/docs',
//         swagger: {
//             info: {
//                 title: 'Fastify Prisma REST API',
//                 description: 'A REST API built with Fastify, Prisma and TypeScript',
//                 version: '1.0.0',
//                 contact: {
//                     name: "Vinojan Abhimanyu",
//                     url: "https://vinojan.online",
//                     email: "imvinojanv@gmail.com"
//                 },
//             },
//             externalDocs: {
//                 url: 'https://github.com/imvinojanv/fastify-prisma-rest-api',
//                 description: 'Fastify Tutorial source code is on GitHub',
//             },
//             host: '0.0.0.0:3000',
//             basePath: '/',
//             schemes: ['http', 'https'],
//             consumes: ['application/json'],
//             produces: ['application/json'],
//         },
//         uiConfig: {
//             docExpansion: 'none', // expand/not all the documentations none|list|full
//             deepLinking: true,
//         },
//         openapi:{
//             info:{
//                 title:"Fastify API DOCS",
//                 description:"API for Some Products...!"
//             }
//         },
//         staticCSP: false,
//         transformStaticCSP: (header: any) => header,
//         exposeRoute: true
//     }
//   }
// };


const swaggerPlugin: FastifyPluginCallback<SwaggerOptions> = async (
  fastify: any,
  options
) => {
  if (process.env.NODE_ENV !== "production") {
    fastify.register(swagger, {
      swagger: {
        info: {
          title: "ATOMIC SIGNALS ",
          description: "Swagger API documentation",
          version: "1.0.0",
        },
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
  }
};

export default fp(swaggerPlugin);


